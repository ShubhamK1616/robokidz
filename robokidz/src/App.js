
import './App.css';
// import Header from './Components/header';
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Addkit from './Components/Addkit';
import Dashboard from './Components/Dashboard';
import Pageoutlay from './Components/pageoutlay';
import Header from './Components/header';

function App() {
  return (
    // <div>
    //   <Pageoutlay />
    // </div>
     <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Pageoutlay />}>
          <Route index element={<Pageoutlay />} />
          <Route path="dashboard" element={<Pageoutlay />} />
          <Route path="addkit" element={<Addkit />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
export default App;
