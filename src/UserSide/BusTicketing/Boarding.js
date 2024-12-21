import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Divider, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Boarding(props) {
  const [value, setValue] = React.useState("1");
  const [selectBoard, setSelectBoard] = React.useState("");
  const [selectDrop, setSelectDrop] = React.useState("");
  let Navigate = useNavigate();

  const handleChange1 = (e, newValue) => {
    setValue(newValue);
  };

  const handleBoarding = (e) => {
    setSelectBoard(e.target.value);
  };

  const handleDropping = (e) => {
    setSelectDrop(e.target.value);
  };

  const handleContinue = () => {
    if (!selectBoard || !selectDrop) {
      alert("Please select both a boarding point and a dropping point.");
    } else {
      Navigate("/BoardFinal");
    }
  };

  const board = [
    { Time: "05:20", L1: "Adalaj", Address: "Adalaj Chokdi" },
    { Time: "05:25", L1: "Chandkheda", Address: "Bus Stand Chandkheda" },
    { Time: "05:45", L1: "Subhash Bridge", Address: "RTO Circle" },
    { Time: "05:50", L1: "Namste Circle", Address: "Shree Ganesh Travels" },
  ];

  const drop = [
    {
      Time: "11:15",
      L1: "Amitnagar Circle",
      Address: "Amitnagar Circle Shop No 1 Krishnavali Complex",
    },
  ];

  return (
    <Box sx={{ display: "flex", justifyContent: "center", padding: 2, mt: -4 }}>
      <Paper sx={{ width: "100%", maxWidth: 400, padding: 2 }}>
        <Tabs
          value={value}
          onChange={handleChange1}
          aria-label="boarding and dropping tabs"
          variant="fullWidth"
        >
          <Tab label="Boarding Point" value="1" />
          <Tab label="Dropping Point" value="2" />
        </Tabs>
        <Divider />
        <Box sx={{ padding: 2, width: "auto", mt: -1 }}>
          {value === "1" && (
            <RadioGroup value={selectBoard} onChange={handleBoarding}>
              {board.map((boards) => (
                <Box sx={{ mb: 2 }} key={boards.L1}>
                  <FormControlLabel
                    value={boards.L1}
                    control={<Radio />}
                    label={
                      <Box>
                        <Typography variant="body1">{boards.Time}</Typography>
                        <Typography variant="body2">{boards.L1}</Typography>
                        <Typography variant="body2">
                          {boards.Address}
                        </Typography>
                      </Box>
                    }
                  />
                  <Divider sx={{ mt: 1 }} variant="middle" />
                </Box>
              ))}
            </RadioGroup>
          )}
          {value === "2" && (
            <RadioGroup value={selectDrop} onChange={handleDropping}>
              {drop.map((drops) => (
                <Box sx={{ mb: 2 }} key={drops.L1}>
                  <FormControlLabel
                    value={drops.L1}
                    control={<Radio />}
                    label={
                      <Box>
                        <Typography variant="body1">{drops.Time}</Typography>
                        <Typography variant="body2">{drops.L1}</Typography>
                        <Typography variant="body2">{drops.Address}</Typography>
                      </Box>
                    }
                  />
                </Box>
              ))}
            </RadioGroup>
          )}
          <Typography variant="body1" sx={{ mb: 2 }}>
            Total selected seats: {props.selectedSeat.length}
          </Typography>
          <Divider sx={{ mt: 0, mb: 2 }} variant="fullWidth" />
          <Typography variant="body1">Amount: INR 600</Typography>
          <Button
            variant="contained"
            sx={{ mt: 2, width: 160 }}
            onClick={handleContinue}
          >
            Continue
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}

export default Boarding;
