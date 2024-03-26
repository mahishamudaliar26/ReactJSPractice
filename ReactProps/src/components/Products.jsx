import React from "react";
import { Card } from "react-bootstrap";

function Products({ title, price }) {
  return (
    <>
      <Card
        style={{
          backgroundColor: "pink",
          borderRadius: "2rem",
          marginBottom: "20px",
        }}
      >
        <Card.Title>
          <h1>{title}</h1>
        </Card.Title>
        <Card.Body>
          <h2>Price: Rs. {price}</h2>
        </Card.Body>
      </Card>
    </>
  );
}

export default Products;
