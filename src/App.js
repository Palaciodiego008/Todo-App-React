import './App.css';
import Header  from './Layouts/header';
import List from './Views/list';

function App() {
  return (
    <div className="App">
      <Header />

     <div className='py-7 px-8 justify-end flex'>
       <button type="button" className='bg-cyan-500 text-sm py-3 px-7 rounded-sm'>
          <span className='text-white'>Add Task</span>
        </button>
     </div>

      <List />

    </div>
  );
}

export default App;
