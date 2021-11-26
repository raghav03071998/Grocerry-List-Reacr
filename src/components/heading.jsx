import { React, Component } from "react";
import '../App.css';
class Heading extends Component
{
    render() {
        return (
             <h1 className ="heading">{this.props.heading}</h1>
        );
    }
}
export default Heading