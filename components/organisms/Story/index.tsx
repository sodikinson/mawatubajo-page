export default function Story() {
  return (
    <section className="story pt-50 pb-50">
      <div className="container-xxl container-fluid">
        <div className="row align-items-center px-lg-5 mx-auto gap-lg-0 gap-4">
          <div
            className="col-lg-7 col-12 d-lg-flex d-none justify-content-lg-end pe-lg-60"
            data-aos="zoom-in"
          >
            <img
              src="/img/Header-9.png"
              width="612"
              height="452"
              className="img-fluid"
              alt=""
            />
          </div>
          <div className="col-lg-5 col-12 ps-lg-60">
            <div className="">
              <h2 className="text-4xl fw-bold color-palette-1 mb-30">
                MAWATU IS HOME
              </h2>
              <p className="text-lg color-palette-1 mb-30">
                A place where people feel like they belong, a place to call
                their own,
                <br className="d-sm-block d-none" />
                to create tons of beautiful memories that will last forever.
                <br className="d-sm-block d-none" /> Mawatu is the best choice
                when it comes to Bajo.
              </p>
              <div className="d-md-block d-flex flex-column w-100">
                <a
                  className="btn btn-read text-lg rounded-pill"
                  href="/img/mawatu-letter.pdf"
                  download="mawatu-letter"
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
