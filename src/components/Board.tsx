
import React, { useState } from "react";
import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
  DragStartEvent,
  DragEndEvent,
  DragOverlay,
} from "@dnd-kit/core";
import Box from "@mui/material/Box";
import { arrayMove } from "@dnd-kit/sortable";
import DroppableColumn from "./DroppableColumn";
import { Task, Columns } from "../types/types";



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

const Board = () => {
  const [columns, setColumns] = useState(initialColumns);
  const [activeId, setActiveId] = useState<string | null>(null);
  const sensors = useSensors(useSensor(PointerSensor));

  const activeTask: Task | undefined = activeId
    ? Object.values(columns).flat().find((task) => task.id === activeId)
    : undefined;

  const handleDragStart = (event: DragStartEvent) => {
    console.log("Dragging:", event.active.id);

    setActiveId(String(event.active.id));
  };

const handleDragEnd = (event: DragEndEvent) => {
  const { active, over } = event;
  if (!over || active.id === over.id) {
    setActiveId(null);
    return;
  }

  const activeIdStr = String(active.id);
  const overIdStr = String(over.id);

  
  const sourceCol = Object.keys(columns).find(colId =>
    columns[colId].some(task => task.id === activeIdStr)
  );

 
  const isOverColumn = Object.keys(columns).includes(overIdStr);
  const destCol = isOverColumn 
    ? overIdStr 
    : Object.keys(columns).find(colId =>
        columns[colId].some(task => task.id === overIdStr)
      );

  if (!sourceCol || !destCol) {
    setActiveId(null);
    return;
  }

 
  if (sourceCol === destCol) {
    const oldIndex = columns[sourceCol].findIndex(t => t.id === activeIdStr);
    const newIndex = columns[destCol].findIndex(t => t.id === overIdStr);
    
    setColumns(prev => ({
      ...prev,
      [sourceCol]: arrayMove(prev[sourceCol], oldIndex, newIndex)
    }));
  } else {
    
    const sourceTasks = [...columns[sourceCol]];
    const destTasks = [...columns[destCol]];
    const activeIndex = sourceTasks.findIndex(t => t.id === activeIdStr);
    const [movedTask] = sourceTasks.splice(activeIndex, 1);
    
    
    if (isOverColumn) {
      destTasks.push(movedTask);
    } else {
      const overIndex = destTasks.findIndex(t => t.id === overIdStr);
      destTasks.splice(overIndex, 0, movedTask);
    }

    setColumns(prev => ({
      ...prev,
      [sourceCol]: sourceTasks,
      [destCol]: destTasks
    }));
  }

  setActiveId(null);
};

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <Box display="flex" gap={2} p={2}>
        {Object.entries(columns).map(([columnId, tasks]) => (
  <DroppableColumn
            key={columnId}
            columnId={columnId}
            tasks={tasks} activeId={activeId} activeTask={activeTask}  />
))}

      </Box>

     
<DragOverlay adjustScale={false} zIndex={999}>
        {activeTask ? (
          <Box
            sx={{
              p: 1,
              mb: 1,
              border: "1px solid gray",
              borderRadius: 1,
              bgcolor: "orange",
              boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
              transform: "translate3d(0,0,0) scale(1.02)",
              cursor: "grabbing",
              opacity: 0.8,
            }}
          >
            {activeTask.title}
          </Box>
        ) : null}
      </DragOverlay>
    </DndContext>
  );
};

export default Board;



