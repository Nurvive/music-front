import React from "react";
import { Grid, TextField } from "@mui/material";

export const CreateForm = () => {
  return (
    <Grid container direction={"column"}>
      <TextField label="Название трека" />
      <TextField label="Имя исплнителя" />
      <TextField multiline rows={3} label="Текст трека" />
    </Grid>
  );
};