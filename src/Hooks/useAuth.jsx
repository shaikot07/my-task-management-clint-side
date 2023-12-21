import React, { useContext } from 'react';
import { AuthContext } from '../pages/AuthProvider/Authprovider';

const useAuth = () => {
      const auth = useContext(AuthContext);
      return auth
};

export default useAuth;