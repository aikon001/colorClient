// Let's import React, our styles and React Async
import React from 'react'
import '../App.css'
import { connect } from 'react-redux'
import { Color, colorList } from '../Redux/actions/handler'
import axios from 'axios'
import { Button, ButtonGroup } from '@material-ui/core'
import { selectColor } from '../Redux/actions/actions'
import store from '../Redux/store'

// component
class Listc extends React.Component <any,colorList>{

  constructor(props) {
    super(props)
    this.state = {
      colors: [] as Color[]
    }
  }


  componentDidUpdate(){
    axios.get(`https://tylegroup.com/colors`)
      .then(res => {
        const data = res.data;
        this.setState(data);
      })
  }

  handleDelete(id) {
    axios.delete(`https://tylegroup.com/colors/`+id)
    .then(function (response){
      console.log(response)
    })
  }

  render() {

    return (
      <div> 
      <div>
        <h2>React - All the colors</h2>
      </div>
      <div className="acaso">
        {this.state.colors.map(color => (
          <ButtonGroup>
          <Button key={`color${color.id}`} variant="contained" onClick={() => store.dispatch(selectColor("#"+color.hexadecimal))}>
              {color.name} (#{color.hexadecimal} = {color.r}  {color.g}  {color.b})
                            </Button>
          <Button key={color.id} variant="contained" color="secondary" onClick={()=>this.handleDelete(color.id)}>
              Delete
          </Button>
        </ButtonGroup>
        ))}
      </div>
  
    </div>
    );
  }
}

const mapStateToProps = (state)=>{

  return state
}

export default connect(
   mapStateToProps,
   null
)(Listc)
