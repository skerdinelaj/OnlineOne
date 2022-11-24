import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { completedTodo } from "../features/todoSlice";
import { selectTodos } from "../features/todoSlice";
import { Grid } from "@mui/material";
import { CardView } from "../components/CardView";
import { CardCollapse } from "../components/CardCollapse";
import Button from "@mui/material/Button";

export const ToDoTask = () => {
  const dispatch = useDispatch();
  const selectorTasks = useSelector(selectTodos);
  const tasks = selectorTasks.map((todo) => todo);
  const sortTask = tasks.sort((a,b)=> a.item.priority < b.item.priority ? 1 : -1)
  console.log(sortTask.map(task=>task.item.priority))
  return (
    <Grid item xs={8} sm={9} md={10}>
      <CardView title="To Do">
        {sortTask.map((task) => (
          <CardCollapse
            key={task.id}
            style={{ display: task.done && "none" }}
            title={task.item.title}
            body={task.item.body}
            priority={task.item.priority}
            done={task.done}
          >
            <Button
              className="complete-btn"
              onClick={() => dispatch(completedTodo(task.id))}
            >
              Complete
            </Button>
          </CardCollapse>
        ))}
      </CardView>
    </Grid>
  );
};
