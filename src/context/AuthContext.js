import {AsyncStorage} from 'react-native';
import CreateDataContext from './CreateDataContext';
import trackApi from '../api/track';
import {navigate} from '../NavigatorRef';

const AuthUser = (state,action)=>{
  console.log(action.type);
  switch(action.type){
    case 'add_error':
      return {...state, errorMessage: action.payload};
    case 'signup':
      return { errorMessage:'', token:action.payload};
    case 'signin':
      return {errorMessage:'', token:action.payload};
    case 'clear_error_message':
      return {...state, errorMessage:''};
    case 'signout':
      return {token:null,errorMessage:''};
    default:
      return state;
  }
};

const clearErrorMessage=(dispatch)=>()=>{
  dispatch({type:'clear_error_message'});
};

const tryLocalSign = (dispatch) => async ()=>{
 const token = await AsyncStorage.getItem('token');
 if(token){
   dispatch({type:'signin', payload:token});
   navigate('TrackList');
 }else{
   navigate('SignUp');
 }
};

const signup = (dispatch) => async ({email,password})=>{
    try{
      const response = await trackApi.post("/singup",{email,password});
      await AsyncStorage.setItem('token', response.data.token);
      dispatch({type:'signup',payload:response.data.token});
      navigate('TrackList');
      console.log('datps:',response.data);
    }catch(erro){
      dispatch({type: 'add_error', payload: 'Something went wrong with sign up'})
    }
    
  };

const signin = (dispatch) => async ({email,password})=>{
    try{
      const response= await trackApi.post('/signin', {email,password});
      await AsyncStorage.setItem('token', response.data.token);
      dispatch({type:'signin',payload:response.data.token});
      navigate('TrackList');
    }catch(error){
      dispatch({type:'add_error',payload:'Something went wrong with sign in'})
    }
  }


const signout = (dispatch) => {
  return async()=>{
    await AsyncStorage.removeItem('token');
    dispatch({type:'signout'});
    navigate('SignUp');
  }
};

export const {Provider,Context} = CreateDataContext(
  AuthUser,
  {signup,signin,signout,clearErrorMessage,tryLocalSign},
  {token:null, errorMessage: '', email:'',password:''}
);