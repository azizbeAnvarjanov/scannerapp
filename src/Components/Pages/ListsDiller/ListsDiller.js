import React, { useState, useEffect } from "react";
import "../../Css/ListsDiller.css";
import Loader from "../../Loader/Loader";


import db from "../../Firebase/Firebase";
import { onSnapshot, collection } from "firebase/firestore";


import { FaRegUserCircle } from "react-icons/fa";

import qr from '../../../img/qr.jpg'


function ListsDiller() {



  const [dillerData, setDillerData] = useState([]);



  useEffect(() => {
    const fetchBooks = () => {
        onSnapshot(collection(db, "dillers"), (snapshot) => {
          setDillerData(snapshot.docs.map((doc) => doc.data()));
        });
    };
      fetchBooks();
    }, []);

    console.log(dillerData.map((el) => el.id));





  return (
    <div className="ListsDiller">
      <Loader />
      <h2>Dillerlar</h2>

      <div className="dillers">

   
        {
          dillerData.map((el) => (
            <div className="diller_box">
            <div className="diller_info">
              <div className="diller_avatar">
                <FaRegUserCircle />
              </div>
              <div className="diller_infos">
                <h2>{el.fio}</h2>
                <p>{el.id}</p>
                <p>{el.phone}</p>
              </div>
            </div>
  
            <div className="diller_right_box">
              <div className="diller_counter">
                <h1>{el.products}</h1>
              </div>
  
              <div className="diller_qr_img">
                <img src={el.qr} alt="" />
              </div>
            </div>
  
          </div>
          ))
        }

      </div>
    </div>
  );
}

export default ListsDiller;
