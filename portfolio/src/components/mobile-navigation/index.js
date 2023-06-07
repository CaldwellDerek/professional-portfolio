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
      </div>
    );
}

export default MobileNavigation;