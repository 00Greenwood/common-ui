import React, { ReactNode } from "react";
import { Box, List, ListItem, Typography } from "@mui/material";

interface Props {
  title: string;
  items: string[];
}

export function SubSection({ title, items }: Props) {
  const list = items.map((item, index) => (
    <ListItem key={index}>
      <Typography variant="body2" component="div" sx={{ flexGrow: 1 }}>
        {item}
      </Typography>
    </ListItem>
  ));

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        {title}
      </Typography>
      <List>{list}</List>
    </Box>
  );
}
