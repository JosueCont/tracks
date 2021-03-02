import {AsyncStorage} from 'react-native';
import CreateDataContext from './CreateDataContext';
import trackApi from '../api/track';
import {navigate} from '../NavigatorRef';

const AuthUser = (state,action)=>{
  switch(action.type){
    case 'add_error':
      return {...state, errorMessage: action.payload};
    case 'signup':
      return { errorMessage:'', token:action.payload};
    default:
      return state;
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
    
  }
;

const signin = () => {
  return ({email,password})=>{

  }
};

const signout = () => {
  return ()=>{

  }
};

export const {Provider,Context} = CreateDataContext(
  AuthUser,
  {signup,signin,signout},
  {token:null, errorMessage: '', email:'',password:''}
);