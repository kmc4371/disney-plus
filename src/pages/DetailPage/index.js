import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "../../api/axios.js";

const DetailPage = () => {
  let {movieId} = useParams();
  console.log('movieId', movieId)
  const [movie, setMovie] = useState({});

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        `/movie/${movieId}`
      )
      setMovie(response.data)
    }
    fetchData()
  }, [movieId]);

  if (!movie) return null

  return (
    <section>
      <img
        className="modal__poster-img"
        src={`https://images.tmdb.org/t/p/original/${movie.backdrop_path}`}
        alt="modal__postger-img"/>
    </section>
  );
}

export default DetailPage;