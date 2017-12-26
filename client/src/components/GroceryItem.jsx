import React from 'react';

const GroceryItem = (props) => (
  <div className={props.completed ? 'strike groceryItem ' : 'groceryItem'} onClick={props.completeCallback} >
    <span className = 'col'>{props.groceryItem}</span>
    <span className = 'col'>{props.groceryQuantity}</span></div>
)

export default GroceryItem;