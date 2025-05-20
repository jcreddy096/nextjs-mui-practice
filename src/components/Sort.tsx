
import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import Box from "@mui/material/Box";



type SortableProps = {
  id: string;
  // activeId: string | null;
  children: React.ReactNode;
};

const SortableItem = ({ id,  children }: SortableProps) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });
  if (isDragging) return null;

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    p: 1,
    mb: 1,
    border: "1px solid gray",
    borderRadius: 1,
    bgcolor: "orange",
  };

  return (
    <Box ref={setNodeRef} {...attributes} {...listeners} sx={style}>
      {children}
    </Box>
  );
};


export default SortableItem;