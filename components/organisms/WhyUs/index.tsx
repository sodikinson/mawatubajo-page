import style from "./style.module.css";

export default function WhyUs() {
  const itemFeatured = [
    {
      id: 1,
      image: "Diamond.svg",
      title: "Why Labuan Bajo?",
      text: "Labuan Bajo is a hidden paradise located at Nusa Tenggara Timur. The Government of Indonesia is committed to making Labuan Bajo one of the super-premium destinations. This destination holds amazing natural beauty and ancient animals that are known worldwide.",
    },
    {
      id: 2,
      image: "Diamond.svg",
      title: "Komodo Island",
      text: "Named after the famous lizard living on its area, inhabited by a population of around 5.700 giant lizards, called Komodo Dragons. The species is the last representative of a relic population of largest living lizards. Being the only place on earth where you can have a close encounter with Komodo, this island was selected among the World’s Top Ten Destinations by the National Geographic Magazine",
    },
    {
      id: 3,
      image: "Diamond.svg",
      title: "Padar Island",
      text: "A stunningly beautiful island and one of the only places in the world where you can find pink, black, and white sand beaches all on one island. Padar Island is the third largest of the Komodo Islands which resides between Komodo Island and Rinca Island. Located about 30 km (20 miles) from Labuan Bajo, Padar Island is only 2-3 hours away from Labuan Harbor.",
    },

    {
      id: 4,
      image: "Diamond.svg",
      title: "Beach Club.",
      text: "From entertainment to lifestyle to leisure stay, Mawatu offers you an escape from the normal day-to-day into a world of your own. A cool pool retreat and the perfect palm trees for hanging out or simply lounging away on the soft white daybeds..",
    },
    {
      id: 5,
      image: "Diamond.svg",
      title: "Pink Beach, Rangko Cave",
      text: "The Mawatu dream is one that has the sole purpose of bringing forth happiness towards those who visit this beautiful land a dream where everyone coexists peace fully, united by beautiful moments and everlasting freedom. ",
    },
    {
      id: 6,
      image: "Diamond.svg",
      title: "MAWATU IS EXCITING",
      text: "Memories with you. Memories Together. Memories spent as one. These are the memories we look forward together for",
    },
  ];

  return (
    <div className={style.featured} id="featured">
      {itemFeatured.map((item) => (
        <div className={style.box_featured} key={item.id}>
          <img src={`/icon/${item.image}`} />
          <h3>{item.title}</h3>
          <p>{item.text}</p>
        </div>
      ))}
    </div>
  );
}
