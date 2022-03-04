import React, {  Component } from "react";
class Header extends Component{
constructor(props){
    super(props);
    this.state={
        data:"wwww.javatpoint.com"
    }

this.handleEvent=this.handleEvent.bind(this);
}
handleEvent(){
    console.log(this.props,this.state);
}
render(){ 
    let el=React.createElement('div',{className:'child'},"hello zahra");
    let parent=React.createElement('div',{className:'parent'},el)
    return(
       parent,

        <div onClick={this.handleEvent}>this is my componrnt</div>
    );
}
}
export const _Header=()=>{
    return <div className={'parent'}>
        <div className={'child'}>
            hellloooo
        </div>

    </div>
}
export default Header;