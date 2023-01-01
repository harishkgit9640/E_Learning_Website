import React from 'react'
// import Data from './Data'
import Card from './templates/Card'

const Course = () => {

    // const [data, setData] = useState(Data)
    const Data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

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
                    {Data.map((...item) => {
                        <Card key={item.id} />
                    })}
                </div>
            </section>
        </div>
    )
}

export default Course
