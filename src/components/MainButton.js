import { Component } from 'react';

import "../css/mainButton.css";

export class MainButton extends Component {
  render() {
    return(
		<a href={this.props.to} className="mainButton"><img src="/pixel-button.svg" /><div className="textContainer"><span>{this.props.text}</span></div></a>
    )
  }
}
