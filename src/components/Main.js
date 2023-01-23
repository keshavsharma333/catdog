import React, { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Stack } from "@mui/material";
import Button from "@mui/material/Button";
import ImageIcon from "@mui/icons-material/Image";
import GifBoxIcon from "@mui/icons-material/GifBox";
import CircularProgress from "@mui/material/CircularProgress";

function Main() {
  const [select, setselect] = useState("");
  const [showData, setshowData] = useState("");
  const [loading, setLoading] = useState(false);

  const catImage = async () => {
    const url = `https://api.thecatapi.com/v1/images/search?&${process.env.REACT_APP_CAT_API}`;
    setLoading(true);
    let data = await fetch(url);
    let parsedData = await data.json();
    const img = parsedData[0].url;
    setLoading(false);
    setshowData(img);
  };

  const dogImage = async () => {
    const url = `https://api.thedogapi.com/v1/images/search?&api_key=${process.env.REACT_APP_DOG_API}`;
    setLoading(true);
    let data = await fetch(url);
    let parsedData = await data.json();
    const img = parsedData[0].url;
    setLoading(false);
    setshowData(img);
  };

  const catGif = async () => {
    const url = "https://api.thecatapi.com/v1/images/search?mime_types=gif";
    setLoading(true);
    let data = await fetch(url);
    let parsedData = await data.json();
    const img = parsedData[0].url;
    setLoading(false);
    setshowData(img);
  };

  const dogGif = async () => {
    const url = "https://api.thedogapi.com/v1/images/search?mime_types=gif";
    setLoading(true);
    let data = await fetch(url);
    let parsedData = await data.json();
    const img = parsedData[0].url;
    setLoading(false);
    setshowData(img);
  };

  const imageLoad = () => {
    setshowData("");
    if (select === "cat") {
      catImage();
    } else {
      dogImage();
    }
  };

  const gifLoad = () => {
    setshowData("");
    if (select === "cat") {
      catGif();
    } else {
      dogGif();
    }
  };

  const handleChange = (event) => {
    setselect(event.target.value);
    setshowData("");
  };

  return (
    <Stack justifyContent="center" alignItems="center" spacing={3}>
      <Box>
        <FormControl sx={{ mt: 3, minWidth: 200 }}>
          <InputLabel>Api Type</InputLabel>
          <Select value={select} label="Api Type" onChange={handleChange}>
            <MenuItem value={"cat"}>Cat API</MenuItem>
            <MenuItem value={"dog"}>Dog API</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Stack direction="row" gap={4}>
        <Button
          variant="contained"
          endIcon={<ImageIcon />}
          onClick={imageLoad}
          disabled={!select}
          color="secondary"
        >
          Get Image
        </Button>
        <Button
          variant="contained"
          endIcon={<GifBoxIcon />}
          onClick={gifLoad}
          disabled={!select}
          color="secondary"
        >
          Get GIF
        </Button>
      </Stack>
      <Box>
        {showData ? <img src={showData} className="data" alt="data" /> : ""}
        {loading ? (
          <CircularProgress
            color="success"
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
            }}
          />
        ) : (
          ""
        )}
      </Box>
    </Stack>
  );
}

export default Main;
