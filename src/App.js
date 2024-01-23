import './App.css';
import Items from './components/Items';
import Navbar from './components/Navbar';
import CustomItemContext from './itemContext';
// import { totalContext } from './totalContext';

function App() {
  return (
    // <itemContext.Provider value= {{item,setItem, total, setTotal}}>
      //  <totalContext.Provider value={{total, setTotal}}></totalContext.Provider> 
    <CustomItemContext >
      <div className='App'>
        <h2>Shopping Cart</h2>
        <></>
          <Navbar />
          <Items />
      </div>
    </CustomItemContext>

      // </totalContext.Provider>
    // </itemContext.Provider>
  );
}
export default App;
