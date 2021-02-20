import React from 'react';
import './css/firstPage.css'
import { Link } from "react-router-dom";
import emailjs from 'emailjs-com';

export default class PricingPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            oneYear: true,
            ThreeYear: false,
            FiveYear: false,
            price: '$15',
            sites: '1',
            totalPrice: '15',
            connectForm: false,
            namefirst: "",
            emailfirst: '',
            phoneNofirst: '',
            requrmentfirst: '',
            deposite: '150',
            upfrontFee: true
        }
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

    siteChanges = (e) => {
        let sites = e.target.value
        let price = Number(sites) * 15;
        if (Number(e.target.value) >= 0)
            this.setState({
                sites: sites,
                totalPrice: price,
                deposite: '150',
                upfrontFee: true
            })
        if (Number(sites) === 0 || Number(e.target.value) >= 100) {
            this.setState({
                deposite: '0',
                upfrontFee: false
            })
        }
    }

    connectForm = () => {
        this.setState({
            connectForm: true
        })
    }
    inputChangeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    firstForm = (e) => {
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
    }
    render() {
        const { sites, totalPrice, namefirst, emailfirst, phoneNofirst, requrmentfirst, connectForm, deposite, upfrontFee } = this.state;
        return (
            <div>
                <section id="Pricing" >
                    <div className="pricingStyle">
                        <div>
                            <Link to="/">
                                <i class="fas fa-long-arrow-alt-left priceBackArrow" aria-hidden="true"></i>
                            </Link>
                        </div>
                        <div className="container">
                            <div className="cardStyle">
                                <div className="container">
                                    <div className="row">
                                        <div className="pricingBox">
                                            <div className="upfrontCharge">
                                                <div className="row">
                                                    <h5 className="priceHead">One Time Upfront Fee ( waived off if appliance/machine are more than 100) </h5>
                                                    <h5 className="priceHead leftPlace" >$ 150</h5>
                                                </div>
                                            </div>
                                            <p className="onetime">Platform Access, data storage, support </p>
                                            <p className="onetime"> Training, consulting, usage</p>
                                            <div className="pricingTableService">
                                                <div className="row">
                                                    <h5 className="priceHead">per appliance/machine </h5>
                                                    <h5 className="priceHead leftPlace"> $ 15/ month</h5>
                                                </div>
                                            </div>
                                            <table>
                                                <tbody>
                                                    <tr>
                                                        <td><span>Standard Template for dashboard along with additional features of location tracker, automated issue tracker </span></td>
                                                        {/* <td>Unlimited</td> */}
                                                    </tr>
                                                    <tr>
                                                        <td>Maintenance team support features  </td>
                                                        {/* <td>Unlimited</td> */}
                                                    </tr>
                                                    <tr>
                                                        <td>Create unlimited users Monitor unlimited devices per site, charges applicable for customisable dashboard </td>
                                                        {/* <td>Unlimited</td> */}
                                                    </tr>
                                                    <tr>
                                                        <td>Support available anytime with full on spot resolution strategy in place  </td>
                                                        {/* <td>Unlimited</td> */}
                                                    </tr>
                                                    <tr>
                                                        <td>Third party loggers/sensors integration free of cost Analytics wrt trends available  </td>
                                                        {/* <td>Unlimited</td> */}
                                                    </tr>
                                                    <tr>
                                                        <td>Mobile app support available   </td>
                                                        {/* <td>Unlimited</td> */}
                                                    </tr>
                                                    <tr>
                                                        <td>Knowledge base builder available   </td>
                                                        {/* <td>Unlimited</td> */}
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <div className="pricing-table-cnt-footer">
                                                <button type="button" className="btn btn-primary getBut" ><a className="getStartBut" href="https://calendly.com/girish-starlly/spectra-solution-demo?month=2020-09" target="_blank" >Book a Demo</a></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-8">
                                    <div className="mt-5">
                                        <h3 className="calculatePrice">Calculate your price</h3>
                                        <span className="deviceName">No of appliance/machine</span>
                                        <fieldset>
                                            <input className="priceCal" value={sites} onChange={(e) => this.siteChanges(e)} type="number" />
                                        </fieldset>
                                        <p className="totalPrice" > this is your total price:<h3 className="priceSite"> ${totalPrice} <span style={{ display: upfrontFee ? "inline" : 'none' }}>+ ${deposite}</span></h3></p>
                                    </div>
                                </div>
                                <div className="col-4 ">
                                    <div className="mt-5" style={{ display: connectForm ? 'none' : 'block', float: 'right', marginRight: '20px' }}>
                                        <button className="but connect" onClick={this.connectForm}>Lets connect</button>
                                    </div>
                                    <div style={{ display: connectForm ? 'block' : 'none' }}>
                                        <form id="contact" className="connectFormStyle" onSubmit={this.firstForm} >
                                            <fieldset style={{ display: 'none' }}>
                                                <input name="subject" placeholder="subject" subject value="Enquiry from Price Page" type="text" />
                                            </fieldset>
                                            <fieldset>
                                                <input name="namefirst" placeholder="company name" onChange={(e) => this.inputChangeHandler(e)} value={namefirst} type="text" />
                                            </fieldset>
                                            <fieldset>
                                                <input required name="emailfirst" placeholder="contact Email Id" onChange={(e) => this.inputChangeHandler(e)} value={emailfirst} type="email" />
                                            </fieldset>
                                            <fieldset>
                                                <input placeholder="contact Phone Number" name="phoneNofirst" type="tel" onChange={(e) => this.inputChangeHandler(e)} value={phoneNofirst} />
                                            </fieldset>
                                            <fieldset>
                                                <textarea placeholder="Brief explanation about your requrements" name="requrmentfirst" onChange={(e) => this.inputChangeHandler(e)} value={requrmentfirst}></textarea>
                                            </fieldset>
                                            <button name="submit" type="submit" >Submit</button>
                                        </form>
                                    </div>
                                </div>
                                {/* <div className="col-12">
                                    <form id="contact" className="connectFormStyle" onSubmit={this.firstForm} style={{ display: connectForm ? 'block' : 'none' }}>
                                        <fieldset style={{ display: 'none' }}>
                                            <input name="subject" placeholder="subject" subject value="Enquiry from Price Page" type="text" />
                                        </fieldset>
                                        <fieldset>
                                            <input name="namefirst" placeholder="company name" onChange={(e) => this.inputChangeHandler(e)} value={namefirst} type="text" />
                                        </fieldset>
                                        <fieldset>
                                            <input required name="emailfirst" placeholder="contact Email Id" onChange={(e) => this.inputChangeHandler(e)} value={emailfirst} type="email" />
                                        </fieldset>
                                        <fieldset>
                                            <input placeholder="contact Phone Number" name="phoneNofirst" type="tel" onChange={(e) => this.inputChangeHandler(e)} value={phoneNofirst} />
                                        </fieldset>
                                        <fieldset>
                                            <textarea placeholder="Brief explanation about your requrements" name="requrmentfirst" onChange={(e) => this.inputChangeHandler(e)} value={requrmentfirst}></textarea>
                                        </fieldset>
                                        <button name="submit" type="submit" >Submit</button>
                                    </form>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </section>
                <footer id="Contact" className="features footerCss" style={{ marginTop: '50px' }}>
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
            </div>)
    }
}