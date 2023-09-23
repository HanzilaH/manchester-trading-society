import React from "react";
import "./Jumbotron.css";
const Jumbotron = () => {
  const redirectToStudentUnionWebsite = () => {
    window.location.href = "https://manchesterstudentsunion.com";
  };
  return (
    <>
      <div className="m-4">
        <div className="row ">
          <div className="col-md-11 mx-auto  ">
            <div className="p-4 text-center">
              <h1 className="display-5">Manchester Trading Society</h1>
              <p className="lead">
                “Financial freedom is available to those who learn about it and
                work for it.”
              </p>
              <hr className="my-4" />
              <p>Explore a world of financial expertise.</p>
              <button
                onClick={redirectToStudentUnionWebsite}
                id="jumbotron-button"
              >
                Join us
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Jumbotron;
