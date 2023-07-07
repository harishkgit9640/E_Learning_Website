import React from 'react';

const Category = ({ filterData, item }) => {
    return (
        <div>
            <div className="row">
                <div className=" container mt-5  d-flex justify-content-around">
                    {item.map((value, index) => (
                        <div key={index}>
                            <button className='btn btn-warning' onClick={() => filterData(value)} >{value}</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Category;
