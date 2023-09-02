
import './App.css';
import Horizontalchart from './chart-horizontal';
function App() {
  return (
    <div className="App">
      <div>
            <input type="text" placeholder="search" />
            <button>Search</button>
         </div>
      <Horizontalchart/>
    </div>
  );
}

export default App;
