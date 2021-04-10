
import img from '../image/img1.svg'

const Teampro = () => {
    return (
        <div className="card">
            <img src={img} alt="#" />
            <div className="center">
                <div className="row">
                    <h6>Pradumn GauR</h6>
                    <p><b>DSC Core Member</b></p>
                </div>
                <div className="row">
                    <div className="col s3">
                        <span class="material-icons">
                            facebook
                        </span></div>
                    <div className="col s3">
                    <span class="material-icons">
                            facebook
                        </span>
                    </div>
                        
                    <div className="col s3">
                    <span class="material-icons">
                            facebook
                        </span>
                    </div>
                    <div className="col s3">
                    <span class="material-icons">
                            facebook
                        </span>
                    </div>

                </div>
            </div>
        </div>
    )


}

export default Teampro;