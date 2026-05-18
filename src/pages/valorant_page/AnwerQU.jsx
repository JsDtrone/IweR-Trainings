import React from "react";

const AnwerQU = (props) => {
  return (
    <div class="row ">
      <div class="d-flex justify-content-center mt-5pdDt">
        <div class="width-as-grid mr-0dt">
          <div class=" rounded-sa margin-bottom  pt-1 ps-1 row iver-answ text-center">
            <div className="">
              <div class="small-bottle">
                <img src={props.imgSrcMink} class="width-80px" alt="" />
              </div>

              <div class="col  text-start info-text-mass">
                <p>
                  {props.valueAns1}
                  <br />
                  {props.valueAns2} {props.hrefff}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnwerQU;
