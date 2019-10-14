import React from "react"
import Test from "../components/test"
import { Link } from "gatsby"
// import Outer from "./outer"
// import "../source/styles.css"

if (typeof window !== "undefined") {
	// eslint-disable-next-line global-require
	require("smooth-scroll")('a[href*="#"]')
}

const ListLink = props => (
    <li>
        <Link to={props.to}>{props.children}</Link>
    </li>
)

export default () => (
<Test></Test>
)

