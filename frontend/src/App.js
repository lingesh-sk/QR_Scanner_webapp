import "./App.css";
import Scanner from "./Scanner";
import Context from "./components/Context";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Infopage from "./components/infopage";
import Dashboardpage from "./components/Dashboardpage";
import Addproduct from "./components/addproduct";
import QRcodeGenerator from "./components/qrcodegenerator";


function App() {
  return (
    <div className="App">
      <Context> 
        <Router>
          <Routes>
            <Route path="/" element={<Scanner />} />
            <Route path="/info" element={<Infopage />} />
            <Route path="/admin/addproduct" element={<Addproduct/>} />
            <Route path="/admin/qrcode" element={<QRcodeGenerator/>} />
            <Route path="/dashboard" element={<Dashboardpage />} />
            <Route path="*" element={<h1>Oops 404 Error Occur!</h1>} />
          </Routes>
        </Router>
      </Context>

    </div>

  );
}

export default App;
