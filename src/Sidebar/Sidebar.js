import React from "react";
import './Sidebar.css';
import logo from '../icons/logo-spotify.png';
import globe from '../icons/globe.svg';

const Sidebar = () => {
    return (
        <div className="sidebar">
        <nav className="sidebar__navigation">
            <div className="logo">
                <a href="">
                    <img src={logo} alt="Logo"/>
                </a>
            </div>
            <ul>
                <li>
                    <a href="">
                        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.8841 2.51136L3.01191 7.7432C2.98142 7.76118 2.96271 7.79394 2.96271 
                            7.82934V21.4183C2.96271 21.4736 3.00748 21.5183 3.06271 21.5183H9.38547C9.4407 21.5183 
                            9.48547 21.4736 9.48547 21.4183V14.6241C9.48547 14.5689 9.53024 14.5241 9.58547 
                            14.5241H14.4609C14.5162 14.5241 14.5609 14.5689 14.5609 14.6241V21.4183C14.5609 
                            21.4736 14.6057 21.5183 14.6609 21.5183H20.9763C21.0316 21.5183 21.0763 21.4736 
                            21.0763 21.4183V7.82988C21.0763 7.79419 21.0573 7.76121 21.0264 7.74333L11.9849 
                            2.51095C11.9537 2.49287 11.9152 2.49303 11.8841 2.51136Z" fill="#FFFFFF" stroke="#FFFFFF" 
                            stroke-width="2"/>
                            </svg>                            
                        <span className="home__text">Home</span>
                    </a>
                </li>
                <li>
                    <a href="">
                        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M18.9268 16.3972C20.176 14.7888 20.9199 
                            12.7688 20.9199 10.5745C20.9199 5.32788 16.6667 1.07446 11.4199 1.07446C6.1731 1.07446 
                            1.91992 5.32788 1.91992 10.5745C1.91992 15.821 6.1731 20.0745 11.4199 20.0745C13.752 
                            20.0745 15.8877 19.2346 17.541 17.8401L22.334 22.6326C22.7244 23.0232 23.3577 23.0232 
                            23.748 22.6326C24.1387 22.2424 24.1387 21.6091 23.748 21.2185L18.9268 16.3972ZM11.4199 
                            18.1746C7.22266 18.1746 3.81982 14.7717 3.81982 10.5745C3.81982 6.3772 7.22266 2.97437 
                            11.4199 2.97437C15.6172 2.97437 19.02 6.3772 19.02 10.5745C19.02 14.7717 15.6172 18.1746 
                            11.4199 18.1746Z" fill="#b3b3b3" stroke="#b3b3b3" stroke-width="0.5"/>
                            </svg>                                                        
                        <span className="search__text">Search</span>
                    </a>
                </li>
            </ul>
        </nav>
        <div className="library">
            <div className="library__content">
                <button className="library__button">
                    <svg className="library__icon" width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.00403 1.78516C2.45032 1.78516 2.00134 2.23389 2.00134 2.78809V21.1777C2.00134 21.7319 2.45032 22.1807 
                        3.00403 22.1807C3.55774 22.1807 4.00671 21.7319 4.00671 21.1777V2.78809C4.00671 2.23389 3.55774 1.78516 3.00403 1.78516Z" fill="#b3b3b3"/>
                        <path d="M8.04504 2.78809C8.04504 2.23389 8.49402 1.78516 9.04773 1.78516C9.60144 1.78516 10.0504 2.23389 10.0504 
                        2.78809V21.1777C10.0504 21.7319 9.60144 22.1807 9.04773 22.1807C8.49402 22.1807 8.04504 21.7319 8.04504 21.1777V2.78809Z" fill="#b3b3b3"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.047 3.0083C14.047 2.14941 14.9872 1.62207 
                        15.7203 2.06982L21.5109 5.60547C21.6722 5.7041 21.8024 5.84033 21.8932 5.99902C21.9865 6.1626 
                        22.0377 6.3501 22.0377 6.54443V21.1147C22.0377 21.7222 21.545 22.2148 20.9376 22.2148H15.1471C14.5394 
                        22.2148 14.047 21.7222 14.047 21.1147V3.0083Z" fill="#b3b3b3"/>
                        </svg>                        
                    <span className="library__text">Your Library</span>
                </button>
                <svg className="plus__icon" width="17" height="18" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.9805 1C12.4282 1 11.9805 1.44775 11.9805 2V11H2.98047C2.42818 11 1.98047 
                    11.4478 1.98047 12C1.98047 12.5522 2.42818 13 2.98047 13H11.9805V22C11.9805 22.5522 12.4282 
                    23 12.9805 23C13.5328 23 13.9805 22.5522 13.9805 22V13H22.9805C23.5328 13 23.9805 12.5522 
                    23.9805 12C23.9805 11.4478 23.5328 11 22.9805 11H13.9805V2C13.9805 1.44775 13.5328 1 
                    12.9805 1Z" fill="#b3b3b3"/>
                    </svg>                    
            </div>
            <div className="library__scroll-container">
                <section className="section-playlist">
                    <div className="section-playlist__content">
                        <span className="text title">Create your first playlist</span>
                        <span className="text subtitle">It's easy, we'll help you</span>
                        <button className="section-playlist__button">
                            <span>Create playlist</span>
                        </button>
                    </div>
                </section>
                <section className="section-podcast">
                        <div className="section-podcast__content">
                            <span className="text title">Let's find some podcast to follow</span>
                            <span className="text subtitle">We'll keep you updated on new episodes</span>
                            <button className="section-podcast__button">
                                <span>Browse podcasts</span>
                            </button>
                        </div> 
                        </section>
            </div>
            <div className="sidebar-footer">
                <div className="sidebar-footer__links">
                    <a href="">Legal</a>
                    <a href="">Privacy Center</a>
                    <a href="">Privacy Policy</a>
                    <a href="">Cookies</a>
                    <a href="">About Ads</a>
                    <a href="">Acessibility</a>
                    <a href="">Notice At Collection</a>
                    <a href="">Your Privacy Choices</a>
                </div>
                <div className="sidebar-footer__rodape">
                    <a href="">Cookies</a>
                        <button className="languages__button">
                            <img src={globe}/>
                            <span>English</span>
                        </button>
                </div>
            </div>
        </div>      
            </div>
    )
};
export default Sidebar;