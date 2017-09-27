import React from "react"

function Button(props){
    return (<button onClick={props.handler}>({props.counter})</button>)
}

class StatefulButton extends React.Component{

    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
        this.state = {
            counter: 0
        }
    }

    handleClick() {
        this.setState({counter: this.state.counter+1})
    }

    render(){
        return <Button counter={this.state.counter} handler={this.handleClick}/>
    }

}

export default StatefulButton
