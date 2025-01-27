import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Box } from "@mui/material";

export interface SortableItemProps {
  id: string;
  title: string;
}

export const SortableItem = ({ id, title }:SortableItemProps) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    padding: "8px",
    margin: "8px 0",
    border: "1px solid gray",
    borderRadius: "4px",
    backgroundColor: "#f9f9f9",
  };

  return (
    <Box
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={style}
    >
      {title}
    </Box>
  );
};
