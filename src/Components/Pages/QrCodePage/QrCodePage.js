import React, { useState } from "react";
import "../../Css/QrCodePage.css";

// pages
import Loader from "../../Loader/Loader";

// imgs
import qr from "../../../img/qr.jpg";

// icons
import { MdOutlineDownloadForOffline, MdClose, MdQrCode } from "react-icons/md";

// librarry 
// import QRCode from "react-qr-code"; 
import QRCode from "qrcode";


function QrCodePage() {

  const [active, setActive] = useState(false);
  const [text, setText] = useState('');
  const [imgUrl, setImgUrl] = useState('');


  const generateQrCode = async () => {
    try {
      const response = await QRCode.toDataURL(text);
      setImgUrl(response);
      setActive(true);
    } catch (err) {
      console.log(err);
    }
  }



  return (
    <div>
      <Loader />
      <div className="qr_code_box">
        <div className="qr_navbar">
          <div class="container">
            <div class="search-container">
              <input 
              class="input" 
              type="text" 
              value={text}
              onChange={(e) => setText(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className={active ? "qr_center active" : "qr_center"}>
          <img src={imgUrl} alt="" />
          {/* <QRCode value={value} /> */}
        </div>
        <div className={active ? "qr_bottom active" : "qr_bottom"}>
          <button onClick={() => {
            setActive(false);
            setText('')
            }}>
            <div>
              <span>
                <p>Chanel</p>
              </span>
            </div>
            <div>
              <span>
                <p>
                  <MdClose />
                </p>
              </span>
            </div>
          </button>
          <a className="dw_btn" href={imgUrl} download onClick={() => {
            setActive(false);
            setText('')
            }}>
            <div>
              <span>
                <a href={imgUrl} download>
                  <p>Download</p>
                </a>
              </span>
            </div>
          </a>
        </div>
        <div className="qr_bottom_btn">
          <button onClick={() => generateQrCode()}>
            <div>
              <span>
                <p>Generate</p>
              </span>
            </div>
            <div>
              <span>
                <p>
                  <MdQrCode />
                </p>
              </span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default QrCodePage;
