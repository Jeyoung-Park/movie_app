import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

function Movie({id, year, title, summary,poster, genres}){
    return(
        <div class="movie">
            {/* alt: img에서 오류가 발생했을 떄 대체할 수단 */}
            <img src={poster} alt={title} title={title}/> 
            <div class="movie__data">
                <h3 class="movie__title">{title}</h3>
                <h5 class="movie__year">{year}</h5>
                <ul className="movie__genres">
                    {genres.map((genre, index)=>(   //index는 map 함수가 자동으로 제공하는 매개변수
                    <li key={index} className="genres__genre">{genre}</li>
                    ))}
                    </ul>
                <p class="movie__summary">{summary.slice(0, 180)}</p>
            </div>
        </div>
    );
}

Movie.propTypes={
    id: PropTypes.number.isRequired,
    year:PropTypes.number.isRequired,
    title:PropTypes.string.isRequired,
    summary:PropTypes.string.isRequired,
    poster:PropTypes.string.isRequired,
    genres:PropTypes.arrayOf(PropTypes.string).isRequired
}; //Movie라는 component 생성 & 사용

export default Movie; //export를 해줘야 다른 js에 Movie라는 컴포넌트 이용 가능