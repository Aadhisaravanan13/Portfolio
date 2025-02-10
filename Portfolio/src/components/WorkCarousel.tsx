import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css"; // Core Swiper styles
import { EffectCoverflow } from "swiper/modules";

function WorkCarousel() {
    const data = [
        {
          title: "Project 1",
          image:
            "https://20207335.fs1.hubspotusercontent-na1.net/hubfs/20207335/Cover%20Image-Apr-26-2024-04-58-03-9665-PM.jpg",
        },
        {
          title: "Project 2",
          image:
            "https://20207335.fs1.hubspotusercontent-na1.net/hubfs/20207335/Cover%20Image-Apr-26-2024-04-58-03-9665-PM.jpg",
        },
        {
          title: "Project 3",
          image:
            "https://20207335.fs1.hubspotusercontent-na1.net/hubfs/20207335/Cover%20Image-Apr-26-2024-04-58-03-9665-PM.jpg",
        },
        {
          title: "Project 4",
          image:
            "https://20207335.fs1.hubspotusercontent-na1.net/hubfs/20207335/Cover%20Image-Apr-26-2024-04-58-03-9665-PM.jpg",
        },
        {
          title: "Project 5",
          image:
            "https://20207335.fs1.hubspotusercontent-na1.net/hubfs/20207335/Cover%20Image-Apr-26-2024-04-58-03-9665-PM.jpg",
        },
      ];
    
      const headers = () => {
        return (
          <div className="flex justify-center pt-16">
            <header className="text-zinc-800 text-7xl font-bold tracking-widest opacity-80 pt-2">
              WORKS
            </header>
            <h1 className="text-white text-3xl text-nowrap font-bold absolute top-28 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
              MY <span className="text-yellow-500">PORTFOLIO</span>
            </h1>
          </div>
        );
      };
  return (
    <>
     <div className="relative flex flex-col">
      {headers()}
      <div className="px-32 pt-28">
        <Swiper
          autoplay
          loop={true}
          effect={"coverflow"}
          grabCursor={false}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          modules={[EffectCoverflow]}
          className="mySwiper"
        >
          {data.map((item, index) => (
           <SwiperSlide
           key={index}
           style={{
             width: "60%",
             height: "360px",
             borderRadius: "15px",
             overflow: "hidden",
             boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
             position: "relative", 
             cursor: "pointer"
           }}
         >
           {/* Image */}
           <img
             src={item.image}
             alt={item.title}
             className="w-full h-full object-cover"
           />
         
           {/* Title (Fixed Positioning) */}
           <div
             className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-center py-2"
           >
             <p className="text-white text-lg font-semibold">{item.title}</p>
           </div>
         </SwiperSlide>
         
          ))}
        </Swiper>
      </div>
    </div>
    </>
  )
}

export default WorkCarousel