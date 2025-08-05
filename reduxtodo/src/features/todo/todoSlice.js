import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    todos: [{ id: 1, text: "Hello world" }]
}

function sayHello() {
    console.log("hello world")
}
export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {

            state.todos = state.todos.filter((todo) => todo.id !== action.payload)


        },

        updateTodo: (state, action) => {
            const todo = state.find(t => t.id === action.payload.id);
            if (todo) {
                todo.text = action.payload.text ?? todo.text;
                todo.completed = action.payload.completed ?? todo.completed;
            }
        }


    }
})

export const {addTodo , removeTodo} = todoSlice.actions

export default todoSlice.reducer