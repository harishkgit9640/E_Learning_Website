import React, { useEffect, useState } from 'react';
import Data from './Data';
import Card from './templates/Card';
import Category from './templates/Category';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

const newCategory = [...new Set(Data.map((val) => val.category)), "All"]

const Course = () => {
    const navigator = useNavigate();
    const [cookies, setcookies, removeCookies] = useCookies();
    const [data, setData] = useState(Data);
    const [item, setItem] = useState(newCategory);
    useEffect(() => {
        if (cookies["userName"] === undefined) {
            navigator("/login");
        }
    }, []);
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
