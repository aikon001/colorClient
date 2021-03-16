import React from "react";
import { useEffect, useState } from "react";
import { HexColorPicker } from "react-colorful";
import { connect } from "react-redux";
import { selectColor } from "../Redux/actions/actions"
import store from "../Redux/store"


interface Props {
    selected
}


const CustomColor: React.FC<Props> = ({ selected }) => {

    const [color,setColor] = useState(selected);

    useEffect(() => {

        store.dispatch(selectColor(color))

        
    }, [color]);


    return (

        <div>
        <HexColorPicker color={selected} onChange={setColor} />
        <p>{store.getState()}</p>
        </div>
    )

}

 const mapStateToProps = (state)=>{
   return state
 }

export default connect(
    mapStateToProps,
    null
)(CustomColor)

