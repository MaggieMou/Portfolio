import { ModalWindow } from "../components/ModalWindow";

import "../css/contactPage.css";

export default function ContactPage() {
	
	return (
		
		<ModalWindow className="contactPage" title="Contact me">
		
			{/* everything inside this custom component is passed to it as this.props.children */}
		
			<div className="contentListOuter">
			
				<div>
					<h2>Socials:</h2>
					<div className="contentList">
						<div>Linked In: <a href="https://www.linkedin.com/in/magdalena-lisi%C5%84ska-616ab221b/">Magdalena Lisinska</a></div>
					</div>	
				</div>	
				
				<div>
					<h2>Old-school:</h2>
					<div className="contentList">
						<div>Email: <a href="mailto:mag.lisinska@gmail.com">mag.lisinska@gmail.com</a> </div>
						<div>Phone: +45 29914341</div>
					</div>	
				</div>

			</div>
			
		</ModalWindow>
		
	);
}
