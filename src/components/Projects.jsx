import SidhuFarmsimg from '../assets/SidhuFarmsimg.png';
import DJBentley from '../assets/djbentleyv2.png';
import HotSauce from '../assets/HotSauceWorld.png';
import HotSauce2 from '../assets/hotsauceworldsignin.png'
import bII from '../assets/BIIthumbnail.png'

const Projects = () => {
    return (
        <div className="my-20 flex flex-col items-center" id="Projects">
            <h3 className="text-4xl text-center text-lilac">A Few Accomplishments</h3>
            <h2 className="text-2xl text-dark-grey px-4 py-10 text-center font-bold md:px-20">
                Explore some of my deployed apps by clicking the links below
            </h2>
            <div className="flex flex-wrap justify-center">
                <article className="flex flex-col items-center justify-center w-full max-w-2xl bg-white py-10 rounded-md shadow-lg bg-rosy m-4 p-6 md:m-10 md:p-10">
                    <a href="https://sidhu-farms1.vercel.app/" className="image"   target="_blank"
                                        rel="noopener noreferrer">
                        <img
                            src={SidhuFarmsimg}
                            alt=""
                            className="mx-auto w-full h-80 object-cover md:w-150"
                        />
                    </a>
                    <div className="py-10 text-center">
                        <h4 className="text-2xl text-dark-grey">Sidhu Farms</h4>
                        <p className="py-4 text-xl text-dark-grey">
                            I partnered with another developer and project
                            manager to build the Sidhu Farms static site using
                            React. My key contributions included developing the
                            crops component, which involved implementing
                            conditional rendering and media queries. I also
                            utilized Tailwind CSS to ensure the site was fully
                            responsive across various devices. (Work in
                            progress.)
                        </p>
                    </div>
                </article>
                <article className="flex flex-col items-center justify-center w-full max-w-2xl bg-white py-10 rounded-md shadow-lg bg-rosy m-4 p-6 md:m-10 md:p-10">
                    <a href="https://www.djbentleytaylor.com/"   target="_blank"
                                        rel="noopener noreferrer">
                        <img
                            src={DJBentley}
                            alt=""
                            className="mx-auto w-full h-80 object-cover md:w-150"
                        />
                    </a>
                    <div className="py-10 text-center">
                        <h4 className="text-2xl text-dark-grey">DJ Bentley Taylor</h4>
                        <p className="py-4 text-xl text-dark-grey">
                            I collaborated with three developers to build a new
                            React-based site for DJ Bentley Taylor, where I
                            implemented a MixCloud music player, EmailJS-powered
                            contact form with a React modal, and integrated the
                            MixCloud API for his bio information. I was
                            responsible for deploying the site as a static one
                            via Render.
                        </p>
                    </div>
                </article>
                <article className="flex flex-col items-center justify-center w-full max-w-2xl bg-white py-10 rounded-md shadow-lg bg-rosy m-4 p-6 md:m-10 md:p-10">
                    <a href="https://brain-integration-institute.onrender.com/"   target="_blank"
                                        rel="noopener noreferrer">
                        <img
                            src={bII}
                            alt=""
                            className="mx-auto w-full h-80 object-cover md:w-150"
                        />
                    </a>
                    <div className="py-10 text-center">
                        <h4 className="text-2xl text-dark-grey">Brain Integration Institute</h4>
                        <p className="py-4 text-xl text-dark-grey">
                        This full-stack web application, built for a client with the MERN stack (MongoDB/Mongoose, Express, React, Node.js), offers robust features like secure authentication with Auth0, file hosting via Cloudinary, and payment integration using Stripe. It includes email push notifications powered by Nodemailer, an admin panel with real-time notifications, user notifications, and a custom timed testing platform. Deployed on Render with a TLS certificate, the app delivers a seamless and secure user experience with dynamic data handling, file uploads, and advanced functionality.
                        </p>
                    </div>
                </article>
            </div>
        </div>
    );
};

export default Projects;

