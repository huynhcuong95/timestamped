import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import TodoNodeItem from "../todoNoteItem/todoNodeItem";
import "./styles.scss";
const TodoNoteList = ({data,deleteItem}) => {
   
  return (
    <div className="listItem">
      {data.length &&
        data.map((item, index) => (
          <TodoNodeItem item={item} idx={index} key={item.id} deleteItem={deleteItem}/>
        ))}
    </div>
  );
};

TodoNoteList.propTypes = {};

export default TodoNoteList;
