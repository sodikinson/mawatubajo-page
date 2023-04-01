// import "@/styles/globals.css";
import "@/styles/utilities.css";
import "@/styles/homepage.css";
import "@/styles/detail.css";
import "@/styles/checkout.css";
import "@/styles/complete-checkout.css";
import "@/styles/404-not-found.css";
import "@/styles/sidebar.css";
import "@/styles/overview.css";
import type { AppProps } from "next/app";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${poppins.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}
