import React from 'react'

const About = () => {
    return (
        <div>
            <div className="container">
                <div className="jumbotron">
                    <h1 className="display-4 text-center">About Us</h1>
                    <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto ut quae voluptatum dolore
                        iste ullam quibusdam esse nostrum harum quam omnis dolor, tenetur officiis dolores dolorum delectus,
                        veniam illum quasi.</p>
                </div>
            </div>


            <section className="container">
                <div className="title text-center my-5">
                    <h2 className="text-primary">About</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, ducimus.</p>
                </div>
                <div className="row g-2">
                    <div className="image col-6">
                        <img src="https://picsum.photos/500/250?both" alt='' />
                    </div>
                    <div className="content col-6 text-start">
                        <h1 className="text-primary">Know About Us</h1>
                        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores dicta nemo eaque possimus,
                            iusto
                            dolore earum explicabo id voluptas quod voluptates vitae animi aliquid, in voluptatem provident
                            dolore earum explicabo id voluptas quod voluptates vitae animi aliquid, in voluptatem provident
                            modi
                            repudiandae maxime.</p>
                        {/* <Link href="#" className="btn btn-primary">Read more...</Link> */}
                    </div>
                </div>
            </section>
        </div>

    )
}

export default About
