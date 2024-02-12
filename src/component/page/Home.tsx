import "../css/Home.css";
import MediaCard from "../sub_component/CardMovie";

import DataMovies from "../../component/json/movies.json";
import DataStars from "../../component/json/stars.json";
import StarAvatar from "../sub_component/StarAvatar";

function HomePage() {
  return (
    <body>
      <div className="con1">
        <div className="divCol">
          <h2 style={{ textAlign: "start" }}>Top 10 pn IMDb this week</h2>
          <div className="divRow">
            {DataMovies.movies.map((movie) => (
              <>
                <div style={{ padding: "10px" }}>{MediaCard(movie)}</div>
              </>
            ))}
          </div>
        </div>

        <div className="divCol">
          <h2 style={{ textAlign: "start" }}>Born today</h2>
          <div className="divRow">
            {DataStars.star_born.map((star) => (
              <>
                <div style={{ padding: "10px" }}>{StarAvatar(star)}</div>
              </>
            ))}

          </div>
        </div>
      </div>
    </body>
  );
}

export default HomePage;
