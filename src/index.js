import React from "react"
import ReactDOM from "react-dom"
import HelloWorld from "./components/hello-world"


ReactDOM.render(
    (<HelloWorld id="angular" data-framework-name="Angular.js"/>),
    document.getElementById("content")
)
