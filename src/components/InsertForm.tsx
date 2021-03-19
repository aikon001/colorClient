import React from 'react'
import { AddFilter } from '../Redux/actions/handler'
import store from '../Redux/store'
import axios from 'axios'


class FormNome extends React.Component <any,AddFilter>
{

    constructor(props) {
        super(props);
        this.state = {
            name:"",
            selected: ""
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)

    }
    handleChange(e){
        this.setState({name: e.target.value,selected: store.getState()});
    }

    handleSubmit = () =>{
 
        axios.post(`https://tylegroup.com/colors`,
                    {
                        name:this.state.name,
                        hexadecimal:this.state.selected.replace('#','')
                    }
        )
        .then(function (response){
            console.log(response)
        })
        // .then(res => {
        //   const data = res.data;
        //   this.setState(data);
        // })
    }

    render() {
        return(
            <div>
                <input type="text" value={this.state.name} onChange={this.handleChange} />
                <input type="submit" onClick={this.handleSubmit} value="Submit" />
                {this.state.name}
                {this.state.selected}
            </div>
    )
  }
  
}

export default FormNome