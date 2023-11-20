import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {


    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('categories.json')
            .then(response => response.json())
            .then(data => setCategories(data))
    }, [])


    return (
        <div className="space-y-7">
            <h2 className="text-xl font-bold">All Categories</h2>
            {
                categories.map(category => <Link
                    key={category.id}
                    className="block text-lg font-semibold pl-3 "
                    to={`/category/${category.id}`}
                >
                    { category.name}</Link>)
            }
        </div>
    );
};

export default LeftSideNav;