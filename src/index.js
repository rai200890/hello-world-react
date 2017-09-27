import React from "react"
import ReactDOM from "react-dom"
//import UserList from "./components/user"
import StatefulButton from "./components/button"

// ReactDOM.render(
//     <UserList data-url="http://localhost:5000/users"/>,
//     document.getElementById("content")
// )

ReactDOM.render(
    <StatefulButton name="Botão"/>,
    document.getElementById("button")
)
