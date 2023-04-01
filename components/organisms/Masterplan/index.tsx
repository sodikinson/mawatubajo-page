import React from "react";

export default function Masterplan() {
  return (
    <section id="masterplan" className="story pt-50 pb-50">
      <div className="container-xxl container-fluid">
        <div className="row align-items-center px-lg-5 mx-auto gap-lg-0 gap-4">
          <div
            className="col-lg-7 col-12 d-lg-flex d-none justify-content-lg-end pe-lg-60"
            data-aos="zoom-in"
          >
            <img
              src="/img/img-step.png"
              width="612"
              height="452"
              className="img-fluid"
              alt=""
            />
          </div>
          <div className="col-lg-5 col-12 ps-lg-60">
            <div className="">
              <h2 className="text-4xl fw-bold color-palette-1 mb-30">
                Master Plan
              </h2>
              <p className="text-lg color-palette-1 mb-30">
                Mawatu has only the most amazing and unique properties to offer.
                <br className="d-sm-block d-none" />
                We are excited to share with you our new seafront town project
                with its luxury boutique resorts,
                <br className="d-sm-block d-none" /> amazing restaurants and
                retail experience.
              </p>
              <div className="d-md-block d-flex flex-column w-100">
                <a
                  className="btn btn-read text-lg rounded-pill"
                  href="/img/booklet.pdf"
                  download="mawatu-booklet"
                  role="button"
                >
                  Read Story
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
