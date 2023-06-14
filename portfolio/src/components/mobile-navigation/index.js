import close from '../../assets/close-menu.png';
import resume from '../../assets/resume.pdf'
import './style.css';

document.addEventListener('click', (event) => {
    console.log(event.target);
    if (event.target !== document.querySelector(".dropmenu") && event.target !== document.querySelector(".dropmenu-icon")){
        document.querySelector(".dropmenu").style.width = "0%";
        document.querySelector(".closemenu").style.visibility = "hidden";
        document.querySelector(".mobile-nav").style.display = "none";
        document.querySelector("body").setAttribute("scroll", "yes");
        document.querySelector("body").style.overflow = "scroll";
    }
})

const MobileNavigation = () => {
    return (
    <div className='dropmenu'>
        <button className="closemenu"type="button">
          <img src={close} alt="close menu" />
        </button>
        <div className="mobile-nav-bar">
                <ul className="mobile-nav">
                    <li className='mobile-nav-link'><a href="#about">About</a></li>
                    <li className="mobile-nav-link"><a href="#projects">Projects</a></li>
                    <li className="mobile-nav-link"><a href="#contact">Contact</a></li>
                    <li className="mobile-nav-link"><a href={resume} target="_blank" rel="noreferrer">Resume</a></li>
                </ul>
            </div>
      </div>
    );
}

export default MobileNavigation;