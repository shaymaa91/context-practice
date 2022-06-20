
import A from '../A/A';
import B from '../B/B';
import C from '../C/C';
import { HelloContextProvider, HelloContextConsumer } from '../HelloContext/HelloContext';
import './App.css';



function App() {
  return (
    <>
      <div className='container vh-100 bg-info'>
        <h1 className='text-center pb-5'> APP Component</h1>
        <div className='d-flex justify-content-between align-items-center'>

          <A />
          <B />
          <HelloContextProvider value='Shaymaa'>
            <C />
          </HelloContextProvider>

        </div>
      </div>


    </>
  );
}

export default App;
