import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import close from '../../assets/close-menu.png';
import './index.css';

document.addEventListener('click', (event) => {
    console.log(event.target);
    if (event.target !== document.querySelector(".dropmenu") && event.target !== document.querySelector(".dropmenu-icon")){
        document.querySelector(".dropmenu").style.width = "0%";
        document.querySelector(".closemenu").style.visibility = "hidden";
    }
})

const MobileNavigation = () => {
    return (
    <div className='dropmenu'>
        <button className="closemenu"type="button">
          <img src={close} alt="close menu" />
        </button>

        <Navbar className="mobile-nav-bar" bg="dark" variant="dark" >
                <Nav className="mobile-nav">
                    <Nav.Link className="mobile-nav-link" href="about">About</Nav.Link>
                    <Nav.Link className="mobile-nav-link" href="projects">Projects</Nav.Link>
                    <Nav.Link className="mobile-nav-link" href="contact">Contact</Nav.Link>
                    <Nav.Link className="mobile-nav-link" href="contact">Resume</Nav.Link>
                </Nav>
            </Navbar>
      </div>
    );
}

export default MobileNavigation;