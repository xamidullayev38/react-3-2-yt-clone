import { Box, Grid, Link } from "@mui/material";
import CategoryBar from "../components/CategoryBar";
import Videos from "../components/Videos";
import { useEffect, useState } from "react";
import { getVideos } from "../api";
export default function Main() {
  const [lists, setLists] = useState([]);
  useEffect(() => {
    const fetchVideos = async () => {
      const data = await getVideos();
      if (data) setLists(data);
    };

    fetchVideos();
  }, []);
  return (
    <>
      <CategoryBar />
      <Box sx={{ flexGrow: 1, bgcolor: "#0f0f0f", minHeight: "100vh" }}>
        <CategoryBar />

        <Box sx={{ pt: 5 }}>
          <Grid container spacing={2}>
            {lists.concat(lists).map((video, index) => (
              <Grid key={index} size={{ xs: 4 }}>
                <Link underline="none" href={video.link} target="_blank">
                  <Videos {...video} />
                </Link>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </>
  );
}
