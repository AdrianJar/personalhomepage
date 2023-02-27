import { Container } from "../../common/styled"
import Header from "./Header"
import Skills from "./Skills";
import { myData } from "./data";
import Portfolio from "./Portfolio";
import Footer from "./Footer";

const PersonalHomepage = () => {
    return (
        <Container>
            <Header />
            <Skills title="My skillset includes 🛠️" skills={myData.currentSkills} />
            <Skills title="What I want to learn next 🚀" skills={myData.skillsToLearn} />
            <Portfolio />
            <Footer />
        </Container>
    );
};

export default PersonalHomepage