import React from 'react';
// import Data from './Data';

const Card = (props) => {
    return (
        <>
            <div className="col-lg-4 col-sm-6 col-12">
                <div className="card">
                    <img src={props.img} className="card-img-top" alt="cardImg" />
                    <div className="card-body">
                        <p className="card-text">
                            {props.content} Lorem ipsum dolor, sit met consectetur adipisicing elit. Vitae exercitationem </p>
                    </div>
                    <h1>Hello I'll working tomorrow</h1>
                    <div className="card-footer d-flex justify-content-between">
                        <button className='btn btn-primary'>{props.name}</button>
                        <p className='bg-dark'> $ 299 </p>
                        <button className='btn btn-warning'>Add to Card</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Card;
