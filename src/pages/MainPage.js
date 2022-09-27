import { MainButton } from "../components/MainButton";

import "../css/mainPage.css";

export default function MainPage() {
    return (
        <section className="mainPage">
			<section className="left">
				<MainButton text="About" to="#/about" />
				<MainButton text="Skills" to="#/stats" />
			</section>
			<section className="middle">
				<img src="/pixelme-headphones.svg" className="pixelMe" />
			</section>
			<section className="right">
				<MainButton text="Projects" to="#/projects" />
				<MainButton text="Contact" to="#/contact" />				
			</section>
        </section>
    );
}