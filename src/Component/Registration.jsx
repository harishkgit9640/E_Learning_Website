import React from 'react'

const Registration = () => {
    return (
        <div>
            <div class="container my-5">
                <div class="row">
                    <div class="col-md-10 mx-auto">
                        <div class="contact-form">
                            <h1 class="text-primary text-center">Student Admission Form</h1>
                            <p class="hint-text text-center mb-5">Please fill the required fields</p>
                            {/* form start */}
                            <div class="border rounded px-3 pt-3">
                                <form method="post" action="#" enctype="multipart/form-data">
                                    <div class="row mt-3">
                                        <div class="form-group col-md-4">
                                            <label for="fname">First Name</label>
                                            <input type="text" class="form-control" name="fname" id="fname" required />
                                        </div>
                                        <div class="form-group col-md-4">
                                            <label for="mname">Middle Name</label>
                                            <input type="text" class="form-control" name="mname" id="mname" />
                                        </div>
                                        <div class="form-group col-md-4">
                                            <label for="lname">Last Name</label>
                                            <input type="text" class="form-control" name="lname" id="lname" />
                                        </div>
                                    </div>
                                    <div class="row mt-3">
                                        <div class="form-group col-md-4">
                                            <label for="gender">Gender</label>
                                            <select name="gender" class="form-select" id="gender" required>
                                                <option hidden>Choose Gender..</option>
                                                <option value="Male">Male</option>
                                                <option value="Female">Female</option>
                                                <option value="Others">Others</option>
                                            </select>
                                        </div>
                                        <div class="form-group col-md-4">
                                            <label for="dob">Date of Birth</label>
                                            <input type="date" class="form-control" name="dob" id="dob" required />
                                        </div>
                                        <div class="form-group col-md-4">
                                            <label for="number">Mobile Number</label>
                                            <input type="text" class="form-control" name="phone1" id="number" required />
                                        </div>
                                    </div>
                                    <div class="row mt-3">
                                        <div class="form-group col-md-4">
                                            <label for="number">Qualification</label>
                                            <input type="text" class="form-control" name="phone2" id="number" />
                                        </div>
                                        <div class="form-group col-md-4">
                                            <label for="inputEmail4">Email</label>
                                            <input type="email" class="form-control" name="email" id="inputEmail4" required />
                                        </div>
                                        <div class="form-group col-md-4">
                                            <label for="Subject">Subject</label>
                                            <select name="class" id="class" class="form-select">
                                                <option hidden>Choose Subject..</option>
                                                <option value="1">one</option>
                                                <option value="1">two</option>
                                                <option value="1">three</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="row mt-3">
                                        <div class="form-group col-6">
                                            <label for="add1">Current Address</label>
                                            <input type="text" class="form-control" name="add1" id="add1" required />
                                        </div>
                                        <div class="form-group col-6">
                                            <label for="inputAddress2">Permanent Address</label>
                                            <input type="text" class="form-control" name="add2" id="inputAddress2" />
                                        </div>
                                    </div>
                                    <div class="row mt-3">
                                        <div class="form-group col-md-6">
                                            <label for="city">City</label>
                                            <input type="text" class="form-control" name="city" id="city" required />
                                        </div>
                                        <div class="form-group col-md-4">
                                            <label for="inputState">State</label>
                                            <select name="state" id="inputState" class="form-select">
                                                <option hidden>Choose State..</option>
                                                <option value="Chhattisgarh">Chhattisgarh</option>
                                                <option value="Madhya Pradesh">Madhya Pradesh</option>
                                                <option value="Uttar Pradesh">Uttar Pradesh</option>
                                                <option value="Andhra Pradesh">Andhra Pradesh</option>
                                                <option value="Odisa">Odisa</option>
                                                <option value="Bihar">Bihar</option>
                                                <option value="Punjab">Punjab</option>
                                            </select>
                                        </div>
                                        <div class="form-group col-md-2">
                                            <label for="zip">Zip</label>
                                            <input type="text" class="form-control" name="zip" id="zip" />
                                        </div>
                                    </div>
                                    <div class="row mt-3">
                                        <div class="form-group">
                                            <label for="photo">Choose Picture</label>
                                            <input type="file" name="std_photo" class="form-control" id="photo" required />
                                        </div>
                                    </div>

                                    <div class="form-group my-3">
                                        <button type="submit" name="submit" class="btn btn-success">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Registration
