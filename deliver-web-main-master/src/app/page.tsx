"use client"
import CardHome from "@/components/CardHome";
import Hero2Home from "@/components/Hero2Home";
import HeroHome from "@/components/HeroHome";
import { useEffect } from "react";
import { Seo } from "@/components/seo";
import AOS from 'aos';
import Navbar from "@/components/Navbar";
import 'aos/dist/aos.css'; 
export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  const links = [
    {
      id: 1,
      description: "Bienvenue sur notre service de livraison de colis! Faites livrer vos colis en toute simplicité",
      delay:"200"
    },
    {
      id: 2,
      description: "Bienvenue sur notre service de livraison de colis! Faites livrer vos colis en toute simplicité",
      delay:"300"
    },
    {
      id: 3,
      description: "Bienvenue sur notre service de livraison de colis! Faites livrer vos colis en toute simplicité",
      delay:"400"
    },

  ];

  return (
    <>
      <Seo title="Delivers" descriptiom="Delivery all yours packages in few times" />
      <Navbar/>
      
      <HeroHome></HeroHome>

      <section>
        <h2 className="text-4xl text-center m-5 font-extrabold text-black"  data-aos="fade-up" data-aos-delay="150">Comment gérer vos colis ?</h2>



        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2 p-10 place-items-center" data-aos="fade-up" data-aos-delay="150">
          {links.map(({ id, description, delay }) => (
            <CardHome title={ "Etape "+id} description={description} delay ={delay} key={id}
            ></CardHome>
          ))}

        </div>
      </section>

      <Hero2Home></Hero2Home>




    </>
  );
}
