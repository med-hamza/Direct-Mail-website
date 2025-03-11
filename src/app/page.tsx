import Banner from "@/components/Banner";
import Brands from "@/components/Brands";
import BrandTables from "@/components/BrandTables";
import Cards from "@/components/Cards";
import LaunchSection from "@/components/LaunchSection";
import Statistic from "@/components/Statistic";

export default function Home() {
  return (
    <div className="">
      <Banner />
      <Brands />
      <Statistic />
      <Cards />
      <BrandTables />
      <LaunchSection />
    </div>
  );
}
