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
            <div className="HomeWrapper">
                <header className="business-header">
        <div className="container">
            <div className="row">
            <div className="col 12">
                <h1 className="display-3 center text-white mt-4">Rainy Day</h1>
            </div>
            </div>
        </div>
        </header>
                <section >
                    <section >
                        <div className="valign-wrapper section-box top-page top-page-landing" >
                        
                            
                    
                        <div className="section-box row section-prices">

        <div className="row">
            <div className="col 8 left" >
            <h2 className="mt-4">What We Do</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A deserunt neque tempore recusandae animi soluta quasi? Asperiores rem dolore eaque vel, porro, soluta unde debitis aliquam laboriosam. Repellat explicabo, maiores!</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis optio neque consectetur consequatur magni in nisi, natus beatae quidem quam odit commodi ducimus totam eum, alias, adipisci nesciunt voluptate. Voluptatum.</p>
            <p>
                <a className="btn btn-primary btn-lg" href="">Call to Action &raquo;</a>
            </p>
            </div>
            <div className="col 4 ">
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
                        <div className="section-box subtitle-page">
                        
                            <div className='row center'>
                                <div className='col s12 centralize valign-wrapper'>
                                    <button className='btn-large wave-effect waves-light orange darken-2 col m4 s12'>pow</button>
                                </div>
                            </div>
                            <div className='section-box row section-prices'>
                                <div className="row">
                                    <div className="col s4 ">
                                        <div className="card">
                                            <div className="card-image">
                                            <img src="https://static.pexels.com/photos/38867/pexels-photo-38867.jpeg" alt=""/>
                                            <span className="card-title">Card Title</span>
                                            </div>
                                            <div className="card-content">
                                            <p>I am a very simple card. I am good at containing small bits of information.
                                            I am convenient because I require little markup to use effectively.</p>
                                            </div>
                                            <div className="card-action">
                                            <a href="">This is a link</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col s4 ">
                                        <div className="card">
                                            <div className="card-image">
                                            <img src="https://static.pexels.com/photos/38867/pexels-photo-38867.jpeg" alt=""/>
                                            <span className="card-title">Card Title</span>
                                            </div>
                                            <div className="card-content">
                                            <p>I am a very simple card. I am good at containing small bits of information.
                                            I am convenient because I require little markup to use effectively.</p>
                                            </div>
                                            <div className="card-action">
                                            <a href="">This is a link</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col s4 ">
                                        <div className="card">
                                            <div className="card-image">
                                            <img src="https://static.pexels.com/photos/38867/pexels-photo-38867.jpeg" alt=""/>
                                            <span className="card-title">Card Title</span>
                                            </div>
                                            <div className="card-content">
                                            <p>I am a very simple card. I am good at containing small bits of information.
                                            I am convenient because I require little markup to use effectively.</p>
                                            </div>
                                            <div className="card-action">
                                            <a href="">This is a link</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </section>

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