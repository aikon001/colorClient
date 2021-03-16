import React, {  } from 'react';
import './App.css';
import ListC from './components/ListOfColors'
import store from "./Redux/store";
import { connect } from 'react-redux'

import CustomColor from './components/colorpicker';

class App extends React.Component {

  
  // constructor(props) {
  //   super(props)

  //   store.subscribe(()=>{
  //     console.log(store.getState())
  //   })

  // }

  render(){
    return(
    
      <div className="App">
        <div className="App-header">
          <CustomColor selected={store.getState()} />
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
