import Image from "next/legacy/image";
import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/skyblue";

export default function CompleteCheckout() {
  return (
    <section className="complete-checkout mx-auto pt-lg-145 pb-lg-145 pt-100 pb-80">
      <div className="container-fluid">
        <div className="text-center">
          <Splide aria-label="My Favorite Images">
            <SplideSlide>
              <Image
                src="/img/Thumbnail-1.png"
                alt="project image"
                width={600}
                height={850}
              />
            </SplideSlide>
            <SplideSlide>
              <Image
                src="/img/Thumbnail-2.png"
                alt="project image"
                width={600}
                height={850}
              />
            </SplideSlide>
            <SplideSlide>
              <Image
                src="/img/Thumbnail-3.png"
                alt="project image"
                width={600}
                height={850}
              />
            </SplideSlide>
            <SplideSlide>
              <Image
                src="/img/Thumbnail-4.png"
                alt="project image"
                width={600}
                height={850}
              />
            </SplideSlide>
            <SplideSlide>
              <Image
                src="/img/Thumbnail-5.png"
                alt="project image"
                width={600}
                height={850}
              />
            </SplideSlide>
          </Splide>
        </div>
        <div className="pt-70 pb-50">
          <h2 className="text-4xl fw-bold text-center color-palette-1 mb-10">
            DEVELOPED by VASANTA GROUP
          </h2>
          <p className="text-lg text-center color-palette-1 m-0">
            Vasanta Group is building on the foundation of more than decades of
            combined years in real estate experiences from the founder and the
            board of directors. To date Vasanta Group has completed 1.945 units
            of apartments, 216 units of shophouses, over 150.000 m2. The Group's
            portfolio comprises over 196.4 hectares of landbank for residential
            homes, mix used development, multi storey apartments, commercial
            shophouses, hotels and retails such as Saumata, Saumata Suites,
            Shila at Sawangan and Vasanta Innopark.
          </p>
        </div>
        <div className="button-group d-flex flex-column mx-auto">
          <a
            className="btn btn-dashboard fw-medium text-lg text-white rounded-pill mb-16"
            href="https://wa.link/b17ymk"
            role="button"
          >
            WhatsApp ke Admin
          </a>
          <a
            className="btn btn-whatsapp fw-medium text-lg color-palette-1 rounded-pill"
            href="/"
            role="button"
          >
            Home
          </a>
        </div>
      </div>
    </section>
  );
}
