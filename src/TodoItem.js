import React, {Component} from "react";

export default class TodoItem extends Component{
    render(){
        console.log(this.props)
        return (
            <li style={{ display:'flex', justifyContent:'space-between'}}>
                {this.props.index} -
                {this.props.title}
                <div className="btn-group">
                    <button onClick={this.props.remove}>x</button>
                    <button onClick={this.props.doneTodo}>done</button>
                </div>
            </li>
        )
    }
}

















// import React, { Component } from "react";

// export default class TodoItem extends Component{

//     render(){
//         console.log(this.props)

//         return(
//                 <li style={{'background-color':'pink',color:'black',display:'flex',justifyContent:'space-between'}}>
//                     <div style={{justifyContent:'flex-start'}}>
//                     <span style={{margin:'0 5px 0 0'}}>{this.props.index}</span>
//                     {this.props.title}
//                     </div>

//                     <div style={{justifyContent:'flex-end'}}>
//                         <button onClick={this.props.remove}>X</button>
//                         <button onClick={this.props.doneTodo}>Done</button>
//                     </div>

//                 </li>
//         )
//     }
// }