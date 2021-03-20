import { useEffect, useState } from 'react'
import { HexColorPicker } from 'react-colorful'
import { useDispatch, useSelector } from 'react-redux'
import { selectColor } from '../Redux/actions/actions'
import { debounce } from '@material-ui/core'

const CustomPicker = ({selected}) =>
{
    const dispatch = useDispatch()
    const [color,setColor] = useState("")
    var selector = useSelector(state=>color)
    const handler = () =>{
        dispatch(selectColor(selector))
    }
    const debounceTest = debounce(handler,10)
    
    useEffect(()=>{
        debounceTest()
    },[selector])

    return(
        <HexColorPicker color={selected} onChange={setColor} />
    )
}

export default CustomPicker