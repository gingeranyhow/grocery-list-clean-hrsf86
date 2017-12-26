import React from 'react';
import ReactDOM from 'react-dom';
import GroceryList from './components/GroceryList.jsx';
import AddGrocery from './components/AddGrocery.jsx';
import data from './../../database/data.js';
import _ from 'underscore';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: props.groceries,
      lastId: 4
    }
  }

  updateList(newItem) {
    var arrayCopy = this.state.list.slice();
    var isNewItem = true;
    var updatedArray = [];
    arrayCopy.forEach((item) => {
      if (newItem.description === item.description) {
        isNewItem = false;
        item.quantity = Number(item.quantity) + Number(newItem.quantity);
      }
      // Filter out any completed values 
      if (!item.completed) {
        updatedArray.push(item);
      }
    })
 
    if (isNewItem) {
      newItem.id = this.state.lastId + 1;
      updatedArray.push(newItem);
      this.setState(prevState => ({
        lastId: prevState.lastId + 1
      }))
    }
  
    this.setState({list: updatedArray});
  }

  sortList(type) {
    var arrayCopy = this.state.list.slice();
    var arrayCopy = _.sortBy(arrayCopy, type === 'description' ? 'description' : 'quantity');

    this.setState({
      list: arrayCopy
    })
  }

  toggleDoneState(itemId) {

    var arrayCopy = this.state.list.slice();
    var updatedArray = arrayCopy.map((item) => {
      if (item.id === itemId) {
        item.completed = !item.completed;
      }
      return item;
    })
    this.setState({list: updatedArray});
  }

  render () {
    return (
      <div>
        <h2>Add grocery</h2>
        <AddGrocery callback={ this.updateList.bind(this) } />
        <h2>Shopping List</h2>
        <GroceryList sortList={this.sortList.bind(this)} groceries={ this.state.list } completeCallback={this.toggleDoneState.bind(this)} />
      </div>);
  }
}

ReactDOM.render(<App groceries={data.groceryList} />, document.getElementById('app'));