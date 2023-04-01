import Image from "next/legacy/image";
import Link from "next/link";

interface GameItemProps {
  title: string;

  thumbnail:
    | "Thumbnail-1"
    | "Thumbnail-2"
    | "Thumbnail-3"
    | "Thumbnail-4"
    | "Thumbnail-5";
}

export default function GameItem(props: GameItemProps) {
  const { title, thumbnail } = props;
  return (
    <div className="featured-game-card position-relative">
      <Link href="/complete-checkout">
        <div className="blur-sharp">
          {/* [CODE UPDATE] menambahkan layout="fixed" untuk memperbaiki responsive di mobile */}
          <Image
            className="thumbnail"
            src={`/img/${thumbnail}.png`}
            width={205}
            height={270}
            layout="fixed"
            alt="thumbnail"
          />
        </div>
        <div className="cover position-absolute bottom-0 m-32">
          <div className="d-flex flex-column h-100 justify-content-between text-decoration-none">
            <div className="game-icon mx-auto">
              <Image
                src="/icon/Diamond.svg"
                width={54}
                height={36}
                alt="console"
                layout="fixed"
              />
            </div>
            <div>
              <p className="fw-semibold text-white text-xl m-0">{title}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
