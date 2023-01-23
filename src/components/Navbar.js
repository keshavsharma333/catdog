import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";

function Navbar() {
  return (
    <Box sx={{ flexGrow: 1, textAlign: "center" }}>
      <AppBar position="static" style={{ background: "#2E3B55" }}>
        <Toolbar>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            CATOG
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
