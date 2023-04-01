import Image from "next/legacy/image";

export default function Footer() {
  return (
    <section className="footer pt-50">
      <footer>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4 text-lg-start text-center">
              <a href="/" className="mb-30">
                <Image
                  src="/icon/logo.png"
                  alt="logo footer"
                  width={120}
                  height={90}
                />
              </a>
              <p className="mt-30 text-lg color-palette-1 mb-30">
                PT. GRAHA PROPERTI SENTOSA
                <br /> Marketing Gallery Mawatu,
                <br /> Graha Iskandarsyah 10th floor Jl. Iskandarsyah Raya
                No.66C Kebayoran Baru - Jakarta Selatan
              </p>
              <p className="mt-30 text-lg color-palette-1 mb-30">
                Copyright 2023. All Rights Reserved.
              </p>
            </div>
            <div className="col-lg-8 mt-lg-0 mt-20">
              <div className="row gap-sm-0">
                <div className="col-md-4 col-6 mb-lg-0 mb-25">
                  <p className="text-lg fw-semibold color-palette-1 mb-12">
                    Company
                  </p>
                  <ul className="list-unstyled">
                    <li className="mb-6">
                      <a
                        href=""
                        className="text-lg color-palette-1 text-decoration-none"
                      >
                        About Us
                      </a>
                    </li>
                    <li className="mb-6">
                      <a
                        href=""
                        className="text-lg color-palette-1 text-decoration-none"
                      >
                        Press Release
                      </a>
                    </li>
                    <li className="mb-6">
                      <a
                        href=""
                        className="text-lg color-palette-1 text-decoration-none"
                      >
                        Terms of Use
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-4 col-6 mb-lg-0 mb-25">
                  <p className="text-lg fw-semibold color-palette-1 mb-12">
                    Product
                  </p>
                  <ul className="list-unstyled">
                    <li className="mb-6">
                      <a
                        href=""
                        className="text-lg color-palette-1 text-decoration-none"
                      >
                        Updates
                      </a>
                    </li>
                    <li className="mb-6">
                      <a
                        href=""
                        className="text-lg color-palette-1 text-decoration-none"
                      >
                        Design
                      </a>
                    </li>
                    <li className="mb-6">
                      <a
                        href=""
                        className="text-lg color-palette-1 text-decoration-none"
                      >
                        Location
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-4 col-12 mt-lg-0 mt-md-0 mt-25">
                  <p className="text-lg fw-semibold color-palette-1 mb-12">
                    Connect
                  </p>
                  <ul className="list-unstyled">
                    <li className="mb-6">
                      <a
                        href="mailto: info.mawatusales@gmail.com"
                        className="text-lg color-palette-1 text-decoration-none"
                      >
                        info.mawatusales@gmail.com
                      </a>
                    </li>

                    <li className="mb-6">
                      <a
                        href="tel: 02111229090"
                        className="text-lg color-palette-1 text-decoration-none"
                      >
                        +62 895-6375-77722
                      </a>
                    </li>
                  </ul>

                  <Image
                    src="/icon/homepedia.png"
                    width={180}
                    height={130}
                    alt="homepedia logo"
                  />
                  <ul className="list-unstyled">
                    <li className="mb-6">
                      <strong>&copy; Homepedia Indonesia Propertindo</strong>
                    </li>
                    <li className="mb-6">
                      <u>2023. All Rights Reserved.</u>
                    </li>

                    <li className="mb-6">
                      District 8 Prosperity Tower
                      <br /> LT 9 Unit C, Sudirman Lot 28
                      <br />
                      Jl. Jend. Sudirman Kav 52-53, <br />
                      Senayan, Kebayoran Baru, Jakarta Selatan, <br />
                      DKI Jakarta 12190.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}
