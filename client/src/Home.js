import React, { Component } from 'react';
import './App.css';


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            childProp:""
        }
    }
    render() {
      
        return (
            <div >
            
                             <div id="index-banner" class="parallax-container">
                               <div class="section no-pad-bot">
                                 <div class="container">
                                 <br/>
                                   <h1 class="header center teal-text text-lighten-2">Rainy Day</h1>
                                   <div class="row center">
                                     <h5 class="header col s12 light">A more rewarding way to track your savings</h5>
                                   </div>
                                   <br/>
                           
                                 </div>
                               </div>
                               <div class="parallax"><img src="https://static.pexels.com/photos/268941/pexels-photo-268941.jpeg" height='1200' alt="head"/></div>
                             </div>
                           
                           
                             <div class="container space">
                               <div class="section">
                           <br/><br/>
                                 {/* <!--   Icon Section   --> */}
                                 <div class="row">
                                   <div class="col s12 m4">
                                     <div class="icon-block">
                                       <h2 class="center brown-text"><i class="large material-icons">dashboard</i></h2>
                                       <h5 class="center">Import and critique</h5>
                           
                                       <p class="light">Here you can start tracking your spending habits by importing your bank statement and seporate your neccisary
                                            spending with your lessure spending. That way you can see how much money you can work on saving.</p>
            
                                     </div>
                                   </div>
                           
                                   <div class="col s12 m4">
                                     <div class="icon-block">
                                       <h2 class="center brown-text"><i class="material-icons">border_color</i></h2>
                                       <h5 class="center">Set goals and track them</h5>
                           
                                       <p class="light">Next, you can start tracking your good spending habbits by saving each time you would have 
                                           spent on either Entertainment, Shopping, Dinning out, Uber/lyft, or and other 
                                           non-neccisary vice. This way you can track your good decisions, and can track how much money
                                           you have saved.
                                       </p>
                                     </div>
                                   </div>
                           
                                   <div class="col s12 m4">
                                     <div class="icon-block">
                                       <h2 class="center brown-text"><i class="material-icons">directions_boat</i></h2>
                                       <h5 class="center">Visualize your progress</h5>
                           
                                       <p class="light">Finally, here you can see and compare how much you purposely saved with how much you usually spend. </p>
                                     </div>
                                   </div>
                                 </div>
                           
                               </div>
                             </div>
                             <br /><br />
                           
                             <div class="parallax-container valign-wrapper">
                               <div class="section no-pad-bot">
                                 <div class="container">
                                   <div class="row ">
                                     <h3 className="header col s12 light">Making better spending choices, set goals, and improve your quality of life for tomorrow</h3>
                                   </div>
                                 </div>
                               </div>
                               <div class="parallax"><img src="https://static.pexels.com/photos/166639/pexels-photo-166639.jpeg" height='800'alt="Unsplashed background img 2"/></div>
                             </div>
                           
                             <div class="container">
                               <div class="section">
                           
                                 <div class="row">
                                   <div class="col s12 center">
                                     <h3><i class="mdi-content-send brown-text"></i></h3>
                                     <h4>Contact Us</h4>
                                     <p class="center-align light">Meet the developers</p>
                                   </div>
                                 </div>
                           
                               </div>
                             </div>
                             <br /><br />
                            {/* about the Developers */}
                         <div className="valign-wrapper section-box top-page top-page-landing " >
            
                            <div class="section-box row section-prices section no-pad-bot hide-on-med-and-down">
                               
                            <div className="col s3 ">
                            <div className="card  hoverable  ">
                                <div className="card-image border-tlr-radius">
                                    <img className='border-tlr-radius' src="http://u.lorenzoferrara.net/marlenesco/material-card/thumb-christopher-walken.jpg"  alt=""/>
                                    <span className="card-title">Part in the project</span>
                                </div>
                                <div className="card__content card__padding" >
                                    <div className="card__share">
                                  <div className="card__social">
                                      <a className="share-icon mail" ><span className="fa fa-envelope"></span></a>
                                      <a className="share-icon linkedin" ><span className="fa fa-linkedin"></span></a>
                                      <a className="share-icon github" ><span className="fa fa-github"></span></a>
                                  </div>
            
                                  <a id="share" className="share-toggle share-icon" ></a>
                              </div>
                              <div className="card__meta">
                                              <a >Your Name</a>
                                              <time>17th March</time>
                                          </div>
            
                                          <article className="card__article">
                                              <h2><a>Branding statment goes here</a></h2>
            
                                              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus harum...</p>
                                          </article>
                                </div>
                            </div>
                        </div>
                        <div className="col s3 ">
                                    <div className="card  hoverable  ">
                                        <div className="card-image border-tlr-radius">
                                            <img className='border-tlr-radius' src="https://media.gq.com/photos/55835f533655c24c6c964f6b/master/w_800/style-blogs-the-gq-eye-TomWaitsMorningShot-635.jpg"  alt=""/>
                                            <span className="card-title">Part in the project</span>
                                        </div>
                                        <div className="card__content card__padding" >
                                            <div className="card__share">
                                          <div className="card__social">
                                              <a className="share-icon mail" ><span className="fa fa-envelope"></span></a>
                                              <a className="share-icon linkedin" ><span className="fa fa-linkedin"></span></a>
                                              <a className="share-icon github" ><span className="fa fa-github"></span></a>
                                          </div>
            
                                          <a id="share" className="share-toggle share-icon" ></a>
                                      </div>
                                      <div className="card__meta">
                                                      <a >Your Name</a>
                                                      <time>17th March</time>
                                                  </div>
            
                                                  <article className="card__article">
                                                      <h2><a>Branding statment goes here</a></h2>
            
                                                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus harum...</p>
                                                  </article>
                                        </div>
                                    </div>
                                </div>
                                <div className="col s3 ">
                                    <div className="card  hoverable  ">
                                        <div className="card-image border-tlr-radius">
                                            <img className='border-tlr-radius responsive-img' src="http://img.allw.mn/content/dg/o0/eobgsgtv.jpg"  alt=""/>
                                            <span className="card-title">Part in the project</span>
                                        </div>
                                        <div className="card__content card__padding" >
                                            <div className="card__share">
                                          <div className="card__social">
                                              <a className="share-icon mail" ><span className="fa fa-envelope"></span></a>
                                              <a className="share-icon linkedin" ><span className="fa fa-linkedin"></span></a>
                                              <a className="share-icon github" ><span className="fa fa-github"></span></a>
                                          </div>
            
                                          <a id="share" className="share-toggle share-icon" ></a>
                                      </div>
                                      <div className="card__meta">
                                                      <a >Your Name</a>
                                                      <time>17th March</time>
                                                  </div>
            
                                                  <article className="card__article">
                                                      <h2><a>Branding statment goes here</a></h2>
            
                                                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus harum...</p>
                                                  </article>
                                        </div>
                                    </div>
                                </div>
                            <div className="col s3 ">
                                <div className="card  hoverable  ">
                                        <div className="card-image border-tlr-radius">
                                            <img className='border-tlr-radius responsive-img' src="http://38.media.tumblr.com/4d7b2c7624eca03c7271c5294e2b9c13/tumblr_mltee6NXLH1qjmb9ko1_500.png"  alt=""/>
                                            <span className="card-title">Part in the project</span>
                                        </div>
                                    <div className="card__content card__padding" >
                                            <div className="card__share">
                                          <div className="card__social">
                                              <a className="share-icon mail" ><span className="fa fa-envelope"></span></a>
                                              <a className="share-icon linkedin" ><span className="fa fa-linkedin"></span></a>
                                              <a className="share-icon github" ><span className="fa fa-github"></span></a>
                                          </div>
            
                                          <a id="share" className="share-toggle share-icon" ></a>
                                      </div>
                                      <div className="card__meta">
                                                      <a >Your Name</a>
                                                      <time>17th March</time>
                                                  </div>
            
                                                  <article className="card__article">
                                                      <h2><a>Branding statment goes here</a></h2>
            
                                                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus harum...</p>
                                                  </article>
                               
                                     </div>
                                  
                                       
                                 </div>
                             </div>
            
                            </div>
            
                            {/* moble only */}
                            <div className=" hide-on-med-and-up">
                                <div>
                                    <img src="http://u.lorenzoferrara.net/marlenesco/material-card/thumb-christopher-walken.jpg" alt="user" className='circle responsive-img'/>
                                    <div className="card__author-content border-tlr-radius">
                                        title <a>your name</a>
                                        
                                    </div>
                                    <div className="card__share">
                                          <div className="card__social">
                                              <a className="share-icon mail" ><span className="fa fa-envelope"></span></a>
                                              <a className="share-icon linkedin" ><span className="fa fa-linkedin"></span></a>
                                              <a className="share-icon github" ><span className="fa fa-github"></span></a>
                                          </div>
            
                                          <a id="share" className="share-toggle share-icon" ></a>
                                      </div>
                             </div>
                            
                             {/* person 2 */}
                             
                                    <img src=" http://u.lorenzoferrara.net/marlenesco/material-card/thumb-sean-penn.jpg" alt="user" className='circle responsive-img'/>
                                    <div className="card__author-content border-tlr-radius">
                                        title <a>your name</a>
                                        
                                    </div>
                                    <div className="card__share">
                                          <div className="card__social">
                                              <a className="share-icon mail" ><span className="fa fa-envelope"></span></a>
                                              <a className="share-icon linkedin" ><span className="fa fa-linkedin"></span></a>
                                              <a className="share-icon github" ><span className="fa fa-github"></span></a>
                                          </div>
            
                                          <a id="share" className="share-toggle share-icon" ></a>
                                      </div>
                            
                             {/* person 3 */}
                             <img src=" http://img.allw.mn/content/dg/o0/eobgsgtv.jpg" alt="user" className='circle responsive-img'/>
                                    <div className="card__author-content border-tlr-radius">
                                        title <a>your name</a>
                                        
                                    </div>
                                    <div className="card__share">
                                          <div className="card__social">
                                              <a className="share-icon mail" ><span className="fa fa-envelope"></span></a>
                                              <a className="share-icon linkedin" ><span className="fa fa-linkedin"></span></a>
                                              <a className="share-icon github" ><span className="fa fa-github"></span></a>
                                          </div>
            
                                          <a id="share" className="share-toggle share-icon" ></a>
                                      </div>
                             {/* person 4 */}
                             <img src=" https://s-media-cache-ak0.pinimg.com/originals/c9/6d/48/c96d489d4db197a43f9b5d78721b1625.gif" alt="user" className='circle responsive-img'/>
                                    <div className="card__author-content border-tlr-radius">
                                        title <a>your name</a>
                                        
                                    </div>
                                    <div className="card__share">
                                          <div className="card__social">
                                              <a className="share-icon mail" ><span className="fa fa-envelope"></span></a>
                                              <a className="share-icon linkedin" ><span className="fa fa-linkedin"></span></a>
                                              <a className="share-icon github" ><span className="fa fa-github"></span></a>
                                          </div>
            
                                          <a id="share" className="share-toggle share-icon" ></a>
                                      </div>
                                    {/* person 4 ends */}
            
                             </div>
                        </div>
            
                            {/* end of the Developer info */}
                           
                        
                           
                             <footer class="page-footer teal">
                               <div class="container">
                                 <div class="row">
                                   <div class="col l6 s12">
                                     <h5 class="white-text">Company Bio</h5>
                                     <p class="grey-text text-lighten-4">We are a team of college students working on this project like it's our full time job. Any amount would help support and continue development on this project and is greatly appreciated.</p>
                           
                           
                                   </div>
                                   <div class="col l3 s12">
                                     <h5 class="white-text">Settings</h5>
                                     <ul>
                                       <li><a class="white-text" href="#!">Link 1</a></li>
                                       <li><a class="white-text" href="#!">Link 2</a></li>
                                       <li><a class="white-text" href="#!">Link 3</a></li>
                                       <li><a class="white-text" href="#!">Link 4</a></li>
                                     </ul>
                                   </div>
                                   <div class="col l3 s12">
                                     <h5 class="white-text">Connect</h5>
                                     <ul>
                                       <li><a class="white-text" href="#!">Link 1</a></li>
                                       <li><a class="white-text" href="#!">Link 2</a></li>
                                       <li><a class="white-text" href="#!">Link 3</a></li>
                                       <li><a class="white-text" href="#!">Link 4</a></li>
                                     </ul>
                                   </div>
                                 </div>
                               </div>
                               <div class="footer-copyright">
                                 <div class="container">
                                 Made by <a class="brown-text text-lighten-3" href="http://materializecss.com">Materialize</a>
                                 </div>
                               </div>
                             </footer>
                   
                 
                  </div>

        );
    }
}

export default Home;