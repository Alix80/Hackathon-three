
import Hero from "@/components/hero";
import FontShowcase from "@/components/fonts";
import Dress from "@/components/dress";
import CustomerCarousel from "@/components/customer";
import Top_sell from "./product/sell";
import Product from "./product/page";


export default function Home() {
  return (
   <div>
   
    <Hero/>
    <FontShowcase/>
    <Product/>
    <Top_sell/>
    <Dress/>
    <CustomerCarousel/>
    
   </div> 
  );
}