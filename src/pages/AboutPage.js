import "../css/aboutPage.css";

export default function AboutPage() {
    return (	
		<div className="aboutPageOuter">
			<section className="aboutPage">
				
				<section className="characterInformation">
					<div className="title">Character information</div>
					<div className="content">
						<div className="leftContent">
							<div>
								<span>Race: Human <img height="14px" src="/human-race-icon.svg" /></span>
								<span>Gender: Female <img height="14px" src="/female-gender-icon.svg" /></span>
								<span>Age: 24 </span>
							</div>
							<div>
								<span>Name: Magdalena Lisinska (Maggie Mou / Synes)</span>
								<span>Position: Manager @ Churros Box ApS</span>
							</div>
						</div>
						<div className="rightContent">
							<img src="/smallme-aboutme.svg" />
						</div>
					</div>
				</section>
				
				<section className="characterBiography">
					<div className="title">Character biography</div>
					<div className="content">
						<p>
							When I was 15 years old unexpectedly, I won a ticket to a Skrillex concert. I wasn’t into electronic music but as I enjoy trying new things, I decided to go. After the performance I was absolutely in love. The same day around 2-3 am I was researching on how to DJ and how to make electronic music. 
After finishing high school, I made the decision to move to Denmark and start an education in a Music and Theater Folk High school on the Electronic Music line. 
After one year of mastering skills in sound design and relevant artistic tools I continued the practice by myself. 
My great interest in art, design and creativity as well as the desire to stay in Denmark has motivated me to start an education in Multimedia Design at the Business Academy Aarhus. 
During my education I felt very passionate about the design challenges, but I was particularly fond of learning programming as it appeared to be an unique tool that could be used for a variety of projects – therefore I have chosen the Frontend Developer line for my third semester. 
I wish to learn more about 3D modelling as I’d like to implement it into my skill set. I wish to continue developing my design and programming skills. I enjoy everything that is virtual – gaming, digital audio workstations, artificial intelligence tools – and one day if possible – I will consider transcending digital. 
My native language is Polish, but as my mom comes from Ukraine, she taught me to speak Russian.
I acquired English language during my education in Poland and took education in Danish language (currently module 4).


						</p>
					</div>
				</section>
				
				<section className="backContent">
					<a href="/"><img src="backbutton-arrow.svg" /></a>
				</section>
				
			</section>
		</div>
    );
}
