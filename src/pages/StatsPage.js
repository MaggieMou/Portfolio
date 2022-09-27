import { ModalWindow } from "../components/ModalWindow";

import "../css/statsPage.css";

export default function StatsPage() {
    return (
		<ModalWindow className="statsPage" title="Character stats">
		
			<div className="contentListOuter">
			
				<h2>Skills:</h2>						
						
				<div className="contentList">
					
					<div>Adobe Photoshop</div>
					<div>Adobe Illustrator</div>
					<div>Adobe Premiere Pro</div>
					<div>Adobe XD</div>
					<div>Ableton</div>
					<div>HTML/CSS/JavaScript</div>
					<div>SOME</div>
					<div>Management experience</div>
					<div>Teamwork</div>
				
				</div>						
				
				<div className="contentList">
					
					<div className="contentListSingleColumn">
					
						<h2>Education:</h2>
						
						<div>2021 - now:</div>
						<div>Multimedia Design</div>
						<div>Frontend Development</div>
						<div>Business Academy Aarhus</div>
						
					</div>
					
					<div className="contentListSingleColumn">
					
						<h2>Languages:</h2>
						
						<div>English</div>
						<div>Danish</div>
						<div>Russian</div>
						<div>Polish (native)</div>
						
					</div>
				
				</div>
				
			</div>
		
		</ModalWindow>
    );
}
