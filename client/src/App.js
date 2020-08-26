import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import InputTable from './component/input';
import { Table } from 'react-bootstrap';

class App extends React.Component {
  constructor(){
    super()
    this.state={
      data:null
    }
  }
  getData =async(numberS)=>{
    let {data}=  await axios.post('http://localhost:5000',{data:{numberS},headers: {
      'Content-Type': 'application/json'
      }})
    await this.setState({data})
  }
  render(){
    return (<div>
      <InputTable getData={this.getData}/>
     {this.state.data?<Table style={{width:'100%'}}>
     <tr>
     <th>Element</th>
   </tr>
 
   {console.log(this.state.data.data)}
   {this.state.data.data.map(elem=> 
    <tr>
    <td onClick={()=>alert(`${elem.frequency} is the frequency  of ${elem.elem}`)}>{console.log(elem)}{elem.elem}</td>
    </tr>
    )}
  
   
 </Table>:null}
      </div>)
  }
}

export default App;
