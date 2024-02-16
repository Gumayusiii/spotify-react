import React from "react";
import './Playlists.css';
import { useState, useEffect } from "react";
import card1 from '../assets/card1.jfif';
import card2 from '../assets/card2.jfif';
import card3 from '../assets/card3.jfif';
import card4 from '../assets/card4.jfif';
import card5 from '../assets/card5.jfif';
import insta from '../icons/instagram.png';
import face from '../icons/facebook.png';
import twitter from '../icons/twitter.png';

const Playlists = () => {

    const [inputHeader, setInputHeader] = useState('')
    const [single, setSingle] = useState([])

    useEffect(() => {
        if (inputHeader === '') {
            return
        }
    })

    function shareDados(e) {
        
        const valor = e.target.value.toLowerCase() 
        
        setInputHeader(valor) 
      }

    
    return (
        <div className="playlist-container">
                <div className="offer__scroll-container">
                        <div className="header-menu">
                            <h2>Spotify Playlists</h2>
                            <p>Show All</p>
                        </div>
                        <div id="result-playlists" className="main-container__playlist">
                            <ul>
                                <li>
                                    <img src={card1} alt=""/>
                                    <button className="play">
                                        <svg width="25" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4.76099 20.1948V3.81427L18.7864 12.0895L4.76099 20.1948Z" fill="black" stroke="black"/>
                                            </svg>     
                                    </button>
                                    <div className="content-music">
                                        <h3>lofi beats</h3>
                                        <p>chill beats, lofi vibes, new tracks every week... </p>
                                    </div>
                                    
                                </li>
                                <li>
                                    <img src={card2} alt=""/>
                                    <button className="play">
                                        <svg width="25" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4.76099 20.1948V3.81427L18.7864 12.0895L4.76099 20.1948Z" fill="black" stroke="black"/>
                                            </svg>
                                    </button>
                                    <div className="content-music">
                                        <h3>Today's Top Hits</h3>
                                        <p>Teddy Swims is on top of the Hottest 50!</p>
                                    </div>
                                    
                                </li>
                                <li>
                                    <img src={card3} alt=""/>
                                    <button className="play">
                                        <svg width="25" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4.76099 20.1948V3.81427L18.7864 12.0895L4.76099 20.1948Z" fill="black" stroke="black"/>
                                            </svg>
                                    </button>
                                    <div className="content-music">
                                        <h3>Chillout Lounge</h3>
                                    <p>Just lean back and enjoy relaxed beats.</p>
                                    </div>
                                    
                                </li>
                                <li>
                                    <img src={card4} alt=""/>
                                    <button className="play">
                                        <svg width="25" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4.76099 20.1948V3.81427L18.7864 12.0895L4.76099 20.1948Z" fill="black" stroke="black"/>
                                            </svg>
                                    </button>
                                    <div className="content-music">
                                        <h3>All Out 2020s</h3>
                                    <p>The biggest songs of the 2020s.</p>
                                    </div>
                                    
                                </li>
                                <li>
                                    <img src={card5} alt=""/>
                                    <button className="play">
                                        <svg width="25" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4.76099 20.1948V3.81427L18.7864 12.0895L4.76099 20.1948Z" fill="black" stroke="black"/>
                                            </svg>
                                    </button>
                                    <div className="content-music">
                                        <h3>Jazz in the Background</h3>
                                    <p>Soft instrumental Jazz for all your activities.</p>
                                    </div>
                                </li>
                                   </ul>
                                     </div>
                                     
                                     <div class="menu-footer">
                                     <nav class="menu-footer__links">
                                     <ul>
                                     <li>Company</li>
                                     <li>
                                      <a href="#">About</a>
                                     </li>
                                      <li>
                                       <a href="#">Jobs</a>
                                      </li>
                                       <li>
                                       <a href="#">For the Record</a>
                                        </li>
                                        </ul>
                                          <ul>
                                         <li>Communities</li>
                <li>
                    <a href="#">For Artists</a>
                </li>
                <li>
                    <a href="#">Developers</a>
                </li>
                <li>
                    <a href="#">Advertising</a>
                </li>
                <li>
                    <a href="#">Investors</a>
                </li>
                <li>
                    <a href="#">Vendors</a>
                </li>
            </ul>
            <ul>
                <li>Useful Links</li>
                <li>
                    <a href="#">Support</a>
                </li>
                <li>
                    <a href="#">Free Mobile App</a>
                </li>
            </ul>
            
            <ul class="social-media">
                <li>
                    <a href="https://www.instagram.com/spotify/">
                        <img src={insta}/>
                    </a>
                </li>
                <li>
                    <a href="https://twitter.com/spotify">
                        <img src={face}/>
                    </a>
                </li>
                <li>
                    <a href="https://www.facebook.com/SpotifyBrasil/?brand_redir=6243987495">
                        <img src={twitter}/>
                    </a>
                </li>
            </ul>
        </nav>
        <hr/>
        <p>© 2024 Spotify AB - Made by Gumayusiii</p>
    </div>
                                       </div>


         <div id="result-artist">

            {inputHeader !== '' && (
              <h2 className="artist-title">Artists</h2>
            )}

            <div className="grid-container">
             
              {inputHeader !== '' &&
                single.slice(0, 5).map((value, ind) => (
                  <React.Fragment key={ind}>
                    
                    <div className="artist-card" class="hidden">
                      <img
                      src={value.urlImg}
                      id="artist-img"
                      className="artist-img"
                      />

                    <div class="play">
                        
                    <svg width="25" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.76099 20.1948V3.81427L18.7864 12.0895L4.76099 20.1948Z" fill="black" stroke="black"/>
                    </svg>
                      </div>

                      <div className="card-text">
                        <a title="Foo Fighters" className="vst" href=""></a>
                        <span className="artist-name" id="artist-name">{value.name}</span>
                        <span className="artist-categorie">Artist</span>
                      </div>
                    </div>
                  </React.Fragment>
                ))}
            </div>
                                            
                     <footer class="disclaimer-premium">
                        <div class="text">
                        <p class="disclaimer-premium__title">Preview of Spotify</p>
                        <p class="disclaimer-premium__subtitle">
                            Sign up to get unlimited songs and podcasts with occasional ads. No credit card needed.
                          </p>
                       </div>
                        <div class="button">
                          <button type="button">Sign up free</button>
                        </div>
                       </footer>
                       </div>
                       </div>
                    
               

                                         
    )
};
export default Playlists;