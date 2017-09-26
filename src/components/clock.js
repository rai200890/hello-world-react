import React from "react"
import ReactDOM from "react-dom"


const DigitalDisplay = (props) => {
    return (<div> {props["data-current-time"]} </div>)
}

class DigitalClock extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            currentTime: (new Date()).toLocaleString()
        }
    }

    componentWillMount() {
        this.updateClock()
    }

    updateClock(){
        setInterval(() => {
            this.setState({
                currentTime: (new Date()).toLocaleString()
            })
        }, 1000)
    }

    render(){
        return (<DigitalDisplay data-current-time={this.state.currentTime}/>)
    }
}


export {DigitalClock}
