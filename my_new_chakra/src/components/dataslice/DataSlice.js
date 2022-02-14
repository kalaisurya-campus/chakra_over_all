import React, { useEffect } from "react";
import "./styles/DataSlice.scss";
import {
    DiReact,
    DiHtml5,
    DiJavascript,
    DiBootstrap,
    DiCss3,
    DiAndroid,
} from "react-icons/di";
import Icon from "@chakra-ui/icon";
import AOS from "aos";
import "aos/dist/aos.css";

function DataSlice(props) {
    useEffect(() => {
        AOS.init();
    });
    return (
        <>
            <div class="container mt-5 mb-5">
                <div class="row">
                    <div class="col-md-12">
                        <div class="Yearly-timeline">
                            <div class="timeline" data-aos="fade-left">
                                <a href="" class="timeline-content">
                                    <div class="timeline-icon">
                                        {/* <i class="fa fa-instagram"></i> */}
                                        <Icon as={DiReact} w="40" h="40" />
                                    </div>
                                    <h3 class="title">ReactJs</h3>
                                    <p
                                        class="description"
                                        data-aos="fade-right"
                                    >
                                        React was originally created by Jordan
                                        Walke. Today, React has over a thousand
                                        open source contributors. What is
                                        ReactDOM? ReactDOM is a package that
                                        provides DOM specific methods that can
                                        be used at the top level of a web app to
                                        enable an efficient way of managing DOM
                                        elements of the web page.
                                    </p>
                                </a>
                            </div>
                            <div class="timeline" data-aos="fade-right">
                                <a href="" class="timeline-content">
                                    <div class="timeline-icon">
                                        {/* <i class="fa fa-twitter"></i> */}
                                        <Icon as={DiJavascript} w="40" h="40" />
                                    </div>
                                    <h3 class="title">JavaScript</h3>
                                    <p
                                        class="description"
                                        data-aos="fade-right"
                                    >
                                        JavaScript is a cross-platform,
                                        object-oriented scripting language used
                                        to make webpages interactive (e.g.,
                                        having complex animations, clickable
                                        buttons, popup menus, etc.). There are
                                        also more advanced server side versions
                                        of JavaScript such as Node.js, which
                                        allow you to add more functionality to a
                                        website than downloading files (such as
                                        realtime collaboration between multiple
                                        computers). Inside a host environment
                                        (for example, a web browser), JavaScript
                                        can be connected to the objects of its
                                        environment to provide programmatic
                                        control over them.
                                    </p>
                                </a>
                            </div>
                            <div class="timeline" data-aos="fade-left">
                                <a href="" class="timeline-content">
                                    <div class="timeline-icon">
                                        {/* <i class="fa fa-facebook"></i> */}
                                        <Icon as={DiHtml5} w="40" h="40" />
                                    </div>
                                    <h3 class="title">Html</h3>
                                    <p
                                        class="description"
                                        data-aos="fade-right"
                                    >
                                        HTML stands for Hyper Text Markup
                                        Language,it is the standard markup
                                        language for creating Web pages ,
                                        describes the structure of a Web page
                                        ,consists of a series of elements
                                        ,elements tell the browser how to
                                        display the content,elements label
                                        pieces of content such as "this is a
                                        heading", "this is a paragraph", "this
                                        is a link", etc.
                                    </p>
                                </a>
                            </div>
                            <div class="timeline" data-aos="fade-right">
                                <a href="" class="timeline-content">
                                    <div class="timeline-icon">
                                        {/* <i class="fa fa-linkedin"></i> */}
                                        <Icon as={DiCss3} w="40" h="50" />
                                    </div>
                                    <h3 class="title">Css</h3>
                                    <p class="description" data-aos="fade-left">
                                        CSS stands for Cascading Style Sheets
                                        CSS describes how HTML elements are to
                                        be displayed on screen, paper, or in
                                        other media CSS saves a lot of work. It
                                        can control the layout of multiple web
                                        pages all at once External stylesheets
                                        are stored in CSS files
                                    </p>
                                </a>
                            </div>
                            <div class="timeline" data-aos="fade-left">
                                <a href="" class="timeline-content">
                                    <div class="timeline-icon">
                                        {/* <i class="fa fa-linkedin"></i> */}
                                        <Icon as={DiBootstrap} w="40" h="40" />
                                    </div>
                                    <h3 class="title">Bootstrap</h3>
                                    <p class="description" data-aos="fade-right">
                                        Get started with Bootstrap, the world’s
                                        most popular framework for building
                                        responsive, mobile-first sites, with
                                        BootstrapCDN and a template starter
                                        page.
                                    </p>
                                </a>
                            </div>
                            <div class="timeline" data-aos="fade-right">
                                <a href="" class="timeline-content">
                                    <div class="timeline-icon">
                                        <i class="fa fa-linkedin"></i>
                                    </div>
                                    <h3 class="title">chakra Ui</h3>
                                    <p class="description" data-aos="fade-left">
                                        Chakra UI is a powerful component
                                        library for React that is designed and
                                        developed by Segun Adebayo to build
                                        front-end applications. The Chakra UI
                                        comes with simple yet easy-to-understand
                                        documentation that gives us guidelines
                                        on how to build a reusable component,
                                        thereby reducing the time spent on
                                        building the process while focusing on
                                        other aspects of the app. The Chakra-UI
                                        GitHub repository has 18.6k stars and
                                        has been forked 1.5k times. In this
                                        article, we’ll learn how to implement
                                        the Chakra-UI Dark Mode when you click
                                        on the button in React.js.
                                    </p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DataSlice;
