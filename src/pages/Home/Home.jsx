import Header from "../shared/Header/Header";
import LeftSideNav from "../shared/LeftSideNav/LeftSideNav";
import Navbar from "../shared/Navbar/Navbar";
import RightSightNav from "../shared/RightSideNav/RightSightNav";
import BreakingNews from "./BreakingNews";


const Home = () => {
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

                <div className="col-span-2 border-2">
                    <h3 className="text-3xl">Main news</h3>
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