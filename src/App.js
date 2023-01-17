import React, { useState } from 'react';
import axios from 'axios';


const App = () => {
	const [text, setText] = useState('Search Movie');
	const [movie, setMovie] = useState([]);

	const changeText = (e) => {
		// console.log(e);
		setText(e.target.value);
	};
	const getMovie = (e) => {
 		e.preventDefault();
// 		 fetch(
// 			`http://www.omdbapi.com/?s=${text}&apikey=9af52424`)
// 			.then((res) => res.json())
// 			.then((response) => {
// 			console.log(response);
// 			setMovie(response.Search)
// 			});
		axios
			.get(`http://www.omdbapi.com/?s=${text}&apikey=9af52424`)
			.then((response) => {
				console.log(response);
				setMovie(response.data.Search);
			});
	};
	return (
		<>
			<nav className="navbar navbar-dark bg-dark">
				<div className="container-fluid">
					<p className="navbar-brand">Movie Search Application</p>
					<form className="d-flex" role="search" onSubmit={getMovie}>
						<input
							className="form-control me-4"
							type="search"
							placeholder="Search Movie"
							aria-label="Search"
							value={text}
							onChange={changeText}
						/>
						<button className="btn btn-outline-success" type="submit">
							Search
						</button>
					</form>
				</div>
			</nav>
			<div className="container my-2 ">
				<div className="row">
					{movie.map((value, index) => {
						return (
							<div className="col-3 my-2 py-2">
								<div className="card"  key={index} style={{ width: '300px',height:'550px',padding:'30px',margin:'10px' }}>
									<img src={value.Poster} className="card-img-top" alt="Not found" style={{width:'200px',height:'300px'}}/>
									<div className="card-body">
										<h3 className="card-title">{value.Year}</h3>
										<h4 className="card-text">{value.Title}</h4>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
};
export default App;
