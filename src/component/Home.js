import img from '../image/img1.svg'
import './css/home.css';



const Home = () => {
    return (
        <div className="container">
            <div className="row center" id="grid">
                <div className="col s12 m12 l6 " id="grid1">
                    <h2>Developer Student Club IMSEC</h2>
                    <blockquote >Developer Student Clubs is a <span style={{color:"blue"}}>G</span> <span style={{color:"red"}}>o</span> <span style={{color:'yellow'}}>o</span> <span style={{color:"blue"}}>g</span> <span style={{color:"gray"}}>l</span> <span style={{color:'red'}}>e</span>  Developers program
                    for university students to learn mobile and web
                     development skills, <span style={{color:'red'}}>design thinking skills</span> and <span style={{color:"green"}}>leadership skills.</span></blockquote>
                </div>
                <div className="col s12 m12 l6 center" id="grid2">
                    <img src={img} alt="#" />
                </div>

            </div>
            <div className="col s3" id="grid3">
            <a href="https://developers.google.com/community/dsc" className="waves-effect waves-light btn blue center" >
            Learn More</a>
            </div>
        </div>
    )
}

export default Home;