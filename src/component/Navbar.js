import img from '../image/Dsclogoims1.png'
import { Component } from 'react';
import Home from './Home'
import About from './About'
import Team from './Team'
import Contact from './Contact'
import './css/navbar.css';

class Navbar extends Component {
    componentDidMount() {
        const M = window.M;
        document.addEventListener('DOMContentLoaded', function () {
            var elems = document.querySelectorAll('.sidenav');
            var instances = M.Sidenav.init(elems, {});
        });

    }


    render() {
        return (
            <>
                <nav className="black lighten">
                    <div className="nav-wrapper container">
                        <li className="brand-logo">
                        <img src={img} style={{width:"350px",height:"60px", marginLeft:"100px"}}/>
                        </li>
                        <a href="/" className="sidenav-trigger " data-target="mobile-links">
                            <i className="material-icons">menu</i>
                        </a>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li><a href="#home">Home</a></li>
                            <li><a href="#team">Team</a></li>
                            <li><a href="/tech">Techonolgy</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>
                </nav>
                <ul className="sidenav black" id="mobile-links">
                    <li ><a style={{ color: `white` }} href="#home">Home</a></li>
                    <li ><a style={{ color: `white` }} href="#team">Team</a></li>
                    <li ><a style={{ color: `white` }} href="#tech">Techonolgy</a></li>
                    <li ><a style={{ color: `white` }} href="#about">About</a></li>
                    <li ><a style={{ color: `white` }} href="/contact">Contact</a></li>
                </ul>
                <div>
                    <section id="home" style={{ padding: "15px" }}>
                        <Home />
                    </section>
                    <section id="about" style={{ padding: "15px" }}>
                        <About />
                    </section>
                    <section id="team" style={{ padding: "15px" }}>
                        <Team />
                    </section>
                    <section id="contact" style={{ padding: "15px" }}>
                        <Contact />
                    </section>
                </div>
            </>
        )
    }

}


export default Navbar;