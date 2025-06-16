// app/page.tsx
import Home from "./home/page";
import About from "./about/page";
import Service from "./services/page";
import Portfolio from "./portfolio/page";
import Contact from "./contact/page";

export default function Page() {
  return (
    <>
      <div className="px-16 w-full min-h-screen ">
        <Home />
      </div>

      <div className="">
        <About />
      </div>
      <Service />
      <Portfolio/>

      <Contact/>
    </>
    
  );
}
