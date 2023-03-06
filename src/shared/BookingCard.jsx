import React from "react";
import { Card, CardBody } from "reactstrap";

import "./tour-card.css";

const BookingCard = ({ book }) => {

  return (
    <>
      <Card>
        <CardBody className="">
            <h5>Tour Title: {book.tourName}</h5>
            <p>Tour ID: {book._id}</p>
            <p>Tour Book By: <b> {book.fullName}</b> </p>
            <p>Tour Members: <b> {book.guestSize}</b> </p>
            <p>Tourist Phone: <b> {book.phone}</b> </p>
            <p>Tour Date: <b> {book.bookAt}</b> </p>
            {/*<p>Tour Created: <b> {book.createdAt}</b> </p>
            <p>Tour again Update: <b> {book.updatedAt}</b> </p> */}
        </CardBody>
      </Card>
    </>
  );
};

export default BookingCard;
