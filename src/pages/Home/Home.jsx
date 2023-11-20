import { useLoaderData } from "react-router-dom";
import Header from "../shared/Header/Header";
import LeftSideNav from "../shared/LeftSideNav/LeftSideNav";
import Navbar from "../shared/Navbar/Navbar";
import RightSightNav from "../shared/RightSideNav/RightSightNav";
import BreakingNews from "./BreakingNews";
import NewsCard from "./NewsCard";


const Home = () => {

    const news = useLoaderData()
    // console.log(news)

    return (
        <div>
            <Header></Header>
            

            {/* breaking News */}
            <BreakingNews></BreakingNews>

            <Navbar></Navbar>
            

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                
                {/* left side */}
                <div className="border-2">
                    <LeftSideNav></LeftSideNav>
                </div>

                {/* News container */}
                <div className="col-span-2 border-2">
                    <h2 className="font-bold text-xl mb-5">Dragon News Home</h2>
                    
                    {
                        news.map(aNews => <NewsCard
                            key={aNews._id}
                            news={aNews}
                        ></NewsCard>)
                    }
                </div>

                {/* right side */}
                <div className="border-2">
                    <RightSightNav></RightSightNav>
                </div>
            </div>
        </div>
    );
};

export default Home;