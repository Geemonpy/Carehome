import "./service.css";
import ServiceCard from "./serviceCard";
import { servicesData } from "../../constants/servicesData";
import { motion } from "framer-motion";
import { animationVariants } from "../../constants/animationVariants";
const ServicesComponent = () => {
  return (
    <>
      <div className="bg-[url(https://files.cdn-files-a.com/uploads/9435802/2000_668d1174d10d6.jpg)] bg-fixed bg-center bg-cover pt-44 pb-36 max-md:pt-36 max-md:pb-24 ">
        <motion.div
          initial="initial"
          whileInView="animate"
          variants={animationVariants.zoomOut}
          viewport={{ once: true, amount: 0.2 }}
          style={{ maxWidth: 1200 }}
          className="flex gap-10 justify-between items-end max-md:items-center px-10 mx-auto max-md:px-5 max-md:flex-col"
        >
          <div className="text-white flex flex-col gap-8 max-md:items-center max-md:text-center">
            <h1 className="text-5xl font-bold">Our Services</h1>
            <p className="text-xl max-w-md">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to mak
            </p>
          </div>
          <div className="flex gap-12 text-white max-md:text-center">
            <div className="flex max-md:items-center  flex-col gap-4">
              <h2 className="text-4xl title-font font-bold">19K+</h2>
              <p className="text-lg">Premium houses</p>
            </div>
            <div className="flex max-md:items-center flex-col gap-4">
              <h2 className="text-4xl  title-font font-bold">5000+</h2>
              <p className="text-lg">Premium houses</p>
            </div>
          </div>
        </motion.div>
      </div>
      <div
        style={{ maxWidth: 1200 }}
        className="mx-auto grid grid-cols-2 max-md:grid-rows-6 max-md:grid-cols-1 grid-rows-3 p-10 max-lg:px-5 gap-5"
      >
        {/* {servicesData.map((e, i) => {
          return (
            <ServiceCard
              key={i}
              title={e.title}
              brief={e.shortDescription}
              imgSrc={e.image}
              id={e.id}
              iconSrc={e.icon}
            />
          );
        })} */}
        <ServiceCard
         key={1}
         title={"Community Support"}
         brief={'Our supportive community promotes social interaction, peer support, and a sense of belonging, empowering residents on their recovery journey.'}
         imgSrc={'https://files.cdn-files-a.com/uploads/9435802/400_668d11796fd24.jpg'}
         id={1}
        //  iconSrc={e.icon}
        />
         <ServiceCard
         key={2}
         title={"Therapy Sessions"}
         brief={'We offer a variety of therapy sessions, including cognitive-behavioral therapy, group therapy, and art therapy, aimed at nurturing mental well-being.'}
         imgSrc={'	https://files.cdn-files-a.com/uploads/9435802/400_668d1177c93bc.jpg'}
         id={2}
        //  iconSrc={e.icon}
        />
         <ServiceCard
         key={3}
         title={"Personalized Care Plans"}
         brief={'Our team creates individualized care plans to meet the unique needs of each resident, ensuring tailored support and comprehensive care.'}
         imgSrc={'https://static1.s123-cdn-static-a.com/uploads/2031/400_57d14bd1c7c33.jpg'}
         id={3}
        //  iconSrc={e.icon}
        />
      </div>
    </>
  );
};

export default ServicesComponent;
{
  /* <div className="it-content text-xl  gap-2 justify-center items-center flex-col max-w-md text-center hidden overflow-hidden scale-y-0  transition-all  ">
    <p>
    We believe that technology design are revolutionizing brand
    experiences.
    </p>
    <a className="font-bold" href="">
    Read More {">"}
          </a> */
}
//   </div>
