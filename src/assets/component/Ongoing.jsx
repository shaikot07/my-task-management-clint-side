import React, { Children, useState } from 'react';
import {  useDrop } from 'react-dnd';

const Ongoing = () => {
      const [tasks,setTasks]=useState([]);
      const [{ isOver }, drop] = useDrop(() => ({
            accept: "tasks",
            drop:(item)=> addItemToSection(item.id),
            collect: (monitor) => ({
                  isOver: !!monitor.isOver()
            })
      }))

      const addItemToSection=(id)=>{
            setTasks((prev)=>{
                  const mTasks= prev.map((t)=>{
                        if(t.id == id){
                              return {...t, status:"ongoing"}
                        }
                     return t   
                  })
                localStorage.setItem("tasks",JSON.stringify(mTasks))  
                return mTasks;
            })

      }
      return (
            <div ref={drop} className='w-[300px] bg-yellow-100'>
                  <div className='bg-slate-900 bg-opacity-40'> <h2 className='text-2xl text-center text-green-600'>Ongoin</h2></div>
                  {

                        tasks?.length === 0 ? <div className='min-h-[50vh] flex items-center justify-center'><span className='bg-red-500 p-2 rounded text-white font-bold text-xl'>No task here!</span></div> : tasks.map((td, ind) =>
                              <div key={ind} className={`rounded p-3 my-2 w-[300px] text-slate-200 bg-slate-900 bg-opacity-40 relative`}>
                                    <h2 className='text-slate-50 font-bold text-xl'>{td.title}</h2>
                                    <p>Status: <span className='font-semibold text-white'>{td.status}</span></p>
                                    <p>Priority: <span className={`font-semibold ${td.priority === 'High' ? 'text-red-500' : 'text-slate-50'}`}>{td.priority}</span></p>
                                    <p className='flex gap-2 items-center'>Deadline: <span className='flex gap-1 items-center'><FaCalendar></FaCalendar> {td.deadline?.split('T')[0]}</span> <span className='flex gap-1 items-center'><FaClock></FaClock>{td.deadline?.split('T')[1]}</span></p>
                                    <span className='absolute right-3 hover:scale-110 hover:text-red-500 transition-all duration-500 cursor-pointer top-1/2 -translate-y-1/2' onClick={() => deleteTaskFunc(td._id)}><FaTrash></FaTrash></span>
                              </div>)

                  }
            </div>
      );
};

export default Ongoing;