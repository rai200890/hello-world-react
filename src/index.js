import React from "react"
import ReactDOM from "react-dom"

import UserList from "./components/user"

ReactDOM.render(
    <UserList data-url="http://localhost:5000/users"/>,
    document.getElementById("content")
)
