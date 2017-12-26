import React from 'react';

class AddGrocery extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      item: '',
      quantity: ''
    }

    this.handleItemChange = this.handleItemChange.bind(this);
    this.handleQuantChange = this.handleQuantChange.bind(this);
  }

  handleItemChange(event) {
    this.setState({'item': event.target.value})
  }

  handleQuantChange(event) {
    this.setState({'quantity': event.target.value})
  }

  addItem() {
    var newItem = {
      description: this.state.item,
      quantity: this.state.quantity
    }
    this.props.callback(newItem);
  }

  render () {
    return (        
      <div>
        <span className='inputs'> 
          <span>
            <h3>Item</h3>
            <input 
              className='splits'
              type='text'
              id='gItem'
              value={this.state.item}
              onChange={this.handleItemChange}
            />
          </span>
          <span>
            <h3>Quantity</h3>
            <input
              className='splits'
              type='text'
              id='gQuant' 
              value={this.state.quantity}
              onChange={this.handleQuantChange}
              />
          </span>    
        </span>
        <button id='addGroceries' onClick={ () => this.addItem() }>Add Item</button>
      </div>
    )
  }
}

export default AddGrocery;

