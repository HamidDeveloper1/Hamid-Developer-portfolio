import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import sqaure from "../../img/sqaure.png"
import t1 from "../../img/t1.png"
import t2 from "../../img/t2.png"
import t3 from "../../img/t3.png"
import t4 from "../../img/t4.png"
import t5 from "../../img/t5.png"
import t6 from "../../img/t6.png"


import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";

const Testimonial = () => {
  const clients = [
    {
      img: profilePic2,
      review:
        "“I would highly recommend Thrive Internet Marketing. They are great to work with. The traffic to our website has increased thanks to their SEO program.”",
    },
    {
      img: profilePic3,
      review:
        "“I would highly recommend Thrive Internet Marketing. They are great to work with. The traffic to our website has increased thanks to their SEO program.”",
    },
    {
      img: profilePic1,
      review:
        "“I would highly recommend Thrive Internet Marketing. They are great to work with. The traffic to our website has increased thanks to their SEO program.”",
    },
    {
      img: profilePic4,
      review:
        "I would highly recommend Thrive Internet Marketing. They are great to work with. The traffic to our website has increased thanks to their SEO program.”",
    },
  ];

  return (
    <div className="t-wrapper" id= 'Testimonials'>
      <div className="t-heading">
        <span>Clients always get </span>
        <span>Exceptional Work </span>
        <span>from me...</span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="client">
        <p className="textline">“Originally, creative & with and innate understand of their client’s need. These people are always a pleasure to work!”</p>
      </div>

         {/* ......................Intor Design................... */}
      <div className="sqaure">
            <img src={sqaure} alt=""
                style={{width:"150px"}}

                />
      </div>
      <div className="t1">
            <img src={t1} alt=""
                style={{width:"212px"}}

                />
      </div>
      <div className="t2">
            <img src={t2} alt=""
                style={{width:"54px"}}

                />
      </div>
      <div className="t3">
            <img src={t3} alt=""
                style={{width:"198px"}}

                />
      </div>
      <div className="t4">
            <img src={t4} alt=""
                style={{width:"181.5px"}}

                />
      </div>
      <div className="t5">
            <img src={t5} alt=""
                style={{width:"177.5px"}}

                />
      </div>

      <div className="t6">
            <img src={t6} alt=""
                style={{width:"184.5px"}}

                />
      </div>



    </div>
    
  );
};

export default Testimonial;
