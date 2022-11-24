import { Grid, TextField } from "@mui/material";
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { saveTodo } from "../features/todoSlice";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export const InsertTask = () => {
  const [input, setInput] = useState({
    title: "",
    body: "",
    priority: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const dispatch = useDispatch();

  const addTodo = () => {
    dispatch(
      saveTodo({
        item: input,
        done: false,
        id: Date.now(),
      })
    );
    setInput((prev) => ({
      ...prev,
      title: "",
      body: "",
      priority: "",
    }));
  };

  return (
    <Grid item xs={8} sm={9} md={10}>
      <Card sx={{ minWidth: 275 }} className="bg-dark card-mr">
        <CardContent>
          <Typography
            sx={{ fontSize: 64, textAlign: "center" }}
            className="text-white"
          >
            Insert Task
          </Typography>
          <TextField
            sx={{
              "& fieldset": { border: "none" },
              "& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input": {
                color: "#FCFCFC",
              },
            }}
            fullWidth
            style={{
              background: "#4E4B66",
              borderRadius: "16px",
              color: "#D9DBE9",
              marginBottom: "40px",
            }}
            placeholder="Title"
            name="title"
            type="text"
            value={input.title}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            multiline
            sx={{
              "& fieldset": { border: "none" },
              "& .css-1sqnrkk-MuiInputBase-input-MuiOutlinedInput-input": {
                color: "#FCFCFC",
              },
            }}
            rows={7}
            placeholder="Share a reply"
            style={{
              background: "#4E4B66",
              borderRadius: "16px",
              color: "#D9DBE9",
              marginBottom: "40px",
            }}
            name="body"
            value={input.body}
            onChange={handleChange}
          />
          <FormControl className="form-style">
            <InputLabel
              id="priority-label"
              sx={{
                color: "#D9DBE9",
              }}
            >
              Priority
            </InputLabel>
            <Select
              required
              fullWidth
              labelId="priority-label"
              id="priority-select"
              label="Priority"
              name="priority"
              value={input.priority}
              onChange={handleChange}
              sx={{
                "& svg": { color: "#D9DBE9" },
                "& fieldset": { border: "none" },
                "& label": { color: "#FCFCFC" },
                "& label.Mui-focused": { color: "#FCFCFC" },
                color: "#FCFCFC",
              }}
              style={{
                background: "#4E4B66",
                borderRadius: "16px",
                color: "FCFCFC",
              }}
            >
              <MenuItem id="1" value="urgent">
                Urgent
              </MenuItem>
              <MenuItem id="2" value="high">
                High
              </MenuItem>
              <MenuItem id="3" value="medium">
                Medium
              </MenuItem>
              <MenuItem id="4" value="low">
                Low
              </MenuItem>
            </Select>
            <Button
              variant="contained"
              className="insert-btn"
              onClick={addTodo}
            >
              Add todo
            </Button>
          </FormControl>
        </CardContent>
      </Card>
    </Grid>
  );
};
