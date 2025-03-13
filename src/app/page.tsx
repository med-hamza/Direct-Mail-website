import Banner from "@/components/Banner";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import BrandTables from "@/components/BrandTables";
import Cards from "@/components/Cards";
import Dtc from "@/components/Dtc";
import LaunchSection from "@/components/LaunchSection";
import RiskFree from "@/components/RiskFree";
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
      <Dtc />
      <RiskFree />
      <Blog />
    </div>
  );
}
