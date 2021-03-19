import React, {  } from 'react';
import './App.css';
import ListC from './components/ListOfColors'
import store from "./Redux/store";
import { connect } from 'react-redux'

import CustomInsert from './components/InsertForm';
import CustomPicker from './components/customPicker';

class App extends React.Component {

  
   constructor(props) {
     super(props)

  //   store.subscribe(()=>{
  //     console.log(store.getState())
  //   })

   }

  render(){
    return(
    
      <div className="App">
        <div className="App-header">
          <CustomInsert />
          <CustomPicker selected={store.getState()} />
          {store.getState()}
          <ListC />
        </div>
      </div>
    
    )
  }
  
}


const mapStateToProps = (state)=>{
  return state
}

export default connect(
   mapStateToProps,
   null
)(App)
