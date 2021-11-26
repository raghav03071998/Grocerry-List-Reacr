import { React, Component } from "react";
class Button extends Component
{
    render() {
        return (
             <h1>{this.props.title}</h1>
        );
    }
}
export default Button