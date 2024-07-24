import React from "react";
import Button from "../buttons-component/solidbutton";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { animationVariants } from "../../constants/animationVariants";
import { scrollToTop } from "../../constants/scrollToTop";
import ReviewCard from "../home-page-components/reviewCard";
import Carousel from "../home-page-components/carousel";
import PartnerBrandCard from "../home-page-components/partnerBrandCard";
import { partnerBrands } from "../../constants/partnerBrands";
import Showcase2Card from '../showcase2-components/showcase2Card';
import "./about.css";
import aboutImg1 from "../../public/images/about1.jpeg";
import { showCase } from "../../constants/showcase";
import owner from '../../public/images/owner.jpg'
const AboutPage = () => {
  console.log("an", aboutImg1);
  return (
    <>
      <div className="bg-[url(aboutImg1)] bg-fixed bg-center bg-cover pt-44 pb-36 max-md:pt-36 max-md:pb-24"         style={{ backgroundImage: `url(${aboutImg1})` }}
      >
        <motion.div
          initial="initial"
          whileInView="animate"
          variants={animationVariants.zoomOut}
          viewport={{ once: true, amount: 0.2 }}
          style={{ maxWidth: 1200 }}
          className="flex gap-10 justify-between items-end max-md:items-center px-10 mx-auto max-md:px-5 max-md:flex-col"
        >
          <div className="text-white flex flex-col gap-8 max-md:items-center max-md:text-center">
            <h1 className="text-5xl font-bold">Who We Are</h1>
            <p className="text-xl max-w-md">
            We provide a compassionate environment where minds are nurtured, and hearts are healed.
            </p>
          </div>
          {/* <div className="flex gap-12 max-sm:text-center text-white">
            <div className="flex max-md:items-center flex-col gap-4">
              <h2 className="text-4xl title-font font-bold">19K+</h2>
              <p className="text-lg">Premium Services</p>
            </div>
            <div className="flex max-md:items-center flex-col gap-4">
              <h2 className="text-4xl  title-font font-bold">5000+</h2>
              <p className="text-lg">Premium Services</p>
            </div>
          </div> */}
        </motion.div>
      </div>

      <div>
        <motion.div
          initial="initial"
          whileInView="animate"
          variants={animationVariants.fadeUp}
          viewport={{ once: true, amount: 0.2 }}
          style={{ maxWidth: 1200 }}
          className="mx-auto  p-10 py-28  max-sm:px-5 max-md:py-16 "
        >
          <div className="flex w-full gap-10 max-md:flex-col max-md:justify-center max-md:items-center max-md:text-center">
            <div className="flex flex-col items-start justify-center max-md:items-center">
              <h1 className="text-5xl font-bold title-font w-max">
                History
              </h1>
              {/* <Link onClick={scrollToTop} to={"/services"}>
                <Button
                  content={"Services"}
                  fontSize={"text-xl"}
                  padding={"px-5  py-2"}
                  furtherClasses={"mt-8"}
                />
              </Link> */}
            </div>
            {/* <div className="w-full">
              <img
                src="/about-page-images/what-we-do.jpg"
                className="w-full h-full"
                alt=""
              />
            </div> */}
          </div>
          <div className="what-we-do-cards mt-14 gap-8 max-md:grid-cols-1 max-md:grid-rows-3 grid grid-cols-3 grid-rows-1">
            <div>
              <h2 className="text-4xl text-red-500 font-semibold">
                Date of Start
              </h2>
              <p className="text-2xl mt-2">
              The company started on 10 December 2022              </p>
            </div>
            <div>
              <h2 className="text-4xl text-red-500 font-semibold">
                How Many Homes
              </h2>
              <p className="text-2xl mt-2">
                We offer a variety of therapy sessions, including
                cognitive-behavioral therapy, group therapy, and art therapy,
                aimed at nurturing mental well-being.
              </p>
            </div>
            <div>
              <h2 className="text-4xl text-red-500 font-semibold">
              Service Specialize
              </h2>

              <p className="text-2xl mt-2">
                Our team creates individualized care plans to meet the unique
                needs of each resident, ensuring tailored support and
                comprehensive care.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* what we offer section start */}

      <div
        style={{ maxWidth: 1200 }}
        className="mx-auto gap-10 grid grid-rows-1 grid-cols-4 max-lg:grid-rows-2 max-lg:grid-cols-2 max-sm:grid-cols-1 max-sm:grid-rows-4 p-10 max-md:px-5 "
      >
          <motion.div
      initial="initial"
      whileInView="animate"
      variants={animationVariants.fadeUp}
      viewport={{ once: true, amount: 0.2 }}
      style={{ height: 280 }}
      className="relative w-full mb-5"
    >
    
      <img className="w-full h-full rounded-lg object-cover mb-2" src={owner} alt="img" />
      <div className=" flex justify-center">
          <h2 className="title-font text-xl font-semibold mb-1 mr-5">Name</h2> 
          <p className="text-xl">CEO</p>
      </div>
    </motion.div>
    <motion.div
      initial="initial"
      whileInView="animate"
      variants={animationVariants.fadeUp}
      viewport={{ once: true, amount: 0.2 }}
      style={{ height: 280 }}
      className="relative w-full mb-5"
    >
    
      <img className="w-full h-full rounded-lg object-cover mb-2" src={owner} alt="img" />
      <div className=" flex justify-center">
          <h2 className="title-font text-xl font-semibold mb-1 mr-5">Name</h2> 
          <p className="text-xl">CO</p>
      </div>
    </motion.div>
    <motion.div
      initial="initial"
      whileInView="animate"
      variants={animationVariants.fadeUp}
      viewport={{ once: true, amount: 0.2 }}
      style={{ height: 280 }}
      className="relative w-full mb-5"
    >
    
      <img className="w-full h-full rounded-lg object-cover mb-2" src={owner} alt="img" />
      <div className=" flex justify-center">
          <h2 className="title-font text-xl font-semibold mb-1 mr-5">Name</h2> 
          <p className="text-xl">Operation Head</p>
      </div>
    </motion.div>
    <motion.div
      initial="initial"
      whileInView="animate"
      variants={animationVariants.fadeUp}
      viewport={{ once: true, amount: 0.2 }}
      style={{ height: 280 }}
      className="relative w-full mb-5"
    >
    
      <img className="w-full h-full rounded-xl object-cover mb-2" src={owner} alt="img" />
      <div className=" flex justify-center">
          <h2 className="title-font text-xl font-semibold mb-1 mr-5">Name</h2> 
          <p className="text-xl">Manager</p>
      </div>
    </motion.div>
      </div>

     
      <div className="bg-black">
        <div
          style={{ maxWidth: 1200 }}
          className="mx-auto flex max-md:flex-col justify-center items-center max-md:text-center gap-20 max-md:gap-12 p-10 py-28  max-sm:px-5 max-md:py-16  md:pb-36 "
        >
          <motion.div
            initial="initial"
            whileInView="animate"
            variants={animationVariants.fadeUp}
            viewport={{ once: true, amount: 0.2 }}
            className=" w-1/2 max-md:w-full flex flex-col text-white items-start justify-between max-md:items-center"
          >
            <h1 className="text-5xl font-bold title-font w-max">
              What we offer
            </h1>
            <p className="text-xl mt-5">
              At Mental Wellness Heaven, we prioritize a holistic approach to
              mental health recovery. Our expert team is committed to creating a
              nurturing environment where individuals can heal and thrive. We
              offer personalized care plans, therapy sessions, and community
              support to help every resident achieve their best mental health.
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            variants={animationVariants.zoomOut}
            viewport={{ once: true, amount: 0.2 }}
            className=" w-1/2 max-md:w-full text-white/50"
          >
            <h2 className="text-2xl">Our Clients</h2>
            <div className="relative w-fit max-md:mx-auto -mt-7 max-md:-mt-5">
              <h1 className="text-[150px] max-sm:text-[120px] font-semibold relative text-red-500">
                1000+
              </h1>
              <div
                className="absolute z-50 top-0 right-0 left-0 bottom-0 bg-no-repeat "
                style={{
                  // backgroundImage: "url(/200+.png)",
                  backgroundPosition: "40% 100%",
                  backgroundSize: "95%",
                }}
              ></div>
            </div>
          </motion.div>
        </div>
      </div>
    

      {/* appreciation section start */}
      {/* <div className="bg-white">
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
                  Happy Clients
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
            
            </motion.div>
            <motion.div variants={animationVariants.fadeLeft}>
              <Link onClick={scrollToTop} to={"/contact"}>
                <Button
                  content={"Get In Touch"}
                  padding={"px-6 py-3"}
                  fontSize={"text-xl"}
                />
              </Link>
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
     
      </div> */}
      {/* appreciation section end */}
      {/* review section start */}
      <div className="bg-gray-100">
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
      </div>
      {/* review section end */}
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
    </>
  );
};

export default AboutPage;
