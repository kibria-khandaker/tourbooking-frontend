import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Col, Form, FormGroup } from "reactstrap";
import "./search-bar.css";
import { BASE_URL } from "./../utils/config";

const SearchBar = () => {
  const locationRef = useRef("");
  const distanceRef = useRef(0);
  const maxGroupSizeRef = useRef(0);
  const navigate = useNavigate();

  const searchHandler = async () => {
    const location = locationRef.current.value;
    const distance = distanceRef.current.value;
    const maxGroupSize = maxGroupSizeRef.current.value;
    if (location === "" || distance === "" || maxGroupSize === "") {
      return alert("All field are required!");
    }
    const res = await fetch(
      `${BASE_URL}/tours/search/getTourBySearch?city=${location}&distance=${distance}&maxGroupSize=${maxGroupSize}`
    );

    if (!res.ok) alert("Something went wrong");
    const result = await res.json();
    navigate(
      `/tours/search?city=${location}&distance=${distance}&maxGroupSize=${maxGroupSize}`,
      { state: result.data }
    );
  };

  return (
    <Col className="search__bar py-5 py-lg-3">
        <Form className="d-flex align-content-center gap-4 justify-content-evenly mt-3">
          <FormGroup className="d-flex gap-3 form__group ">
            <span>
              <i className="ri-map-pin-line"></i>
            </span>
            <div className="w-100">
              <h6>Location</h6>
              <input
                type="text"
                placeholder="Where are you going?"
                ref={locationRef}
              />
            </div>
          </FormGroup>
          <FormGroup className="d-flex gap-3 form__group ">
            <span>
              <i className="ri-map-pin-time-line"></i>
            </span>
            <div className="w-100">
              <h6>Distance</h6>
              <input
                type="number"
                placeholder="Distance k/m"
                ref={distanceRef}
              />
            </div>
          </FormGroup>
          <FormGroup className="d-flex gap-3 form__group ">
            <span className="loginUserIcon">
              <i className="ri-group-line"></i>
            </span>
            <div className="w-100">
              <h6>Max People</h6>
              <input
                type="number"
                placeholder="Where are you going?"
                ref={maxGroupSizeRef}
              />
            </div>
          </FormGroup>
          <span className="search__icon" type="submit" onClick={searchHandler}>
            <i className="ri-search-line"></i>
          </span>
        </Form>
    </Col>
  );
};

export default SearchBar;
