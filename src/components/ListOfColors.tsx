// Let's import React, our styles and React Async
import React from 'react'
import '../App.css'
import { connect } from 'react-redux'
import { Color } from '../Redux/actions/handler'
import axios from 'axios'
import { Button, ButtonGroup } from '@material-ui/core'
import { selectColor } from '../Redux/actions/actions'
import store from '../Redux/store'

// component
class Listc extends React.Component {

  state = {
    colors: [] as Color[]
  }

  componentDidMount() {
    axios.get(`http://localhost:8080/colors`)
      .then(res => {
        const data = res.data;
        this.setState(data);
      })
  }

  render() {
    return (
      <div>
      <div>
        <h2>React - All the colors</h2>
      </div>
      <div>
        {this.state.colors.map(color => (
          <ButtonGroup>
          <Button key={color.id} variant="contained" onClick={() => store.dispatch(selectColor("#"+color.hexadecimal))}>
              {color.name} (#{color.hexadecimal} = {color.r}  {color.g}  {color.b})
                            </Button>
          <Button key={`delete-${color.id}`} variant="contained" color="secondary">
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
