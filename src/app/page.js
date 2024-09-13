import Image from "next/image";
import Banner from "../../components/Banner";
import Search from "../../components/Search";
import Trending from "../../components/Trending";
import Destinations from "../../components/Destinations";
import Nearby from "../../components/Nearby";
import Testimonials from "../../components/Testimonials";
import Subscribe from "../../components/Subscribe";

export default function Home() {
  return (
    <main className="">
      <Banner />
      <Search/>
      <Trending />
      <Destinations />
      <Nearby />
      <Testimonials />
      <Subscribe />
    </main>
  );
}
