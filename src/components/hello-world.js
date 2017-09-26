import React from "react"

class HelloWorld extends React.Component {
    render() {
        const style = {color: "blue", fontFamily: "Times New Roman" }
        return (
            <h1 {...this.props} style={style}>
            Hello <i>{this.props["data-framework-name"]}</i> world!!!
            </h1>
        )
    }
}

const HelloWorldStateless = (props) => {
    const style = {color: "blue", fontFamily: "Times New Roman" }
    return (
        <h1 {...props} style={style}>
        Hello <i>{props["data-framework-name"]}</i> world!!!
        </h1>
    )
}

export {HelloWorld, HelloWorldStateless}
