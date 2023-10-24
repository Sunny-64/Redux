import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, updateTaskStatus } from '../redux/task/taskSlice';
import { DELETE_TASK, UPDATE_TASK} from '../redux/task/taskSlice';

const Tasks = () => {
    const dispatch = useDispatch();
    const tasks = useSelector((state) => {
        return state.task;
    });
    console.log(tasks);

    const handleDelete = (taskId) => {
        let payload = {
            type: DELETE_TASK,
            taskId,
        }
        dispatch(deleteTask(payload))
    }

    return (
        <div className='w-[100%]  px-4'>
            <div className="w-[100%] relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3 border-r-2">
                                Sr No.
                            </th>
                            <th scope="col" className="px-6 py-3 border-r-2">
                                Task
                            </th>
                            <th scope="col" className="px-6 py-3 border-r-2">
                                Completed
                            </th>
                            <th colSpan={2} scope="col" className="px-6 py-3 text-center">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {tasks?.map((item, index) => {
                            return (
                                <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                                    <td className={`px-6 py-4 border-r-2`}>{index + 1}</td>
                                    <td className={`px-6 py-4 border-r-2 ${item.isCompleted && "line-through"}`}>{item.task}</td>
                                    <td className={`px-6 py-4 border-r-2 ${item.isCompleted && "line-through"}`}>{item.isCompleted ? "Done" : "Pending..."}</td>
                                    <td className={`px-6 py-4 flex gap-8 justify-center `} colSpan={2}>
                                        <button className='bg-yellow-500 px-6 rounded-sm py-2 text-black' onClick={() => dispatch(updateTaskStatus({type : UPDATE_TASK, taskId : item.taskId}))}>Done</button>
                                        <button className='bg-red-600 px-6 rounded-sm py-2 text-white' onClick={() => handleDelete(item.taskId)}>Delete </button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default Tasks