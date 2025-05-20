
import React from "react";
import { useDroppable } from "@dnd-kit/core";
import { Box, Paper, Typography } from "@mui/material";
import { Task } from "../types/types";
import SortableItem from "./Sort";

type DroppableColumnProps = {
  columnId: string;
  tasks: Task[];
  activeId: string | null;
  activeTask?: Task;
  
}


const DroppableColumn = ({
  columnId,
  tasks,
  activeTask,
}: DroppableColumnProps) => {
  const { setNodeRef, isOver } = useDroppable({ id: columnId });

  return (
    <Paper
      ref={setNodeRef}
      elevation={3}
      sx={{
        width: "30%",
        minHeight: 800,
        p: 2,
        bgcolor: "white",
        border: "1px solid black",
        borderRadius: 2,
        boxShadow: isOver ? "0 0 15px rgba(0,0,0,0.3)" : "none",
        transition: "box-shadow 0.3s ease",
      }}
    >
      <Typography variant="h6" gutterBottom>
        {columnId.toUpperCase()} ({tasks.length})
      </Typography>

      {tasks.map((task) => (
        <SortableItem key={task.id} id={task.id}>
          {task.title}
        </SortableItem>
      ))}

      {isOver &&activeTask&& (
        <Box
          sx={{
            border: "2px solid #aaa",
            borderRadius: 1,
            p: 1,
            mt: 1,
            bgcolor: "#f5f5f5",
            textAlign: "center",
            color: "gray",
          }}
        >
         {activeTask.title}
        </Box>
      )}
    </Paper>
  );
};



export default DroppableColumn;