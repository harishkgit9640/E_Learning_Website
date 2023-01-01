import React from 'react';
const Card = (props) => {
    let Img = 'https://picsum.photos/500/250';
    return (
        <>
            <div className="col-lg-4 col-sm-6 col-12">
                <div className="card" >
                    <img src={Img} className="card-img-top" alt="cardImg" />
                    <div className="card-body">
                        <p className="card-text">
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </p>
                        <p>{props.name}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Card;
