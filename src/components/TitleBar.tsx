import React from "react";
import { AppBar, Typography } from "@mui/material";

interface Props {
  title: string;
}

export function TitleBar({ title }: Props) {
  return (
    <AppBar position="sticky">
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        {title}
      </Typography>
    </AppBar>
  );
}
