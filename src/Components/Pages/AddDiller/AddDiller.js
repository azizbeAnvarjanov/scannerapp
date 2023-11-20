import React, { useEffect, useState } from "react";

import Loader from "../../Loader/Loader";
import "../../Css/AddDiller.css";


import db from "../../Firebase/Firebase";
import { onSnapshot, collection, addDoc } from "firebase/firestore";


function AddDiller() {

  const [fio, setFio] = useState('');
  const [id, setId] = useState('');
  const [phone, setPhone] = useState('');



  const createDiller = async (e) => {
      e.preventDefault();

      if (fio == "") {
        alert('FIO');
        return
      }else if(id == ""){
        alert('ID');
        return
      }else if(phone == ""){
        alert('Phone');
        return
      }


      await addDoc(collection(db,'dillers'), {
        fio: fio,
        id: id,
        phone: phone,
        completed: false,
      })
  }







  return (
    <div>
      {/* <Loader /> */}
      <form onSubmit={(e) => createDiller(e)} class="form">
        <p class="title">Diller qo'shish </p>
        <p class="message">Diller haqida ma'lumotlarini to'lfiring.</p>

        <label>
          <input 
            placeholder="Diller ism familiyasi:" 
            type="text"
            class="input" 
            value={fio}
            onChange={(e) => setFio(e.target.value)}
          />
        </label>

        <label>
          <input 
            placeholder="Diller ID raqami:" 
            type="text" 
            class="input" 
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </label>
        <label>
          <input 
            placeholder="Diller telefon raqami:" 
            type="number" 
            class="input" 
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </label>

        <button  class="submit">Qo'shish</button>
      </form>

    </div>
  );
}

export default AddDiller;
