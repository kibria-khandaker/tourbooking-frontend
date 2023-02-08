import React from "react";
import Slider from "react-slick";

import ava01 from "../../assets/images/ava-1.jpg";
import ava02 from "../../assets/images/ava-2.jpg";
import ava03 from "../../assets/images/ava-3.jpg";

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    swipeToSlice: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,

    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {/* Single Testimonial start */}
      <div className="testimonial py-4 px-3">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi
          nesciunt aperiam deserunt eius. Nemo perspiciatis ipsum sunt quo
          adipisci. Nostrum veritatis est deleniti exercitationem obcaecati
          voluptas quasi? Saepe cupiditate beatae voluptatibus delectus
          perferendis placeat atque?
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava01} className="w-25 h-25 rounded-2" alt="ava01-img" />
          <div>
            <h6 className="mb-0 mt-3"> John Doe</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>
      {/* Single Testimonial end */}

      {/* Single Testimonial start */}
      <div className="testimonial py-4 px-3">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi
          nesciunt aperiam deserunt eius. Nemo perspiciatis ipsum sunt quo
          adipisci. Nostrum veritatis est deleniti exercitationem obcaecati
          voluptas quasi? Saepe cupiditate beatae voluptatibus delectus
          perferendis placeat atque?
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava02} className="w-25 h-25 rounded-2" alt="ava01-img" />
          <div>
            <h6 className="mb-0 mt-3"> Peytter Mark</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>
      {/* Single Testimonial end */}

      {/* Single Testimonial start */}
      <div className="testimonial py-4 px-3">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi
          nesciunt aperiam deserunt eius. Nemo perspiciatis ipsum sunt quo
          adipisci. Nostrum veritatis est deleniti exercitationem obcaecati
          voluptas quasi? Saepe cupiditate beatae voluptatibus delectus
          perferendis placeat atque?
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava03} className="w-25 h-25 rounded-2" alt="ava01-img" />
          <div>
            <h6 className="mb-0 mt-3"> Mr. Del Gets </h6>
            <p>Customer</p>
          </div>
        </div>
      </div>
      {/* Single Testimonial end */}
      {/* Single Testimonial start */}
      <div className="testimonial py-4 px-3">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi
          nesciunt aperiam deserunt eius. Nemo perspiciatis ipsum sunt quo
          adipisci. Nostrum veritatis est deleniti exercitationem obcaecati
          voluptas quasi? Saepe cupiditate beatae voluptatibus delectus
          perferendis placeat atque?
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava02} className="w-25 h-25 rounded-2" alt="ava01-img" />
          <div>
            <h6 className="mb-0 mt-3"> Mr. Del Gets </h6>
            <p>Customer</p>
          </div>
        </div>
      </div>
      {/* Single Testimonial end */}
      {/* Single Testimonial start */}
      <div className="testimonial py-4 px-3">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi
          nesciunt aperiam deserunt eius. Nemo perspiciatis ipsum sunt quo
          adipisci. Nostrum veritatis est deleniti exercitationem obcaecati
          voluptas quasi? Saepe cupiditate beatae voluptatibus delectus
          perferendis placeat atque?
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava03} className="w-25 h-25 rounded-2" alt="ava01-img" />
          <div>
            <h6 className="mb-0 mt-3"> Mr. Del Gets </h6>
            <p>Customer</p>
          </div>
        </div>
      </div>
      {/* Single Testimonial end */}


    </Slider>
  );
};

export default Testimonials;
