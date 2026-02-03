import React, { useState } from "react";
import {
  Box,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Avatar,
  Divider,
  Typography,
  Collapse,
} from "@mui/material";
import { styled } from "@mui/material/styles";

// Icons
import HomeIcon from "@mui/icons-material/Home";
import SlowMotionVideoIcon from "@mui/icons-material/SlowMotionVideo";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import HistoryIcon from "@mui/icons-material/History";
import PlaylistPlayIcon from "@mui/icons-material/PlaylistPlay";
import WatchLaterOutlinedIcon from "@mui/icons-material/WatchLaterOutlined";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import img from "../assets/img/image.png";
const drawerWidth = 240;
const collapsedWidth = 72;

// --- DYNAMIC STYLING ---
const openedMixin = (theme) => ({
  width: drawerWidth,
  backgroundColor: "#0f0f0f",
  color: "#fff",
  borderRight: "none",
  overflowY: "auto",
  overflowX: "hidden",
  /* THIN DARK SCROLLBAR */
  "&::-webkit-scrollbar": { width: "8px" },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: "transparent",
    borderRadius: "10px",
  },
  "&:hover::-webkit-scrollbar-thumb": {
    backgroundColor: "#717171",
  },
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
});

const closedMixin = (theme) => ({
  width: collapsedWidth,
  backgroundColor: "#0f0f0f",
  color: "#fff",
  borderRight: "none",
  overflowX: "hidden",
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
});

const StyledDrawer = styled(Drawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

// Standard Pill Style
const YouTubeListItem = styled(ListItemButton, {
  shouldForwardProp: (prop) => prop !== "isActive" && prop !== "isCollapsed",
})(({ theme, isActive, isCollapsed }) => ({
  borderRadius: "10px",
  margin: "1px 12px",
  padding: "8px 12px",
  minHeight: "40px",
  justifyContent: isCollapsed ? "center" : "initial",
  backgroundColor: isActive ? "#272727" : "transparent",
  "&:hover": {
    backgroundColor: isActive ? "#3f3f3f" : "#272727",
  },
}));

// Separate Header Style to prevent overlap bugs
const SectionHeader = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: "8px 12px",
  margin: "0 12px",
  borderRadius: "10px",
  cursor: "pointer",
  "&:hover": { backgroundColor: "#272727" },
}));

const Sidebar = ({ open }) => {
  const [activeItem, setActiveItem] = useState("Home");
  const [subsOpen, setSubsOpen] = useState(true);
  const [youOpen, setYouOpen] = useState(true);

  const globalCreators = [
    {
      name: "MrBeast",
      avatar: img,
      hasUpdate: true,
    },
    {
      name: "MKBHD",
      avatar: img,
      hasUpdate: false,
    },
    {
      name: "PewDiePie",
      avatar: img,
      hasUpdate: true,
    },
    {
      name: "Mark Rober",
      avatar: img,
      hasUpdate: false,
    },
    {
      name: "Veritasium",
      avatar: img,
      hasUpdate: true,
    },
  ];

  const handleItemClick = (name) => setActiveItem(name);

  return (
    <StyledDrawer variant="permanent" open={open}>
      <Box sx={{ mt: 8 }} />

      {/* Main Section */}
      <List disablePadding>
        {[
          { text: "Home", icon: <HomeIcon /> },
          { text: "Shorts", icon: <SlowMotionVideoIcon /> },
          { text: "Subscriptions", icon: <SubscriptionsOutlinedIcon /> },
        ].map((item) => (
          <YouTubeListItem
            key={item.text}
            isActive={activeItem === item.text}
            isCollapsed={!open}
            onClick={() => handleItemClick(item.text)}
          >
            <ListItemIcon sx={{ color: "white", minWidth: open ? 40 : "auto" }}>
              {item.icon}
            </ListItemIcon>
            {open && (
              <ListItemText
                primary={item.text}
                primaryTypographyProps={{
                  fontSize: "14px",
                  fontWeight: activeItem === item.text ? 600 : 400,
                }}
              />
            )}
          </YouTubeListItem>
        ))}
      </List>

      {open && (
        <>
          <Divider
            sx={{ borderColor: "rgba(255,255,255,0.1)", my: 1.5, mx: 2 }}
          />

          {/* Subscriptions Section */}
          <Box>
            <SectionHeader onClick={() => setSubsOpen(!subsOpen)}>
              <Typography
                sx={{ fontWeight: 600, fontSize: "16px", flexGrow: 1 }}
              >
                Subscriptions
              </Typography>
              <ChevronRightIcon
                sx={{
                  fontSize: "18px",
                  transform: subsOpen ? "rotate(90deg)" : "0",
                  transition: "0.2s",
                }}
              />
            </SectionHeader>

            <Collapse in={subsOpen} timeout="auto">
              <List disablePadding>
                {globalCreators.map((creator) => (
                  <YouTubeListItem
                    key={creator.name}
                    isActive={activeItem === creator.name}
                    onClick={() => handleItemClick(creator.name)}
                  >
                    <ListItemIcon sx={{ minWidth: 40 }}>
                      <Avatar
                        src={creator.avatar}
                        sx={{ width: 24, height: 24 }}
                      />
                    </ListItemIcon>
                    <ListItemText
                      primary={creator.name}
                      primaryTypographyProps={{
                        noWrap: true,
                        fontSize: "14px",
                      }}
                    />
                    {creator.hasUpdate && (
                      <Box
                        sx={{
                          width: 4,
                          height: 4,
                          bgcolor: "#3ea6ff",
                          borderRadius: "50%",
                          ml: 1,
                        }}
                      />
                    )}
                  </YouTubeListItem>
                ))}
                <YouTubeListItem onClick={() => console.log("show more")}>
                  <ListItemIcon sx={{ minWidth: 40 }}>
                    <ExpandMoreIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="Show more"
                    primaryTypographyProps={{ fontSize: "14px" }}
                  />
                </YouTubeListItem>
              </List>
            </Collapse>
          </Box>

          <Divider
            sx={{ borderColor: "rgba(255,255,255,0.1)", my: 1.5, mx: 2 }}
          />

          {/* You Section */}
          <Box>
            <SectionHeader onClick={() => setYouOpen(!youOpen)}>
              <Typography
                sx={{ fontWeight: 600, fontSize: "16px", flexGrow: 1 }}
              >
                You
              </Typography>
              <ChevronRightIcon
                sx={{
                  fontSize: "18px",
                  transform: youOpen ? "rotate(90deg)" : "0",
                  transition: "0.2s",
                }}
              />
            </SectionHeader>

            <Collapse in={youOpen} timeout="auto">
              <List disablePadding>
                {[
                  { text: "History", icon: <HistoryIcon /> },
                  { text: "Playlists", icon: <PlaylistPlayIcon /> },
                  { text: "Watch Later", icon: <WatchLaterOutlinedIcon /> },
                ].map((item) => (
                  <YouTubeListItem
                    key={item.text}
                    isActive={activeItem === item.text}
                    onClick={() => handleItemClick(item.text)}
                  >
                    <ListItemIcon sx={{ minWidth: 40, color: "white" }}>
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={item.text}
                      primaryTypographyProps={{ fontSize: "14px" }}
                    />
                  </YouTubeListItem>
                ))}
              </List>
            </Collapse>
          </Box>
        </>
      )}
    </StyledDrawer>
  );
};

export default Sidebar;
