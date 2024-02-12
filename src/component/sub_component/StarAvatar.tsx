
import { Link } from "react-router-dom";

// import DataMovies from "../../component/json/movies.json";

import "../css/Home.css";
import { Avatar } from "@mui/material";

interface Born {
  id: number;
  name: string;
  image: string;
  video: string;
  description: string;
  born: string;
}

// interface Movies {
//   id: number;
//   name: string;
//   image: string;
//   video: string;
//   description: string;
//   born: string;
// }

// interface StarsProp {
//   born:Born[];
//   movies:Movies[];
// }

function StarAvatar(props: Born) {
  console.log(typeof props);
  console.log("Born: ",props);

  return (
    <>
      <div style={{ padding: "10px" }}>
        <Link to={"/star/"+props.id}>
          <Avatar
            style={{ width: "200px", height: "200px" }}
            alt="Remy Sharp"
            src={props.image}
          />
          
        </Link>
        <h2 style={{textAlign:'center'}}>{props.name}</h2>
      </div>
    </>
  );
}

export default StarAvatar;
