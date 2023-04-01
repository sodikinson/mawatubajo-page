import GameItem from "@/components/molecules/GameItem";

export default function FeaturedGame() {
  return (
    <section id="facilities" className="featured-game pt-50 pb-50">
      <div className="container-fluid">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">
          Facilities ➡️
        </h2>
        <div
          className="d-flex flex-row flex-lg-wrap overflow-setting justify-content-lg-between gap-lg-3 gap-4"
          data-aos="fade-up"
        >
          <GameItem title="Wedding Chapel" thumbnail="Thumbnail-1" />
          <GameItem title="Floating Water Villas" thumbnail="Thumbnail-2" />
          <GameItem title="Amphitheater" thumbnail="Thumbnail-3" />
          <GameItem title="Beach Club" thumbnail="Thumbnail-4" />
          <GameItem title="Enjoy" thumbnail="Thumbnail-5" />
        </div>
      </div>
    </section>
  );
}
