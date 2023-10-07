import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import DataCard from "./DataCard";

const Home = () => {
    const cardsData = useLoaderData()
    

    return (
        <div>
            <Banner></Banner>
            <DataCard cardsData={cardsData}></DataCard>
        </div>  
    );
};

export default Home;