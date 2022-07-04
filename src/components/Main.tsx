import React from "react";
import { Container } from "@mui/material";
import { TitleBar } from "./TitleBar";

interface Props {
  children?: React.ReactNode;
  title: string;
}

export function Main({ children, title }: Props) {
  return (
    <>
      <TitleBar title={title} />
      <Container> {children} </Container>
    </>
  );
}
