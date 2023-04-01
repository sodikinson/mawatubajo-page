import Illustration from "./Illustration";

export default function MainBanner() {
  return (
    <section className="header pt-lg-60 pb-50">
      <div className="container-xxl container-fluid">
        <div className="row gap-lg-0 gap-5">
          <div className="col-lg-6 col-12 my-auto">
            <p className="text-support text-lg color-palette-2">
              THE NEW TOURISM TOWN IN INDONESIA,
            </p>
            <h1 className="header-title color-palette-1 fw-bold">
              Perfect Place for Your
              <br className="d-sm-block d-none" />{" "}
              <span className="underline-blue">Future Business Investment</span>
            </h1>
            <p className="mt-30 mb-40 text-lg color-palette-1">
              Mawatu will be the go-to destination
              <br className="d-md-block d-none" /> for the movement of those
              looking for a new location and new experience to live their best
              memories.
            </p>
            <div className="d-flex flex-lg-row flex-column gap-4">
              <a
                className="btn btn-get text-lg text-white rounded-pill"
                href="#feature"
                role="button"
              >
                Get Started
              </a>
              <a
                className="btn-learn text-lg color-palette-1 my-auto text-center"
                href="#"
                role="button"
              >
                Learn More
              </a>
            </div>
          </div>
          <Illustration />
        </div>
      </div>
    </section>
  );
}
