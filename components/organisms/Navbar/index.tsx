import Image from "next/legacy/image";
import Menu from "./Menu";
import ToggleMenu from "./ToggleMenu";
import Link from "next/link";

export default function Navbar() {
  return (
    <section>
      <nav className="navbar navbar-expand-lg navbar-light bg-light bg-white pt-lg-40 pb-lg-40 pt-30 pb-50">
        <div className="container-fluid">
          <Link className="navbar-brand" href="/">
            <Image
              src="/icon/logo.png"
              alt="logo navbar"
              width={80}
              height={60}
            />
          </Link>
          <ToggleMenu />
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto text-lg gap-lg-0 gap-2">
              <Menu title="Home" active />
              <Menu title="Master Plan" href="/#masterplan" />
              <Menu title="Facilities" href="/#facilities" />
              <Menu title="See Why" href="/#seewhy" />
              <Menu title="Our Story" href="/#story" />
              <li className="nav-item my-auto">
                <a
                  className="btn btn-sign-in d-flex justify-content-center ms-lg-2 rounded-pill"
                  href="https://wa.link/aep2u7"
                  role="button"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
}
