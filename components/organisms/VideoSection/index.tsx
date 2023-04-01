import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/skyblue";

export default function VideoSection() {
  return (
    <section className="container">
      <Splide
        options={{
          rewind: true,
        }}
        aria-label="My Favorite Images"
      >
        <SplideSlide>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/tXz9LhV62so"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </SplideSlide>
        <SplideSlide>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/84omm42Qnsg"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </SplideSlide>
        <SplideSlide>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/ksx3FvnW5wc"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </SplideSlide>
      </Splide>
    </section>
  );
}
