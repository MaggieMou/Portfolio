import { ProjectButton } from "../components/ProjectButton";
import { projectData } from "../data/ProjectData";

import "../css/projectPage.css";

export default function ProjectPage() {
	
	var userIsOnMainPage = true;
	var currentActiveProjectId = "";
	
	document.xx = projectData;
	
	function clickOnProject(e, id) {
		e.preventDefault();  // handling the click below, so stop going to default url "#"
		userIsOnMainPage = false;
		currentActiveProjectId = id;
		document.getElementById("projectMainPage").classList.add("disabled");
		document.getElementById(currentActiveProjectId).classList.remove("disabled");
	}
	
	function clickOnBack(e) {
		if (!userIsOnMainPage) {
			e.preventDefault();  // user has opened a project, so stop them from going to home @ "/", first go to main project page
			document.getElementById("projectMainPage").classList.remove("disabled");
			document.getElementById(currentActiveProjectId).classList.add("disabled");
			userIsOnMainPage = true;
		} else {
			// do nothing because user is on main page already and doing nothing will make them go to home @ "/"
		}
	}
	
	let generatedButtons = [];
	let generatedContents = [];
	
	for (let projectId in projectData) {
		
		let buttonTitle = projectData[projectId]["buttonTitle"];
		let contentTitle = projectData[projectId]["contentTitle"];
		let buttonSubtitle = projectData[projectId]["buttonSubtitle"];
		
		let contentImageHtml = {"__html": projectData[projectId]["contentImageHtml"]};
		let contentLinkHtml = {"__html": projectData[projectId]["contentLinkHtml"]};
		let contentTextHtml = {"__html": projectData[projectId]["contentTextHtml"]};
		
		generatedButtons.push(
			<ProjectButton text={buttonTitle} subtext={buttonSubtitle} onClick={clickOnProject} key={projectId} id={projectId} />
		);

		generatedContents.push(
			<div className="oneProject disabled" key={projectId} id={projectId}>
			
				<h2 className="contentTitle">&gt; {contentTitle}</h2>
				
				<div className="embedHolder" dangerouslySetInnerHTML={contentImageHtml}></div> {/* dangerous is ok here because we control our data source */}
				<div className="contentText" dangerouslySetInnerHTML={contentTextHtml}></div>
				<div className="linkHolder" dangerouslySetInnerHTML={contentLinkHtml}></div>
				
			</div>
		);

	}
	
    return (
		<div className="projectPageOuter">
			<section className="projectPage">
				
				<section className="characterProjects">
					<div className="title">Projects</div>
					<div className="content">
					
						<div className="allProjects" id="projectMainPage">
						
							{generatedButtons}
						
							<ProjectButton /> {/* empty button = unknown (future project) */} 
							<ProjectButton />
							<ProjectButton />
							<ProjectButton />
						
						</div>
						
						{generatedContents}
						
					</div>
				</section>
				
				<section className="back">
					<a href="/" onClick={clickOnBack}><img src="backbutton-arrow.svg" /></a>
				</section>
				
			</section>
		</div>
    );
}
