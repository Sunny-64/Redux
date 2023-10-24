import { createSlice } from '@reduxjs/toolkit'

export const ADD_TASK = 'ADD_TASK';
export const UPDATE_TASK = 'UPDATE_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const LIST_TASKS = 'LIST_TASKS';

const initialState = [
    {
        task: "hello",
        taskId: 1,
        isCompleted: true,
    }
]

export const taskSlice = createSlice({
    name: "task",
    initialState,
    reducers: {
        addTask: (state, action) => {
            if (action.payload.type === "ADD_TASK") {
                state.push(action.payload);
            }
        },

        viewTasks: (state) => {
            return state.task;
        },

        deleteTask: (state, action) => {
            if (DELETE_TASK === action.payload.type) {
                let stateIndex = state.filter((st, index) => st.taskId !== action.payload.taskId ? index : "");
                state.splice(stateIndex, 1)
            }
        },
       
        updateTaskStatus: (state, action) => {
            if (UPDATE_TASK === action.payload.type) {
                state.forEach((st, index) => {
                    if (st.taskId === action.payload.taskId) {
                        st.isCompleted = !st.isCompleted;
                    }
                });
            }
        },
    },
});

export const { addTask, viewTasks, deleteTask, updateTaskStatus } = taskSlice.actions;
export default taskSlice.reducer; 