import { Link, useParams } from "react-router-dom";
import DataMovies from "../../component/json/movies.json";
import { Button, ButtonGroup, Divider } from "@mui/material";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import AddIcon from "@mui/icons-material/Add";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import DataStars from "../../component/json/stars.json";

function MoviePage() {
  const params = useParams();
  // const [id,name,image,description] = params.name;
  const index = Number(params.name);

  console.log(typeof params);
  console.log(params);

  console.log(typeof index);
  console.log(index);

  return (
    <>
      <div className="con1">
        <div className="divCol">
          <div>
            <h1>{DataMovies.movies[index - 1].name}</h1>
          </div>
          <div className="divRow" style={{ height: "400px" }}>
            <div style={{ width: "300px", overflow: "hidden" }}>
              <img
                style={{
                  width: "100%",
                  padding: "0 10px 0 10px",
                  height: "100%",
                }}
                src={DataMovies.movies[index - 1].image}
                alt=""
              />
            </div>
            <div style={{ width: "800px", overflow: "hidden" }}>
              <iframe
                width="100%"
                height="100%"
                // style={{justifyContent:'space-between'}}
                src={DataMovies.movies[index - 1].video}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            <div
              style={{
                width: "200px",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                paddingLeft: "10px",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "50%",
                  backgroundColor: "gray",
                  display: "flex",
                  flexDirection:"column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <VideoLibraryIcon style={{ fontSize: "40px" }} />
                <div>Video</div>
              </div>
              <div style={{ padding: "5px" }}></div>
              <div
                style={{
                  width: "100%",
                  height: "50%",
                  backgroundColor: "gray",
                  display: "flex",
                  flexDirection:"column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <PhotoLibraryIcon style={{ fontSize: "40px" }} />
                <div>Photo</div>
              </div>
            </div>
          </div>
          <div>
            <p>{DataMovies.movies[index - 1].description}</p>
          </div>
          <div className="divRow" style={{ width: "100%" }}>
            <div className="divCol" style={{ width: "70%" }}>
              <Divider></Divider>
              <h4>Director </h4>
              {DataMovies.movies[index - 1].director}
              <Divider></Divider>
              <h4>Writer </h4>
              {/* {DataMovies.movies[index - 1].writer[0].name} */}
              {DataMovies.movies[index - 1].writer.map((writer) => (
                <>
                  {console.log("Writer ", writer)}
                  <div>{writer.name}</div>
                </>
              ))}
              <Divider></Divider>
              <h4>Star</h4>
              {DataMovies.movies[index - 1].star.map((star,i=0) => (
                <>
                  {console.log("Star ", star)}
                  {console.log("Star ID : ", DataStars.star_movies[i++].id)}
                  <div>
                    <Link to={"/movie/starMovie/"+(i++)}>{star.name + " - "} </Link>
                    {/* {DataStars.star_movies.map((starId)=>(
                      <Link to={"starMovie/"+starId.id}>{starId.id + " - "}</Link> 

                    ))} */}

                  </div>
                </>
              ))}
              <Divider></Divider>
              <h4>IMDbPro</h4>
            </div>
            <div
              className="divCol"
              style={{ width: "30%", padding: "0 10px 10px 10px" }}
            >
              <ButtonGroup
                variant="contained"
                aria-label="outlined primary button group"
              >
                <Button style={{ backgroundColor: "yellow" }}>
                  <AddIcon />
                  Add to Watchlist
                </Button>
                <Button style={{ backgroundColor: "yellow" }}>
                  <KeyboardArrowDownIcon />
                </Button>
              </ButtonGroup>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MoviePage;
