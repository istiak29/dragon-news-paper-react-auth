import { Outlet } from "react-router-dom";



const Root = () => {
    return (
        <div className=" mx-auto font-poppins border-2 ml-10 mr-10 mt-3">
            <Outlet></Outlet>
        </div>
    );
};

export default Root;