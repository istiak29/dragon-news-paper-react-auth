import { FaFacebook, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import q1 from '../../../assets/qZone1.png'
import q2 from '../../../assets/qZone2.png'
import q3 from '../../../assets/qZone3.png'

const RightSightNav = () => {
    return (
        <>
            <div className="p-3 space-y-2 mb-6">
                <h2 className="text-xl font-bold mb-2">Log in with</h2>
                <button className="btn btn-outline text-blue-400 font-normal w-full">
                    <FaGoogle></FaGoogle>
                    Login with Google
                </button>

                <button className="btn btn-outline font-normal w-full">
                    <FaGithub></FaGithub>
                    Login with Github
                </button>
            </div>

            {/*Find Us */}
            <div className="p-3 mb-6">
                <h2 className="text-xl font-bold mb-2">Find Us on</h2>
                <a className="p-4 flex gap-2 items-center border-2 border-b-0 rounded-t-md" href="">
                    <FaFacebook></FaFacebook>Facebook
                </a>
                <a className="p-4 flex gap-2 items-center border-2 border-b-0 " href="">
                    <FaTwitter></FaTwitter>Twitter
                </a>
                <a className="p-4 flex gap-2 items-center border-2 rounded-b-md" href="">
                    <FaInstagram></FaInstagram>Instagram
                </a>
            </div>

            {/* Q Zone */}
            <div className="p-3 bg-gray-100">
                <h2 className="text-xl font-bold">Q Zone</h2>
                <img src={q1} alt="" />
                <img src={q2} alt="" />
                <img src={q3} alt="" />
            </div>

        </>
    );
};

export default RightSightNav;