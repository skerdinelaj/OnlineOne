import React from "react";
import { Link } from "react-router-dom";
import { selectTodos } from "../features/todoSlice";
import { useSelector } from "react-redux";
import { Chip, Grid } from "@mui/material";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import { useDispatch } from "react-redux";
import { deleteAllTodo } from "../features/todoSlice";


export const SideBar = () => {
  const dispatch = useDispatch();
  const selectorTasks = useSelector(selectTodos);
  const numberTodos = selectorTasks.filter(
    (task) => task.done === false
  ).length;
  const deleteAll = () => {
    alert("This action will dellete all todos")
    dispatch(deleteAllTodo());
  };

  return (
    <Grid item xs={4} sm={3} md={2} className="bg-dark" style={{minHeight: "100vh"}}>
      <List>
          <ListItem disablePadding>
            <ListItemButton component={Link} to="/">
              <ListItemIcon>
                <RadioButtonUncheckedIcon className="text-white"/>
              </ListItemIcon>
              <ListItemText className="text-white" primary="Insert Task" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component={Link} to="todo">
              <ListItemIcon>
                <RadioButtonUncheckedIcon className="text-white"/>
              </ListItemIcon>
              <ListItemText className="text-white" primary="Todo"/>
              <ListItemText className="todo-chip" primary={numberTodos}/>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component={Link} to="done">
              <ListItemIcon>
                <RadioButtonUncheckedIcon className="text-white"/>
              </ListItemIcon>
              <ListItemText className="text-white" primary="Done"/>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton className="delete-all" onClick={deleteAll} >
            <ListItemText className="text-white text-center" primary="Delete All"/>
            </ListItemButton>
          </ListItem>
        </List>
    </Grid>
  );
};
