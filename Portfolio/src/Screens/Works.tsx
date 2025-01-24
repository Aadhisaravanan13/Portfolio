import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css"; // Core Swiper styles
import { EffectCoverflow } from "swiper/modules";

const Works = () => {
  const data = [
    {
      title: "Project 1",
      image:
        "https://cdn-lfs-us-1.hf.co/repos/ac/b3/acb3de135033956271456e8ab1bbe284964f74bf9fab49fb27002b798f18f382/0450e96b0141236216854cda9303da17e2096d48cc144bb12dbff4111d6f5ab2?response-content-disposition=inline%3B+filename*%3DUTF-8%27%27image-classification-input.jpeg%3B+filename%3D%22image-classification-input.jpeg%22%3B&response-content-type=image%2Fjpeg&Expires=1737720866&Policy=eyJTdGF0ZW1lbnQiOlt7IkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTczNzcyMDg2Nn19LCJSZXNvdXJjZSI6Imh0dHBzOi8vY2RuLWxmcy11cy0xLmhmLmNvL3JlcG9zL2FjL2IzL2FjYjNkZTEzNTAzMzk1NjI3MTQ1NmU4YWIxYmJlMjg0OTY0Zjc0YmY5ZmFiNDlmYjI3MDAyYjc5OGYxOGYzODIvMDQ1MGU5NmIwMTQxMjM2MjE2ODU0Y2RhOTMwM2RhMTdlMjA5NmQ0OGNjMTQ0YmIxMmRiZmY0MTExZDZmNWFiMj9yZXNwb25zZS1jb250ZW50LWRpc3Bvc2l0aW9uPSomcmVzcG9uc2UtY29udGVudC10eXBlPSoifV19&Signature=hJDktvFOGigC1LUR3NneuoKjXxtJTjBhFFAT6o3RZj%7EoZwQ1-k1TGxdURSe3uld9se6lvVRehu6QdoUAsp3dAD7APAN9s%7EUWNpF4CKMkYSRUasDQ5R6flt4KP3vCA1HBVXL758DDj5ppvHC22ocGtaGgsbbaA8aBYNhJ8aYleNvp7OR%7E3s5G4m7dYA60xCaH17cbvsEuLAKispmy-r8atMaGPz%7EsILe2gVaWPH-CnoDcsgC4zlBZax8zq4%7E1JcLFThPR6q4GFzAdWebClQkwcjPST-qZm8qRQWdjLFsYjyzE9xBcQm0wPV1%7E-0YV342kNQI3Xo%7EPrNrjPufou4xUyg__&Key-Pair-Id=K24J24Z295AEI9",
    },
    {
      title: "Project 2",
      image:
        "https://cdn-lfs-us-1.hf.co/repos/ac/b3/acb3de135033956271456e8ab1bbe284964f74bf9fab49fb27002b798f18f382/0450e96b0141236216854cda9303da17e2096d48cc144bb12dbff4111d6f5ab2?response-content-disposition=inline%3B+filename*%3DUTF-8%27%27image-classification-input.jpeg%3B+filename%3D%22image-classification-input.jpeg%22%3B&response-content-type=image%2Fjpeg&Expires=1737720866&Policy=eyJTdGF0ZW1lbnQiOlt7IkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTczNzcyMDg2Nn19LCJSZXNvdXJjZSI6Imh0dHBzOi8vY2RuLWxmcy11cy0xLmhmLmNvL3JlcG9zL2FjL2IzL2FjYjNkZTEzNTAzMzk1NjI3MTQ1NmU4YWIxYmJlMjg0OTY0Zjc0YmY5ZmFiNDlmYjI3MDAyYjc5OGYxOGYzODIvMDQ1MGU5NmIwMTQxMjM2MjE2ODU0Y2RhOTMwM2RhMTdlMjA5NmQ0OGNjMTQ0YmIxMmRiZmY0MTExZDZmNWFiMj9yZXNwb25zZS1jb250ZW50LWRpc3Bvc2l0aW9uPSomcmVzcG9uc2UtY29udGVudC10eXBlPSoifV19&Signature=hJDktvFOGigC1LUR3NneuoKjXxtJTjBhFFAT6o3RZj%7EoZwQ1-k1TGxdURSe3uld9se6lvVRehu6QdoUAsp3dAD7APAN9s%7EUWNpF4CKMkYSRUasDQ5R6flt4KP3vCA1HBVXL758DDj5ppvHC22ocGtaGgsbbaA8aBYNhJ8aYleNvp7OR%7E3s5G4m7dYA60xCaH17cbvsEuLAKispmy-r8atMaGPz%7EsILe2gVaWPH-CnoDcsgC4zlBZax8zq4%7E1JcLFThPR6q4GFzAdWebClQkwcjPST-qZm8qRQWdjLFsYjyzE9xBcQm0wPV1%7E-0YV342kNQI3Xo%7EPrNrjPufou4xUyg__&Key-Pair-Id=K24J24Z295AEI9",
    },
    {
      title: "Project 3",
      image:
        "https://cdn-lfs-us-1.hf.co/repos/ac/b3/acb3de135033956271456e8ab1bbe284964f74bf9fab49fb27002b798f18f382/0450e96b0141236216854cda9303da17e2096d48cc144bb12dbff4111d6f5ab2?response-content-disposition=inline%3B+filename*%3DUTF-8%27%27image-classification-input.jpeg%3B+filename%3D%22image-classification-input.jpeg%22%3B&response-content-type=image%2Fjpeg&Expires=1737720866&Policy=eyJTdGF0ZW1lbnQiOlt7IkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTczNzcyMDg2Nn19LCJSZXNvdXJjZSI6Imh0dHBzOi8vY2RuLWxmcy11cy0xLmhmLmNvL3JlcG9zL2FjL2IzL2FjYjNkZTEzNTAzMzk1NjI3MTQ1NmU4YWIxYmJlMjg0OTY0Zjc0YmY5ZmFiNDlmYjI3MDAyYjc5OGYxOGYzODIvMDQ1MGU5NmIwMTQxMjM2MjE2ODU0Y2RhOTMwM2RhMTdlMjA5NmQ0OGNjMTQ0YmIxMmRiZmY0MTExZDZmNWFiMj9yZXNwb25zZS1jb250ZW50LWRpc3Bvc2l0aW9uPSomcmVzcG9uc2UtY29udGVudC10eXBlPSoifV19&Signature=hJDktvFOGigC1LUR3NneuoKjXxtJTjBhFFAT6o3RZj%7EoZwQ1-k1TGxdURSe3uld9se6lvVRehu6QdoUAsp3dAD7APAN9s%7EUWNpF4CKMkYSRUasDQ5R6flt4KP3vCA1HBVXL758DDj5ppvHC22ocGtaGgsbbaA8aBYNhJ8aYleNvp7OR%7E3s5G4m7dYA60xCaH17cbvsEuLAKispmy-r8atMaGPz%7EsILe2gVaWPH-CnoDcsgC4zlBZax8zq4%7E1JcLFThPR6q4GFzAdWebClQkwcjPST-qZm8qRQWdjLFsYjyzE9xBcQm0wPV1%7E-0YV342kNQI3Xo%7EPrNrjPufou4xUyg__&Key-Pair-Id=K24J24Z295AEI9",
    },
    {
      title: "Project 4",
      image:
        "https://cdn-lfs-us-1.hf.co/repos/ac/b3/acb3de135033956271456e8ab1bbe284964f74bf9fab49fb27002b798f18f382/0450e96b0141236216854cda9303da17e2096d48cc144bb12dbff4111d6f5ab2?response-content-disposition=inline%3B+filename*%3DUTF-8%27%27image-classification-input.jpeg%3B+filename%3D%22image-classification-input.jpeg%22%3B&response-content-type=image%2Fjpeg&Expires=1737720866&Policy=eyJTdGF0ZW1lbnQiOlt7IkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTczNzcyMDg2Nn19LCJSZXNvdXJjZSI6Imh0dHBzOi8vY2RuLWxmcy11cy0xLmhmLmNvL3JlcG9zL2FjL2IzL2FjYjNkZTEzNTAzMzk1NjI3MTQ1NmU4YWIxYmJlMjg0OTY0Zjc0YmY5ZmFiNDlmYjI3MDAyYjc5OGYxOGYzODIvMDQ1MGU5NmIwMTQxMjM2MjE2ODU0Y2RhOTMwM2RhMTdlMjA5NmQ0OGNjMTQ0YmIxMmRiZmY0MTExZDZmNWFiMj9yZXNwb25zZS1jb250ZW50LWRpc3Bvc2l0aW9uPSomcmVzcG9uc2UtY29udGVudC10eXBlPSoifV19&Signature=hJDktvFOGigC1LUR3NneuoKjXxtJTjBhFFAT6o3RZj%7EoZwQ1-k1TGxdURSe3uld9se6lvVRehu6QdoUAsp3dAD7APAN9s%7EUWNpF4CKMkYSRUasDQ5R6flt4KP3vCA1HBVXL758DDj5ppvHC22ocGtaGgsbbaA8aBYNhJ8aYleNvp7OR%7E3s5G4m7dYA60xCaH17cbvsEuLAKispmy-r8atMaGPz%7EsILe2gVaWPH-CnoDcsgC4zlBZax8zq4%7E1JcLFThPR6q4GFzAdWebClQkwcjPST-qZm8qRQWdjLFsYjyzE9xBcQm0wPV1%7E-0YV342kNQI3Xo%7EPrNrjPufou4xUyg__&Key-Pair-Id=K24J24Z295AEI9",
    },
    {
      title: "Project 5",
      image:
        "https://cdn-lfs-us-1.hf.co/repos/ac/b3/acb3de135033956271456e8ab1bbe284964f74bf9fab49fb27002b798f18f382/0450e96b0141236216854cda9303da17e2096d48cc144bb12dbff4111d6f5ab2?response-content-disposition=inline%3B+filename*%3DUTF-8%27%27image-classification-input.jpeg%3B+filename%3D%22image-classification-input.jpeg%22%3B&response-content-type=image%2Fjpeg&Expires=1737720866&Policy=eyJTdGF0ZW1lbnQiOlt7IkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTczNzcyMDg2Nn19LCJSZXNvdXJjZSI6Imh0dHBzOi8vY2RuLWxmcy11cy0xLmhmLmNvL3JlcG9zL2FjL2IzL2FjYjNkZTEzNTAzMzk1NjI3MTQ1NmU4YWIxYmJlMjg0OTY0Zjc0YmY5ZmFiNDlmYjI3MDAyYjc5OGYxOGYzODIvMDQ1MGU5NmIwMTQxMjM2MjE2ODU0Y2RhOTMwM2RhMTdlMjA5NmQ0OGNjMTQ0YmIxMmRiZmY0MTExZDZmNWFiMj9yZXNwb25zZS1jb250ZW50LWRpc3Bvc2l0aW9uPSomcmVzcG9uc2UtY29udGVudC10eXBlPSoifV19&Signature=hJDktvFOGigC1LUR3NneuoKjXxtJTjBhFFAT6o3RZj%7EoZwQ1-k1TGxdURSe3uld9se6lvVRehu6QdoUAsp3dAD7APAN9s%7EUWNpF4CKMkYSRUasDQ5R6flt4KP3vCA1HBVXL758DDj5ppvHC22ocGtaGgsbbaA8aBYNhJ8aYleNvp7OR%7E3s5G4m7dYA60xCaH17cbvsEuLAKispmy-r8atMaGPz%7EsILe2gVaWPH-CnoDcsgC4zlBZax8zq4%7E1JcLFThPR6q4GFzAdWebClQkwcjPST-qZm8qRQWdjLFsYjyzE9xBcQm0wPV1%7E-0YV342kNQI3Xo%7EPrNrjPufou4xUyg__&Key-Pair-Id=K24J24Z295AEI9",
    },
  ];

  const headers = () => {
    return (
      <div className="flex justify-center">
        <header className="text-zinc-900 text-7xl font-bold tracking-widest opacity-80">
          WORKS
        </header>
        <h1 className="text-white text-3xl text-nowrap font-bold absolute top-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
          MY <span className="text-yellow-500">PORTFOLIO</span>
        </h1>
      </div>
    );
  };

  return (
    <div className="relative flex-col">
      {headers()}
      <div className="mt-12 px-32">
        <Swiper
          autoplay
          loop={true}
          effect={"coverflow"}
          grabCursor={true}
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
                width: "80%",
                height: "250px",
                borderRadius: "15px",
                overflow: "hidden",
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
              }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
              <div className="text-center text-lg font-semibold mt-2">
                {item.title}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Works;
