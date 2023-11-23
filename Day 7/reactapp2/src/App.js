import './App.css';
import AxiosDelete from './components/AxiosDelete';
import AxiosGet from './components/AxiosGet';
import Axiospost from './components/Axiospost';
import AxiosPut from './components/AxiosPut';

function App() {
  return (
    <div className="App">
      <AxiosGet/>
      <Axiospost/>
      <AxiosPut/>
      <AxiosDelete/>
    </div>
  );
}

export default App;