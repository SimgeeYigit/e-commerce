import AboutClients from "../components/About/AboutClients";
import AboutContent from "../components/About/AboutContent";
import AboutHero from "../components/About/AboutHero";
import AboutStats from "../components/About/AboutStats";
import AboutTeam from "../components/About/AboutTeam";
import AboutTestimonials from "../components/About/AboutTestimonials";
import AboutVideo from "../components/About/AboutVideo";
import Footer from "../layout/Footer";
import Header from "../layout/Header";

function AboutPage() {
    return (
        <div>
            <Header />
            <AboutHero />
            <AboutContent />
            <AboutStats />
            <AboutVideo />
            <AboutTeam />
            <AboutClients />
            <AboutTestimonials />
            <Footer padding="px-[2.8125rem] md:px-[9.876rem]" />
        </div>
    )
}

export default AboutPage;
