import React from 'react';
// import Data from './Data';

const Card = (props) => {
    return (
        <>
            <div className="col-lg-4 col-sm-6 col-12">
                <div className="card" >
                    <img src={props.img} className="card-img-top" alt="cardImg" />
                    <div className="card-body">
                        <p className="card-text">
                            {props.content}
                        </p>
                        <p>{props.name}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Card;
