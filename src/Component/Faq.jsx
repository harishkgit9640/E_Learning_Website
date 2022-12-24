import React from 'react'

const Faq = () => {
    return (
        <div>
            {/* accordion section  */}
            <section class="container mb-5 ">
                <div class="title text-center my-5">
                    <h2 class="text-primary">FAQ's</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, ducimus.</p>
                </div>
                <div class="col-md-10 col-lg-8 mx-auto bg-dark">

                    <div class="accordion" id="accordionExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingOne">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    What The Course Duration?
                                </button>
                            </h2>
                            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
                                data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <strong>This is the first item's accordion body.</strong> It is shown by default, until the
                                    collapse plugin adds the appropriate classes that we use to style each element. These
                                    classes
                                    control the overall appearance, as well as the showing and hiding via CSS transitions. You
                                    can
                                    modify any of this with custom CSS or overriding our default variables. It's also worth
                                    noting
                                    that just about any HTML can go within the <code>.accordion-body</code>, though the
                                    transition
                                    does limit overflow.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingTwo">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    Would you provide Certificate After Completion course?
                                </button>
                            </h2>
                            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
                                data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <strong>This is the second item's accordion body.</strong> It is hidden by default, until
                                    the
                                    collapse plugin adds the appropriate classes that we use to style each element. These
                                    classes
                                    control the overall appearance, as well as the showing and hiding via CSS transitions. You
                                    can
                                    modify any of this with custom CSS or overriding our default variables. It's also worth
                                    noting
                                    that just about any HTML can go within the <code>.accordion-body</code>, though the
                                    transition
                                    does limit overflow.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingThree">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    What are the Course Curriculum?
                                </button>
                            </h2>
                            <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree"
                                data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <strong>This is the third item's accordion body.</strong> It is hidden by default, until the
                                    collapse plugin adds the appropriate classes that we use to style each element. These
                                    classes
                                    control the overall appearance, as well as the showing and hiding via CSS transitions. You
                                    can
                                    modify any of this with custom CSS or overriding our default variables. It's also worth
                                    noting
                                    that just about any HTML can go within the <code>.accordion-body</code>, though the
                                    transition
                                    does limit overflow.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    )
}

export default Faq
