
import { Routes, Route} from 'react-router-dom';
import Home from "./Components/Pages/Home/Home";
import QrCodePage from './Components/Pages/QrCodePage/QrCodePage';
import Navbar from './Components/Navbar/Navbar';
import AddDiller from './Components/Pages/AddDiller/AddDiller';
import ListsDiller from './Components/Pages/ListsDiller/ListsDiller';
import Loader from './Components/Loader/Loader';


function App() {
  return (
    <>
    <div className="app">

    <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/qrcode" element={<QrCodePage />} />
        <Route path="/adddiller" element={<AddDiller />} />
        <Route path="/lists" element={<ListsDiller />} />
        <Route path="/loader" element={<Loader />} />
      </Routes>
    </div>
    </>
  );
}

export default App;
