import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

// import DataMovies from "../../component/json/movies.json";

import "../css/Home.css";

interface Writer {
  name: string;
}

interface Star {
  name: string;
}

interface MediaCardProps {
  id: number;
  name: string;
  image: string;
  director:string;
  writer:Writer[];
  star:Star[];
  video:string;
  description: string;
}



function MediaCard(props: MediaCardProps) {
  //destructuring
  // const [id,name,image,description] = props;
  console.log(typeof(props.writer));
  console.log(props.writer);
  console.log(props.writer.map((name)=>(console.log("Name ",name))));

  return (
    <>
      <Card sx={{ width:'200px',height:'500px',textAlign:'center'}}>
        <Link to={"/movie/"+props.id}>
          <CardMedia
            sx={{ height: '300px' }}
            image={props.image}
            title={props.name}
          />
        </Link>
        <CardContent>
          <p>{props.name}</p>
        </CardContent>
        <CardActions style={{ display: "flex", flexDirection: "column" }}>
          <Button variant="outlined" size="small">
            Watch list
          </Button>
          <Button size="small">Trailer</Button>
        </CardActions>
      </Card>
    </>
  );
}

export default MediaCard;
