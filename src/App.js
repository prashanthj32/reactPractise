import logo from './logo.svg';
import './App.css';
import Posts from './components/posts/Posts';
import CompA from './components/context/CompA';
import { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import Counter from './components/reducer/Counter';

export const UserContext = createContext('User Name');
export const AddressContext = createContext()


function App() {

  const [userName, setUsername] = useState('User Name');

  useEffect(() => {
    setTimeout(()=>{
      axios.get('https://jsonplaceholder.typicode.com/users/1').then((result) => {
        console.log(result.data.name);
        setUsername(result.data.name);
      }).catch((error) => {
        console.log(error);
      })
    },5000)
   
  }, [])

  return (
    <div className="App">
      {/* <Posts/>
       */}

      {/* <UserContext.Provider value={userName}>
        <AddressContext.Provider value={'201, gayathrinager, hyderabad'}>
          <CompA userName={'Prashanth'} />
        </AddressContext.Provider>
      </UserContext.Provider> */}

      <Counter />
    </div>
  );
}

export default App;
