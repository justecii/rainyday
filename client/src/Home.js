import React, { Component } from 'react';
import './App.css';
import $ from 'jquery';
import {Button, Icon, Parallax, Carousel} from 'react-materialize';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            childProp:""
        }
    }


    componentDidMount() {
        $('.card__share > a').on('click', function(e){
            e.preventDefault() // prevent default action - hash doesn't appear in url
               $(this).parent().find( 'div' ).toggleClass( 'card__social--active' );
            $(this).toggleClass('share-expanded');
        });
       
       
            // $('.parallax').parallax();
        
       
        }
    
       
       
    
    render() {
      
        return (
            <div >
            
                             <div id="index-banner" className="parallax-container">
                               <div className="section no-pad-bot">
                                 <div className="container">
                                 <br/>
                                   <h1 className="header center teal-text text-lighten-2">Rainy Day</h1>
                                   <div className="row center">
                                     <h5 className="header col s12 light">A more rewarding way to track your savings</h5>
                                   </div>
                                   <br/>
                           
                                 </div>
                               </div>
                               {/* <Parallax imageSrc="https://static.pexels.com/photos/268941/pexels-photo-268941.jpeg"/> */}
                               <div className="parallax"><img src="/img/umbrellas.png" alt="Unsplashed background img 2"/></div>

                             </div>
                           
                           
                             <br/><br/>
                             
                               <div className="container space ">
                                 <div className="section">
                            
                                   {/* <!--   Icon Section   --> */}
                                   <div className="row">
                                     <div className="col s12 m4">
                                       <div className="icon-block  hoverable info-card">
                                         <h2 className="center brown-text"><i className="large material-icons">dashboard</i></h2>
                                         <h5 className="center">Import and critique</h5>
                             
                                         <p className="light">Here you can start tracking your spending habits by importing your bank statement </p>
                                                  {/* and seporate your neccisary
                                              spending with your lessure spending. That way you can see how much money you can work on saving. */}
                                       </div>
                                     </div>
                             
                                     <div className="col s12 m4">
                                       <div className="icon-block  hoverable info-card">
                                         <h2 className="center brown-text"><i class="large material-icons">assignment</i></h2>
                                         <h5 className="center">Categorize and disifer </h5>
                             
                                         <p className="light">
                                        Next seporate your neccisary spending with your lessure spending. That way you can see how much money you can work on saving.
                                         </p>
                                         {/* Next, you can start tracking your good spending habbits by saving each time you would have 
                                             spent on either Entertainment, Shopping, Dinning out, Uber/lyft, or and other 
                                             non-neccisary vice. This way you can track your good decisions, and can track how much money
                                             you have saved. */}
                                       </div>
                                     </div>
                             
                                     <div className="col s12 m4">
                                       <div className="icon-block  hoverable info-card">
                                         <h2 className="center brown-text"><i className="large material-icons">map</i></h2>
                                         <h5 className="center">Set goals to cut down </h5>
                             
                                         <p className="light">
                                             once you have seporated your necessary spending with you lesure spending, you can better determine what you want to cut down on.
                                          </p>
                                              {/* Finally, here you can see and compare how much you purposely saved with how much you usually spend. */}
                                       </div>
                                     </div>
                                   </div>
                             
                                 </div>
                               </div>
                              
                               {/* secound row of info button */}
                 <div className="container space">
                   <div className="section">
              
                     {/* <!--   Icon Section   --> */}
                     <div className="row">
                       <div className="col s12 m4">
                         <div className="icon-block  hoverable info-card">
                           <h2 className="center brown-text"><i className="large material-icons">border_color</i></h2>
                           <h5 className="center">Track what you purposfly didn't spend</h5>
               
                           <p className="light">
                               Every time you go to the store and almost buy an unnessisary product, submit the product by catigory, description, amount and date.
                               this way you can document your good spending decision.
                           </p>

                         </div>
                       </div>
               
                       <div className="col s12 m4">
                         <div className="icon-block  hoverable info-card">
                           <h2 className="center brown-text"><i className="large material-icons">insert_chart</i></h2>
                           <h5 className="center">Compare and Track</h5>
               
                           <p className="light">After you have been tracking you good spending habits. you can then see a collabitive amount of 
                               money you saved, ontop of what you had spent before you had tracked it.
                           </p>
                         </div>
                       </div>
               
                       <div className="col s12 m4">
                         <div className="icon-block  hoverable info-card">
                           <h2 className="center brown-text"><i className="large material-icons">dashboard</i></h2>
                           <h5 className="center">Keep track and save</h5>
               
                           <p className="light">to continue to track your progress import you next months bank statement to compare data and track for the next month </p>
                         </div>
                       </div>
                     </div>
               
                   </div>
                 </div>
                 <br /><br />
                 {/* end of info button */}
                           
                            
                              
                              
                 {<Parallax imageSrc="/img/umbrellas.png"/>}

                             

                                    {/* carousel */}
                    <div >
                    <h3 className="header col s12 light">Making better spending choices, set goals, and improve your quality of life for tomorrow</h3>

                
                    <Carousel images={[
                    '/img/liz.png',
                    '/img/TomWaits.png',
                    '/img/angelina-jolie.png',
                    '/img/Aj.png',
                    '/img/umbrellas.png'
                ]} />
                </div>
                {/* end of carousel */}
                           
                             <div className="container">
                               <div className="section">
                           
                                 <div className="row">
                                   <div className="col s12 center">
                                     <h3><i className="mdi-content-send brown-text"></i></h3>
                                     <h4>Contact Us</h4>
                                     <p className="center-align light">Meet the developers</p>
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
                                    <img className='border-tlr-radius' src="/img/Aj.png"  alt=""/>
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
                                            <img className='border-tlr-radius' src="/img/TomWaits.png"  alt=""/>
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
                                            <img className='border-tlr-radius responsive-img' src="/img/angelina-jolie.png"  alt=""/>
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
                                            <img className='border-tlr-radius responsive-img' src="/img/liz.png"  alt=""/>
                                            <span className="card-title">Front End Developer</span>
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
                                                      <a >Elizabeth Friedland</a>
                                                      <time>30th October</time>
                                                  </div>
            
                                                  <article className="card__article">
                                                      <h2><a>Front-end leaning full stack developer</a></h2>
            
                                                      <p> Aspiring web developer with a background in human resources that complements technical skillset allowing novel perspectives on users interactions.</p>
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
                                        Front-end Developer:  <br /> <a>Elizabeth Friedland</a>
                                       
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