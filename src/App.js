import logo from './logo.svg';
import './App.css';
import Couter from './components/Couter';
import NameHandler from './components/NameHandler';
import PersonalDetails from './components/PersonalDetails';
import ProductList from './components/ProductList';
import ProductCard from './components/ProductCard';
import CounterNew from './components/CounterNew';
import UserTable from './components/Tables/UserTable';
import BasicForm from './Forms/BasicForm';
import AddressBook from './Forms/AddressBook';
import Timer from './timer/Timer';
import { useState } from 'react';

function App() {

  let name = "manasa"

  const [showTimer, setShowTimer] = useState(true);
  return (
    <div className="App">
      {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          {name}
        </p>

      <Couter />
      <NameHandler/> */}
      {/* <PersonalDetails /> */}
      {/* <ProductList/> */}
      {/* <ProductCard  product={{name : 'asdf', rate:2000}}/> */}
      {/* <CounterNew /> */}
      {/* <UserTable /> */}
      {/* <BasicForm /> */}
      {/* <AddressBook /> */}
      {showTimer && <Timer />}
      <button onClick={() => {
        setShowTimer(!showTimer);
      }}>ShowTimer</button>
    </div>
  );
}

export default App;
