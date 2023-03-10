import React from "react";
// import tourData from "../../assets/data/tours";
import { Col } from "reactstrap";
import TourCard from "./../../shared/TourCard";

import useFetch from "./../../hooks/useFetch";
import { BASE_URL } from "./../../utils/config";
import { LoadingText } from './../../shared/LoadingText';

const FeaturedTourList = () => {
  const {
    data: featuredTours,
    loading,
    error,
  } = useFetch(`${BASE_URL}/tours/search/getFeaturedTours`);

  // console.log(featuredTours);

  return (
    <>
      {loading && <h4 className=" text-center pt-5"> <LoadingText /> </h4>}
      {error && <h6 className=" text-center pt-5 text-danger"> {error} or Server API not working for Featured! </h6>}

      {!loading &&
        !error &&
        featuredTours?.map((tour) => (
          <Col lg="3" md="6" className="mb-4" key={tour._id}>
            <TourCard tour={tour} />
          </Col>
        ))}
    </>
  );
};

export default FeaturedTourList;
