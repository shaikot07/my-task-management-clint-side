import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import MyLoading from '../assets/component/MyLoading';
import useAuth from '../Hooks/useAuth';
import { FaPlus } from 'react-icons/fa';
import useTasks from '../Hooks/useTasks';

const Home = () => {
      const { user, loading } = useAuth()
      const [tasks, setTasks] = useState([])
      const navigate = useNavigate()
      // addTaskFunc
      const addTaskFunc = () => {
            if (!user) {
                  Swal.fire({
                        title: 'Are you sure?',
                        text: "You have to signin first!",
                        icon: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Yes, signin!'
                  }).then((result) => {
                        if (result.isConfirmed) {
                              navigate('/login')
                        }
                  })
                  return
            }
            navigate('/addedtask')
      }




      if (loading) {
            return <div className='h-screen flex items-center justify-center'>
                  <MyLoading loading></MyLoading>
            </div>
      }
      return (
            <div className='min-h-screen pt-12 bg-slate-900 space-y-10'>
                  <div className='w-3/6 mx-auto bg-slate-400 text-white text-center bg-opacity-20 p-4 space-y-5 rounded'>
                        {user && <p className='font-semibold text-lg'>Hello, <span className='text-purple-500'>{user?.displayName}</span></p>}
                        {/* {tasksLoading? <MyLoading className={'h-14 w-14'}/> :tasks.length>0 && <p className='font-semibold text-3xl'>{tasks.length} tasks total!</p>} */}
                        <h2 className='font-bold text-3xl'>Welcome to <span className='text-emerald-500'>My Task Planner</span></h2>
                        <div className='flex justify-center gap-2'>
                              <button className='!flex gap-1 items-center my-btn-one' onClick={addTaskFunc}>Add Task <FaPlus></FaPlus> </button>
                              {/* <button className='!flex gap-1 items-center my-btn-one' onClick={createTeamFunc}> Create Team <FaPlus></FaPlus> </button> */}
                        </div>

                        <div>

                              <section >
                                    <div className="join join-vertical w-full">
                                          <div className="collapse collapse-arrow join-item border border-[#A855F7]">
                                                <input type="radio" name="my-accordion-4" checked="checked" />
                                                <div className="collapse-title text-xl text-green-600 font-medium">
                                                Who Can Benefit from Our Website?
                                                </div>
                                                <div className="collapse-content">
                                                      <p> Our platform is designed to cater to a diverse audience. Whether you are a developer, a corporate professional, a banker, or someone else, you'll set priyoty base task.</p>
                                                </div>
                                          </div>
                                          <div className="collapse collapse-arrow join-item border border-[#A855F7]">
                                                <input type="radio" name="my-accordion-4" />
                                                <div className="collapse-title text-xl text-green-600 font-medium">
                                                Developers
                                                </div>
                                                <div className="collapse-content">
                                                      <p> Access a wide time range of developer tools, tutorials, and resources to enhance your skills and stay updated with the latest technologies.</p>
                                                </div>
                                          </div>
                                          <div className="collapse collapse-arrow join-item border border-[#A855F7]">
                                                <input type="radio" name="my-accordion-4" />
                                                <div className="collapse-title text-xl text-green-600 font-medium">
                                                Bankers
                                                </div>
                                                <div className="collapse-content">
                                                      <p> Discover financial tools, market analyses, and relevant information to support your decision-making processes in the banking sector.</p>
                                                </div>
                                          </div>
                                    </div>
                              </section>
                        </div>
                  </div>






            </div>
      );
};

export default Home;