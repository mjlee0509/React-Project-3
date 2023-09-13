import React from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { img_base_url } from '../components/Movie'; // 먼저 Movie.jsx에서 img_base_url을 export하고 import해서 가져오기

export default function MovieDetail() {

    const { title } = useParams();
    const { state } = useLocation();

    return (
        <div className='page-container'>
            <div style={{ display: "flex" }}>
                <img src={img_base_url + state.poster_path}
                    alt="영화 포스터"
                    style={{
                        width: "300px",
                        height: "450px"
                    }} />
                <div style={{ fontSize: "32px" }}>
                    {title}
                </div>

            </div>

        </div>
    )
}
