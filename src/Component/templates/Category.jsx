import React from 'react';

const Category = ({ filterData, item }) => {
    return (
        <>
            <div className="row">
                <div className=" mt-5 menu-tab d-flex justify-content-around">
                    {item.map((value, index) => (
                        <button className='btn btn-warning' onClick={() => filterData(value)} key={index} >{value}</button>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Category;
