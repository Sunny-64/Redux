import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTask } from '../redux/task/taskSlice';

const AddTask = () => {
  const [task, setTask] = useState("");
  const tasks = useSelector((state) => state.task);
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!task || task.trim() === ""){
      return;
    }
    let payload = {
      type: "ADD_TASK",
      taskId: tasks.length + 1,
      task: task,
      isCompleted: false
    }
    dispatch(addTask(payload));
    alert("Task Added");
    setTask('');
  }

  return (
    <div className='px-4 my-8 flex justify-center'>
      <div className='shadow-md py-3 w-[400px] rounded-md bg-[#334155]'>
        <form className='flex gap-3 flex-col px-4 py-3' onSubmit={handleSubmit}>
          <label htmlFor="" className='text-white text-lg font-bold'>Task</label>
          <input className='px-3 mb-3 py-2 outline-none rounded-sm' type="text" name="task" id="task" value={task} onChange={(e) => setTask(e.target.value)} placeholder='Enter Task' />
          <button type="submit" className='text-white bg-[#64748b] hover:bg-[#020617] border-[2px] border-transparent hover:border-[#64748b] px-3 rounded-sm py-2 w-1/2 mx-auto font-semibold'>Add</button>
        </form>
      </div>
    </div>
  )
}

export default AddTask