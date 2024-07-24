import { FaPeriscope } from "react-icons/fa";
import WhatWeDoCard from "./whatwedocard";
import ExculusivePropertyCard from "./exculusivePropertyCard";
import Button from "../buttons-component/solidbutton";
import ProjectCard from "./projectCard";
import Carousel from "./carousel";
import ReviewCard from "./reviewCard";
import PartnerBrandCard from "./partnerBrandCard";
import { rentHouses } from "../../constants/data";
import { motion } from "framer-motion";
import { animationVariants } from "../../constants/animationVariants";
import { showCase } from "../../constants/showcase";
import "./homePage.css";
import { Link, useNavigate } from "react-router-dom";
import { scrollToTop } from "../../constants/scrollToTop";
import { partnerBrands } from "../../constants/partnerBrands";
import { useToast } from "@chakra-ui/react";
import ServiceCard from "./serviceCard";
import b1 from '../../public/images/b1.jpeg'
import home1 from '../../public/images/black1.jpg'

const HomePage = () => {
  const navigate = useNavigate();
  const toast = useToast();
  const errorToast = (res, status) => {
    toast({
      title: res,
      status: status,
      duration: 2000,
      isClosable: true,
      position: "top",
      containerStyle: {
        zIndex: 9999,
      },
    });
  };
  const handleSearch = () => {
    const searchInp = document.getElementById("searchInp");
    if (searchInp.value && searchInp.value.trim()) {
      navigate(`/search?query=${searchInp.value}`);
    } else {
      errorToast("Fill the first first!", "error");
    }
  };
  return (
    <div className=" w-full overflow-hidden">
      <div  className="  flex  pt-36 pb-20 bg-top bg-no-repeat bg-cover h-94  "         style={{ backgroundImage: `url(${home1})` }}      >
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.2 }}
          style={{ maxWidth: 1200 }}
          className="mx-auto w-full text-white px-10 max-sm:px-5 flex flex-col max-lg:items-center max-lg:text-center gap-12"
        >
          <motion.h1
            variants={animationVariants.fadeLeft}
            className="text-6xl max-lg:mx-auto  font-semibold max-sm:text-4xl max-w-lg "
          >
            Mental Wellness Heaven
          </motion.h1>
          <motion.p
            variants={animationVariants.fadeLeft}
            className="text-xl max-lg:mx-auto max-w-md  "
          >
            Nurturing the hearts and enriching the souls of individuals
          </motion.p>
          {/* <motion.div
            variants={animationVariants.fadeLeft}
            id="search-inp"
            className="max-w-xl max-lg:mx-auto max-lg:w-full relative"
          >
            <FaPeriscope className="text-red-500 text-2xl absolute left-2 top-5 " />
            <input
              placeholder="Search..."
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSearch();
                }
              }}
              autoComplete="off"
              id="searchInp"
              className="w-full py-5 pl-10 pr-32 text-black rounded-md focus:outline-none"
              type="text"
            />
            <Button
              content={"Search"}
              fontSize={"text-xl"}
              padding={"px-5  py-2"}
              furtherClasses={"absolute right-2"}
              styles={{ top: 9.5 }}
              onClick={handleSearch}
            />
          </motion.div> */}
          <motion.div
            variants={animationVariants.fadeLeft}
            className="flex max-lg:flex-col max-lg:items-center gap-10 w-full justify-between items-end mt-4"
          >
            <div className="flex gap-12">
              {/* <div className="flex flex-col text-black gap-4">
                <h2 className="text-4xl title-font font-bold">19K+</h2>
                <p className="text-lg">Premium Cares</p>
              </div> */}
              {/* <div className="flex flex-col gap-4">
                <h2 className="text-4xl title-font font-bold">5000+</h2>
                <p className="text-lg">Premium houses</p>
              </div> */}
            </div>
            {/* <div className="flex gap-12 max-sm:flex-wrap  justify-center">
              <div className="flex justify-start items-center gap-2">
                <img className="w-9" src="/grafton.png" alt="img" />
                <h2 className="text-2xl">Grafton</h2>
              </div>
              <div className="flex justify-start items-center gap-2">
                <img className="w-9" src="/lighthouse.png" alt="img" />
                <h2 className="text-2xl">Lighthouse</h2>
              </div>
              <div className="flex justify-start items-center gap-2">
                <img className="w-9" src="/tundratown.png" alt="img" />
                <h2 className="text-2xl">Tundratown</h2>
              </div>
            </div> */}
          </motion.div>
        </motion.div>

        {/* </Reveal> */}
      </div>
      {/* about section */}
      <div>
        <div
          style={{ maxWidth: 1200 }}
          className="mx-auto flex justify-between items-start p-10 py-28 max-md:py-16 gap-5 max-md:px-5 max-md:flex-col max-md:items-center max-md:text-center"
        >
          <div className="w-2/4 max-md:w-full ">
            <motion.div
              initial="initial"
              whileInView="animate"
              variants={animationVariants.zoomOut}
              viewport={{ once: true, amount: 0.2 }}
            >
              <h2 className="text-5xl max-md:text-4xl font-bold title-font">
               Care supporting you to live {" "}
                {/* <span className=" text-red-500 title-font "> since 1998</span> */}
              </h2>
            </motion.div>
          </div>
          <div className="w-2/4 max-md:w-full">
            <motion.div
              initial="initial"
              whileInView="animate"
              variants={animationVariants.fadeRight}
              viewport={{ once: true, amount: 0.2 }}
            >
              <p className="text-xl">
                Welcome to Rosemanor Homes, where we nurture minds and
                heal hearts in a compassionate, serene environment. Our
                dedicated team is committed to supporting your mental well-being
                with personalized care and empathy.
              </p>
              <Link onClick={scrollToTop} to={"/about"}>
                <Button
                  content={"About Us"}
                  fontSize={"text-xl"}
                  padding={"px-5  py-2"}
                  furtherClasses={"mt-8"}
                />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
      {/* what we do section start */}
      <div className="bg-gray-100">
        <div
          style={{ maxWidth: 1200 }}
          className=" mx-auto flex gap-5 justify-between items-start p-10 py-28 max-md:py-16 max-md:px-5 max-lg:flex-col max-lg:items-center  max-lg:gap-12"
        >
          <motion.div
            initial="initial"
            whileInView="animate"
            variants={animationVariants.zoomOut}
            viewport={{ once: true, amount: 0.2 }}
            className="w-1/3 max-lg:w-full max-lg:text-center flex flex-col gap-2 items-start max-lg:items-center"
          >
            <h2 className="text-5xl max-md:text-4xl font-bold title-font">
              Love & Care{" "}
            </h2>
            <p className="text-xl">
              Whatever your needs may be, our proactive and friendly team are
              always on hand to help. Live purposeful and fulfilling days with a
              supportive arm around your shoulder.
            </p>
            {/* <Link onClick={scrollToTop} to={"/about"}>
              <button
                style={{ borderWidth: 1.5, borderRadius: 4 }}
                className="bg-transparent  text-black border-red-500 text-xl px-5 py-2 duration-300 hover:bg-red-500 hover:text-white transition-all mt-5 max-md:mt-3"
              >
                About Us
              </button>
            </Link> */}
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            variants={animationVariants.fadeUp}
            viewport={{ once: true, amount: 0.2 }}
            className="cards w-2/3 max-lg:w-full flex justify-center max-md:flex-col max-md:items-center gap-7"
          >
            <div className="flex flex-col gap-7 ">
              <WhatWeDoCard
                iconSrc={
                  "https://www.hallmarkcarehomes.co.uk/app/uploads/2023/08/People-holding-hands.svg"
                }
                iconAlt={"reliability"}
                title={"Relationship-Centred"}
                desc={"You & your loved ones at the heart of everything we do"}
              />
              <WhatWeDoCard
                iconSrc={"/icons/communication.png"}
                iconAlt={"communication"}
                title={"Rehabilitation"}
                desc={"Everything you need to spend your days, your way"}
              />
            </div>
            <div className="flex flex-col gap-7">
              <div
                style={{ height: 130 }}
                className="max-md:hidden rounded-lg w-80 bg-gradient-to-t from-white to-transparent"
              ></div>
              <WhatWeDoCard
                iconSrc={"/icons/quality-first.png"}
                iconAlt={"quality-first"}
                title={"Loved by Residents"}
                desc={"With a 5/5 review score on carehome.co.uk"}
              />
              <div
                style={{ height: 130 }}
                className="max-md:hidden rounded-lg w-80 h-36 bg-gradient-to-b from-white to-transparent"
              ></div>
            </div>
          </motion.div>
        </div>
        {/* <div style={{ maxWidth: 1200 }} className="p-10 max-md:px-5 mx-auto">
          <motion.h2
            initial="initial"
            whileInView="animate"
            variants={animationVariants.fadeIn}
            viewport={{ once: true, amount: 0.2 }}
            className="text-5xl max-md:text-4xl font-semibold text-center"
          >
            Exclusive Properties
          </motion.h2>
          <div className="flex flex-col gap-5 mt-10 max-sm:mt-8">
            <div className=" flex gap-5 max-lg:flex-col">
              <div className="w-2/4 max-lg:w-full">
                <ExculusivePropertyCard
                  imgSrc={rentHouses[0].mainImage}
                  titlePart1={"House in "}
                  titlePart2={rentHouses[0].name}
                  pricing={rentHouses[0].price}
                  type={rentHouses[0].type}
                  href={rentHouses[0].id}
                />
              </div>
              <div className="w-2/4 gap-5 flex max-lg:w-full max-sm:flex-col">
                <ExculusivePropertyCard
                  imgSrc={rentHouses[1].mainImage}
                  titlePart1={"House in "}
                  titlePart2={rentHouses[1].name}
                  pricing={rentHouses[1].price}
                  type={rentHouses[1].type}
                  href={rentHouses[1].id}
                />
                <ExculusivePropertyCard
                  imgSrc={rentHouses[2].mainImage}
                  titlePart1={"House in "}
                  titlePart2={rentHouses[2].name}
                  pricing={rentHouses[2].price}
                  type={rentHouses[2].type}
                  href={rentHouses[2].id}
                />
              </div>
            </div>
            <div className=" flex gap-5 max-lg:flex-col">
              <div className="w-2/4 gap-5 flex max-lg:w-full max-sm:flex-col">
                <ExculusivePropertyCard
                  imgSrc={rentHouses[3].mainImage}
                  titlePart1={"House in "}
                  titlePart2={rentHouses[3].name}
                  pricing={rentHouses[3].price}
                  type={rentHouses[3].type}
                  href={rentHouses[3].id}
                />
                <ExculusivePropertyCard
                  imgSrc={rentHouses[4].mainImage}
                  titlePart1={"House in "}
                  titlePart2={rentHouses[4].name}
                  pricing={rentHouses[4].price}
                  type={rentHouses[4].type}
                  href={rentHouses[4].id}
                />
              </div>
              <div className="w-2/4 max-lg:w-full">
                <ExculusivePropertyCard
                  imgSrc={rentHouses[5].mainImage}
                  titlePart1={"House in "}
                  titlePart2={rentHouses[5].name}
                  pricing={rentHouses[5].price}
                  type={rentHouses[5].type}
                  href={rentHouses[5].id}
                />
              </div>
            </div>
          </div>
        </div> */}

        <div
          style={{ maxWidth: 1200 }}
          className="mx-auto destination-section p-10 max-md:px-5  pb-28"
        >
          {/* <motion.h1
            initial="initial"
            whileInView="animate"
            variants={animationVariants.fadeIn}
            viewport={{ once: true, amount: 0.2 }}
            className="text-5xl max-md:text-4xl font-semibold text-center  px-2"
          >
            Our Care.{" "}
          </motion.h1> */}
          {/* <div className="grid grid-cols-3 grid-rows-1 max-lg:grid-cols-2 max-lg:grid-rows-2 max-sm:grid-cols-1 max-sm:grid-rows-4 gap-4 relative mt-10 max-sm:mt-8">
            <img
              src="/cards-corner.png"
              className="absolute -left-10 -bottom-10 max-xl:hidden"
              alt=""
            />

            <ServiceCard
              key={1}
              src={
                "https://files.cdn-files-a.com/uploads/9435802/400_668d11796fd24.jpg"
              }
              title={"Community Support"}
              desc={
                "Our supportive community promotes social interaction, peer support, and a sense of belonging, empowering residents on their recovery journey."
              }
              // href={}
            />
            <ServiceCard
              key={2}
              src={
                "https://files.cdn-files-a.com/uploads/9435802/400_668d1177c93bc.jpg"
              }
              title={"Therapy Sessions"}
              desc={
                "We offer a variety of therapy sessions, including cognitive-behavioral therapy, group therapy, and art therapy, aimed at nurturing mental well-being."
              }
              // href={}
            />
            <ServiceCard
              key={3}
              src={
                "https://static1.s123-cdn-static-a.com/uploads/2031/400_57d14bd1c7c33.jpg"
              }
              title={"Personalized Care Plans"}
              desc={
                "Our team creates individualized care plans to meet the unique needs of each resident, ensuring tailored support and comprehensive care."
              }
              // href={}
            />
          </div> */}
        </div>
      </div>
      {/* what we do section end */}

      {/* appreciation section start */}
      <div className="bg-white">
        <div
          style={{ maxWidth: 1200 }}
          className="p-10 max-md:px-5 py-28 mx-auto grid grid-cols-2 grid-rows-1 gap-20 max-lg:grid-cols-1 max-lg:grid-rows-2 "
        >
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0.1 }}
            className="w-full max-lg:w-full flex flex-col  items-start max-lg:items-center max-lg:text-center gap-7"
          >
            <motion.h1
              variants={animationVariants.fadeLeft}
              className="text-5xl max-md:text-4xl font-semibold"
            >
              Join our caring Community.
            </motion.h1>
            <motion.p
              variants={animationVariants.fadeLeft}
              className="text-2xl"
            >
              The Journey to Healing Starts Here
            </motion.p>
            <motion.div
              variants={animationVariants.fadeLeft}
              className="grid grid-cols-2 grid-rows-1 gap-10"
            >
              <div className="flex flex-col max-lg:justify-center max-lg:items-center">
                <h2 className="title-font text-red-500 text-5xl max-md:text-4xl font-semibold">
                  1000+
                </h2>
                <p className="text-xl">
                  Happy clients
                </p>
              </div>
              <div className="flex flex-col max-lg:justify-center max-lg:items-center">
                <h2 className="title-font text-red-500 text-5xl max-md:text-4xl font-semibold">
                  35+
                </h2>
                <p className="text-xl">
                Years of successful experience in caring With CQC
                </p>
              </div>
              {/* <div className="flex flex-col max-lg:justify-center max-lg:items-center">
                <h2 className="title-font text-red-500 text-5xl max-md:text-4xl font-semibold">
                  8
                </h2>
                <p className="text-xl">
                  Years of seccessful experience in caring
                </p>
              </div>
              <div className="flex flex-col max-lg:justify-center max-lg:items-center">
                <h2 className="title-font text-red-500 text-5xl max-md:text-4xl font-semibold">
                  8
                </h2>
                <p className="text-xl">
                  Years of seccessful experience in caring
                </p>
              </div> */}
            </motion.div>
            <motion.div variants={animationVariants.fadeLeft}>


              {/* <Link onClick={scrollToTop} to={"/contact"}> */}
                <Button
                  content={"Get In Touch"}
                  padding={"px-6 py-3"}
                  fontSize={"text-xl"}
                />
              {/* </Link> */}



              
            </motion.div>
          </motion.div>
          <div className="w-full max-lg:w-full h-full max-sm:max-h-[500px] ">
            <div className=" h-full w-full relative overflow-hidden rounded-lg">
              <img
                src="https://files.cdn-files-a.com/uploads/9435802/2000_668d1175c2912.jpg"
                className="absolute w-full h-full object-cover object-center "
                alt=""
              />
              <div className="absolute w-full h-full bg-black/50 "></div>

              <motion.div
                initial="initial"
                whileInView="animate"
                variants={animationVariants.toLeft}
                viewport={{ once: true, amount: 0.2 }}
                className="absolute w-full h-full bg-white origin-left z-20 "
              >
                <div className=""></div>
              </motion.div>
            </div>
          </div>
        </div>
        <div
          style={{ maxWidth: 1200 }}
          className="mx-auto destination-section p-10 max-md:px-5  pb-28"
        >
          <motion.h1
            initial="initial"
            whileInView="animate"
            variants={animationVariants.fadeIn}
            viewport={{ once: true, amount: 0.2 }}
            className="text-5xl max-md:text-4xl font-semibold text-center  px-2"
          >
              Our Homes{" "}
          </motion.h1>
          <div className="grid grid-cols-4 grid-rows-1 max-lg:grid-cols-2 max-lg:grid-rows-2 max-sm:grid-cols-1 max-sm:grid-rows-4 gap-4 relative mt-10 max-sm:mt-8">
            <img
              src="/cards-corner.png"
              className="absolute -left-10 -bottom-10 max-xl:hidden"
              alt=""
            />
            {showCase.map((e, i) => {
              if (e.id != 5 && e.id != 6) {
                return (
                  <ProjectCard
                    key={i}
                    src={e.coverImage}
                    title={e.city}
                    href={e.id}
                  />
                );
              }
            })}
          </div>
        </div>
      </div>

      {/* -------------------------------- */}



      {/* appreciation section end */}
      {/* review section start */}
      {/* <div className="bg-gray-100">
        <div
          style={{ maxWidth: 1200 }}
          className=" mx-auto flex max-md:flex-col justify-center items-center gap-16 p-10 max-md:px-5 py-28 "
        >
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0.1 }}
            className="w-2/4 max-md:w-full max-md:px-3 items-center flex flex-col gap-5"
          >
            <motion.div
              className="w-full ml-6"
              variants={animationVariants.zoomIn}
            >
              <ReviewCard
                imgSrc={
                  "	https://files.cdn-files-a.com/uploads/9435802/400_668d117bb8ca7.jpg"
                }
                title={"Jane Smith"}
                from={"Resident"}
              />
            </motion.div>
            <motion.div
              className="w-full mr-6"
              variants={animationVariants.zoomIn}
            >
              <ReviewCard
                imgSrc={
                  "	https://static1.s123-cdn-static-a.com/ready_uploads/media/2692690/400_5e0be51c56b84.jpg"
                }
                title={"Emily Johnson"}
                from={"Resident"}
              />
            </motion.div>
            <motion.div
              className="w-full ml-6"
              variants={animationVariants.zoomIn}
            >
              <ReviewCard
                imgSrc={
                  "	https://files.cdn-files-a.com/uploads/9435802/400_668d117ad72a0.jpg"
                }
                title={"John Doe"}
                from={"Resident"}
              />
            </motion.div>
          </motion.div>
          <motion.div
            initial="initial"
            whileInView="animate"
            variants={animationVariants.fadeRight}
            viewport={{ once: true, amount: 0.2 }}
            className="w-2/4 max-md:w-full max-md:text-center flex flex-col gap-8"
          >
            <h1 className="text-5xl max-md:text-4xl font-semibold">
              Why do people love Rosmanor
            </h1>
            <div>
              <Carousel />
            </div>
          </motion.div>
        </div>
      </div> */}
      {/* review section end */}




      {/* ---------------------------- */}
      
      {/* partner brand section start */}
      <div className="bg-gray-100 border-t-2 border-black/30  border-dashed">
        <div
          style={{ maxWidth: 1200 }}
          className=" mx-auto flex max-md:flex-col justify-center items-center gap-10 p-10 max-md:px-5  "
        >
          {/* <motion.div
            initial="initial"
            whileInView="animate"
            variants={animationVariants.fadeIn}
            viewport={{ once: true, amount: 0.1 }}
            className="flex gap-8 flex-wrap justify-center items-center"
          >
            {partnerBrands.map((e, i) => {
              return (
                <PartnerBrandCard
                  title={e.title}
                  src={`/partner-brands/${e.src}.png`}
                  alt={e.src}
                  key={i}
                />
              );
            })}
          </motion.div> */}
        </div>
      </div>
      {/* partner brand section end */}
    </div>
  );
};

export default HomePage;
