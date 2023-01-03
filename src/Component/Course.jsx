import React from 'react'
import Data from './Data';
import Card from './templates/Card'

const Course = () => {

    // const [data, setData] = useState(Data)

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
            <div className="container filter">
                <div className="row g-3">
                    <div className="col-lg-8 col-sm-8 col-12 d-flex">
                        <button className='btn btn-success' >All</button>
                        <button className='btn btn-primary' >Web Development</button>
                        <button className='btn btn-secondary' >App Development</button>
                        <button className='btn btn-warning' >Full Stack Java</button>
                        <button className='btn btn-info' >Full Stack Python</button>
                    </div>
                </div>
            </div>
            <section className="container mt-5">
                <div className="row g-3">
                    {Data.map((item) => {
                        return (<Card
                            img={item.img}
                            content={item.content}
                            name={item.name} />)
                    })}
                </div>
            </section>
        </div>
    )
}

export default Course
