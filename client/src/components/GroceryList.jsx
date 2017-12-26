import React from 'react';
import GroceryItem from './GroceryItem.jsx';

const GroceryList = (props) => (
  <div className="groceries">
    <div className = 'groceryHeaders'>
      <div onClick={ () => props.sortList('description') } className='col'>Item</div>
      <div onClick={ () => props.sortList('quantity') } className='col'>Quantity</div>
    </div>
    {props.groceries.map((item) =>
      <GroceryItem completeCallback={ () => props.completeCallback(item.id) } key={item.id} completed={item.completed} groceryItem={item.description} groceryQuantity={item.quantity} />
    )}
  </div>
)

export default GroceryList;