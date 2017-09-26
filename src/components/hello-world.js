import React from "react"

class HelloWorld extends React.Component {
  render() {
    return (<h1 {...this.props}>
      Hello <i>{this.props["data-framework-name"]}</i> world!!!
    </h1>)
  }
}

export default HelloWorld
