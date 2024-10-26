import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { useDebugValue } from 'react';

function useOnlineStatus() {
  // ...
  useDebugValue(isOnline ? 'Online' : 'Offline');
  // ...
}

interface DataInterface {
  data: ItemInterface[];
}
interface ItemInterface {
  id: number;
  title: string;
}
let data: DataInterface = [{ data: [{ id: 1, title: 'Item 1' }, { id: 2 }] }];
// let Item = initial.data.map((item, key) => (
//   <input type={'text'} name={'item-' + item.id} value={['Item data']} />
// ));
function App(data: DataInterface) {
  const [count, setCount] = useState(0);
  const [items, setItems] = useState(0);
  // useState
  return (
    <>
      <header>
        <span>Header</span>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
      </header>
      <main>Main</main>
      <div className={'col'}>1</div>
      <section>1</section>
      <section>2</section>
      <div>
        <h1>{1}</h1>

        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Count</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>Organization</p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
