import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MovieList from "./Components/MovieList";
import MovieListHeading from "./Components/MovieListHeading";
import SearchBox from "./Components/SearchBox";
import AddFavourites from "./Components/AddFavourites";
// const { REACT_APP_API_KEY} = process.env;
// console.log(REACT_APP_API_KEY);

const App = () => {
	const [movies, setMovies] = useState([]);
	const [searchValue, setSearchValue] = useState('');
	const [favourites, setFavourites] = useState([]);

	const getMovieRequest = async (searchValue) => {
		const url = `https://www.omdbapi.com/?s=${searchValue}&apikey=263d22d8`;

		const response = await fetch(url);
		const responseJson = await response.json();

		if (responseJson.Search) {
			setMovies(responseJson.Search);
		}
	};

	const addFavouriteMovie = (movie) => {
		const newFavouriteList = [...favourites, movie];
		setFavourites(newFavouriteList);
	};

	useEffect(() => {
		getMovieRequest(searchValue);
	}, [searchValue]);

	return (
		<div className='container-fluid movie-app'>
			<div className='row d-flex align-items-center mt-4 mb-4'>
				<MovieListHeading heading='Movies' />
				<SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
			</div>
			<div className='row'>
				<MovieList
					movies={movies}
					favouriteComponent={AddFavourites}
					handleFavouritesClick={addFavouriteMovie}
				/>
			</div>
			<div className='row d-flex align-items-center mt-4 mb-4'>
				<MovieListHeading heading='Favourites' />
			</div>
			<div className='row'>
				<MovieList movies={favourites} favouriteComponent={AddFavourites} />
			</div>
		</div>
	);
};
// const App = () => {
//   const [movies, setMovies] = useState([]);
//   const [searchValue, setSearchValue] = useState("");
//   const [favourites, setFavourites] = useState([]);

//   const getMovieRequest = async (searchValue) => {
//     const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=428f6c2c`;
//     const response = await fetch(url);

//     const responseJson = await response.json();
//     if (responseJson.Search) {
//       setMovies(responseJson.Search);
//     }
//   };
//   const addFavouriteMovie = (movie) => {
//     const newFavouriteList = [...favourites, movie];
//     setFavourites(newFavouriteList);
//   };
//   useEffect(() => {
//     getMovieRequest(searchValue);
//   }, [searchValue]);

//   return (
//     <div className="container-fluid movie-app">
//       <div className="row d-flex align-items-center mt-4 mb-4">
//         <MovieListHeading heading="Movies" favouriteComponent={AddFavourites}
// 					handleFavouritesClick={addFavouriteMovie} />
//         <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
//       </div>
//       <div className="row">
//         <MovieList
//           movies={movies}
//           favouriteComponent={AddFavourites}
//           handleFavouritesClick={addFavouriteMovie}
//         />
//       </div>
//     </div>
//   );
// };
export default App;

// 4333mqfb8ys675rnsxbh:Bwc4RyfQzkW5nqaslKs-cK8QaMg public key

// ZFDqw27B.2ZUZTC0wsZvOlca7DGRoBCe9tfczUUPx secret_key

// test_r543jtugxw0o804y76jz1p:Il30raVSc_x6ujMhplvifqVWLYY   test secret key

// test_r543jtugxw0o804y76jz1p test public_key
