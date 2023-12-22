import React from 'react';
import useAuth from './useAuth';
import { useQuery } from '@tanstack/react-query';
import useAxiosPublice from './useAxiosPublice';

const useTasks = () => {
      const axiosPublic = useAxiosPublice()
      const { user } = useAuth()
      // tanstak query 
      const {  data: tasks = [],refetch } = useQuery({
            queryKey: ['tasks', user?.email],
            queryFn: async () => {
                  const res = await axiosPublic.get(`/tasks/user?email=${user.email}`)
                  // console.log(res);
                  return res.data
            }
      })

      return [tasks, refetch]
};

export default useTasks;