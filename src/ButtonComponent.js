import React, { Component } from 'react';

class ButtonComponent extends Component
{
    constructor(props){
        super(props);
        this.state={
            //App에서 뿌려주는 value값을 컴포넌트에서 props를 이용하여서 출력
            value:this.props.value
        };
        this.handleClickP=this.handleClickP.bind(this);
        this.handleClickM=this.handleClickM.bind(this);
    }
    handleClickP(){
        this.setState({
            value:this.state.value+1
        }); 
    }
    handleClickM(){
        this.setState({
            value:this.state.value-1
        }); 
    }
    
    render(){
        return(
            <div>
        <h1>{this.state.value}</h1>
        <button onClick={this.handleClickP}> + </button>
        <button onClick={this.handleClickM}> - </button>
        </div>
        );
    }
}

export default ButtonComponent;