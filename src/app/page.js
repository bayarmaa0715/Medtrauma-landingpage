import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col gap-5 py-5 md:gap-20 md:py-20">
      <Hero />
    </div>
  );
}
