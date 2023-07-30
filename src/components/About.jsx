import { Outlet } from "react-router-dom";
import ProfileClass from "./ProfileClass";
import Profile from "./Profile";

const About = () => {

    return(
        <>
            <h1>About page</h1>
            <p>No info right now but it  will get updated</p>
            {/* <Outlet/> */}
            <Profile/>
            <ProfileClass name = {"Vishal Ghag Props"}/>
        </>
    )
}

export default About;