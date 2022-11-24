import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    todoList: []
}

const todoSlice = createSlice({
  name: "taskTodos",
  initialState,
  reducers: {
    saveTodo: (state, actions)=>{
        state.todoList.push(actions.payload)
    },
    deleteAllTodo: (state)=>{
      state.todoList = initialState.todoList
    },
    completedTodo: (state, actions)=>{
      state.todoList.map(item=>{
        if(actions.payload===item.id){
          item.done = !item.done
        } 
        console.log("from reducer",item.done)
      })
    },

  }
});

export const {saveTodo, deleteAllTodo, completedTodo} = todoSlice.actions

export const selectTodos = state => state.taskTodos.todoList

export default todoSlice.reducer