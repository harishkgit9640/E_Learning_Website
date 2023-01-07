import React from 'react';
const Card = ({ data }) => {
  return (
    <>
      <div className="container  col-10 mx-auto mt-5 d-flex">
        <div className="row g-3">
          {data.map((curVal) => {
            const { id, course, img, desc, category } = curVal;
            return (
              <>
                <div className="col-12 col-md-4 col-lg-4 col-xl-4">
                  <div className="card">
                    <img src={img} alt="Course" className="img-fluid" />
                    <div className="card-body">
                      <h5 className="card-title" key={id}>
                        {course}
                      </h5>
                      <h3>{category}</h3>
                      <p className="card-text">{desc}</p>
                      <div className="buttons d-flex">
                        <button className="btn btn-warning flex-fill"> + Add Cart</button>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Card;
