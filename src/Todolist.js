import React, { Component } from 'react';
import Todoitem from './Todoitem.js';
class Todolist extends Component{
    render(){
        return(
            <div>
                {
                    this.props.name.map((element,index)=><Todoitem remove={this.props.delete} element={element} index={index} />)
                }
            </div>
        );
    }
}
export default Todolist;