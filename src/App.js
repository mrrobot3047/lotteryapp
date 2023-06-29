import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Homepage from './Components/Homepage';

function App() {
  return (
    <BrowserRouter basename="/lotteryapp">
    <Routes>
      <Route path="/" element={<Homepage/>}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
