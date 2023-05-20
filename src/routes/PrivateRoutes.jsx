import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Navigate, useNavigate } from 'react-router-dom';

const PrivateRoutes = ({ children }) => {

    const { user } = useContext(AuthContext);

    if (user) return children;

    return <Navigate to='/login'></Navigate>
};

export default PrivateRoutes;