import React, { Component } from 'react'

function allStorage() {

  var values = [],
      keys = Object.keys(localStorage),
      i = keys.length;

  while ( i-- ) {
      values.push( localStorage.getItem(keys[i]) );
  }

  return values;
}
var numberOfChildren = document.getElementsByTagName("li");

class TodoItems extends Component {
  createTasks = item => {
    return (
      <li key={item.key} onClick={() => this.props.deleteItem(item.key)}>
        {localStorage.getItem(Object.keys(numberOfChildren))}
      </li>
    )
  }
  
  render() {
    const todoEntries = this.props.entries
    const listItems = allStorage().map(this.createTasks);
    //const listItems = todoEntries.map(this.createTasks)
    return <ul className="theList">{listItems}</ul>
  }
}

export default TodoItems
