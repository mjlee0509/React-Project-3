import React from 'react'
import { useNavigate } from 'react-router-dom';

const img_base_url = "https://image.tmdb.org/t/p/w1280";

export default function Movie(props) {

  const navigate = useNavigate();

  const onClickMovieItem = () => {
    navigate(`/movie/${props.title}`, {
      state: props
    }) // 여기 문법 잘 보셈 (`/${}`) 
  }

  return (
    <div className='movie-container'
    onClick={onClickMovieItem}>
        <img src={img_base_url + props.poster_path} alt="영화 포스터" />
        <div className='movie-info'>
            <h4>{props.title}</h4>
            <span>{props.vote_average}</span>
        </div>

    </div>
  )
}
