import logo from './logo.svg';
import './App.css';
import Posts from './components/posts/Posts';
import CompA from './components/context/CompA';
import { createContext, useEffect, useReducer, useState } from 'react';
import axios from 'axios';
import Counter from './components/reducer/Counter';
import Counter2 from './components/reducer/Counter2';
import Apicallwithreducer from './components/reducer/Apicallwithreducer';
import SalaryComponent from './components/callBackHook/SalaryComponent';

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
      {/* <Posts/>
       */}

      {/* <CounterContext.Provider value={{counterCount : count, counterDispatch : dispatch }}>
        <UserContext.Provider value={userName}>
          <AddressContext.Provider value={'201, gayathrinager, hyderabad'}>
            counter {count}
            <CompA userName={'Prashanth'} />
          </AddressContext.Provider>
        </UserContext.Provider>
      </CounterContext.Provider>

      <Counter />
      <Counter2 /> */}

      {/* <Apicallwithreducer /> */}
      <SalaryComponent />
    </div>
  );
}

export default App;
