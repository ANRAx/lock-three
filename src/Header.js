import React from 'react';
import Particles from 'react-particles-js';

class Header extends React.Component {
    render() {
        return(
            <div>
                <header className="fixed w-100 shadow-3">
                    <Particles
                        height="95px"
                        params={{
                            particles: {
                                number: {
                                    value: 300,
                                    density: {
                                        enable: true,
                                        value_area: 1200
                                    }
                                },
                                color: {
                                    value: "#ffffff"
                                },
                                shape: {
                                    type: "polygon",
                                    stroke: {
                                        width: 0,
                                        color: "#23450"
                                    },
                                    polygon: {
                                        nb_sides: 5
                                    },
                                },
                                move: {
                                    attract: {
                                        enable: true
                                    }
                                },
                                size: {
                                    value: 3,
                                    anim: {
                                        enable: true,
                                        speed: 40,
                                        size_min: 0.1,
                                        sync: true
                                    }
                                },
                                line_linked: {
                                    enable: true,
                                    distance: 205.17838682439088,
                                    color: "#ffffff",
                                    opacity: 0.4,
                                    width: 1
                                }
                            }
                        }}
                    />
                </header>
                <img className="logo mv1 mh3" src={require("./assets/logo512.png")} alt="" />
            </div>
        );
    }
}

export default Header;