import React from "react";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";

interface Props {
  title: string;
}

export function TitleBar({ title }: Props) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
