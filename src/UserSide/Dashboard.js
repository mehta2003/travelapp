// import React from "react";
// import { styled, useTheme } from "@mui/material/styles";
// import Box from "@mui/material/Box";
// import Drawer from "@mui/material/Drawer";
// import CssBaseline from "@mui/material/CssBaseline";
// import MuiAppBar from "@mui/material/AppBar";
// import Toolbar from "@mui/material/Toolbar";
// import List from "@mui/material/List";
// import Typography from "@mui/material/Typography";

// import { useNavigate } from "react-router-dom";
// import Dashboard2 from "./../assets/Dashboard2.jpg";

// const drawerWidth = 240;

// const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
//   ({ theme, open }) => ({
//     flexGrow: 1,
//     padding: theme.spacing(3),
//     transition: theme.transitions.create("margin", {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.leavingScreen,
//     }),
//     marginLeft: `-${drawerWidth}px`,
//     ...(open && {
//       transition: theme.transitions.create("margin", {
//         easing: theme.transitions.easing.easeOut,
//         duration: theme.transitions.duration.enteringScreen,
//       }),
//       marginLeft: 0,
//     }),
//   })
// );

// const AppBar = styled(MuiAppBar, {
//   shouldForwardProp: (prop) => prop !== "open",
// })(({ theme, open }) => ({
//   transition: theme.transitions.create(["margin", "width"], {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   ...(open && {
//     width: `calc(100% - ${drawerWidth}px)`,
//     marginLeft: `${drawerWidth}px`,
//     transition: theme.transitions.create(["margin", "width"], {
//       easing: theme.transitions.easing.easeOut,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//   }),
// }));

// const DrawerHeader = styled("div")(({ theme }) => ({
//   display: "flex",
//   alignItems: "center",
//   padding: theme.spacing(0, 1),
//   // necessary for content to be below app bar
//   ...theme.mixins.toolbar,
//   justifyContent: "flex-end",
// }));
// const icons = {
//   Hotel: <HotelIcon />,
//   Bus: <DirectionsBusIcon />,
//   Flight: <FlightOutlinedIcon />,
//   Train: <TrainOutlinedIcon />,
//   Holiday: <DeckOutlinedIcon />,
// };

// function Dashboard() {
//   let navigate = useNavigate();

//   const theme = useTheme();
//   const [open, setOpen] = React.useState(false);

//   const handleDrawerOpen = () => {
//     setOpen(true);
//   };

//   const handleDrawerClose = () => {
//     setOpen(false);
//   };
//   const handleclick = (id) => {
//     if (id === 0) {
//       navigate("/Hotel");
//     } else if (id === 1) {
//       navigate("/Bus");
//     } else if (id === 2) {
//       navigate("/Flight");
//     } else if (id === 3) {
//       navigate("/Train");
//     } else if (id === 4) {
//       navigate("/Holiday");
//     }
//   };
//   return (
//     <Box sx={{ display: "flex" }}>
//       <CssBaseline />
//       <AppBar
//         position="fixed"
//         open={open}
//         sx={{ backgroundColor: "white", color: "blue" }}
//       >
//         <Toolbar>
//           <b>
//             <IconButton
//               color="inherit"
//               aria-label="open drawer"
//               onClick={handleDrawerOpen}
//               edge="start"
//               sx={{ mr: 2, ...(open && { display: "none" }) }}
//             >
//               <MenuIcon />
//             </IconButton>
//           </b>
//           <Typography variant="h6" noWrap component="div">
//             Wanderlust Journeys
//           </Typography>
//         </Toolbar>
//       </AppBar>
//       <Drawer
//         sx={{
//           width: drawerWidth,
//           flexShrink: 0,
//           "& .MuiDrawer-paper": {
//             width: drawerWidth,
//             boxSizing: "border-box",
//           },
//         }}
//         variant="persistent"
//         anchor="left"
//         open={open}
//       >
//         <DrawerHeader>
//           <IconButton onClick={handleDrawerClose}>
//             {theme.direction === "ltr" ? (
//               <ChevronLeftIcon />
//             ) : (
//               <ChevronRightIcon />
//             )}
//           </IconButton>
//         </DrawerHeader>
//         <Divider />
//         <List>
//           {["Hotel", "Bus", "Flight", "Train", "Holiday"].map((text, id) => (
//             <ListItem key={text} disablePadding>
//               <ListItemButton
//                 onClick={() => {
//                   handleclick(id);
//                 }}
//               >
//                 <ListItemIcon>{icons[text]}</ListItemIcon>
//                 <ListItemText primary={text} />
//               </ListItemButton>
//             </ListItem>
//           ))}
//         </List>
//         <Divider />
//       </Drawer>
//       <Main
//         open={open}
//         sx={{
//           backgroundImage: `url(${Dashboard2})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           height: "100vh",
//         }}
//       >

//       </Main>

//   );
// }

// export default Dashboard;
import React from "react";
import Navbar from "./Navbar";
import Dashboard2 from "./../assets/Dashboard2.jpg";
import { styled, useTheme } from "@mui/material/styles";

const drawerWidth = 240;
const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

function Dashboard() {
  return (
    <>
      <Navbar />
      <Main
        // open={open}
        sx={{
          backgroundImage: `url(${Dashboard2})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
        }}
      ></Main>
    </>
  );
}

export default Dashboard;
