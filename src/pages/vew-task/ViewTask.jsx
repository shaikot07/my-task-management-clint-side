import React from 'react';
import useTasks from '../../Hooks/useTasks';
import { FaCalendar, FaClock, FaTrash } from 'react-icons/fa';
import Ongoing from '../../assets/component/Ongoing';
import { useDrag } from 'react-dnd';
import Swal from 'sweetalert2';
import useAxiosPublice from '../../Hooks/useAxiosPublice';
import Complete from '../../assets/component/Complete';

const ViewTask = () => {
      const [tasks, refetch] = useTasks();
      console.log(tasks);
      const axiosPublic = useAxiosPublice();
      const pendingTasks = tasks.filter(task => task.status === 'pending');


     

      // console.log(isDragging);
      const deleteTaskFunc = (id) => {
            console.log(id);
            Swal.fire({
                  title: "Are you sure?",
                  text: "You won't be able to revert this!",
                  icon: "warning",
                  showCancelButton: true,
                  confirmButtonColor: "#3085d6",
                  cancelButtonColor: "#d33",
                  confirmButtonText: "Yes, delete it!"
            }).then(async (result) => {
                  if (result.isConfirmed) {
                        const res = await axiosPublic.delete(`/tasks/${id}`);
                        // console.log(res.data);
                        if (res.data.deletedCount > 0) {
                              // refetch to update the ui
                              refetch();
                              Swal.fire({
                                    position: "top-end",
                                    icon: "success",
                                    title: ` task delete successfully`,
                                    showConfirmButton: false,
                                    timer: 1500
                              });
                        }


                  }
            });
      }
      // change status
      const handleChangStatus = async (id) => {
            try {
                  const updatedTask = {
                        status: 'Ongoing'
                        // You can add more fields here if needed
                  };

                  const res = await axiosPublic.patch(`/tasks/${id}`, updatedTask);
                  console.log("patch", res.data); // Log the response if needed

                  if (res.data.modifiedCount > 0) {
                        refetch(); // Update the task list after status change
                        Swal.fire({
                              position: "top-end",
                              icon: "success",
                              title: `Task status changed to Ongoing`,
                              showConfirmButton: false,
                              timer: 1500
                        });
                  } else {
                        console.log("No documents were modified"); // Log a message if no documents were modified
                  }
            } catch (error) {
                  console.error("Error changing task status:", error);
                  // Handle error if any
            }
      }

      return (
            <div className='min-h-screen pt-12 bg-slate-900'>
                  <div className='w-[950px] mx-auto bg-slate-400 bg-opacity-20 p-4 space-y-5 rounded'>

                        <div className='grid grid-cols-1 md:grid-cols-3 gap-2'>
                              <div className='w-[300px]'>
                                    <div className='bg-slate-900 bg-opacity-40'> <h2 className='text-2xl text-center text-green-600'>To Do</h2></div>
                                    <div className='cursor-grab' >
                                          {

                                                pendingTasks?.length === 0 ? <div className='min-h-[50vh] flex items-center justify-center'><span className='bg-red-500 p-2 rounded text-white font-bold text-xl'>No task here!</span></div> : pendingTasks.map((td, ind) =>
                                                      <div key={ind} className={`rounded p-3 my-2 w-[300px] text-slate-200 bg-slate-900 bg-opacity-40 relative`}>
                                                            <h2 className='text-slate-50 font-bold text-xl'>{td.title}</h2>
                                                            <p>Status: <span className='font-semibold text-white'>{td.status}</span></p>
                                                            <p>Priority: <span className={`font-semibold ${td.priority === 'High' ? 'text-red-500' : 'text-slate-50'}`}>{td.priority}</span></p>
                                                            <p className='w-full break-words'>Description: <span className='font-normal text-white'>{td.description}</span></p> {/* Added break-words class */}
                                                            <p className='flex gap-2 items-center'>Start Day: <span className='flex gap-1 items-center'><FaCalendar></FaCalendar> {td.endDTime?.split('T')[0]}</span> <span className='flex gap-1 items-center'><FaClock></FaClock>{td.
                                                                  startDTime
                                                                  ?.split('T')[1]}</span></p>
                                                            <p className='flex gap-2 items-center'>Deadline: <span className='flex gap-1 items-center'><FaCalendar></FaCalendar> {td.endDTime?.split('T')[0]}</span> <span className='flex gap-1 items-center'><FaClock></FaClock>{td.deadline?.split('T')[1]}</span></p>
                                                            <span className='absolute right-3 hover:scale-110 hover:text-red-500 transition-all duration-500 cursor-pointer top-1/3 -translate-y-1/2' onClick={() => deleteTaskFunc(td._id)}><FaTrash></FaTrash></span>
                                                            <button onClick={() => handleChangStatus(td._id)} className='py-1 px-4 bg-green-600 rounded-lg hover:bg-[#A855F7]'>Assign</button>
                                                      </div>)

                                          }
                                    </div>
                              </div>
                              <Ongoing></Ongoing>
                              <Complete></Complete>
                        </div>
                  </div>

            </div>
      );
};

export default ViewTask;