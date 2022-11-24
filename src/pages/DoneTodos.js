import { Grid } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { CardView } from "../components/CardView";
import { selectTodos } from "../features/todoSlice";
import { CardCollapse } from "../components/CardCollapse";

export const DoneTodos = () => {
  const selectorTasks = useSelector(selectTodos);
  const tasks = selectorTasks.map((todo) => todo);
  return (
    <Grid item xs={8} sm={9} md={10}>
      <CardView title="Done Todos">
        {tasks.map((task) => (
          <CardCollapse
            key={task.id}
            style={{ display: !task.done && "none" }}
            title={task.item.title}
            body={task.item.body}
            done={task.done}
          />
        ))}
      </CardView>
    </Grid>
  );
};
