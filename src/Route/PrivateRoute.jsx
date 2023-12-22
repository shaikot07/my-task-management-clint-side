import React from 'react';
import useAuth from '../Hooks/useAuth';
import { Navigate } from 'react-router-dom';
import MyLoading from '../assets/component/MyLoading';

const PrivateRoute = ({children}) => {
      const {user, loading} = useAuth()

    if(loading){
        return <div className='h-screen flex items-center justify-center'>
            <MyLoading className={'h-14 w-14'}></MyLoading>
        </div>
    }

    if(!user){
        return <Navigate to={'/login'} replace={true} />
    }

    return children
};

export default PrivateRoute;