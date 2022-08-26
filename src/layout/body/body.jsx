import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import FormNote from '../../components/formNote/formNote';
import TodoNoteList from '../../components/todoNoteList/todoNoteList';
import "./styles.scss"
import { observer } from "mobx-react"
import NoteStores from '../../noteStore/noteStore';

const Body = props => {
    const [data,setData] = useState([])
    const tasksList = localStorage.getItem("data")
      ? JSON.parse(localStorage.getItem("data"))
      : [];
      useEffect(()=>{
          setData(tasksList)
      },[NoteStores.render])
      const deleteItem = (indexItem) => {
        // const arrTodo = listTodo;
        const arrTodo = [...data];
        arrTodo.splice(indexItem, 1);
        // setListTodo(arrTodo);
        localStorage.setItem("data", JSON.stringify(arrTodo));
      }
    return (
        <div className='main'>
            <FormNote/>
            <TodoNoteList data={tasksList}/>
        </div>
    );
};

Body.propTypes = {
    
};

export default observer(Body);