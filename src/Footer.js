import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faLinkedin, faTwitterSquare } from '@fortawesome/free-brands-svg-icons'

class Footer extends React.Component {
    render() {
        return (
            <div>
                <footer className="bg-light-purple fixed w-100 bottom-0 shadow-3">
                    <div className="mh1 tl ficonrow pa0 pl1 mv3 ficons">
                        <a href="https://www.facebook.com/NebulaAcademyNY/">
                            <FontAwesomeIcon
                                className="pr2 ficon"
                                icon={faFacebookSquare}
                                size="2x"
                                color="#ffffff"
                            />
                        </a>
                        <a href="https://www.linkedin.com/company/nebulaacademy/">
                            <FontAwesomeIcon
                                className="pr2 ficon"
                                icon={faLinkedin}
                                size="2x"
                                color="#ffffff"
                            />
                        </a>
                        <a href="https://twitter.com/nynebula">
                            <FontAwesomeIcon
                                className="pr2 ficon"
                                icon={faTwitterSquare}
                                size="2x"
                                color="#ffffff"
                            />
                        </a>
                    </div>
                    {/* bg-light-purple fixed left-0 bottom-0 right-0 */}
                </footer>
                <h6 className="tc pr3 footertext bottom-0 top-0">&copy;Nebula Academy</h6>
            </div> 
        );
    }
}

export default Footer;