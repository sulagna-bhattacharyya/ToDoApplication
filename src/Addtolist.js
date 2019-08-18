import React, { Component } from 'react';
class Addtolist extends Component{
    render(){
        return(<div>
            <input type="text" onChange={this.props.data}/>
            <button onClick={this.props.change}>Add to List</button>
        </div>);
    }
}
export default Addtolist;