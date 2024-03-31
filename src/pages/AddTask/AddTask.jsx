import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import useAuth from '../../Hooks/useAuth';
import MyLoading from '../../assets/component/MyLoading';
import { useForm } from 'react-hook-form';
import { FaPlus } from 'react-icons/fa';
import useAxiosPublice from '../../Hooks/useAxiosPublice';
import Swal from 'sweetalert2';

const AddTask = () => {

      const { user, loading } = useAuth()
      const [insertTaskLoading, setInsertTaskLoading] = useState(false)
      // const [tasksLoading, setTasksLoading] = useState(true)
      const axiosPublic =useAxiosPublice()




      const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
      const onSubmit = async (form) => {
            // setInsertTaskLoading(true)
            const { title, description, startDTime, priority,endDTime, } = form
            const task = { title, description,  startDTime,endDTime, status: 'pending', priority, user: user?.email }


            console.log(task);
            const postTask = await  axiosPublic.post('/tasks', task );
                  console.log(postTask.data);
                  if (postTask.data.insertedId) {
                        // show success popup 
                        Swal.fire({
                              position: "top-end",
                              icon: "success",
                              title: `${title} is added to the task`,
                              showConfirmButton: false,
                              timer: 1500
                        });
                        reset()
                  }

            
      };


      if (loading) {
            return <div className='h-screen flex items-center justify-center'>
                  <MyLoading className={'h-14 w-14'}></MyLoading>
            </div>
      }
      return (
            <div className='min-h-screen pt-12 bg-slate-900'>
                  <div className='w-3/6 mx-auto bg-slate-400 bg-opacity-20 p-4 space-y-5 rounded'>
                        <div>
                              <h2 className='font-bold text-3xl text-white'>Today's TODO!</h2>
                              <h2 className='font-semibold text-lg text-slate-300'>Create a list of task.</h2>
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)} className='w-full space-y-4 text-slate-700'>

                              {/* Tasks */}
                              <div>
                                    <label className='text-white' htmlFor="task">Tasks Name</label>
                                    <input type="text" id='task' placeholder="Your task here" className="my-inp" {...register("title", { required: true })} />
                                    {errors.title && <span className='text-red-500 block font-semibold'>Task is required!</span>}
                              </div>

                              {/* Description */}
                              <div>
                                    <label className='text-white' htmlFor="descripion">Description</label>
                                    <input type="text" id='descripion' placeholder="Your description here" className="my-inp" {...register("description", { required: true })} />
                                    {errors.description && <span className='text-red-500 block font-semibold'>Description is required!</span>}
                              </div>

                              {/* start date */}
                              <div>
                                    <label className='text-white' htmlFor="due-date">Start Date</label>
                                    <input className='my-inp' id='due-date' type="datetime-local" {...register("startDTime", { required: true })} />
                                    {errors.dateTime && <span className='text-red-500 block font-semibold'>Date and time are required!</span>}
                              </div>
                              {/* end date */}
                              <div>
                                    <label className='text-white' htmlFor="due-date">End Date</label>
                                    <input className='my-inp' id='due-date' type="datetime-local" {...register("endDTime", { required: true })} />
                                    {errors.dateTime && <span className='text-red-500 block font-semibold'>Date and time are required!</span>}
                              </div>

                              {/* Priority level */}
                              <div>
                                    <label className='text-white' htmlFor="priority-level">Priority Level</label>
                                    <select className="select my-inp w-full" id='priority-level' defaultValue={''} {...register("priority", { required: true })}>
                                          <option value={''} disabled>Priority</option>
                                          <option value={'Low'}>Low</option>
                                          <option value={'Medium'}>Medium</option>
                                          <option value={'High'}>High</option>
                                    </select>
                                    {errors.priority && <span className='text-red-500 block font-semibold'>Priority is required!</span>}
                              </div>
                              {/* team member */}
                              {/* <div>
                        <label className='text-white' htmlFor="team">Team Member</label>
                        <select className="select my-inp w-full" id='team' defaultValue={''} {...register("teamMember")}>
                            <option value={''} disabled>Team Member</option>
                            {
                                myTeams?.map(mt=> mt.member?.map((teamMember, ind) => <option key={ind} value={teamMember}>{teamMember}</option>))
                            }
                        </select>
                    </div> */}

                              <button className={`my-btn-one !flex items-center gap-2 ${insertTaskLoading ? 'opacity-40 !cursor-auto' : 'opacity-100 !cursor-pointer'}`} disabled={insertTaskLoading} type='submit'> <span><FaPlus></FaPlus></span> Add Task</button>
                        </form>

                  </div>

                  <ToastContainer
                        position="bottom-right"
                        autoClose={1500}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="dark"
                  />
            </div>
      );
};

export default AddTask;