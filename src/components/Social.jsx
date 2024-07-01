import githubIcon from '../assets/icons8-github-64.png';
import emailIcon from '../assets/icons8-email-50.png';
import linkedInIcon from '../assets/icons8-linkedin-50.png';



const Social = () => {
    return (
        <div className="flex flex-row gap-10 justify-center pb-10">
            <a
                href="https://github.com/ashleymckellar"
                rel="noopener noreferrer"
            >
                <img
                            src={githubIcon}
                            alt="GitHub"
                            className="bg-lilac size-12"
                        />
                   
                    
               
            </a>

            <a href="mailto:ashley.l.mckellar@gmail.com" className="emailLink">
            <img
                            src={emailIcon}
                            alt="Email"
                            className="bg-lilac size-15"
                        />
            </a>

            <a
                href="https://linkedin.com/in/ashley-mckellar"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img
                            src={linkedInIcon}
                            alt="LinkedIn"
                            className="bg-lilac size-15"
                        />
            </a>
        </div>
    );
};

export default Social;
