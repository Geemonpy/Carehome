import Showcase2Card from "../components/showcase2-components/showcase2Card";
import { showCase } from "../constants/showcase";
import ShowCase2HeroSection from "../components/showcase2-components/showcase2HeroSecion";
import { useEffect } from "react";
import { animationVariants } from "../constants/animationVariants";
import { motion } from "framer-motion";
import img1 from "../public/images/gal1.jpg";

const ShowCase2 = () => {
  useEffect(() => {
    document.title = "Showcase 2 - Rosemanor";
  }, []);

  return (
    <div className="overflow-hidden">
      <div className="bg-[url(/showcase2-page-images/showcase2-hero-bg.jpg)] bg-no-repeat bg-center bg-cover pt-44 pb-36 max-md:pt-36 max-md:pb-24 flex justify-center items-center text-white">
        <motion.h1
          initial="initial"
          whileInView="animate"
          variants={animationVariants.zoomOut}
          viewport={{ once: true, amount: 0.2 }}
          className="text-6xl max-sm:text-5xl text-center font-semibold"
        >
          News
        </motion.h1>
      </div>
      <div
        style={{ maxWidth: 1200 }}
        className="mx-auto gap-10 p-10 max-md:px-5"
      >
        <div className=" flex-col grid grid-cols-2 my-3 max-sm:flex-col max-lg:flex-col gap-10">
          {/* <Showcase2Card href={`/projects/${1}`} src={img1} title={"nothing"} /> */}
          <div className="flex justify-end">
          <img className="w-3/4 h-full rounded-xl object-cover" src={img1} alt="img" /></div>

          <div>
            <h1 className="text-4xl font-bold mb-4">BDay</h1>
            <p>
              A big thank you to Catherine at British Homes for organising the last
              in-person engagement session. The tour was informative, as was the
              history of British homes. Everyone in the session engaged in
              conversations, and several key topics were covered. Finally, thank you
              for the wonderful buffet of food that you arranged for us, which
              included a great assortment of diverse full flavored choices.
            </p>
          </div>
        </div>
        <div className=" flex-col grid grid-cols-2 my-3 max-sm:flex-col max-lg:flex-col gap-10">
          {/* <Showcase2Card href={`/projects/${1}`} src={img1} title={"nothing"} /> */}
          <div className="flex w-full justify-end">
          <div>
            <h1 className="text-4xl font-bold mb-4">BDay</h1>
            <p>
              A big thank you to Catherine at British Homes for organising the last
              in-person engagement session. The tour was informative, as was the
              history of British homes. Everyone in the session engaged in
              conversations, and several key topics were covered. Finally, thank you
              for the wonderful buffet of food that you arranged for us, which
              included a great assortment of diverse full flavored choices.
            </p>
          </div>
          </div>
          <div className="flex justify-start">
          <img className="w-3/4 h-full rounded-xl object-cover" src={img1} alt="img" /></div>

        </div>
        
        {/* Uncomment this if you want to map through the showcase items */}
        {/* {showCase.map((e, i) => {
          return (
            <Showcase2Card
              key={i}
              href={`/projects/${e.id}`}
              src={e.coverImage}
              title={e.city}
            />
          );
        })} */}
      </div>
    </div>
  );
};

export default ShowCase2;
