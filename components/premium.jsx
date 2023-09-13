import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper";
import { useEffect, useState, useRef } from "react";

const Premium = () => {
  const swiperRef = useRef();

  const [width, setWidth] = useState(null);

  let mobile = false;

  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  if (width < 1000) {
    mobile = true;
  } else {
    mobile = false;
  }

  return (
    <>
      <div className="flex flex-row h-[100vh]">
        {mobile && (
          <button
            className="border-black rounded-full bg-white w-40"
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <img src="https://img.icons8.com/ios-glyphs/40/null/chevron-left.png" />
          </button>
        )}
        <Swiper
          slidesPerView={mobile ? 1 : 3}
          loop={mobile ? true : false}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          // autoplay={{
          //   delay: 2500,
          //   disableOnInteraction: true,
          // }}
          modules={[Navigation, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide >
            <div className="flex flex-col justify-between my-10 border p-10 pb-5 rounded-lg lg:mx-5 lg:w-auto md:w-[60%] md:mx-auto bg-[#f1f5fb] h-[500px]">
              <div className="flex md:flex-row flex-col items-center justify-between">
                <h1 className="text-[20px]">Basic</h1>
                <span className="text-[30px]">FREE</span>
              </div>
              <p className="text-center my-10">Basic Plan includes:</p>
              <ul className=" list-disc ">
                <p>Plan includes:</p>
                <li>Access to educational resources</li>
                <li>Access to Self-assessment tool</li>
                <li>Access to a support forum or community</li>
              </ul>
              <button className="mt-10 py-1 border rounded-lg bg-[#3023ac] text-white">
                Select
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col justify-between my-10 border p-10 rounded-lg lg:mx-5 lg:w-auto md:w-[60%] md:mx-auto bg-[#f1f5fb] h-[500px]">
              <div className="flex md:flex-row flex-col items-center justify-between">
                <h1 className="text-[20px]">Standard</h1>
                <span className="text-[30px]">₹999/month</span>
              </div>
              <p className="text-center my-10">
                All features of the basic package, plus:
              </p>
              <ul className=" list-disc ">
                <li>Access to a library of self-care resources</li>
                <li>One-on-one coaching sessions with a trained coach</li>
                <li>
                  Access to a support group led by a mental health professional
                </li>
              </ul>
              <button className="mt-10 py-1 border rounded-lg bg-[#3023ac] text-white">
                Select
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col justify-between my-10 border p-10 rounded-lg lg:mx-5 lg:w-auto md:w-[60%] md:mx-auto bg-[#f1f5fb] h-[500px]">
              <div className="flex md:flex-row flex-col items-center justify-between">
                <h1 className="text-[20px]">Premium</h1>
                <span className="text-[30px]">₹2499/month</span>
              </div>
              <p className="text-center my-10">
                All features of the basic and standard packages, plus:
              </p>
              <ul className=" list-disc ">
                <li>Online therapy sessions with a licensed therapist</li>
                <li>Group therapy sessions led by a trained coach</li>
                <li>A customized self-care plan, curated by a professional</li>
                <li>
                  A personalized mental health plan,curated by a professional
                </li>
              </ul>
              <button className="mt-10 py-1 border rounded-lg bg-[#3023ac] text-white">
                Select
              </button>
            </div>
          </SwiperSlide>
        </Swiper>
        {mobile && (
          <button
            className="border-black rounded-full bg-white w-40"
            onClick={() => swiperRef.current?.slideNext()}
          >
            <img src="https://img.icons8.com/ios-glyphs/40/null/chevron-right.png" />
          </button>
        )}
      </div>
    </>
  );
};

export default Premium;
