
import React, { useEffect, useState } from "react";
import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  DragEndEvent,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { SortableItem } from "./Sort";
import { Box, Typography } from "@mui/material";

type Task = { id: string; title: string };

type Columns = {
  [key: string]: Task[];
};

const initialColumns: Columns = {
  "to-do": [
    { id: "task-1", title: "Task 1" },
    { id: "task-2", title: "Task 2" },
  ],
  "in-progress": [
    { id: "task-3", title: "Task 3" },
    { id: "task-4", title: "Task 4" },
  ],
  done: [
    { id: "task-5", title: "Task 5" },
    { id: "task-6", title: "Task 6" },
  ],
};

export const Board = () => {

  const [columns, setColumns] = useState<Columns>(initialColumns);
  const [isClient, setIsClient] = useState(false); 

  const sensor = useSensor(PointerSensor);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    const sourceColumnId = Object.keys(columns).find((key) =>
      columns[key].some((task) => task.id === active.id)
    )!;
    const destinationColumnId = Object.keys(columns).find((key) =>
      columns[key].some((task) => task.id === over.id)
    )!;

    const activeTask = columns[sourceColumnId].find(
      (task) => task.id === active.id
    )!;

    if (sourceColumnId === destinationColumnId) {
      const reorderedTasks = arrayMove(
        columns[sourceColumnId],
        columns[sourceColumnId].findIndex((task) => task.id === active.id),
        columns[sourceColumnId].findIndex((task) => task.id === over.id)
      );

      setColumns((prev) => ({
        ...prev,
        [sourceColumnId]: reorderedTasks,
      }));
    } else {
      const updatedSource = columns[sourceColumnId].filter(
        (task) => task.id !== active.id
      );
      const updatedDestination = [
        ...columns[destinationColumnId],
        activeTask,
      ];

      setColumns((prev) => ({
        ...prev,
        [sourceColumnId]: updatedSource,
        [destinationColumnId]: updatedDestination,
      }));
    }
  };


  useEffect(() => {
    setIsClient(true); 
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <DndContext
      sensors={[sensor]}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <Box display="flex" justifyContent="space-around" p={2}>
        {Object.entries(columns).map(([columnId, tasks]) => (
          <Box
            key={columnId}
            sx={{
              border: "1px solid gray",
              borderRadius: "8px",
              padding: "16px",
              width: "30%",
            }}
          >
            <Typography variant="h6" textAlign="center">
              {columnId.toUpperCase()} ({tasks.length} tasks)
            </Typography>
            <SortableContext
              items={tasks.map((task) => task.id)}
              strategy={verticalListSortingStrategy}
            >
              {tasks.map((task) => (
                <SortableItem key={task.id} id={task.id} title={task.title} />
              ))}
            </SortableContext>
          </Box>
        ))}
      </Box>
    </DndContext>
  );
};

