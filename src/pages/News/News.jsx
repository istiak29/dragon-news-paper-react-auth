import Header from "../shared/Header/Header";
import Navbar from "../shared/Navbar/Navbar";
import RightSightNav from "../shared/RightSideNav/RightSightNav";

const News = () => {
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <h2 className="text-xl font-bold">Dragon News</h2>
            {/* main news */}
            <div className="grid grid-cols-4">

                <div className="col-span-3">

                </div>

                {/* right side nav */}
                <div>
                    <RightSightNav></RightSightNav>
                </div>
            </div>
        </div>
    );
};

export default News;