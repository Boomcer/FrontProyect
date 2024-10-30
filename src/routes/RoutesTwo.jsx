import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomeScreen from '../views/HomeScreen';
import AdminScreen from '../views/AdminScreen';
import NosotrosScreen from '../views/NosotrosScreen';
import ErrorScreen from "../views/ErrorScreen"
import MenuApp from '../components/MenuApp';
import ProtectedRoutes from './ProtectedRoutes';
import CarritoScreen from '../views/CarritoScreen';

const RoutesTwo = ()=>{

  return(
<>
    <MenuApp />
    <Routes>
      <Route path="/" element={<HomeScreen/>}/>
      <Route path="/nosotros" element={<NosotrosScreen/>}/>
      <Route path="/carrito" element={<CarritoScreen/>}/>      
      <Route 
        path="/admin" 
        element= {
        <ProtectedRoutes>  
        <AdminScreen/>
        </ProtectedRoutes>
        }
        />
      <Route path="*" element={<ErrorScreen/>}/>
    </Routes>
</>
);
};

export default RoutesTwo;
