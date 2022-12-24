import React from 'react'

const Contact = () => {
    return (
        <div>
            <div class="container">
                <div class="col-md-6 col-sm-6 mx-auto">
                    <form method="post" action="#">
                        <div class="row g-3">
                            <div class="col-12">
                                <label for="inputName" class="form-label">Full Name</label>
                                <input type="text" class="form-control" id="inputName" />
                            </div>
                            <div class="col-12">
                                <label for="inputEmail4" class="form-label">Email</label>
                                <input type="email" class="form-control" id="inputEmail4" />
                            </div>
                            <div class="col-12">
                                <label for="inputNumber" class="form-label">Phone</label>
                                <input type="text" class="form-control" id="inputNumber" />
                            </div>
                            <div class="col-12">
                                <label for="inputMessage" class="form-label">Message</label>
                                <textarea name="message" class="form-control" id="inputMessage" cols="auto" rows="5"></textarea>
                            </div>

                            <div class="col-12">
                                <button type="submit" class="btn btn-primary">Submit</button>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
