import React from "react";
import { Button, Card } from "react-bootstrap";
import classes from "./Tours.module.css";

const tours = [
  {
    date: "JUL16",
    theater: "DETROIT, MI",
    place: "DTE ENERGY MUSIC THEATRE",
  },
  {
    date: "JUL19",
    theater: "TORONTO,ON",
    place: "BUDWEISER STAGE",
  },
  {
    date: "JUL 22",
    theater: "BRISTOW, VA",
    place: "JIGGY LUBE LIVE",
  },
  {
    date: "JUL 29",
    theater: "PHOENIX, AZ",
    place: "AK-CHIN PAVILION",
  },
  {
    date: "AUG 2",
    theater: "LAS VEGAS, NV",
    place: "T-MOBILE ARENA",
  },
  {
    date: "AUG 7",
    theater: "CONCORD, CA",
    place: "CONCORD PAVILION",
  },
];
const Tours = () => {
  return (
    <section>
      <h2 className={classes.heading}>TOURS</h2>
      {tours.map((item, index) => (
        <Card
          key={index}
          style={{
            borderColor: "white",
            borderBottom: "1px solid black",
            marginLeft: "200px",
            marginRight: "200px",
          }}
        >
          <Card.Body className="d-flex align-items-center">
            <Card.Title style={{ fontSize: "15px", marginLeft: "10px" }}>
              {item.date}
            </Card.Title>
            <Card.Text style={{ marginLeft: "3rem", marginBottom: "7px" }}>
              {item.theater}
            </Card.Text>
            <Card.Text style={{ marginLeft: "5rem", marginBottom: "7px" }}>
              {item.place}
            </Card.Text>
            <div className="ms-auto">
              <Button
                variant="info"
                size="sm"
                style={{ color: "white", fontWeight: "bold" }}
              >
                BUY TICKETS
              </Button>
            </div>
          </Card.Body>
        </Card>
      ))}
    </section>
  );
};

export default Tours;
