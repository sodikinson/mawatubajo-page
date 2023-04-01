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
                Copyright 2021. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}
