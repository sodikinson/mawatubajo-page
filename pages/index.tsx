import FeaturedGame from "@/components/organisms/FeaturedGame";
import Footer from "@/components/organisms/Footer";
import MainBanner from "@/components/organisms/MainBanner";
import Masterplan from "@/components/organisms/Masterplan";
import Navbar from "@/components/organisms/Navbar";
import Reached from "@/components/organisms/Reached";
import Story from "@/components/organisms/Story";
import TransactionStep from "@/components/organisms/TransactionStep";
import VideoSection from "@/components/organisms/VideoSection";
import WhyUs from "@/components/organisms/WhyUs";
import AOS from "aos";
import Head from "next/head";
import { useEffect } from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Head>
        <title>MawatuBajo - Mawatu Labuanbajo</title>
        <meta
          name="description"
          content="Perfect Place for Your Future Business Investment"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="MawatuBajo - Mawatu at Labuanbajo" />
        <meta
          property="og:description"
          content="THE NEW TOURISM TOWN IN The future hub for entertainment in Indonesia, Mawatu will be the go-to destination for the movement of those looking for a new location and new experience to live their best memories."
        />
        <meta property="og:image" content="/img/linkbanner.png" />
        <meta property="og:url" content="https://mawatubajo.com" />
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <MainBanner />

      <VideoSection />

      <Masterplan />

      <TransactionStep />

      <FeaturedGame />

      <Reached />

      <WhyUs />

      <Story />

      <Footer />

      <FloatingWhatsApp
        phoneNumber="6287831900070"
        accountName="Admin Mawatu"
        chatMessage="Halo Investor, ada yang bisa kami bantu?"
        allowEsc
        allowClickAway
        notification
        notificationSound
      />
    </>
  );
}
