import React from 'react'
import Counter from '../Counter'

const Blog = () => {
    return (
        <div>
            <div className="container">
                <div className="jumbotron">
                    <h1 className="display-4 text-center">Our Blog</h1>
                    <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto ut quae voluptatum dolore
                        iste ullam quibusdam esse nostrum harum quam omnis dolor, tenetur officiis dolores dolorum delectus,
                        veniam illum quasi.</p>
                </div>
            </div>
            <Counter />
        </div>
    )
}

export default Blog
