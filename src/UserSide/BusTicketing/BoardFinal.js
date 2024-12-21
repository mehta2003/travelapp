import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  Button,
  Divider,
} from "@mui/material";

const BoardFinal = (props) => {
  return (
    <Card
      sx={{
        width: "500px",
        padding: "16px",
        boxShadow: 6,
        margin: (0, 0, 0, 5),
      }}
    >
      <CardContent>
        <Typography variant="h6" sx={{ marginBottom: "16px" }}>
          Boarding & Dropping
        </Typography>

        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={2}
        >
          <Typography variant="h6">Namaste Circle</Typography>
          <Typography variant="h6">5:50</Typography>
        </Box>

        <Typography variant="h6" sx={{ marginBottom: "8px" }}>
          Patel Travels
        </Typography>

        <Divider sx={{ marginBottom: "16px" }} />

        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={2}
        >
          <Typography variant="h6">Amitnagar Circle</Typography>
          <Typography variant="h6">11:15</Typography>
        </Box>

        <Divider sx={{ marginBottom: "16px" }} />

        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={2}
        >
          <Typography variant="h6">Seat No.</Typography>
          <Typography variant="h6">10</Typography>
        </Box>

        <Divider sx={{ marginBottom: "16px" }} />

        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={2}
        >
          <Typography variant="h6">Amount</Typography>
          <Typography variant="h6">INR 800</Typography>
        </Box>

        {/* <Button variant="contained" color="primary" fullWidth>
          Proceed to Book
        </Button> */}
      </CardContent>
    </Card>
  );
};

export default BoardFinal;
