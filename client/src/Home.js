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
            <div className="HomeWrapper  ">
                {/* <header className="business-header z-depth-5">
        <div className="container">
            <div className="row">
            <div className="col 12">
                <h1 className="display-3 center text-white mt-4  "><i className="large material-icons"> beach_access </i>Rainy Day</h1>
            </div>
            </div>
        </div>
        
       
        </header> */}
         {/*  parallax */}
        <div className="parallax-container">
                            <div className="parallax responsive-img"><img src="https://static.pexels.com/photos/268941/pexels-photo-268941.jpeg" height="1200"/></div>
                        </div>
                        {/* end of  Parallax */}
      
                <section >
                <div className="row movedown">
                    <div className="grid-example col s12 m6"><span class="flow-text"><h2 >Contact Us</h2>
                                <address>
                                    <strong>Start Rainy Day</strong>
                                    <br/>3481 Melrose Place
                                    <br/>Beverly Hills, CA 90210
                                    <br/>
                                </address>
                                <address>
                                    <abbr title="Phone">P:</abbr>
                                    (123) 456-7890
                                    <br/>
                                    <abbr title="Email">E:</abbr>
                                    <a href="mailto:">name@example.com</a>
                                </address>
                                </span></div>
                    <div className=" grid-example col s12 m6"><span class="flow-text"><h2 >What We Do</h2>
                                <p>When trying to save money, you can’t save much on bills,  but you can save on excess purchasing. </p>
                                <p>Here you can cut back on avoidable purchases and tack how much you’ve saved. That way when you make better financial decisions you can see and track your reward you put out for yourself.</p>
                                <p>
                                    <a className="btn btn-primary btn-lg #b0bec5 blue-grey lighten-3" href=""><i className="large material-icons">beach_access  </i> Get Started  </a>
                                </p></span></div>
                    </div>
                    {/* col s4 push-s8  */}
                        {/* col s8 pull-s4  */}

                        {/* <div className="valign-wrapper section-box top-page top-page-landing " >
                
                        <div className="section-box row section-prices">

                            <div className="row">
                            <div className="card">
                                <div className="col s12 m2 l8 " >
                                <h2 className="mt-4">What We Do</h2>
                                <p>When trying to save money, you can’t save much on bills,  but you can save on excess purchasing. </p>
                                <p>Here you can cut back on avoidable purchases and tack how much you’ve saved. That way when you make better financial decisions you can see and track your reward you put out for yourself.</p>
                                <p>
                                    <a className="btn btn-primary btn-lg #b0bec5 blue-grey lighten-3" href=""><i className="large material-icons">beach_access  </i> Get Started  </a>
                                </p>
                                </div>
                                <div className="col 4 m6">
                                <h2 className="mt-4">Contact Us</h2>
                                <address>
                                    <strong>Start Rainy Day</strong>
                                    <br/>3481 Melrose Place
                                    <br/>Beverly Hills, CA 90210
                                    <br/>
                                </address>
                                <address>
                                    <abbr title="Phone">P:</abbr>
                                    (123) 456-7890
                                    <br/>
                                    <abbr title="Email">E:</abbr>
                                    <a href="mailto:">name@example.com</a>
                                </address>
                                
                                </div>
                            </div>
                            </div>
                         </div>

                            </div> */}
                        <div className="section-box subtitle-page movedown">
                        
                            
                            <div className='section-box row section-prices'>
                                <div className="row">
                                    <div className="col s4 ">
                                        <div className="card card-panel hoverable">
                                            <div className="card-image">
                                            <img  src="https://static.pexels.com/photos/38867/pexels-photo-38867.jpeg" height='920' alt=""/>
                                            <span className="card-title">Import and critique</span>
                                            </div>
                                            <div className="card-content">
                                            <p>Here you can import your bank statement and organize your spending habits.</p>
                                            </div>
                                            <div className="card-action">
                                            <a href="">This is a link</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col s4 ">
                                        <div className="card card-panel hoverable " >
                                            <div className="card-image">
                                            <img   src="https://static.pexels.com/photos/4417/black-and-white-people-bar-men.jpg" height='920'  alt=""/>
                                            <span className="card-title">Set goals and track them</span>
                                            </div>
                                            <div className="card-content">
                                            <p>Here you can start tracking your purposeful  good spending decisions.</p>
                                            </div>
                                            <div className="card-action">
                                            <a href="">This is a link</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col s4 ">
                                        <div className="card card-panel hoverable">
                                            <div className="card-image  ">
                        
                                            <img  src="https://static.pexels.com/photos/38867/pexels-photo-38867.jpeg" height='920' alt=""/>
                                            <span className="card-title">Visualize your progress</span>
                                            </div>
                                            <div className="card-content">
                                            <p>Here you can see and compare how much you purposely saved with how much you usually spend.</p>
                                            </div>
                                            <div className="card-action">
                                            <a href="">This is a link</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        {/*  parallax */}
                        <div className="parallax-container">
                            <div className="parallax"><img className='responsive-img' src="https://static.pexels.com/photos/166639/pexels-photo-166639.jpeg" height="700"/></div>
                        </div>
                        {/* end of  Parallax */}
                </section>
                <section >
                {/* about the Developers */}
             <div className="valign-wrapper section-box top-page top-page-landing  movedown" >

                <div class="section-box row section-prices">
                   
                <div className="col s3 ">
                <div className="card  hoverable  ">
                    <div className="card-image">
                        <img className='responsive-img' src="https://static.pexels.com/photos/210697/pexels-photo-210697.jpeg"  alt=""/>
                        <span className="card-title">Import and critique</span>
                    </div>
                    <div className="card-content">
                        <p>About the developers</p>
                    </div>
                    <div className="card-action">
                    <a href="">This is a link</a>
                    </div>
                </div>
            </div>
                    <div className="col s3 ">
                    <div className="card  hoverable  ">
                        <div className="card-image">
                            <img className='responsive-img' src="https://static.pexels.com/photos/210697/pexels-photo-210697.jpeg" alt=""/>
                            <span className="card-title">Import and critique</span>
                        </div>
                        <div className="card-content">
                            <p>About the developers</p>
                        </div>
                        <div className="card-action">
                        <a href="">This is a link</a>
                        </div>
                    </div>
                </div>
                <div className="col s3 ">
                <div className="card  hoverable ">
                    <div className="card-image">
                        <img className='responsive-img' src="https://static.pexels.com/photos/210697/pexels-photo-210697.jpeg"  alt=""/>
                        <span className="card-title">Import and critique</span>
                    </div>
                    <div className="card-content">
                        <p>About the developers</p>
                    </div>
                    <div className="card-action">
                    <a href="">This is a link</a>
                    </div>
                </div>
            </div>
                    <div className="col s3 ">
                        <div className="card  hoverable">
                            <div className="card-image">
                                <img className='responsive-img' src="https://static.pexels.com/photos/210697/pexels-photo-210697.jpeg"  alt=""/>
                                <span className="card-title">Import and critique</span>
                            </div>
                            <div className="card-content">
                                <p>About the developers</p>
                            </div>
                            <div className="card-action">
                            <a href="">This is a link</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
                {/* end of the Developer info */}
            </section>
                <footer>
                    <div className="footer-copyright white-text center #00838f cyan darken-3">
                        <div className="container">
                        © 2017 Copyright of liz
                        </div>
                    </div>
                </footer>
            </div>

        );
    }
}

export default Home;