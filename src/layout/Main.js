import { Box, Grid } from "@mui/material";
import CategoryBar from "../components/CategoryBar";
import Videos from "../components/Videos";
import img from "../assets/img/2.png";
const dummyVideos = [
  {
    title: "Tirikchilik - Qisqa metrajli film | Pokser TV",
    channel: "Pokser TV",
    views: "1.5M views",
    time: "1 year ago",
    duration: "30:40",
    thumbnail: "https://picsum.photos/seed/1/400/225",
    avatar: img,
  },
  {
    title: "Mix - Gruppa (ifor) Izzat - farqi yo'q Official music",
    channel: "Dior Production",
    views: "800K views",
    time: "5 days ago",
    duration: "Mix",
    thumbnail: "https://picsum.photos/seed/2/400/225",
    avatar: img,
  },
  {
    title: "Sadraddin - 18 лет (Acoustic Version)",
    channel: "Sadraddin",
    views: "2M views",
    time: "3 months ago",
    duration: "04:15",
    thumbnail: "https://picsum.photos/seed/3/400/225",
    avatar: img,
  },
];
export default function Main() {
  return (
    <>
        <CategoryBar />
            <Box sx={{ flexGrow: 1, bgcolor: "#0f0f0f", minHeight: "100vh" }}>
        <CategoryBar />

        <Box sx={{ pt:5 }}>
          <Grid container spacing={2}>
            {dummyVideos.concat(dummyVideos).map((video, index) => (
              <Grid key={index} size={{ xs: 4 }}>
                <Videos {...video} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </>
  );
}
