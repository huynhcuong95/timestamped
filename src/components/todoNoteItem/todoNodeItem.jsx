import React from 'react';
import PropTypes from 'prop-types';
import "./styles.scss"
const TodoNodeItem = ({item,deleteItem}) => {
    
    return (
        <div className='item'>
            <h3>Ngay: {item.date}</h3>
            <p>{item.name}</p>
            <button>x</button>
        </div>
    );
};

TodoNodeItem.propTypes = {
    
};

export default TodoNodeItem;