import React from 'react'

const Contact = () => {
    return (
        <div>
            <div className="container">
                <div className="col-md-6 col-sm-6 mx-auto">
                    <form method="post" action="#">
                        <div className="row g-3">
                            <div className="col-12">
                                <label for="inputName" className="form-label">Full Name</label>
                                <input type="text" className="form-control" id="inputName" />
                            </div>
                            <div className="col-12">
                                <label for="inputEmail4" className="form-label">Email</label>
                                <input type="email" className="form-control" id="inputEmail4" />
                            </div>
                            <div className="col-12">
                                <label for="inputNumber" className="form-label">Phone</label>
                                <input type="text" className="form-control" id="inputNumber" />
                            </div>
                            <div className="col-12">
                                <label for="inputMessage" className="form-label">Message</label>
                                <textarea name="message" className="form-control" id="inputMessage" cols="auto" rows="5"></textarea>
                            </div>

                            <div className="col-12">
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
