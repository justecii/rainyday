import React, { Component } from 'react';
import './App.css';
import $ from 'jquery';
import {Parallax, Carousel} from 'react-materialize';

class Home extends Component {
  constructor(props) {
      super(props);
      this.state = {
          childProp:""
      }
  }
  componentDidMount() {
    $('.card__share > a').on('click', function(e){
        e.preventDefault(); // prevent default action - hash doesn't appear in url
        $(this).parent().find( 'div' ).toggleClass( '.card__social--active' );
        $(this).toggleClass('.share-expanded');
    });
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
          <div className="parallax">
            <img 
              src="https://static.pexels.com/photos/606455/pexels-photo-606455.jpeg" 
              alt="Unsplashed background img 2"
              height="800"
            />
          </div> 
        </div>{/*end index banner*/}
        <br/><br/>
        <div className="container space ">
          <div className="section">
    {/* <!--   Icon Section   --> */}
            <div className="row">
              <div className="col s12 m4 ">
                <div className="icon-block  hoverable info-card">
                  <h2 className="center brown-text"><i className="large material-icons">dashboard</i></h2>
                  <h5 className="center">Import</h5>
                  <p className="light center-align">
                    With a simple&nbsp;tool, import spending data quickly&nbsp;and&nbsp;easily
                  </p>
                </div>
              </div>
              <div className="col s12 m4 ">
                <div className="icon-block  hoverable info-card">
                  <h2 className="center brown-text"><i className="large material-icons">assignment</i></h2>
                  <h5 className="center">Categorize</h5>
                  <p className="light center-align">
                    Categorize your spending for further&nbsp;analysis
                  </p>
                </div>
              </div>
              <div className="col s12 m4 ">
                <div className="icon-block  hoverable info-card ">
                  <h2 className="center brown-text"><i className="large material-icons">map</i></h2>
                  <h5 className="center">Set goals to cut down </h5>
                  <p className="light center-align">
                    Use Rainy Day to montior changes in your spending&nbsp;habits
                  </p>
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
              <div className="col s12 m4 ">
                <div className="icon-block  hoverable info-card">
                  <h2 className="center brown-text"><i className="large material-icons">border_color</i></h2>
                  <h5 className="center">Track your good decisions</h5>
                  <p className="light center-align">
                    Make notes to acknowledge when you exercised self-control!
                  </p>
                </div>
              </div>
              <div className="col s12 m4 ">
                <div className="icon-block  hoverable info-card">
                  <h2 className="center brown-text"><i className="large material-icons">insert_chart</i></h2>
                  <h5 className="center">Compare</h5>
                  <p className="light center-align">
                    Look at your personalized data to see how your habits have changed over&nbsp;time
                  </p>
                </div>
              </div>
              <div className="col s12 m4 ">
                <div className="icon-block  hoverable info-card">
                  <h2 className="center brown-text"><i className="large material-icons">cached</i></h2>
                  <h5 className="center">Keep it up!</h5>
                  <p className="light center-align">
                    Build on your progress!  Your Rainy Day profile changes and grows with you!
                  </p>
                </div>
              </div>
            </div> {/*end row*/}
          </div>{/*end section*/}
        </div>{/*end container space*/}
        <br /><br />
      {/* end of info button */}
        {<Parallax imageSrc="/img/umbrellas.png"/>}
      {/* carousel */}
        <div >
          <h4 className="header  center-align col s9 offset-s2 light">
            Making&nbsp;better spending&nbsp;choices, <br/>and&nbsp;meet&nbsp;your financial&nbsp;goals!
          </h4>
          <Carousel  images={[
            <img className="responsive-img" src="/img/coins.png"/>,
            <img className="responsive-img" src="/img/jars.png"/>,
            <img className="responsive-img" src="/img/puzzle.png"/>,
            <img className="responsive-img" src="/img/target.png"/>,
            <img className="responsive-img" src="/img/tree.png"/>,
          ]} />
        </div>
      {/* about the Developers */}
        <div className="valign-wrapper section-box top-page top-page-landing " >
          <div className="section-box row section-prices section no-pad-bot hide-on-med-and-down">
            {/* card */}
            <div className="col s3 ">
              <div className="card hoverable">
                <div className="card-image border-tlr-radius">
                  <img className='border-tlr-radius' src="/img/aj.png"  alt="Aj photo"/>
                </div>
                <div className="card__content card__padding" >
                  <div className="card__share">
                    <div className="card__social">
                      <a className="share-icon mail" href="mailto:stevens1434@gmail.com"><span className="fa fa-envelope"></span></a>
                      <a className="share-icon linkedin" href="https://www.linkedin.com/in/stevens1434/"><span className="fa fa-linkedin"></span></a>
                      <a className="share-icon github" href="https://github.com/stevens1434"><span className="fa fa-github"></span></a>
                    </div>
                    <a id="share" className="share-toggle share-icon"></a>
                  </div>
                  <div className="card__meta">
                    <h5>Andrew Stevens</h5>
                    <p>Full stack developer, bank records pages, React routes and database</p>
                  </div>
                </div>
              </div>
            </div>
            {/* card */}
            <div className="col s3 ">
              <div className="card  hoverable  ">
                <div className="card-image border-tlr-radius">
                  <img className='border-tlr-radius' src="/img/brian.png"  alt="Brian photo"/>
                </div>
                <div className="card__content card__padding" >
                  <div className="card__share">
                    <div className="card__social">
                      <a className="share-icon mail" href="mailto:bc.boxomail@gmail.com"><span className="fa fa-envelope"></span></a>
                      <a className="share-icon linkedin" href="https://www.linkedin.com/in/unclebconnor/"><span className="fa fa-linkedin"></span></a>
                      <a className="share-icon github" href="https://github.com/unclebconnor"><span className="fa fa-github"></span></a>
                    </div>
                    <a id="share" className="share-toggle share-icon" ></a>
                  </div>
                  <div className="card__meta">
                    <h5>Brian Connor</h5>
                    <p>Full stack developer, user data presentation and development</p>
                  </div>
                </div>
              </div>
            </div>
            {/* card */}
            <div className="col s3 ">
              <div className="card  hoverable  ">
                <div className="card-image border-tlr-radius">
                  <img className='border-tlr-radius' src="/img/elena.png"  alt="Elena photo"/>  
                </div>
                <div className="card__content card__padding" >
                  <div className="card__share">
                    <div className="card__social">
                      <a className="share-icon mail" href="mailto:pravutiner@gmail.com"><span className="fa fa-envelope"></span></a>
                      <a className="share-icon linkedin" href="https://www.linkedin.com/in/elena-olekh/"><span className="fa fa-linkedin"></span></a>
                      <a className="share-icon github" href="https://github.com/ElenaOl"><span className="fa fa-github"></span></a>
                    </div>
                    <a id="share" className="share-toggle share-icon" ></a>
                  </div>
                  <div className="card__meta">
                    <h5>Elena Olekh</h5>
                    <p>Full stack developer, React routes and database, savings page</p>
                  </div>
                </div>
              </div>
            </div>
            {/* card */}
            <div className="col s3 ">
              <div className="card hoverable">
                <div className="card-image border-tlr-radius">
                  <img className='border-tlr-radius' src="/img/liz.png"  alt="Liz photo"/>
                </div>
                <div className="card__content card__padding" >
                  <div className="card__share">
                    <div className="card__social">
                      <a className="share-icon mail" href="mailto:efriedla20852@gmail.com"><span className="fa fa-envelope"></span></a>
                      <a className="share-icon linkedin" href="https://www.linkedin.com/in/elizabeth-friedland13/"><span className="fa fa-linkedin"></span></a>
                      <a className="share-icon github" href="https://github.com/efriedla"><span className="fa fa-github"></span></a>
                    </div>
                    <a id="share" className="share-toggle share-icon"></a>
                  </div>
                  <div className="card__meta">
                    <h5>Elizabeth Friedland</h5>
                    <p>Front-end leaning full stack developer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        {/* moble only */}
        <div className=" hide-on-med-and-up">
          {/* person 1 */}
          <div>
            <img src="/img/aj.png" alt="AJ Stevens" className='circle responsive-img'/>
            <div className="card__author-content border-tlr-radius">
              <h5>Andrew Stevens</h5>
            </div>
            <div className="card__share">
              <div className="card__social">
                <a className="share-icon mail" href="mailto:stevens1434@gmail.com"><span className="fa fa-envelope"></span></a>
                <a className="share-icon linkedin" href="https://www.linkedin.com/in/stevens1434/"><span className="fa fa-linkedin"></span></a>
                <a className="share-icon github" href="https://github.com/stevens1434" ><span className="fa fa-github"></span></a>
              </div>
              <a id="share" className="share-toggle share-icon" ></a>
            </div>
          </div>
          {/* person 2 */}
          <div>
            <img src="/img/brian.png"  alt="Brian Connor" className='circle responsive-img'/>
            <div className="card__author-content border-tlr-radius">
              <h5>Brian</h5>
            </div>
            <div className="card__share">
              <div className="card__social">
                <a className="share-icon mail" href="mailto:bc.boxomail@gmail.com"><span className="fa fa-envelope"></span></a>
                <a className="share-icon linkedin"  href="https://www.linkedin.com/in/unclebconnor/"><span className="fa fa-linkedin"></span></a>
                <a className="share-icon github" href="https://github.com/unclebconnor"><span className="fa fa-github"></span></a>
              </div>
              <a id="share" className="share-toggle share-icon" ></a>
            </div>
          </div>
          {/* person 3 */}
          <div>
            <img src="/img/elena.png" alt="user" className='circle responsive-img'/>
            <div className="card__author-content border-tlr-radius">
              <h5>Elena Olekh</h5>
            </div>
            <div className="card__share">
              <div className="card__social">
                <a className="share-icon mail" href="mailto:pravutiner@gmail.com"><span className="fa fa-envelope"></span></a>
                <a className="share-icon linkedin" href="https://www.linkedin.com/in/elena-olekh/"><span className="fa fa-linkedin"></span></a>
                <a className="share-icon github" href="https://github.com/ElenaOl"><span className="fa fa-github"></span></a>
              </div>
              <a id="share" className="share-toggle share-icon" ></a>
            </div>
          </div>
          {/* person 4 */}
          <div>
            <img src="/img/liz.png" alt="user" className='circle responsive-img'/>
              <div className="card__author-content border-tlr-radius">
                <h5>Elizabeth Friedland</h5>
              </div>
              <div className="card__share">
                <div className="card__social">
                  <a className="share-icon mail" href="mailto:efriedla20852@gmail.com"><span className="fa fa-envelope"></span></a>
                  <a className="share-icon linkedin"  href="https://www.linkedin.com/in/elizabeth-friedland13/"><span className="fa fa-linkedin"></span></a>
                  <a className="share-icon github" href="https://github.com/efriedla"><span className="fa fa-github"></span></a>
                </div>
                <a id="share" className="share-toggle share-icon share-expanded" ></a>
              </div>
            </div>
          </div>
        </div>
        {/* end of the Developer info */}
        <footer className="page-footer #263238 blue-grey darken-2 center-align">
          <div className="container">
            <div className="row">
              <div className="col s12">
                <h5 className="white-text">Company Bio</h5>
                <p className="grey-text text-lighten-4">
                  Our colleagues called us the dream team...
                </p>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
              Made by <a className="brown-text text-lighten-3" href="http://materializecss.com">Materialize</a>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
export default Home;