import React from 'react'
// import Data from './Data'
import Card from './templates/Card'

const Course = () => {

    // const [data, setData] = useState(Data)
    const Data = [{ id: 1, name: "harish" }, { id: 2, name: "ganesh" }, { id: 3, name: "ravi" }, { id: 4, name: "raj" }];

    return (
        <div>
            <div className="container">
                <div className="jumbotron">
                    <h1 className="display-4 text-center">Course</h1>
                    <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto ut quae voluptatum dolore
                        iste ullam quibusdam esse nostrum harum quam omnis dolor, tenetur officiis dolores dolorum delectus,
                        veniam illum quasi.</p>
                </div>
            </div>
            <section className="container mt-5">
                <div className="row g-3">
                    {Data.map((item) => {
                        return (<Card name={item.name} />)
                    })}
                </div>
            </section>
        </div>
    )
}

export default Course
