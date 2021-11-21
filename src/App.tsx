import './App.css';

import React, { useReducer } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Login from './components/Login';
import {
	AuthContextProvider,
	initialState,
} from './context/authenticate/context';
import reducer from './context/authenticate/reducer';

function App() {
  const [ authState,authDispatch ] = useReducer(reducer,initialState)
  const AuthContextValue = {
    authState,
    authDispatch
  }

  return (
    <AuthContextProvider value = { AuthContextValue }>
      <BrowserRouter>
        <Routes>
          <Route path = '/login' element =  {<Login />} />
        </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App
