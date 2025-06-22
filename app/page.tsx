import Hero from "@/components/hero";
import Main from "@/components/main";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="mt-16">
        <div className="text-center"> 
          <h1 className="text-4xl font-bold uppercase">Room & Rates</h1>
          <p className="py-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, mollitia!</p>
        </div>
        <Main />
      </div>
    </div>
  );
}
