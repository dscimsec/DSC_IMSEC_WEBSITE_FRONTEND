
import img from '../images/img1.svg'

const TeamMember = ({name,designation,profiles}) => {
    return (
        <div className="card">
            <img src={img} alt="#" />
            <div className="center">
                <div className="row">
                    <h6>PARADUMN gAUR</h6>
                    <p><b>CORE</b></p>
                </div>
                <div className="row">
                    <div className="col s3">
                        <span className="material-icons">
                            facebook
                        </span></div>
                    <div className="col s3">
                    <span className="material-icons">
                            facebook
                        </span>
                    </div>
                        
                    <div className="col s3">
                    <span className="material-icons">
                            facebook
                        </span>
                    </div>
                    <div className="col s3">
                    <span className="material-icons">
                            facebook
                        </span>
                    </div>

                </div>
            </div>
        </div>
    )


}

export default TeamMember;