import React from "react";
import { useParams } from "react-router-dom";

export const Description = () => {

  const params = useParams(
    
  )

  const [movieDes, setmovieDes] = React.useState(JSON.parse(sessionStorage.getItem(params.id)))


  // React.useEffect(() => {
  //   axios
  //     .get(
  //       "https://api.themoviedb.org/3/list/50941077760ee35e1500000c?api_key=dceb34c1fc8eac0fbef020eebf55eaea&language=en-US"
  //     )
  //     .then((res) => setmovieDes(res.data))
  //     .catch((err) => console.log(err));
  // }, []);


  console.log(movieDes);
  return (
    <div>
       
      <div className="d-flex "  style={{marginTop:"50px"}}>
       
        <div className="col" style={{color:"#fff"}}>

        <h3>{movieDes.original_title}</h3>
        <h6>Rating : {movieDes.vote_average} / 10</h6>
        <p>{movieDes.overview}</p>
        <h3>Release Date :{movieDes.release_date}</h3>
        <h3>Orginal Language {movieDes.original_language}</h3>
        </div>
        <div className="col" >
        <video width="640" height="360" controls>
  <source src={movieDes.video} type="video/mp4"/>
  Your browser does not support the video tag.
</video>
        </div>
       
      </div>
     
    </div>
  );
};
