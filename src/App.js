import React from 'react';
import './App.css';
import { deleteElm } from './redux/actions/index'
import { connect } from 'react-redux'
  
function App({data, deleteItem}) {
 
  console.log(data)
  return (
    <div className="App">
      {data.map((elm, i) => (
        <div 
          key={i} 
          onClick={() => deleteItem(elm)}
          style={{cursor: 'pointer'}}
        >
          <h3>name: {elm}</h3>
        </div>
      ))}
    </div>
  );
}

const stateToProps = state => {
  return {
    data: state
  }
}

const deleteItemToProps = dispatch => {
  return {
    deleteItem: (id) => dispatch(deleteElm(id))
  }
}

// exported store, action to App.js

export default connect(stateToProps, deleteItemToProps)(App);
