import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminLogin: React.FC = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate('/');
  }, [navigate]);
  return null;
};
export default AdminLogin;