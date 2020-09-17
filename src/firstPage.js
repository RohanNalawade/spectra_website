import React from 'react';
import './css/firstPage.css'
import Pic from './photos/assign.png'
import Tata from './photos/tata.jpeg'
import Video from './photos/video.mp4'
import { Modal, ModalBody, Label } from 'reactstrap';
import Configure from './configure';
import DashBoard from './dashBoard'
export default class FirstPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstCard: true,
            secondCard: false,
            peopleCard: false,
            firstPeople: false,
            secondPeople: false,
            thirdPeople: false,
            fourthPeople: false,
            fivethPeople: false,
            tabIndex: 0,
            subTabIndex: 0,
            configureModal: false
        };
    }

    cardHoverShow = (e) => {
        const remainingClickFalse = {
            firstCard: false,
            secondCard: false
        }
        this.setState({
            ...remainingClickFalse, [e.target.id]: true
        })
    }
    peopleCardFlex = (cardShow, cardName) => {
        console.log(cardName)
        const remainingPeopleFalse = {
            firstPeople: false,
            secondPeople: false,
            thirdPeople: false,
            fourthPeople: false,
            fivethPeople: false,

        }
        this.setState({
            // peopleCard: cardShow,
            ...remainingPeopleFalse, [cardName]: cardShow
        })
    }
    configureHandle = () => {
        this.setState({
            configureModal: !this.state.configureHandle
        })
    }
    configureNavHandle = () => {
        this.setState({
            configureModal: true
        })
    }
    cancelModal = (closeModal) => {
        this.setState({
            configureModal: closeModal
        })
    }

    render() {
        const { firstCard, secondCard, firstPeople, secondPeople, thirdPeople, fourthPeople, fivethPeople, configureModal, tabIndex, subTabIndex } = this.state;
        // console.log(firstCard)
        return (
            <div>
                <Modal className="modal-width" style={{ width: "500px" }} isOpen={configureModal} toggle={this.configureHandle} >
                    <ModalBody className="assignModalBody">
                        <Configure toggleCancel={this.cancelModal} />
                    </ModalBody>
                </Modal>
                <div className="page-wrapper">
                    <div className="container">
                        <div className="nav-wrapper">
                            {/* <div className="grad-bar"></div> */}
                            <nav className="navbar">
                                {/* <img src="https://storage.googleapis.com/crmdevelopment/Organisation/ProfilePic/2020/07/31/starlly_logo.png" alt="Company Logo" /> */}
                                <span ><a href="/" className="comLogo">Starlly</a></span>
                                <div className="menu-toggle" id="mobile-menu">
                                    <span className="bar"></span>
                                    <span className="bar"></span>
                                    <span className="bar"></span>
                                </div>
                                <ul className="nav">
                                    <li className="nav-item"><a href="#works">How it works </a></li>
                                    <li className="nav-item"><a href="#UseCases">Use Cases</a></li>
                                    <li className="nav-item"><a href="#Configure" onClick={this.configureNavHandle}>Configure Yourself</a></li>
                                    <li className="nav-item"><a href="#Pricing">Pricing</a></li>
                                    <li className="nav-item"><a href="#Contact">Contact Us</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
                <section id="works" className="features workBgcss">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="embed-responsive embed-responsive-21by9 videoCss">
                                    <video autoplay loop="" controls width="640" height="480" className="videoTag">
                                        <source type="video/mp4" src={Video} />
                                    </video>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <p className="videoPar">
                                    We help operations and maintenance
                                    teams to keep a tab on their
                                    machines-equipments, so that they
                                    can focus on their “actual work”.
                            </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="UseCases" className="features serviceBgCss">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <ul className="anim-trigger">
                                    <li>
                                        <div className={firstCard ? "serviceCardHover" : "serviceCard"} id="firstCard" onClick={this.cardHoverShow}>
                                            <header className="cardHeader" id="firstCard">
                                                <img src={Pic} alt="pic" id="firstCard" className="imageStyle" />
                                                <h5 className="cardTitle" id="firstCard">Machine/Equipment manufacturers</h5>
                                            </header>
                                            <div style={{ display: firstCard === true ? 'block' : 'none' }} className="cardHover">
                                                <p className="serviceText">
                                                    If you are a machine/equipment manufacturer
                                                    and want to provide a robust platform that helps
                                                    your customers to keep a tab on their assets at
                                                    remote hubs/sites/collection points.
                                            </p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className={secondCard ? "serviceCardHover" : "serviceCard"} id="secondCard" onClick={this.cardHoverShow}>
                                            <header className="cardHeader" id="secondCard">
                                                <img src={Pic} alt="pic" id="secondCard" className="imageStyle" />
                                                <h5 className="cardTitle" id="secondCard">Machine/Equipment manufacturers</h5>
                                            </header>
                                            <div style={{ display: secondCard === true ? 'block' : 'none' }} className="cardHover">
                                                <p className="serviceText">
                                                    If you are a gateway provider, wherein you cater
                                                    data loggers, sensors and you are looking to integrate
                                                    with a robust platform that handles
                                                    communication/messaging/data filteration
                                                    the right way.
                                            </p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-6">
                                <div >
                                    {/* <div className="container"> */}
                                    <form id="contact" action="" method="post" style={{ display: firstCard ? 'block' : 'none' }}>
                                        <h3> Form 1</h3>
                                        <h4>Contact us for service</h4>
                                        <fieldset>
                                            <input placeholder="Your name" type="text" />
                                        </fieldset>
                                        <fieldset>
                                            <input placeholder="Your Email Address" type="email" />
                                        </fieldset>
                                        <fieldset>
                                            <input placeholder="Your Phone Number (optional)" type="tel" />
                                        </fieldset>
                                        <fieldset>
                                            <input placeholder="Your Web Site (optional)" type="url" />
                                        </fieldset>
                                        <fieldset>
                                            <textarea placeholder="Type your message here...." ></textarea>
                                        </fieldset>
                                        <fieldset>
                                            <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
                                        </fieldset>
                                        {/* <p className="copyright">Designed by <a href="https://colorlib.com" target="_blank" title="Colorlib">Colorlib</a></p> */}
                                    </form>
                                    <form id="contact" action="" method="post" style={{ display: secondCard ? 'block' : 'none' }}>
                                        <h3> Form 2</h3>
                                        <h4>Contact us for service</h4>
                                        <fieldset>
                                            <input placeholder="Your name" type="text" />
                                        </fieldset>
                                        <fieldset>
                                            <input placeholder="Your Email Address" type="email" />
                                        </fieldset>
                                        <fieldset>
                                            <input placeholder="Your Phone Number (optional)" type="tel" />
                                        </fieldset>
                                        <fieldset>
                                            <input placeholder="Your Web Site (optional)" type="url" />
                                        </fieldset>
                                        <fieldset>
                                            <textarea placeholder="Type your message here...." ></textarea>
                                        </fieldset>
                                        <fieldset>
                                            <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
                                        </fieldset>
                                        {/* <p className="copyright">Designed by <a href="https://colorlib.com" target="_blank" title="Colorlib">Colorlib</a></p> */}
                                    </form>
                                </div>
                            </div>
                        </div>
                        {/* </div> */}
                    </div>
                </section>
                <section id="Configure" className="features confBgCss">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <p className="configureCss">
                                    Spectra is a infrastructure
                                    data management platform,
                                    that helps track machines-equipment
                                    from anywhere, create workflows,
                                    rule engine, provide robust
                                    communication facility to operators
                                    and maintenance teams, so that
                                    they focus on actual work
                            </p>
                            </div>
                            <div className="col-md-6">
                                <div className="configBox">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="boxContaint">Intelligent Rule Engine</div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="boxContaint">Colaboration Planning Interface</div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="boxContaint">Intelligent Rule Engine</div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="boxContaint">Colaboration Planning Interface</div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="boxContaint">Intelligent Rule Engine</div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="boxContaint">Colaboration Planning Interface</div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="boxContaint">Intelligent Rule Engine</div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="boxContaint">Colaboration Planning Interface</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="checkOutBut">
                    <div className="container">
                        <div className="alignCenter">
                            <button className="but clickBut" onClick={this.configureNavHandle}>Check Out Use cases</button>
                        </div>
                    </div>
                </div>
                <section id="Pricing" className="features dashBordcss">
                    <div className="container">
                        <div className="dashBordStyle">
                            <DashBoard />
                        </div>
                    </div>
                </section>
                <section id="Contact" className="features peopleBg">
                    <div className="container">
                        <div className="row">
                            <div >
                                <h2 className="peopleCss">People at
                                <span className="ComName"> Starlly</span></h2>
                            </div>
                        </div>
                        <div>
                            <p className="companyDetails">Meet the team , an interesting set of people. These are the people who
                            make what Spectra it is today, they make sure the customers get right
                            support on time along with some fantastic features rolled on time, they
                            add the needed zing to the product which enables our customers focus on their
                            work hassle free.<br /><br />
                            This team takes immense pride in serving the customers and does its best
to make Spectra provide better results.
                            </p>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <ul className="people_list">
                                    <li data-aos="fade-up" className={firstPeople === true ? "aos-animate open padd" : "aos-animate padd"} data-aos-delay="300" onMouseOver={() => this.peopleCardFlex(true, 'firstPeople')} onMouseLeave={() => this.peopleCardFlex(false, 'firstPeople')}>
                                        <div className="people">
                                            <figure >
                                                <img src={Tata} alt="people" />
                                            </figure>
                                            <div className="peopleBox" style={{ display: firstPeople === true ? 'flex' : 'none' }}>
                                                <figure>
                                                    <img src={Tata} alt="people" />
                                                </figure>
                                                <div className="peopleInfo">
                                                    <span className="peopleName">Rohan</span>
                                                    <span className="peopleDec">Software Developer</span>
                                                    <p className="desc"> I love solving zero to one business problems. In my free time, I sleep.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li data-aos="fade-up" className={secondPeople === true ? "aos-animate open padd" : "aos-animate padd"} data-aos-delay="300" onMouseOver={() => this.peopleCardFlex(true, 'secondPeople')} onMouseLeave={() => this.peopleCardFlex(false, 'secondPeople')}>
                                        <div className="people">
                                            <figure >
                                                <img src={Tata} alt="people" />
                                            </figure>
                                            <div className="peopleBox" style={{ display: secondPeople === true ? 'flex' : 'none' }}>
                                                <figure>
                                                    <img src={Tata} alt="people" />
                                                </figure>
                                                <div className="peopleInfo">
                                                    <span className="peopleName">Rohan</span>
                                                    <span className="peopleDec">Software Developer</span>
                                                    <p className="desc"> I love solving zero to one business problems. In my free time, I sleep.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li data-aos="fade-up" className={thirdPeople === true ? "aos-animate open padd" : "aos-animate padd"} data-aos-delay="300" onMouseOver={() => this.peopleCardFlex(true, 'thirdPeople')} onMouseLeave={() => this.peopleCardFlex(false, 'thirdPeople')}>
                                        <div className="people">
                                            <figure >
                                                <img src={Tata} alt="people" />
                                            </figure>
                                            <div className="peopleBox" style={{ display: thirdPeople === true ? 'flex' : 'none' }}>
                                                <figure>
                                                    <img src={Tata} alt="people" />
                                                </figure>
                                                <div className="peopleInfo">
                                                    <span className="peopleName">Rohan</span>
                                                    <span className="peopleDec">Software Developer</span>
                                                    <p className="desc"> I love solving zero to one business problems. In my free time, I sleep.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li data-aos="fade-up" className={fourthPeople === true ? "aos-animate open padd" : "aos-animate padd"} data-aos-delay="300" onMouseOver={() => this.peopleCardFlex(true, 'fourthPeople')} onMouseLeave={() => this.peopleCardFlex(false, 'fourthPeople')}>
                                        <div className="people">
                                            <figure >
                                                <img src={Tata} alt="people" />
                                            </figure>
                                            <div className="peopleBox" style={{ display: fourthPeople === true ? 'flex' : 'none' }}>
                                                <figure>
                                                    <img src={Tata} alt="people" />
                                                </figure>
                                                <div className="peopleInfo">
                                                    <span className="peopleName">Rohan</span>
                                                    <span className="peopleDec">Software Developer</span>
                                                    <p className="desc"> I love solving zero to one business problems. In my free time, I sleep.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li data-aos="fade-up" className={fivethPeople === true ? "aos-animate open padd" : "aos-animate padd"} data-aos-delay="300" onMouseOver={() => this.peopleCardFlex(true, 'fivethPeople')} onMouseLeave={() => this.peopleCardFlex(false, 'fivethPeople')}>
                                        <div className="people">
                                            <figure >
                                                <img src={Tata} alt="people" />
                                            </figure>
                                            <div className={fivethPeople === true ? "peopleBox leftSide" : "peopleBox"} style={{ display: fivethPeople === true ? 'flex' : 'none' }}>
                                                <figure>
                                                    <img src={Tata} alt="people" />
                                                </figure>
                                                <div className="peopleInfo">
                                                    <span className="peopleName">Rohan</span>
                                                    <span className="peopleDec">Software Developer</span>
                                                    <p className="desc"> I love solving zero to one business problems. In my free time, I sleep.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                <footer className="features footerCss">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-xl-6">
                                <div className="row">
                                    <div className="col-md-5">
                                        <span className="aboutHeading">Contact</span>
                                    </div>
                                    <div className="col-md-7">
                                        <span className="aboutSubHeading">Sudhakar Suga</span>
                                    </div>
                                    <div className="col-md-5">
                                        <span className="aboutHeading">Address</span>
                                    </div>
                                    <div className="col-md-7">
                                        <span className="aboutSubHeading">10, Gandhi Bazaar Main Rd, Gandhi Bazaar, Basavanagudi, Bengaluru, Karnataka 560004</span>
                                    </div>
                                    <div className="col-md-5">
                                        <span className="aboutHeading">Contact Number</span>
                                    </div>
                                    <div className="col-md-7">
                                        <span className="aboutSubHeading">9999999999</span>
                                    </div>
                                    <div className="col-md-5">
                                        <span className="aboutHeading">Email</span>
                                    </div>
                                    <div className="col-md-7">
                                        <span className="aboutSubHeading">sudhakar@starlly.in</span>
                                    </div>

                                </div>
                            </div>
                            <div className="col-md-12 col-xl-6">
                                <div className="row">
                                    <div className="col-md-5">
                                        <span className="aboutHeading">Company</span>
                                    </div>
                                    <div className="col-md-7">
                                        <span className="aboutSubHeading">
                                            Over the years, we have developed expertise in end-to-end-solutions strategy, design and development of cloud based mobile and web projects, including UI/UX design, end-to-end project management and ideation-to-execution product development
                                        </span>
                                    </div>
                                    <div className="col-md-5">
                                        <span className="aboutHeading">About Us</span>
                                    </div>
                                    <div className="col-md-7">
                                        <span className="aboutSubHeading">10, Gandhi Bazaar Main Rd, Gandhi Bazaar, Basavanagudi, Bengaluru, Karnataka 560004</span>
                                    </div>
                                    <div className="col-md-5">
                                        <span className="aboutHeading">Careers</span>
                                    </div>
                                    <div className="col-md-7">
                                        <span className="aboutSubHeading">9999999999</span>
                                    </div>
                                    <div className="col-md-5">
                                        <span className="aboutHeading">Blog</span>
                                    </div>
                                    <div className="col-md-7">
                                        <span className="aboutSubHeading">sudhakar@starlly.in</span>
                                    </div>
                                    <div className="col-md-5">
                                        <span className="aboutHeading">Newsletter</span>
                                    </div>
                                    <div className="col-md-7">
                                        <span className="aboutSubHeading">sudhakar@starlly.in</span>
                                    </div>
                                    <div className="col-md-5">
                                        <span className="aboutHeading"> Community</span>
                                    </div>
                                    <div className="col-md-7">
                                        <span className="aboutSubHeading">sudhakar@starlly.in</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div >
        )
    }
}