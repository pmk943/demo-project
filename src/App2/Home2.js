import * as React from "react";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import { mediaCards } from "../Components/Card/Cards";
import CustomCard from "../Components/Card";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { styled, useTheme } from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Box, Divider, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import CasCadeDropDown from "./CasCadeDropDown";

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

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function Home2() {
  let navigate = useNavigate();
  const theme = useTheme();
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen((prevState) => !prevState);
  };

  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <AppBar position="fixed" open={isDrawerOpen}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={() => toggleDrawer()}
              edge="start"
              sx={{ mr: 2, ...(isDrawerOpen && { display: "none" }) }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              noWrap
              component="div"
              onClick={() => navigate("/")}
              sx={{ cursor: "pointer" }}
            >
              Main Menu
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          // anchor={anchor}
          open={isDrawerOpen}
          variant="persistent"
          onClose={() => toggleDrawer()}
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
        >
          <DrawerHeader
            sx={{
              background: "white",
              borderBottom: "1px solid black",
            }}
          >
            <IconButton onClick={() => toggleDrawer()}>
              {theme.direction === "ltr" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </DrawerHeader>
          {mediaCards.map(({ title }) => (
            <CustomCard
              sx={{
                cursor: "pointer",
                background: `${
                  title === "Range Plan"
                    ? "Orange"
                    : title === "Open to Buy"
                    ? "Green"
                    : "DeepSkyBlue"
                }`,
                borderRadius: 0,
                borderBottom: "1px solid black",
                "&:hover": { opacity: 0.8 },
              }}
              title={title}
              onClick={() => navigate(`/cardDetails/${title}`)}
            />
          ))}
        </Drawer>
        <Main open={isDrawerOpen}>
          <DrawerHeader />
          <CasCadeDropDown />
        </Main>
      </Box>
      <div >
        <Outlet />
      </div>
    </div>
  );
}
