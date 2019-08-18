import React, { Component } from 'react';
class Todoitem extends Component{
    render(){
        return(
            <li>{this.props.element}
            <button onClick={()=>this.props.remove(this.props.index)}>Delete</button></li>
        );
    }
}
export default Todoitem;