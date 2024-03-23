import logo from './logo.svg';
import './App.css';
import Posts from './components/posts/Posts';
import CompA from './components/context/CompA';
import React, { createContext, useEffect, useReducer, useState } from 'react';
import axios from 'axios';
import Counter from './components/reducer/Counter';
import Counter2 from './components/reducer/Counter2';
import Apicallwithreducer from './components/reducer/Apicallwithreducer';
import SalaryComponent from './components/callBackHook/SalaryComponent';
import UseMemoExample from './components/memo/UseMemoExample';
import InputEx1 from './components/useRef/InputEx1';
import TimerEx2 from './components/useRef/TimerEx2';
import { Route, Routes } from 'react-router-dom';
import SideNav from './components/SideNav';
import Home from './components/forRouting/Home';
import Products from './components/forRouting/Products';
import NoPage from './components/forRouting/NoPage';
import Books from './components/forRouting/Books';
import Cars from './components/forRouting/Cars';
import Users from './components/forRouting/users/Users';
import UserDetailsPage from './components/forRouting/users/UserDetailsPage';
import Admin from './components/forRouting/users/Admin';
import LowLevel from './components/forRouting/LowLevel';
import HighLevel from './components/forRouting/HighLevel';
import Login from './components/auth/Login';
import { AuthProvider } from './shared/AuthToken';
import ValidateNavigation from './components/ValidateNavigation';
// import About from './components/forRouting/About';
const LazyAbout = React.lazy(() => import('./components/forRouting/About'))

export const UserContext = createContext('User Name');
export const AddressContext = createContext();
export const CounterContext = createContext();
const intialValue = 0;
const reducer = (state, action) => {
  switch (action) {
    case 'Inc':
      return state + 1;
    case 'Dec':
      return state - 1;
    case 'Reset':
      return intialValue;
    default:
      return state
  }
}

function App() {

  const [count, dispatch] = useReducer(reducer, intialValue)
  const [userName, setUsername] = useState('User Name');

  // useEffect(() => {
  //   setTimeout(() => {
  //     axios.get('https://jsonplaceholder.typicode.com/users/1').then((result) => {
  //       console.log(result.data.name);
  //       setUsername(result.data.name);
  //     }).catch((error) => {
  //       console.log(error);
  //     })
  //   }, 5000)

  // }, [])

  return (
    <div className="App">
      {/* <CounterContext.Provider value={{counterCount : count, counterDispatch : dispatch }}>
        <UserContext.Provider value={userName}>
          <AddressContext.Provider value={'201, gayathrinager, hyderabad'}>
            counter {count}
            <CompA userName={'Prashanth'} />
          </AddressContext.Provider>
        </UserContext.Provider>
      </CounterContext.Provider>*/}
      <AuthProvider>
        <SideNav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products />} >
            <Route index element={<Books />} />
            <Route path='book' element={<Books />} />
            <Route path='car' element={<Cars />} >
              <Route path='low' element={<LowLevel />} />
              <Route path='high' element={<HighLevel />} />
            </Route>
          </Route>
          <Route path='users' element={<ValidateNavigation><Users /></ValidateNavigation>} />
          <Route path='users/:userId' element={<UserDetailsPage />} />
          <Route path='users/admin' element={<Admin />} />
          <Route path='about' element={<React.Suspense fallback='loading ...'> <LazyAbout /></React.Suspense>} />
          <Route path='login' element={<Login />} />
          <Route path='*' element={<NoPage />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
