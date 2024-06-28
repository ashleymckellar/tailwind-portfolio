import SidhuFarmsimg from '../assets/SidhuFarmsimg.png';
import DJBentley from '../assets/djbentleyv2.png';
import HotSauce from '../assets/HotSauceWorld.png';

const Projects = () => {
    return (
        <div
            className="py-20 my-20 flex flex-col items-center justify-center align-center "
            id="Projects"
        >
            <h3 className="flex flex-wrap justify-center text-4xl text-dark-grey">
                A Few Accomplishments
            </h3>
            <div className="flex flex-wrap justify-center">
                <article className="flex flex-col items-center justify-center w-full max-w-2xl bg-white py-10 rounded-md shadow-lg  bg-rosy m-10 p-10">
                    <a
                        href="https://sidhu-farms1.vercel.app/"
                        className="image"
                    >
                        <img
                            src={SidhuFarmsimg}
                            alt=""
                            className="mx-auto w-150 h-80 object-cover"
                        />
                    </a>
                    <div className="py-10 text-center">
                        <h4 className='text-2xl text-dark-grey'>Sidhu Farms</h4>
                        <p className="py-10 text-l text-dark-grey">
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
                <article className="flex flex-col items-center w-full max-w-2xl bg-white p-10 rounded-md shadow-lg bg-rosy m-10">
                    <a href="https://www.djbentleytaylor.com/">
                        <img
                            src={DJBentley}
                            alt=""
                            className="mx-auto w-150 h-80 object-cover"
                        />
                    </a>
                    <div className="py-10 text-center">
                        <h4 className="text-2xl text-dark-grey">DJ Bentley Taylor</h4>
                        <p className="py-10 text-l text-dark-grey">
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
                <article className="flex flex-col items-center w-full max-w-2xl bg-white p-10 m-10 rounded-md shadow-lg bg-rosy">
                    <a href="https://hotsauce-world.com">
                        <img
                            src={HotSauce}
                            alt=""
                            className="mx-auto w-150 h-80 object-cover"
                        />
                    </a>
                    <div className="py-10 text-center">
                        <h4 className='text-2xl text-dark-grey'>Hot Sauce World</h4>
                        <p className="py-10 text-l text-dark-grey">
                            Hot Sauce World is a hub for hot sauce enthusiasts.
                            This is a full stack application utilizing the
                            following stack: React, NodeJS, API built with
                            MongoDB, and authentication using Bcrypt and JWT.
                            This site has been deployed on Heroku with a custom
                            domain. It's also utilizing HTTPS using an SSL
                            certificate provided by Let's Encrypt.
                        </p>
                    </div>
                </article>
            </div>
        </div>
    );
};

export default Projects;
