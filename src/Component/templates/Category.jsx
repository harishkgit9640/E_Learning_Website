import React from 'react';

const Category = ({ filterData, item }) => {
    return (
        <>
            <div className="row">
                <div className=" container mt-5  d-flex justify-content-around">
                    {item.map((value, index) => (
                        <>
                            <button className='btn btn-warning' key={index} onClick={() => filterData(value)} >{value}</button>
                        </>

                    ))}
                </div>
            </div>
        </>
    );
};

export default Category;
