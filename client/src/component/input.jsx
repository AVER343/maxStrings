import React from 'react'
import { useState } from 'react'
import {InputGroup,FormControl, Button} from 'react-bootstrap'
class InputTable extends React.Component {
    constructor(props){
        super(props)
        this.state={
            numberS:0
        }
    }
   
   render(){
    return(<InputGroup size="lg">
            <InputGroup.Prepend>
            <InputGroup.Text id="inputGroup-sizing-lg">Numbers of Strings</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl value={this.state.numberS} onChange={(event)=>event.target.value>0?this.setState({numberS:event.target.value}):null} aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
            <Button onClick={()=>this.props.getData(this.state.numberS)} >Get Results</Button>
        </InputGroup>)
   }
}
export default InputTable
