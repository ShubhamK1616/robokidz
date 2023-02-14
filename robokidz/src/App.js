
import './App.css';
// import Header from './Components/header';
// import ReactDOM from "react-dom";/
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import Addkit from './Components/Addkit';
// import Dashboard from './Components/Dashboard';
import Pageoutlay from './Components/pageoutlay';
import LabelPrinting from './Components/labelprinting';
import Login from './Components/Loginpage';
// import Header from './Components/header';

function App() {
  return (
    // <div>
    //   <Pageoutlay />
    // </div>
    //  <BrowserRouter>
    //   <Routes>
    //     <Route exact path="/" element={<Pageoutlay />}>
    //       <Route index element={<Pageoutlay />} />
    //       <Route path="dashboard" element={<Pageoutlay />} />
    //       <Route path="addkit" element={<Addkit />} />
    //     </Route>
    //   </Routes>
    // </BrowserRouter>
    <div>
    <Router>
        <Routes>
          <Route exact path="/" element={<Pageoutlay />}/>
          <Route exact path="/dashboard" element={<Pageoutlay />}/>
          <Route exact path="/addkit" element={<Addkit />}/>
          <Route exact path="/labelprinting" element={<LabelPrinting />}/>
          <Route exact path="/login" element={<Login />}/>
        </Routes>
    </Router>
    </div>

  );
}
// const root = ReactDOM.createRoot(document.getElementById('root'));
export default App;
