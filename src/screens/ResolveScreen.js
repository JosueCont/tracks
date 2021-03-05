import React,{useEffect,useContext} from 'react';
import {Context as AuthContext} from '../context/AuthContext';

const ResolveScreen =()=>{
  const {tryLocalSign}=useContext(AuthContext);
  useEffect(()=>{
    tryLocalSign();
  },[])
  return null
};

export default ResolveScreen;