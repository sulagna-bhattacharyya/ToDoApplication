import React, { Component } from 'react';
import './App.css';
import Addtolist from './Addtolist';
import Todolist from './Todolist';
import ReactDOM from 'react-dom';

class App extends Component {
  constructor(props){
    super(props)
    this.state={elements:[],s:""};
  }
  add=()=>{
    this.setState((curr)=>{return{elements:curr.elements.concat(curr.s)};},
    ()=>{console.log(this.state.elements,this.state.s)});
  }
  remove=(index)=>{
    console.log(index);
    let left=this.state.elements.slice(0,index);
    let right=this.state.elements.slice(index+1);
    this.setState({elements:left.concat(right)});
  }
  input=(event)=>{
      this.setState({s:event.target.value});
  }
  render() {
    return (<div>
      <Addtolist data={this.input} change={this.add} />
      <Todolist delete={this.remove} name={this.state.elements} />
    </div>
    
    );
  }
}

export default App;
ReactDOM.render(<App/>,document.getElementById("root"));

