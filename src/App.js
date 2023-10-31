import './App.css';
import { Page } from './Bro/Page';
import { Routes, Route, NavLink } from 'react-router-dom';
import { Ga } from './Bro/Ga';
function App() {
  return (
    <div class="S" className='container mt-10 bg-[#697689] w-60rem'>
      <nav>
      <header className='flex justify-betwen items-center ml-40 '>
        <img src='Images/OIP.jpeg' className='w-20 mr-5'></img>
        <NavLink className=" mr-20 text-xl" style={({isActive})=> ({background:isActive ? '#fccb00':'#FFFCEC'})} to="/">1</NavLink>
        <NavLink className="mr-20 text-xl" style={({isActive})=> ({background:isActive ? '#fccb00':'#FFFCEC'})} to="/4">2</NavLink>
      </header>
      </nav>
      <Routes>
        <Route path="/" element={<Page id="yHoI0n2VxMU?si=LWh0SNIuc8iUf5pF" />} />
        <Route path="/4" element={<Ga/>} />
      </Routes>
      <footer>
    <ul>
        <li>Edite par :abderrahmane Temlali</li>
        <li>Derniere mise a jour :<time>Le 22 Semptembre 2023</time> </li>
        <li>Copyright 2023 </li>
    </ul>
</footer>
    </div>
  );
}
export default App;
