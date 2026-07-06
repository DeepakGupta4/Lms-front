import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { HiXMark } from "react-icons/hi2";
import { IoMdCheckmark } from "react-icons/io";
import AOS from "aos";
import 'aos/dist/aos.css';

const Services = () => {

  useEffect(() => {
    AOS.init({
      disable: false,
      startEvent: 'DOMContentLoaded',
      initClassName: 'aos-init',
      animatedClassName: 'aos-animate',
      useClassNames: false,
      disableMutationObserver: false,
      debounceDelay: 50,
      throttleDelay: 99,

      offset: 100,
      delay: 0,
      duration: 900,
      easing: 'ease', 
      once: false,
      mirror: true,
      anchorPlacement: 'top-bottom',
    })
  },[])
  

    return (
        <>
            <div className="servicespage">
                <div className="topservices">
                    <div className="container">
                        <h2>Deepak Gupta Services</h2>
                        <p>Freelancer <span>&gt;</span> Services</p>
                    </div>
                </div>
                <div className="centerservices">
                    <div className="container">
                        <div className="cservicesbox">
                            <div className="csservice" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                                <span>01</span>
                                <div>
                                    <h2>FrontendDeveloper</h2>
                                    <img src="https://png.pngtree.com/png-vector/20230318/ourmid/pngtree-front-end-line-icon-vector-png-image_6656345.png" alt="Frontend Logo Icon" />
                                </div>
                                <ul>
                                    <li>Optimized performance and fast load times</li>
                                    <li>Scalable and reusable components</li>
                                    <li>Cross-platform responsiveness</li>
                                    <li>Rigorous quality assurance and testing</li>
                                    <li>Regular updates, maintenance, and bug fixes</li>
                                </ul>
                                <p>
                                    I specialize in frontend development, offering dependable services to build user-friendly, high-performing applications tailored to your business needs.
                                </p>
                            </div>

                            

                            <div className="csservice" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                                <span>02</span>
                                <div>
                                    <h2>Web Develpment</h2>
                                    <img src="/website_icon.svg" alt="Web Development Icon" />
                                </div>
                                <ul>
                                    <li>Prefomance & Load Time</li>
                                    <li>Reusable Components</li>
                                    <li>Responsiveness</li>
                                    <li>Quality assurance and testing.</li>
                                    <li>Quality maintenance, updates, and bug fixes.</li>
                                </ul>
                                <p>
                                    I am very good in web development offering services, i offer reliable web developement services to generate the remarkable results which your business need
                                </p>
                            </div>

                            <div className="csservice" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                                <span>03</span>
                                <div>
                                    <h2>BackendDeveloper</h2>
                                    <img src="https://cdn-icons-png.flaticon.com/512/6213/6213731.png" alt="Backend Development Icon" />
                                </div>
                                <ul>
                                    <li>Performance optimization</li>
                                    <li>Scalable models</li>
                                    <li>Cross-platform compatibility</li>
                                    <li>Quality assurance</li>
                                    <li>Maintenance and updates</li>
                                </ul>
                                <p>
                                    I excel in delivering Backend solutions, providing reliable and scalable practices to enhance performance, streamline processes.
                                </p>
                            </div>

                            {/* <div className="csservice" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                                <span>05</span>
                                <div>
                                    <h2>Game Development</h2>
                                    <img src="/img/game.svg" alt="Game Development Icon" />
                                </div>
                                <ul>
                                    <li>Crafting high-performance and immersive games</li>
                                    <li>Delivering engaging gameplay mechanics</li>
                                    <li>Comprehensive testing for seamless performance</li>
                                    <li>Providing regular updates and support</li>
                                </ul>
                                <p>
                                    As a game developer, I bring your vision to life with expertly designed, captivating gaming experiences that are tailored to exceed.
                                </p>
                            </div> */}

                            {/* <div className="csservice" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                                <span>03</span>
                                <div>
                                    <h2>DevOps Solutions</h2>
                                    <img src="/img/dev.svg" alt="DevOps Icon" />
                                </div>
                                <ul>
                                    <li>Continuous Integration and Deployment (CI/CD)</li>
                                    <li>Infrastructure as Code (IaC)</li>
                                    <li>Cloud Automation and Management</li>
                                    <li>Performance Monitoring and Optimization</li>
                                    <li>Streamlined Collaboration and Workflow</li>
                                </ul>
                                <p>
                                    I excel in delivering DevOps solutions, providing reliable and scalable practices to enhance performance, streamline processes.
                                </p>
                            </div> */}

                            <div className="csservice" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                                <span>04</span>
                                <div>
                                    <h2>Video Editing</h2>
                                    <img src="/editing.svg" alt="Video Editing Icon" />
                                </div>
                                <ul>
                                    <li>Seamless performance and efficient rendering</li>
                                    <li>Creative storytelling and transitions</li>
                                    <li>Quality assurance and precision editing</li>
                                    <li>Regular updates and final touch-ups</li>
                                </ul>
                                <p>
                                    I offer professional video editing services, delivering captivating visual content that resonates with your audience and achieves your business goals.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pricingplansec">
                    <div className="container">
                        <div className="pricingtitles text-center">
                            <h3><img src="/chevron_right.png" alt="" /> PRICING PLAN</h3>
                            <h2>Pricing My Work</h2>
                        </div>
                        <div className="pricingcards">
                            <div className="pricingcard" data-aos="fade-up" data-aos-duration="2000">
                                <h4>Video Editing</h4>
                                <p>Perfect for YouTubers, Influencers & Reels Creators</p>
                                <h2>$10.00 <span>Per Minute</span></h2>
                                <Link to="/contact"><button>Get Started</button></Link>
                                <div>
                                    <h5>Includes:</h5>
                                    <ul>
                                        <li><IoMdCheckmark /> HD Video Editing</li>
                                        <li><IoMdCheckmark /> Basic and Adv Color Correction</li>
                                        <li><IoMdCheckmark /> Smooth Transitions & Cuts</li>
                                        <li><IoMdCheckmark /> Royalty-Free Music</li>
                                        <li><IoMdCheckmark /> Custom Motion Graphics</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="pricingcard" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                                <h4>Full Stack Pro Plan</h4>
                                <p>Perfect for Website + App + Admin — All in One</p>
                                <h2>$120.00 <span>Web/App</span></h2>
                                <Link to="/contact"><button>Start Your Project</button></Link>
                                <div>
                                    <h5>What You Get:</h5>
                                    <ul>
                                        <li><IoMdCheckmark /> Full Website (Frontend + Backend)</li>
                                        <li><IoMdCheckmark /> Android App</li>
                                        <li><IoMdCheckmark /> Admin Dashboard</li>
                                        <li><IoMdCheckmark /> Payment & Database Setup</li>
                                        <li><IoMdCheckmark /> Real-time Database Integration </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="pricingcard" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                                <h4>Pro + Tech Plan</h4>
                                <p>Perfect for AI Development & Game Development</p>
                                <h2>$60.00 <span>Monthly</span></h2>
                                <Link to="/contact"><button>Get Started Now</button></Link>
                                <div>
                                    <h5>Pro Features Include:</h5>
                                    <ul>
                                        <li><IoMdCheckmark /> AI-Powered Tools & Automation</li>
                                        <li><IoMdCheckmark /> 2D/3D Game Development (Unity/Unreal)</li>
                                        <li><IoMdCheckmark /> Powerful Admin Dashboard</li>
                                        <li><HiXMark /> Multilingual Support</li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Services;
