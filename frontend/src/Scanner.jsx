// Scanner.jsx

import { Html5QrcodeScanner } from "html5-qrcode";
import { useContext, useEffect, useState } from "react";
import Axios from "axios";
import { StoreContext } from "./components/Context";
import { useNavigate } from "react-router-dom";
import Navbar from "./components/navbar";

function Scanner() {
  const { response, setResponse,scanResult, setScanResult } = useContext(StoreContext);
  const navigate = useNavigate();
  const [readerInitialized, setReaderInitialized] = useState(false);

  useEffect(() => {
    if (!readerInitialized) {
      const scanner = new Html5QrcodeScanner("reader", {
        qrbox: {
          width: 250,
          height: 250,
        },
        fps: 5,
      });

      scanner.render(success, error);

      function success(result) {
        scanner.clear();
        setScanResult(result);
        setReaderInitialized(true);
      }

      function error(err) {
        console.warn(err);
      }

      return () => {
        scanner.clear();
      };
    }
  }, [readerInitialized, setScanResult]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Axios.get(scanResult);
        if (Array.isArray(response.data)) {
          setResponse(response.data);
        } else {
          setResponse([response.data]);
        }
        navigate("/dashboard");
      } catch (error) {
        console.log(error.message);
      }
    };

    if (readerInitialized && scanResult) {
      fetchData();
    }
  }, [readerInitialized, scanResult, setResponse, navigate]);

  return (
    <div className="App">
      <Navbar />
      {!readerInitialized && <div className="mt-16" id="reader"></div>}
    </div>
  );
}

export default Scanner;
