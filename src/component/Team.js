import { Component } from 'react';
import Teampro from './Teampro'



class Team extends Component {
    componentDidMount() {
        const M = window.M;
        document.addEventListener('DOMContentLoaded', function () {
            var elems = document.querySelectorAll('.carousel');
            var instances = M.Carousel.init(elems, {});
        });
    }
    render() {
        return (
            <div class="carousel">
                <a className="carousel-item" href="#one!"><Teampro/></a>
                <a className="carousel-item" href="#two!"><Teampro/></a>
                <a className="carousel-item" href="#three!"><Teampro/> </a>
                <a className="carousel-item" href="#four!"><Teampro/></a>
                <a className="carousel-item" href="#five!"><Teampro/> </a>
            </div>
        )
    }
}

export default Team;