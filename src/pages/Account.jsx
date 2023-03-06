import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import useFetch from "../hooks/useFetch";
import { BASE_URL } from "../utils/config";
import BookingCard from "./../shared/BookingCard";

const Account = () => {
  const { data: bookings } = useFetch(`${BASE_URL}/booking`);
  console.log(bookings);

  return (
    <>
      <section className="">
        <Container>
          <Row>
            <Col lg="12" className="m-auto">
              <h3 className=" text-center py-4"> Welcome To Tour Booking </h3>
              <h4 className="my-4">Total bookings is:{bookings?.length}</h4>
              <div className="d-flex flex-wrap align-content-center align-items-center justify-content-between ">
                {bookings?.map((book, index) => (
                  <Col lg="4" md="6" sm="6" className="mb-4" key={book._id}>
                    <BookingCard book={book} />
                  </Col>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Account;
