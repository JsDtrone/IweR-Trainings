import React from "react";

export default function AnswerQ(props) {
  return (
    <div class="row">
      <div class="d-flex justify-content-center">
        <div class="width-as-grid">
          <div class=" rounded-sa margin-bottom text-center pt-1 ps-1 row answers bg-new-red">
            <div class="col-1 d-flex  align-items-center asist ">
              <div class="d-flex justify-content-center align-items-center bg-light numtext">
                <div class="color-black">
                  <b>{props.num}</b>
                </div>
              </div>
            </div>
            <div class="col  text-start center-padding">
              <p>{props.value}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
