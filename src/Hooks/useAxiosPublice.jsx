import axios from 'axios';
import React from 'react';


const axiosPublic = axios.create({
      baseURL:'https://task-managment-server-side-bice.vercel.app'
})
const useAxiosPublice = () => {
      
            return axiosPublic;
};

export default useAxiosPublice;