import { Outlet } from "react-router-dom";
import ProfileClass from "./ProfileClass";
import Profile from "./Profile";
import profile from '../../images/profile.jpeg'

const About = () => {
  return (
    <>
      {/*         
            <h1>About page</h1>
            <p>No info right now but it  will get updated</p>
            {/* <Outlet/> */}
      {/* <Profile/>
            <ProfileClass name = {"Vishal Ghag Props"}/> */}

      <section class="flex items-center py-10 bg-stone-100 xl:h-screen font-poppins dark:bg-gray-800 my-40 ">
        <div class="justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
          <div class="flex flex-wrap ">
            <div class="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
              <div class="relative">
                <img
                  src= {profile}
                  alt=""
                  class="relative z-40 object-cover w-full h-96 lg:rounded-tr-[80px] lg:rounded-bl-[80px] rounded"
                />
                <div class="absolute z-10 hidden w-full h-full bg-blue-400 rounded-bl-[80px] rounded -bottom-6 right-6 lg:block"></div>
                {/* <div class="absolute z-50 text-blue-400 transform -translate-y-1/2 cursor-pointer top-1/2 left-[46%] hover:text-blue-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="w-14 h-14 bi bi-play-circle-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z"></path>
                  </svg>
                </div> */}
              </div>
            </div>
            <div class="w-full px-4 mb-10 lg:w-1/2 lg:mb-0 ">
              <div class="relative">
                <h1 class="absolute -top-20   left-0 text-[20px] lg:text-[100px] text-gray-900 font-bold  dark:text-gray-200 opacity-5 md:block hidden">
                  About Us
                </h1>
                <h1 class="pl-2 text-3xl font-bold border-l-8 border-blue-400 md:text-5xl dark:text-white">
                  Welcome to our site From Vishal Ghag Front-End Developer
                </h1>
              </div>
              <p class="mt-6 mb-10 text-base leading-7 text-gray-500 dark:text-gray-400">
                I am Vishal Ghag, a dedicated professional with a successful
                track record in the field of Front-End Development. I have
                proudly served as a part of the Optipheonix team for 10 months,
                during which I had the opportunity to deliver over 30+ projects.
                These projects have not only achieved great success but also
                generated substantial revenue for our esteemed clients. I am
                currently seeking new opportunities in the exciting realm of
                React.js development. With my strong background in Front-End
                Development and a proven track record of delivering successful
                projects for renowned clients, I am eager to apply my skills and
                expertise to contribute to innovative React.js projects.
              </p>
              <a
                href="https://www.linkedin.com/in/vishal-ghag-020b2a198/"
                class="px-4 py-3 text-gray-50 transition-all transform bg-blue-400 rounded-[80px] hover:bg-blue-500 dark:hover:text-gray-100 dark:text-gray-100 "
              >
                linkedin
              </a>
              <a
                href="https://github.com/vishalghag"
                class="px-4 py-3 m-2 text-gray-50 transition-all transform bg-blue-400 rounded-[80px] hover:bg-blue-500 dark:hover:text-gray-100 dark:text-gray-100 "
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
