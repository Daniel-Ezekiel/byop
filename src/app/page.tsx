// import Image from "next/image";
import MainLayout from "./_layouts/MainLayout";
import Hero from "./_components/home/Hero";
import Features from "./_components/home/Features";
import Process from "./_components/home/Process";
import WhoCanUse from "./_components/home/WhoCanUse";
import GetStarted from "./_components/home/GetStarted";

export default function Home() {
  return (
    <MainLayout>
      <Hero />
      <Features />
      <Process />
      <WhoCanUse />
      <GetStarted />
    </MainLayout>
  );
}
