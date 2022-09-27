import { Component } from 'react';

import "../css/modalWindow.css";

export class ModalWindow extends Component {
  render() {
	  return (
		<div className="modalWindowOuter">
			
			<section className={`modalWindow ${this.props.className}`}> {/* using `` to concatenate "modalWindow " and this.props.className */}
				
				<div className="topBar">
					<div className="left">
						<div className="left1"></div>
						<div className="left2"></div>
						<div className="left3"></div>
						<div className="left4"></div>
					</div>
					<div className="right">
						{this.props.title}
					</div>
				</div>
				
				<div className="contentOuter">
					<div className="content">
						{this.props.children}
					</div>
				</div>
				
				<div className="bottomBar">
					<div className="left"></div>
					<div className="right">
						<div className="right1"></div>
						<div className="right2"></div>
						<div className="right3"></div>
					</div>
				</div>
				
				<div className="back">
					<a href="/"><img src="backbutton-arrow.svg" /></a>
				</div>
				
			</section>
			
		</div>	
	  )
  }
}
