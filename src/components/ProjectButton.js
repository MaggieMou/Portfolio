import { Component } from 'react';

import "../css/projectButton.css";

export class ProjectButton extends Component {
  render() {
	  if (this.props.onClick === undefined) {
		return(
		  <div className="projectButton"><img src="/project-box-unknown.svg" /></div>
		)
	  } else {
	    return(
		  <a href="#" onClick={(e) => this.props.onClick(e, this.props.id)} className="projectButton"><img src="/project-box.svg" /><div className="textContainer"><h2>{this.props.text}</h2><h3>[{this.props.subtext}]</h3></div></a>
		)
	  }
  }
}
