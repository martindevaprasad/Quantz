import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import banner from "../Assets/1.jpg.png";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import image1 from "../Assets/image1.png";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import Rating from "@mui/material/Rating";
import "../App.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ticket from "../Assets/toppng 1.png";


export const HomePage = () => {
  const [movieDetails, setmovieDetails] = React.useState();
  const navigate = useNavigate();
  React.useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/list/50941077760ee35e1500000c?api_key=dceb34c1fc8eac0fbef020eebf55eaea&language=en-US"
      )
      .then((res) => setmovieDetails(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
     <div>
        <nav style={{ background: "#263E60" }} className="navbar ">
          <a className="navbar-brand" href="#">
            <img src={ticket} style={{ width: "40px" }} alt="" />
          </a>
          <Typography sx={{ color: "#fff" }} onClick={() => {
            navigate("/")
          }}>
            Logout
          </Typography>
        </nav>
      </div>
      <div style={{ background: "#0D111C" }}>
        <div>
          {/* <img style={{width:"100%", height:"980px"}} src={banner}/> */}
          {/* <img src={banner} className="img-fluid" alt="Responsive image">

        <Typography>Hello</Typography>
        </img> */}
          <div
            id="carouselExampleSlidesOnly"
            className="carousel slide"
            data-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img className="d-block w-100" src={banner} alt="First slide" />
                <div className="carousel-caption justify-content-center text-center ">
                  <h2>Welcome to Our movie site</h2>
                  <h5>
                    Our special <span style={{ color: "#FF1744" }}>Movies</span>
                  </h5>
                  <p className="">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industrioy. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown.
                  </p>
                  <button>Read More</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="p-4">
          <Box sx={{ flexGrow: 1 }}>
            <Grid
              container
              className="d-flex justify-content-center"
              spacing={2}
            >
              {movieDetails?.items?.map((item) => (
                <Grid item xs={3} key={item.id}>
                  <div class="card" style={{ width: "18rem" }}>
                    <img
                      src={"https://image.tmdb.org/t/p/w500" + item.poster_path}
                      class="card-img-top"
                    />
                    <div
                      class="card-body"
                      onClick={() => {
                        navigate("/description/" + item.id);
                        sessionStorage.setItem(item.id, JSON.stringify(item));
                      }}
                    >
                      <p class="card-text">{item.original_title}</p>
                    </div>
                  </div>
                </Grid>
              ))}
            </Grid>
          </Box>
        </div>
      </div>
    </>
  );
};
