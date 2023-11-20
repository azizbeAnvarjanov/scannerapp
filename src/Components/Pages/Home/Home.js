import React, { useEffect, useState } from "react";
import "../../Css/Home.css";


// imgs
import dori from "../../../img/dori.jpg";

// icons
import { BsUpcScan } from "react-icons/bs";

// pages
import Loader from "../../Loader/Loader";

// library
import { Html5QrcodeScanner } from "html5-qrcode";
import { Link } from "react-router-dom";



function Home() {
  const [camera, setCamera] = useState(false);
  const [scanResult, setScannResult] = useState(null);
  const [count, setCount] = useState(1);

  function activeCamera() {
    camera ? setCamera(false) : setCamera(true);
  
  }

  const handlePlus = () => {
    setCount(count + 1);
  };
  const handleMinus = () => {
    if (count < 2) {
      handleReset();
    } else {
      setCount(count - 1);
    }
  };

  const handleReset = () => {
    setCount(1);
  };

  function run(item) {


    const scanner = new Html5QrcodeScanner("reader", {
      qrbox: {
        width: 250,
        height: 250,
      },
      fps: 5,
    });

    function success(result) {
      scanner.clear();
      setScannResult(result);
    }

    function error(err) {
      // console.warn(err);
    }



    scanner.render(success, error);
   
  }

  useEffect(() => {
    const scanner = new Html5QrcodeScanner("reader", {
      qrbox: {
        width: 250,
        height: 250,
      },
      fps: 5,
    });

    function success(result) {
      scanner.clear();
      setScannResult(result);
    }

    function error(err) {
      // console.warn(err);
    }



    scanner.render(success, error);
  }, [])
  




  return (
    <div className="home">
      <Loader />

      {scanResult ? (
        <div className="result_box">
          <img src={dori} alt="" />
          <div className="product_info">
            <h2>Product value {scanResult}</h2>
            <h4>Diller product</h4>
            <p>Product ID</p>
            <div className="counter">
              <p className="counter_btn" onClick={handleMinus}>
                -
              </p>
              <p className="counter_value">{count}</p>
              <p className="counter_btn" onClick={handlePlus}>
                +
              </p>
            </div>
            <div className="result_btns">
              <button>Chanel</button>
              <button onClick={() => {
                setScannResult(null);
                run();
              }}>Done</button>
            </div>
          </div>
        </div>
      ) : (
        <div
          id="reader"
          className="camera_scan active"
        ></div>
      )}

        <div id="reader"
          className={!camera ? "camera_scan" : "camera_scan active"}
        ></div>

      {/* <div className="scan_btns">
        <div class="button" onClick={() => activeCamera()}>
          <div class="button-wrapper">
            <div class="text">{camera ? "Chanel" : "Scanner"}</div>
            <span className="icon">
              <BsUpcScan />
            </span>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Home;
