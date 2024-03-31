import axios from 'axios';

const axiosPublic = axios.create({
      baseURL:'https://task-managment-server-side-bice.vercel.app'
      // baseURL:'http://localhost:5000'
})
const useAxiosPublice = () => {
      
            return axiosPublic;
};

export default useAxiosPublice;