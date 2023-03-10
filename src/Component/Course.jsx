import React, { useState } from 'react';
import Data from './Data';
import Card from './templates/Card';
import Category from './templates/Category';


const newCategory = [...new Set(Data.map((val) => val.category)), "All"]

const Course = () => {
    const [data, setData] = useState(Data);
    const [item, setItem] = useState(newCategory);

    const filterData = (category) => {
        if (category === "All") {
            setData(Data);
            return;
        }
        let updateVal = Data.filter((ele) => {
            return category === ele.category;
        });
        setData(updateVal);
    }
    return (
        <>
            <div className="container my-5">
                <h1 className="text-center text-primary">OUR COURSES</h1>
                <Category filterData={filterData} item={item} />
            </div>
            <Card data={data} />
        </>
    );
};

export default Course;
