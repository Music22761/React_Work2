import { useParams } from "react-router-dom";
import DataStars from "../json/stars.json";
import { Button, ButtonGroup, Divider } from "@mui/material";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import AddIcon from "@mui/icons-material/Add";

function StarPage() {
  const params = useParams();
  // const [id,name,image,description] = params.name;
  const index = Number(params.name);

  console.log(typeof params);
  console.log("Params: ",params);

  console.log(typeof index);
  console.log(index);

  return (
    <>
      <div className="con1">
        <div className="divCol">
          <div>
            <h1>{DataStars.star_born[index - 1].name}</h1>
          </div>
          <div className="divRow" style={{ height: "400px" }}>
            <div style={{ width: "300px", overflow: "hidden" }}>
              <img
                style={{
                  width: "100%",
                  padding: "0 10px 0 10px",
                  height: "100%",
                }}
                src={DataStars.star_born[index - 1].image}
                alt=""
              />
            </div>
            <div style={{ width: "800px", overflow: "hidden" }}>
              <iframe
                width="100%"
                height="100%"
                // style={{justifyContent:'space-between'}}
                src={DataStars.star_born[index - 1].video}
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
            <p>{DataStars.star_born[index - 1].description}</p>
          </div>
          <div className="divRow" style={{ width: "100%" }}>
            <div className="divCol" style={{ width: "70%" }}>
              <Divider></Divider>

              <Divider></Divider>
              <div className="divRow" style={{display:'flex',alignItems:'center'}}>
              <h4>More at IMDbPro :</h4>
              <h4>Contact info - Agent info - Resume</h4>
              </div>
            </div>
            <div
              className="divCol"
              style={{ width: "30%", padding: "0 10px 10px 10px" }}
            >
              <h4>Born {DataStars.star_born[index - 1].born}</h4>
              <ButtonGroup
                variant="contained"
                aria-label="outlined primary button group"
                fullWidth
                style={{ alignItems: "start" }}
              >
                <Button style={{ backgroundColor: "yellow" }}>
                  <AddIcon />
                  Add to list
                </Button>
              </ButtonGroup>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default StarPage;
