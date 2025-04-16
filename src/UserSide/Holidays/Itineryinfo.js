import React from "react";
// import { useNavigate } from "react-router-dom";
import { Box, Paper, Container, Typography, Button } from "@mui/material";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";

import Hawamahal from "../../assets/Hawamahal.jpg";
import amerfort from "../../assets/amerfort.jpg";
import amberfort from "../../assets/amberfort.jpg";
import jalmahal from "../../assets/jalmahal.jpg";
import jantarmantar from "../../assets/jantarmantar.jpg";

function ItineraryInfo() {
  // let navigate = useNavigate();
  const [activeStep, setActiveStep] = React.useState(0);
  const itineraryInformation = [
    {
      Duration: "5 Nights 6 Days",
      city: "Jaipur",
      State: "Welcome To Padharo Rajasthan Tours",
      images: [Hawamahal, amerfort, amberfort, jalmahal, jantarmantar],
      Overview:
        "This tour will be very short, but it will be definitely interesting & amazing because this will include some of the most heritage and historical places of Rajasthan. These are some places which are perfect blend of Indian culture & history of Rajasthan. One can explore heritage places & temples of Rajasthan & beautiful, forts of Jaipur.",
      itinerary1: [
        {
          day: "Day 1",
          title: "Arrival and Hawamahal",
          activities: [
            {
              time: "Morning",
              details: [
                "Arrival in Jaipur",
                "Check-in at your hotel.",
                "Freshen up and relax for a while.",
              ],
            },
            {
              time: "Afternoon",
              details: [
                "Visit Hawamahal (Palace of Winds)",
                "Explore the intricate architecture and take in the views from the windows.",
                "Enjoy lunch at a nearby local restaurant.",
              ],
            },
            {
              time: "Evening",
              details: [
                "Stroll around the local markets",
                "Visit Johari Bazaar for jewelry and handicrafts.",
              ],
            },
          ],
        },
        {
          day: "Day2",
          title: "Jal Mahal and Amber Fort",
          activities: [
            {
              time: "Morning",
              details: [
                "Visit Jal Mahal (Water Palace)",
                "Enjoy the scenic beauty and take a boat ride on Man Sagar Lake.",
                "Have breakfast at a local eatery.",
              ],
            },
            {
              time: "Afternoon",
              details: [
                "Explore Amber Fort",
                "Take an elephant ride or jeep ride up to the fort.",
                "Explore the Sheesh Mahal (Mirror Palace) and other parts of the fort.",
                "Have lunch at the 1135 AD restaurant in Amber Fort.",
              ],
            },
            {
              time: "Evening",
              details: [
                "Return to the hotel and relax.",
                "Enjoy a traditional Rajasthani dinner.",
              ],
            },
          ],
        },
        {
          day: "Day3",
          title: "Jantar Mantar and City Palace",
          activities: [
            {
              time: "Morning",
              details: [
                "Visit Jantar Mantar ",
                "Explore the astronomical instruments and learn about their historical significance.",
              ],
            },
            {
              time: "Afternoon",
              details: [
                "Explore City Palace",
                "Visit the museum and the various courtyards and buildings.",
                "Have lunch at a nearby restaurant.",
              ],
            },
            {
              time: "Evening",
              details: [
                "Attend a cultural show",
                "Enjoy Rajasthani folk dance and music at a local cultural center.",
              ],
            },
          ],
        },
        {
          day: "Day4",
          title: "Amber Fort (Amer Fort) ",
          activities: [
            {
              time: "Morning",
              details: [
                "Return to Amber Fort",
                "Explore more areas of the fort, including the Maota Lake.",
              ],
            },
            {
              time: "Afternoon",
              details: [
                "Visit Jaigarh Fort",
                "See the world's largest cannon on wheels, Jaivana.",
                "Have lunch at a local eatery near the fort.",
              ],
            },
            {
              time: "Evening",
              details: [
                "Visit Nahargarh Fort",
                "Enjoy panoramic views of the city at sunset.",
                "Have dinner at the Padao Restaurant in Nahargarh Fort.",
              ],
            },
          ],
        },
        {
          day: "Day5",
          title: "Explore Local Culture and Markets",
          activities: [
            {
              time: "Morning",
              details: [
                "Visit Albert Hall Museum",
                "Explore the exhibits and learn about Rajasthan's history and culture.",
              ],
            },
            {
              time: "Afternoon",
              details: [
                "Visit Birla Mandir",
                "Explore the beautiful marble temple and its surroundings.",
                "Have lunch at a nearby restaurant.",
              ],
            },
            {
              time: "Evening",
              details: [
                "Shop at Bapu Bazaar and Nehru Bazaar",
                "Buy souvenirs, textiles, and handicrafts.",
                "Enjoy street food and local snacks.",
              ],
            },
          ],
        },
        {
          day: "Day6",
          title: "Departure",
          activities: [
            {
              time: "Morning",
              details: [
                "Relax at the hotel and pack up.",
                "Enjoy a leisurely breakfast.",
              ],
            },
            {
              time: "Afternoon",
              details: [
                "Check out from the hotel",
                "Visit any remaining attractions or do some last-minute shopping.",
              ],
            },
            {
              time: "Evening",
              details: [
                "Depart from Jaipur",
                "Head to the airport or railway station for your journey back home.",
              ],
            },
          ],
        },
      ],
    },
  ];
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  return (
    <>
      <Box sx={{ backgroundColor: "#f5f5f5" }}>
        <Container>
          {itineraryInformation.map((info, index) => (
            <Paper sx={{ borderRadius: 3, padding: 4 }}>
              <Typography variant="h4" sx={{ padding: 3, marginLeft: "100px" }}>
                {info.State}
              </Typography>
              <div
                id="carouselExampleIndicators"
                className="carousel slide 1"
                data-ride="carousel"
              >
                <ol className="carousel-indicators">
                  {info.images.map((_, idx) => (
                    <li
                      key={idx}
                      data-target="#carouselExampleIndicators"
                      data-slide-to={idx}
                      className={idx === 0 ? "active" : ""}
                    ></li>
                  ))}
                </ol>
                <div
                  className="carousel-inner"
                  style={{
                    justifyContent: "center",
                    height: 600,
                  }}
                >
                  {info.images.map((image, idx) => (
                    <div
                      key={idx}
                      className={`carousel-item ${idx === 0 ? "active" : ""}`}
                      style={{
                        justifyContent: "center",
                        height: 600,
                      }}
                    >
                      <img
                        className="d-block w-75 mx-auto"
                        src={Hawamahal}
                        alt={`Slide ${idx + 1}`}
                      />
                    </div>
                  ))}
                </div>
                <a
                  className="carousel-control-prev"
                  href="#carouselExampleIndicators"
                  role="button"
                  data-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a
                  className="carousel-control-next"
                  href="#carouselExampleIndicators"
                  role="button"
                  data-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="sr-only">Next</span>
                </a>
              </div>
              <Typography
                gutterBottom
                variant="h4"
                sx={{ marginLeft: "100px" }}
              >
                {info.Duration} {info.city} Tour
              </Typography>
              <Typography sx={{ padding: 3 }} variant="h6">
                {info.Overview}
              </Typography>

              {/* <Typography sx={{ paddding: 3 }} variant="h6">
                {info.itinerary1.map((val) => (
                  <Typography sx={{ padding: 3 }} variant="h6">
                    <b>
                      {val.day} -{val.title}
                    </b>
                    {val.activities.map((val1) => (
                      <Typography sx={{}} variant="h6">
                        {val1.time} :{val1.details}
                      </Typography>
                    ))}
                  </Typography>
                ))}
              </Typography> */}
              {/* Map of stepper starts from here  */}
              <Stepper activeStep={activeStep} orientation="vertical">
                {info.itinerary1.map((val, index) => (
                  <Step key={val.day}>
                    <StepLabel>
                      <Typography variant="h6">
                        <b>
                          {val.day} - {val.title}
                        </b>
                      </Typography>
                    </StepLabel>
                    <StepContent>
                      {val.activities.map((val1, i) => (
                        <div key={i}>
                          <Typography variant="h7" gutterBottom>
                            <b>{val1.time}</b>
                          </Typography>
                          <ul>
                            {val1.details.map((detail, j) => (
                              <li key={j}>
                                <Typography variant="h7">{detail}</Typography>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                      <Box sx={{ mb: 2 }}>
                        <div>
                          <Button
                            variant="contained"
                            onClick={handleNext}
                            sx={{ mt: 1, mr: 1 }}
                          >
                            {index === info.itinerary1.length - 1
                              ? "Finish"
                              : "Continue"}
                          </Button>
                          <Button
                            disabled={index === 0}
                            onClick={handleBack}
                            sx={{ mt: 1, mr: 1 }}
                          >
                            Back
                          </Button>
                        </div>
                      </Box>
                    </StepContent>
                  </Step>
                ))}
              </Stepper>
              {activeStep === info.itinerary1.length && (
                <Paper square elevation={0} sx={{ p: 3 }}>
                  <Typography>You have Completed Itinerary</Typography>
                  <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                    Reset
                  </Button>
                </Paper>
              )}
            </Paper>
          ))}
        </Container>
      </Box>
    </>
  );
}

export default ItineraryInfo;
