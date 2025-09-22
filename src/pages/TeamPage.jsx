import Team from "../components/Team/Team";
import TeamHeader from "../components/Team/TeamHeader";
import TeamHero from "../components/Team/TeamHero";
import TeamCta from "../components/Team/TeamCta";
import Footer from "../layout/Footer";
import Header from "../layout/Header";

function TeamPage() {
    return (
        <>
            <Header />
            <TeamHeader />
            <TeamHero />
            <Team />
            <TeamCta />
            <Footer padding='md:px-[180px] px-[42px]' />
        </>
    );
}
export default TeamPage;