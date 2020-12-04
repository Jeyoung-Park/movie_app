import React from "react";
import axios from "axios";
import Movie from "./Movie";
import "./App.css"

class App extends React.Component{
  state={
    isLoading:true,
    movies:[]
  };

  getMovies=async()=>{
    const {
      data:{
        data:{
          movies
        }
      }
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json"); // 이 문장이 완료될 때까지 기다리도록 설정
    // this.setState({moveis:movies});
    this.setState({movies, isLoading:false});
    console.log(movies);
    // console.log(movies.data.data.movies); es6방식으로 위와 같이 표현 가능
  }

  componentDidMount(){
    // setTimeout(()=>{
    //   this.setState({isLoading:false});
    // }, 6000);
    // axios는 fetch와 비슷한 역할
    this.getMovies();
  }
  
  render(){
    const { isLoading,movies }=this.state;
    return <div>{isLoading?"Loading..." : movies.map(movie=>{
      console.log(movie);
      return(
        <section className="container">
          {isLoading?(
            <div className="loader">
              <span class="loader__text">Loading...</span>
            </div>
          ):(
            <div className="movies">
              {movies.map(movie=>(
                <Movie
                key={movie.id} //map에 있는 각각의 아이템은 key가 필요
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}>
                </Movie>
              ))}
            </div>
          )}
        </section>
      ); 
      // return <Movie key={movie.id} id={movie.id} year={movie.year} title={movie.title} summary={movie.summary} poster={movie.medium_cover_image} />;
    })}</div>;
  }
}

export default App;