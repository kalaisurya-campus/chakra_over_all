import React from "react";
import "./style/Home.scss";
import ScrollToTop from "react-scroll-to-top";
import { FaInstagram, FaFacebook, FaTwitter, FaGithub } from "react-icons/fa";
import { IconButton } from "@chakra-ui/button";
import Icon from "@chakra-ui/icon";
import { NavLink } from "react-router-dom";
import { auth } from "../../firebase";
import { useHistory } from "react-router-dom";
import {
    DiReact,
    DiHtml5,
    DiJavascript,
    DiBootstrap,
    DiCss3,
    DiAndroid,
} from "react-icons/di";
import DataSlice from "../dataslice/DataSlice";

function Home(props) {
    const usedata = useHistory();
    return (
        <div className="container home mt-5">
            <div
                className="text-end"
                onClick={() => {
                    auth.signOut();
                    usedata.push("/signup");
                }}
            >
                Logout
            </div>
            <div className="inside">
                <div className="left_inside">
                    <h1 className="hi">Hi, I Am</h1>
                    <h1 className="kalaisurya">kalaisurya</h1>
                    <p className="react">React Developer Fresher's</p>
                    <button className="read mt-3">Read More...</button>
                </div>
                <div className="right_inside">
                    <div className="round"></div>
                    <div className="dog_image">
                        <img
                            src="https://picsum.photos/id/237/200/300"
                            className="dog"
                        />
                    </div>
                </div>
            </div>
            <div className="box-skills mb-5">
                <div className="icons">
                    <Icon
                        as={FaFacebook}
                        onClick={() => window.open("https://www.facebook.com/")}
                        boxSize={58}
                    />
                    <Icon
                        as={FaGithub}
                        onClick={() => window.open("https://www.github.com/")}
                        boxSize={58}
                    />
                    <Icon
                        as={FaInstagram}
                        onClick={() =>
                            window.open("https://www.instagram.com/")
                        }
                        boxSize={58}
                    />
                    <Icon
                        as={FaTwitter}
                        onClick={() => window.open("https://www.twitter.com/")}
                        boxSize={58}
                    />
                </div>
            </div>
            <div className="experience mt-5 mb-3">
                <div className="box1">
                    4+ Month<br />
                    Experience
                </div>
                <div className="box2">
                    <Icon as={DiReact} w="44" h="44" />
                    <p className="racts mt-4">React</p>
                </div>
                <div className="box3">
                    <Icon w="44" h="44" as={DiHtml5} />
                    <p className="racts mt-4">Html</p>
                </div>
                <div className="box4">
                    <Icon w="44" h="44" as={DiCss3} />
                    <p className="racts mt-4">Css</p>
                </div>
            </div>
            <div className="another_box mb-5 mt-5">
                <div className="box5">
                    <Icon w="44" h="44" as={DiJavascript} />
                    <p className="racts mt-4">JavaScript</p>
                </div>
                <div className="box6">
                    <Icon w="44" h="44" as={DiBootstrap} />
                    <p className="racts mt-4">Bootstrap</p>
                </div>
                <div className="box7">
                    <Icon w="44" h="44" as={DiAndroid} />
                    <p className="reacts mt-4">React Chakra</p>
                </div>
            </div>

            <div className="datas_introductions mt-5 mb-5">
                <DataSlice />
            </div>
            <div>
                <NavLink to="/signup">signup</NavLink>
            </div>
        </div>
    );
}

export default Home;
