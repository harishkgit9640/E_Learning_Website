import React from 'react'

const Home = () => {
    return (
        <div>
            <div className="container my-3">
                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="https://picsum.photos/500/250?love" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="https://picsum.photos/500/250?hate" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="https://picsum.photos/500/250?both" className="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
                        data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
                        data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Home
