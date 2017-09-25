import React from "react"
import ReactDOM from "react-dom"

class HelloWorld extends React.Component {
    render() {
        return (<h1>Hello, {this.props["data-name"]}!</h1>)
    }
}

let frameworks = [{
    id: "ember",
    ["data-name"]: "Ember.js",
    title: "A framework for creating ambitious web applications."
},
{
    id: "backbone",
    ["data-name"]: "Backbone.js",
    title: "Backbone.js gives structure to web applications..."
},
{
    id: "angular",
    ["data-name"]: "Angular.js",
    title: "Superheroic JavaScript MVW Framework"
}]

let elements = frameworks.map(framework => React.createElement(HelloWorld, framework, framework))

ReactDOM.render(
    React.createElement("div", null, ...elements),
    document.getElementById("content")
)
