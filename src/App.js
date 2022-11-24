import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DoneTodos } from "./pages/DoneTodos";
import { InsertTask } from "./pages/InsertTask";
import { ToDoTask } from "./pages/ToDoTask";
import { SideBar } from "./pages/SideBar";
import { Grid } from "@mui/material";

function App() {
  return (
    <Grid container spacing={2} sx={{margin: 0}}>
      <BrowserRouter>
        <SideBar />
        <Routes>
          <Route path="/" element={<InsertTask />} />
          <Route path="/todo" element={<ToDoTask />} />
          <Route path="/done" element={<DoneTodos />} />
        </Routes>
      </BrowserRouter>
    </Grid>
  );
}

export default App;
