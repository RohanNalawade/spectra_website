import React from 'react';
import './css/firstPage.css'
import Device from './photos/device.png'
import Gateway from './photos/gateway.jpeg'
import Girish from './photos/girish.png';
import Sudhakar from './photos/sudhakar.png';
import Spectra from './photos/spectra.mp4';
import Reefer from './photos/reefer.jpg';
import MilkPoint from './photos/milkPoint.svg';
import ColdPoint from './photos/coldPoint.svg';
import ReeferPoint from './photos/reeferPoint.svg';
import MilkChiller from './photos/milkChiller.jpg';
import ColdStorage from './photos/coldstorage.jpg';
import { Modal, ModalBody } from 'reactstrap';
import Configure from './configure';
import DashBoard from './dashBoard';
import NavBar from './navBar';
import emailjs from 'emailjs-com';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';


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
            configureModal: false,
            oneYear: true,
            ThreeYear: false,
            FiveYear: false,
            getBack: false,
            namefirst: "",
            emailfirst: '',
            phoneNofirst: '',
            requrmentfirst: '',
            subject: "",
            usertabIndex: 0
        };
    }

    cardHoverShow = (e) => {
        const remainingClickFalse = {
            firstCard: false,
            secondCard: false
        }
        this.setState({
            ...remainingClickFalse, [e.target.id]: true,
            getBack: false
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
    yearPriceHandle = (year, price) => {
        console.log(year)
        const remainingYear = {
            oneYear: false,
            threeYear: false,
            fiveYear: false
        }
        this.setState({
            ...remainingYear, [year]: true,
            price: price
        })
    }
    inputChangeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    firstForm = (e) => {
        // const { namefirst, emailfirst, phoneNofirst, requrmentfirst } = this.state;
        e.preventDefault();

        emailjs.sendForm('gmail', 'template_en2wtgm', e.target, 'user_faJmTGlsJR8vmkONPAbWB')
            .then((result) => {
                this.setState({
                    getBack: true,
                    namefirst: '',
                    emailfirst: '',
                    phoneNofirst: "",
                    requrmentfirst: ''
                })
                setTimeout(() => {
                    this.setState({
                        getBack: false
                    })
                }, 5000);
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        // e.target.reset();
        // const client = new SMTPClient({
        //     user: 'rohan@starlly.in',
        //     password: 'qwer1234',
        //     host: 'smtp.gmail.com',
        //     ssl: true,
        // });
        // client.send(
        //     {
        //         text: 'i hope this works',
        //         from: 'rohan@starlly.in',
        //         to: 'rohannalawade35@gmail.com',
        //         subject: 'testing emailjs',
        //     },
        //     (err, message) => {
        //         console.log(err || message);
        //     }
        // );
        // const email = require('emailjs');
        // const server = email.server.connect({
        //     user: 'rohan@starlly.in',
        //     password: 'qwer1234',
        //     host: 'smtp.gmail.com',
        //     ssl: true
        // });

        // server.send({
        //     text: 'Hey howdy',
        //     from: 'rohan@starlly.in',
        //     to: 'Wilson <rohannalawade35@gmail.com>',
        //     cc: '',
        //     subject: 'Greetings'
        // }, (err, message) => {
        //     console.log(err || message);
        // });
    }


    // resetForm = () => {
    //     this.setState({
    //         namefirst: "",
    //         emailfirst: '',
    //         phoneNofirst: '',
    //         requrmentfirst: ''
    //     })
    //     setTimeout(() => {
    //         this.setState({
    //             sent: false
    //         })
    //     }, 3000);
    // }

    // "use strict";
    // async main() {
    //     console.log('kk')
    //     const nodemailer = require('nodemailer');

    //     const transporter = nodemailer.createTransport({
    //         service: 'gmail',
    //         auth: {
    //             user: 'rohan@starlly.in',
    //             pass: 'qwer1234'
    //         }
    //     });
    //     console.log(transporter)
    //     const mailOptions = {
    //         from: 'rohan@starlly.in',
    //         to: 'rohannalawade35@gmail.com',
    //         subject: 'Sending Email using Node.js',
    //         text: 'That was easy!'
    //     };
    //     console.log(mailOptions)
    //     transporter.sendMail(mailOptions, function (error, info) {
    //         console.log(error, info)
    //         if (error) {
    //             console.log(error);
    //         } else {
    //             console.log('Email sent: ' + info.response);
    //         }
    //     });
    //     console.log(transporter)



    // }

    render() {
        const { firstCard, secondCard, firstPeople, thirdPeople, namefirst, emailfirst, phoneNofirst, requrmentfirst, configureModal, getBack, usertabIndex } = this.state;
        return (
            <div>
                <Modal className="modal-width" style={{ width: "1000px", marginTop: '100px' }} isOpen={configureModal} toggle={this.configureHandle} >
                    <ModalBody style={{ height: '500px', borderRadius: '20px' }} className="assignModalBody">
                        <Configure toggleCancel={this.cancelModal} />
                    </ModalBody>
                </Modal>
                <NavBar openUseCasesMOdal={this.configureNavHandle} />
                <section className="features workBgcss">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="embed-responsive embed-responsive-21by9 videoCss">
                                    <video width="640" height="480" className="videoTag" loop="" controls autoPlay muted>
                                        <source type="video/mp4" src={Spectra} />
                                    </video>
                                </div>
                                <span className="laptopbottom"></span>
                            </div>
                            <div className="col-md-6">
                                <p className="videoPar">
                                    {/* "Plug n Play solution that helps you manage distributed connected devices fleet seamlessly with a robust data logistic support". */}
                                    Monitor and Manage your machines/equipment at multiple sites easily with Spectra.<br /> <br />Create a calmer environment for your operations / maintenance teams with right data logistics.
                            </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="feature" className="features confBgCss">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <p className="configureCss">
                                    Spectra is a robust SaaS based solution that helps in managing and maintaining fleets of devices spread across different geographies seamlessly. Gives better data insights to handle post sales and deployment activities.<br /><br />It enables maintenance, operations and technical teams to perform their activities clutter free on day to day basis
                            </p>
                            </div>
                            <div className="col-md-6">
                                <div className="configBox">
                                    <div className="row">
                                        <div className="col-6 userPaddReomve">
                                            <div className="boxContaint">Intelligent Rule Engine</div>
                                        </div>
                                        <div className="col-6 userPaddReomve">
                                            <div className="boxContaint">Prescriptive Information Support</div>
                                        </div>
                                        <div className="col-6 userPaddReomve">
                                            <div className="boxContaint">Intelligent Customizable Dashboards</div>
                                        </div>
                                        <div className="col-6 userPaddReomve">
                                            <div className="boxContaint">Workflow Automation</div>
                                        </div>
                                        <div className="col-6 userPaddReomve">
                                            <div className="boxContaint" style={{ paddingTop: '10%' }}>Analytics</div>
                                        </div>
                                        <div className="col-6 userPaddReomve">
                                            <div className="boxContaint">Enable decision making for teams</div>
                                        </div>
                                        <div className="col-6 userPaddReomve">
                                            <div className="boxContaint">Prediction and forecasting</div>
                                        </div>
                                        <div className="col-6 userPaddReomve">
                                            <div className="boxContaint">Remote monitoring and management</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div className="alignCenter">
                            <button className="but clickBut" onClick={this.configureNavHandle}>Check Out Use cases</button>
                        </div> */}

                    </div>
                </section>
                <section id="partners" className="features serviceBgCss">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <ul className="anim-trigger">
                                    <li>
                                        <div className={firstCard ? "serviceCardHover" : "serviceCard"} id="firstCard" onClick={this.cardHoverShow}>
                                            <header className="cardHeader" id="firstCard">
                                                <img src={Device} alt="pic" id="firstCard" className="imageStyle" />
                                                <h5 className="cardTitle" id="firstCard">Device/Equipment manufacturers</h5>
                                            </header>
                                            <div style={{ display: firstCard === true ? 'block' : 'none' }} className="cardHover">
                                                <p className="serviceText">
                                                    <strong><em style={{ color: '#000' }}>Please fill this form.</em></strong> <br />If your a device/equipment manufacturer and maintaning fleets of devices remotely
                                            </p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className={secondCard ? "serviceCardHover" : "serviceCard"} id="secondCard" onClick={this.cardHoverShow}>
                                            <header className="cardHeader" id="secondCard">
                                                <img src={Gateway} alt="pic" id="secondCard" className="imageStyle" />
                                                <h5 className="cardTitle" id="secondCard">Gateway Device manufacturers</h5>
                                            </header>
                                            <div style={{ display: secondCard === true ? 'block' : 'none' }} className="cardHover">
                                                <p className="serviceText">
                                                    <strong><em style={{ color: '#000' }}>Please fill this form.</em></strong> <br />
                                                    If you are a gateway device provider, wherein you cater
                                                    data loggers, sensors and you are looking to integrate
                                                    with a robust platform that manage and mentains pleat of devices.
                                            </p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-6">
                                <div >
                                    <form id="contact" onSubmit={this.firstForm} style={{ display: firstCard ? 'block' : 'none' }}>
                                        <fieldset style={{ display: 'none' }}>
                                            <input name="subject" placeholder="subject" subject value="Enquiry from Device/Equipment manufacturers" type="text" />
                                        </fieldset>
                                        <fieldset >
                                            <input name="domain" placeholder="Your Domain" onChange={(e) => this.inputChangeHandler(e)} value={namefirst} type="text" />
                                        </fieldset>
                                        <fieldset>
                                            <input name="namefirst" placeholder="Your Company name" onChange={(e) => this.inputChangeHandler(e)} value={namefirst} type="text" />
                                        </fieldset>
                                        <fieldset>
                                            <input required name="emailfirst" placeholder="Contact Email Id" onChange={(e) => this.inputChangeHandler(e)} value={emailfirst} type="email" />
                                        </fieldset>
                                        <fieldset>
                                            <input placeholder="Contact Phone Number" name="phoneNofirst" type="tel" onChange={(e) => this.inputChangeHandler(e)} value={phoneNofirst} />
                                        </fieldset>
                                        <fieldset>
                                            <textarea placeholder="Brief explanation about your requrements" name="requrmentfirst" onChange={(e) => this.inputChangeHandler(e)} value={requrmentfirst}></textarea>
                                        </fieldset>
                                        <button name="submit" type="submit" >Submit</button>
                                    </form>
                                    <form id="contact" onSubmit={this.firstForm} style={{ display: secondCard ? 'block' : 'none' }}>
                                        <fieldset style={{ display: 'none' }}>
                                            <input name="subject" placeholder="subject" subject value="Enquiry from Gateway Device manufacturers" type="text" />
                                        </fieldset>
                                        <fieldset>
                                            <input name="namefirst" placeholder="Your Company name" onChange={(e) => this.inputChangeHandler(e)} value={namefirst} type="text" />
                                        </fieldset>
                                        <fieldset>
                                            <input required name="emailfirst" placeholder="Contact Email Id" onChange={(e) => this.inputChangeHandler(e)} vale={emailfirst} type="email" />
                                        </fieldset>
                                        <fieldset>
                                            <input placeholder="Contact Phone Number" name="phoneNofirst" type="tel" onChange={(e) => this.inputChangeHandler(e)} value={phoneNofirst} />
                                        </fieldset>
                                        <fieldset>
                                            <textarea placeholder="Brief explanation about your requrements" name="requrmentfirst" onChange={(e) => this.inputChangeHandler(e)} value={requrmentfirst}></textarea>
                                        </fieldset>
                                        <button name="submit" type="submit" >Submit</button>
                                    </form>
                                    <p className="getBacktext" style={{ display: getBack === true ? 'block' : 'none' }}>Thanks for filling the  form we will get back to you with in  24hours</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="useCases" className="userCaseTabs">
                    <div className="container">
                        <div className="userConfiigure">
                            <Tabs id="controlled-tab-example" selectedIndex={usertabIndex} onSelect={usertabIndex => this.setState({ usertabIndex })}>
                                <TabList>
                                    <Tab style={{ fontSize: '16px' }}>Milk Chiller</Tab>
                                    <Tab style={{ fontSize: '16px' }}>Cold Storage</Tab>
                                    <Tab style={{ fontSize: '16px' }}>Reefer</Tab>
                                </TabList>
                                <TabPanel>
                                    <div className="grid-item-config">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="testcolor" style={{ backgroundColor: '#10c6a3' }}>
                                                    <img src={MilkChiller} alt="milkChiller" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="milkText">
                                                    <div style={{ display: 'flex' }}>
                                                        <div className="mt-1"><img src={MilkPoint} alt="milkText" className="milkPoint" /></div>
                                                        <div className="clent-config"> Enable remote monitoring of Milk </div>
                                                    </div>
                                                    <div style={{ display: 'flex' }}>
                                                        <div className="mt-1"><img src={MilkPoint} alt="milkText" className="milkPoint" /></div>
                                                        <div className="clent-config">Provide real time status about the chiller </div>
                                                    </div>
                                                    <div style={{ display: 'flex' }}>
                                                        <div className="mt-1"><img src={MilkPoint} alt="milkText" className="milkPoint" /></div>
                                                        <div className="clent-config">Knowledge base support for service <br/>engineers</div>
                                                    </div>
                                                    <div style={{ display: 'flex' }}>
                                                        <div className="mt-1"><img src={MilkPoint} alt="milkText" className="milkPoint" /></div>
                                                        <div className="clent-config">Share message to the respective maintenance team </div>
                                                    </div>
                                                    <div style={{ display: 'flex' }}>
                                                        <div className="mt-1"><img src={MilkPoint} alt="milkText" className="milkPoint" /></div>
                                                        <div className="clent-config">Data analysis and robust alert rule setting </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </TabPanel>
                                <TabPanel>
                                    <div className="grid-item-config">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="testcolor" style={{ backgroundColor: '#0e7c60' }}>
                                                    <img src={ColdStorage} alt="ColdStorage" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="coldText">
                                                    <div style={{ display: 'flex' }}>
                                                        <div className="mt-1"><img src={ColdPoint} alt="ColdStorage" className="milkPoint" /></div>
                                                        <div className="clent-config"> Refrigeration related parameters configuration </div>
                                                    </div>
                                                    <div style={{ display: 'flex' }}>
                                                        <div className="mt-1"><img src={ColdPoint} alt="ColdStorage" className="milkPoint" /></div>
                                                        <div className="clent-config">Assigning machines to maintenance person <br />for certain locations </div>
                                                    </div>
                                                    <div style={{ display: 'flex' }}>
                                                        <div className="mt-1"><img src={ColdPoint} alt="ColdStorage" className="milkPoint" /></div>
                                                        <div className="clent-config">Alert conditions preset to avoid hassles</div>
                                                    </div>
                                                    <div style={{ display: 'flex' }}>
                                                        <div className="mt-1"><img src={ColdPoint} alt="ColdStorage" className="milkPoint" /></div>
                                                        <div className="clent-config">Messaging service configured to track <br /> multiple sites</div>
                                                    </div>
                                                    <div style={{ display: 'flex' }}>
                                                        <div className="mt-1"><img src={ColdPoint} alt="ColdStorage" className="milkPoint" /></div>
                                                        <div className="clent-config">Meat/Vegetables preservation made easy</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </TabPanel>
                                <TabPanel>
                                    <div className="grid-item-config">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="testcolor" style={{ backgroundColor: '#117a8b' }}>
                                                    <img src={Reefer} alt="reefer" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="reeferText">
                                                    <div style={{ display: 'flex' }}>
                                                        <div className="mt-1"><img src={ReeferPoint} alt="reefer" className="milkPoint" /></div>
                                                        <div className="clent-config">Tracking mechanism configured for Reefers</div>
                                                    </div>
                                                    <div style={{ display: 'flex' }}>
                                                        <div className="mt-1"><img src={ReeferPoint} alt="reefer" className="milkPoint" /></div>
                                                        <div className="clent-config">Raw material freshness related information <br />tracked real time</div>
                                                    </div>
                                                    <div style={{ display: 'flex' }}>
                                                        <div className="mt-1"><img src={ReeferPoint} alt="reefer" className="milkPoint" /></div>
                                                        <div className="clent-config">Messaging and Alerts configuration applied <br />for regular updates </div>
                                                    </div>
                                                    <div style={{ display: 'flex' }}>
                                                        <div className="mt-1"><img src={ReeferPoint} alt="reefer" className="milkPoint" /></div>
                                                        <div className="clent-config">Edge cases checked wrt locations and <br /> connectivity</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </TabPanel>
                            </Tabs>
                        </div>
                    </div>
                </section>
                <section id="team" className="features peopleBg">
                    <div className="container" style={{ paddingTop: '50px' }}>
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
                            <div >
                                <p className="peopleCss">Meet the Team </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <ul className="people_list">
                                    <li data-aos="fade-up" className={firstPeople === true ? "aos-animate open padd" : "aos-animate padd"} data-aos-delay="300" onMouseOver={() => this.peopleCardFlex(true, 'firstPeople')} onMouseLeave={() => this.peopleCardFlex(false, 'firstPeople')}>
                                        <div className="people">
                                            <figure >
                                                <img src={Sudhakar} alt="people" />
                                            </figure>
                                            <span style={{ float: firstPeople ? 'right' : '', display: firstPeople === true ? 'flex' : 'none' }}>
                                                <a href="https://www.linkedin.com/in/sudhakar-suga/"><i class="fa fa-linkedin colorblack" aria-hidden="true"></i></a>
                                            </span>
                                            <div className="peopleBox" style={{ display: firstPeople === true ? 'flex' : 'none' }}>
                                                <figure>
                                                    <img src={Sudhakar} alt="people" />
                                                </figure>
                                                <div className="peopleInfo">
                                                    <span className="peopleName">Sudhakar</span>
                                                    <span className="peopleDec">Founder
                                                        </span>
                                                    <p className="desc">Love building tools and solutions that help customers build long term businesses</p>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    {/* <li data-aos="fade-up" className={secondPeople === true ? "aos-animate open padd" : "aos-animate padd"} data-aos-delay="300" onMouseOver={() => this.peopleCardFlex(true, 'secondPeople')} onMouseLeave={() => this.peopleCardFlex(false, 'secondPeople')}>
                                        <div className="people">
                                            <figure >
                                                <img src={Shiva} alt="people" />
                                            </figure>
                                            <div className="peopleBox" style={{ display: secondPeople === true ? 'flex' : 'none' }}>
                                                <figure>
                                                    <img src={Shiva} alt="people" />
                                                </figure>
                                                <div className="peopleInfo">
                                                    <span className="peopleName">Shiva</span>
                                                    <span className="peopleDec">QA</span>
                                                    <p className="desc">QA with a intent to improve the product, who likes to understand more about customer scenarios</p>
                                                </div>
                                            </div>
                                        </div>
                                    </li> */}
                                    <li data-aos="fade-up" className={thirdPeople === true ? "aos-animate open padd" : "aos-animate padd"} data-aos-delay="300" onMouseOver={() => this.peopleCardFlex(true, 'thirdPeople')} onMouseLeave={() => this.peopleCardFlex(false, 'thirdPeople')}>
                                        <div className="people">
                                            <figure >
                                                <img src={Girish} alt="people" />
                                            </figure>
                                            <span style={{ float: thirdPeople ? 'right' : '', display: thirdPeople === true ? 'flex' : 'none' }}>
                                                <a href="https://www.linkedin.com/in/girishkadkol/"><i class="fa fa-linkedin colorblack" aria-hidden="true"></i></a>
                                            </span>
                                            <div className="peopleBox" style={{ display: thirdPeople === true ? 'flex' : 'none' }}>
                                                <figure>
                                                    <img src={Girish} alt="people" />
                                                </figure>
                                                <div className="peopleInfo">
                                                    <span className="peopleName">Girish</span>
                                                    <span className="peopleDec">Co-Founder
                                                    </span>
                                                    <p className="desc">Solving good problems, want customer to derive value, always keen to talk to customers from whom we can learn more</p>
                                                </div>

                                            </div>
                                        </div>
                                    </li>
                                    {/* <li data-aos="fade-up" className={fourthPeople === true ? "aos-animate open padd" : "aos-animate padd"} data-aos-delay="300" onMouseOver={() => this.peopleCardFlex(true, 'fourthPeople')} onMouseLeave={() => this.peopleCardFlex(false, 'fourthPeople')}>
                                        <div className="people">
                                            <figure >
                                                <img src={Preeti} alt="people" />
                                            </figure>
                                            <div className="peopleBox" style={{ display: fourthPeople === true ? 'flex' : 'none' }}>
                                                <figure>
                                                    <img src={Preeti} alt="people" />
                                                </figure>
                                                <div className="peopleInfo">
                                                    <span className="peopleName">Preeti</span>
                                                    <span className="peopleDec">Developer</span>
                                                    <p className="desc">Believe in yourself, and do the best possible work. Like to be part of building great products</p>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li data-aos="fade-up" className={fivethPeople === true ? "aos-animate open padd" : "aos-animate padd"} data-aos-delay="300" onMouseOver={() => this.peopleCardFlex(true, 'fivethPeople')} onMouseLeave={() => this.peopleCardFlex(false, 'fivethPeople')}>
                                        <div className="people">
                                            <figure >
                                                <img src={Rahul} alt="people" />
                                            </figure>
                                            <div className={fivethPeople === true ? "peopleBox leftSide" : "peopleBox"} style={{ display: fivethPeople === true ? 'flex' : 'none' }}>
                                                <figure>
                                                    <img src={Rahul} alt="people" />
                                                </figure>
                                                <div className="peopleInfo">
                                                    <span className="peopleName">Rahul</span>
                                                    <span className="peopleDec">QA</span>
                                                    <p className="desc">Making products work and find a way to get things off the ground, providing value addition</p>
                                                </div>
                                            </div>
                                        </div>
                                    </li> */}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="tryit" className="features dashBordcss">
                    <div className="container">
                        <div className="dashBordStyle">
                            <DashBoard />
                        </div>
                        <p className="desttopNeck"></p>
                        <p className="destopbottom"></p>
                    </div>
                </section>
                <footer id="contactUs" className="features footerCss" >
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 ">
                                <div className="row">
                                    <div className="col-md-3 mb-2">
                                        <span className="aboutHeading">Contact</span>
                                    </div>
                                    <div className="col-md-7 mb-2">
                                        <span className="aboutSubHeading">sales@starlly.in / +91-9886506163.</span>
                                    </div>
                                    <div className="col-md-3 mb-2">
                                        <span className="aboutHeading">Address</span>
                                    </div>
                                    <div className="col-md-7 mb-2">
                                        <span className="aboutSubHeading">10, Gandhi Bazaar Main Rd, Gandhi Bazaar, Basavanagudi, Bengaluru, Karnataka 560004.</span>
                                    </div>
                                    <div className="col-md-3 mb-2">
                                        <span className="aboutHeading">Careers</span>
                                    </div>
                                    <div className="col-md-7 mb-2">
                                        <span> <a href="https://in.linkedin.com/company/starlly-solutions-pvt.-ltd."><i class="fa fa-linkedin colorWhite" aria-hidden="true"></i></a> </span>
                                        {/* <span> <a href="#"><i class="fa fa-twitter colorWhite" aria-hidden="true"></i></a> </span> */}
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