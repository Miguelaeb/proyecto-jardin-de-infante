import { Header } from "../components/HomeComponents/Header";
import { Highlight } from "../components/HomeComponents/Highlight";
import { OurServices } from "../components/HomeComponents/OurServices";
import { SpaceToLearn } from "../components/HomeComponents/SpaceToLearn";
import { MoreInfo } from "../components/HomeComponents/MoreInfo";
import { Ratings } from "../components/HomeComponents/Ratings";
import { Numbers } from "../components/HomeComponents/Numbers";
import { WhyUs } from "../components/HomeComponents/WhyUs";
import { Methodologies } from "../components/HomeComponents/Methodologies";

export const Home = () => {
    return (
        <div>
            <Header />
            <Highlight />
            <OurServices />
            <SpaceToLearn />
            <MoreInfo />
            <Methodologies />
            <WhyUs />
            <Numbers />
            <Ratings />
        </div>
    );
};
