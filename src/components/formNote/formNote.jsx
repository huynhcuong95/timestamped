import React, { useState } from "react";
import PropTypes from "prop-types";
import "./styles.scss";
const FormNote = (props) => {
  const [dataArr, setDataArr] = useState([]);
  const [formValue, setFormValue] = useState({
    name: "",
    date: "",
  });
  const handleChangeFile = (e) => {
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value,
    });
  };
  function checkValue(val) {
    let data1 = JSON.parse(localStorage.getItem("data")) || [];
    let a = 0;
    data1.forEach((e, i) => {
      if (e.name == val) {
        a++;
      }
    });
    if (a > 0) return true;
    else return false;
  }
  const handleChangeForm = (e) => {
    e.preventDefault();
    if (
      formValue.name == "" ||
      formValue.date == "" 
    ) {
      alert("khong được để trống");
    } else if (checkValue(formValue.date)) {
      alert("trùng ngay gio");
    }else if(formValue.name.length<5||formValue.name.length>80){
        alert("nhap khoang 5 den 80");
    } 
    else {
      let data1 = JSON.parse(localStorage.getItem("data")) || [];
      data1.push(formValue);
      console.table(formValue);
      localStorage.setItem("data", JSON.stringify(data1));
    }
  };
  return (
    <form className="form" method="GET" onSubmit={handleChangeForm}>
      <div className="formInput">
        <label htmlFor="">Noi dung</label>
        <input
          type="text"
          name="name"
          onChange={handleChangeFile}
          value={formValue.name}
          className="formContent"
        />
      </div>
      <div className="formInput">
        <label htmlFor="">Ngay nhac</label>
        <input
          type="date"
          name="date"
          onChange={handleChangeFile}
          value={formValue.date}
          className="formDate"
        />
        <button onClick={handleChangeForm}>Luu Ngay</button>
      </div>
    </form>
  );
};

FormNote.propTypes = {};

export default FormNote;
