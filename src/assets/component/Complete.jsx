
import { FaCalendar, FaClock, } from 'react-icons/fa';
import useTasks from '../../Hooks/useTasks';
import useAxiosPublice from '../../Hooks/useAxiosPublice';

const Complete = () => {
    const [tasks, refetch] = useTasks();
    // console.log(tasks);
    const axiosPublic = useAxiosPublice();
    const completeTasks = tasks.filter(task => task.status === 'Complete');
    // console.log(completeTasks);
    return (
        <div className='w-[300px] bg-[#A855F7]'>
            <div className='bg-slate-900 bg-opacity-40'> <h2 className='text-2xl text-center text-green-600'>Complete</h2></div>
            {

                completeTasks?.length === 0 ? <div className='min-h-[50vh] flex items-center justify-center'><span className='bg-red-500 p-2 rounded text-white font-bold text-xl'>No task here!</span></div> : completeTasks.map((td, ind) =>
                    <div key={ind} className={`rounded p-3 my-2 w-[300px] text-slate-200 bg-slate-900 bg-opacity-40 relative`}>
                        <h2 className='text-slate-50 font-bold text-xl'>{td.title}</h2>
                        <p>Status: <span className='font-semibold text-white'>{td.status}</span></p>
                        <p>Priority: <span className={`font-semibold ${td.priority === 'High' ? 'text-red-500' : 'text-slate-50'}`}>{td.priority}</span></p>
                        <p className='flex gap-2 items-center'>Deadline: <span className='flex gap-1 items-center'><FaCalendar></FaCalendar> {td.endDTime?.split('T')[0]}</span> <span className='flex gap-1 items-center'><FaClock></FaClock>{td.endDTime?.split('T')[1]}</span></p>
                        {/* <span className='absolute right-3 hover:scale-110 hover:text-red-500 transition-all duration-500 cursor-pointer top-1/3 -translate-y-1/2' onClick={() => deleteTaskFunc(td._id)}><FaTrash></FaTrash></span> */}
                        {/* <button onClick={() => handleChangStatus(td._id)} className='py-1 px-4 bg-green-600 rounded-lg'>In progress</button> */}
                    </div>)

            }
        </div>
    );
};

export default Complete;