import MovieCard from "./MovieCard";

import { useState, useEffect } from "react";

function MovieList() {
    const initialMovieList = [

        {
            key: 0,
            name: "The Boy and the World",
            poster: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQLUvNaP8bTtaha4WdwcEzhMLjvIU0VMzW16FohtPBDM1WxD1Zi",
            watched: true
        }, {
            key: 1,
            name: "Fish Tank",
            poster: "https://cdn.moviescore.com/posters/26111.jpg?mtime=2020-12-26-23-59-22",
            watched: true
        }, {
            key: 2,
            name: "The Secret Life of Walter Mitty",
            poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLITks0ZyM6cE7JsgSXGsxxK5SpE31K3yNiQMlQF4emQ_lZCCq",
            watched: true
        }, {
            key: 3,
            name: "Television",
            poster: "https://upload.wikimedia.org/wikipedia/en/thumb/7/7b/Television_Film_Poster.jpg/220px-Television_Film_Poster.jpg",
            watched: true
        }, {
            key: 4,
            name: "Nirbaak",
            poster: "https://m.media-amazon.com/images/M/MV5BNWVkODk3YzQtNjMxYS00NmViLTgwZTctYjc0YTExOWU0OGZjXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg",
            watched: false
        }, {
            key: 5,
            name: "Waking Life",
            poster: "https://m.media-amazon.com/images/M/MV5BMWM0ZjY5ZjctODNkZi00Nzk0LWE1ODUtNGM4ZDUyMzUwMGYwXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
            watched: false
        }, {
            key: 6,
            name: "Trainspotting ",
            poster: "https://m.media-amazon.com/images/I/51oFj1gwDyL._AC_.jpg",
            watched: true
        }, {
            key: 7,
            name: 'The Prophet',
            poster: 'https://upload.wikimedia.org/wikipedia/en/6/65/Kahlil_Gibran%27s_The_Prophet_poster.jpg',
            watched: true
        },
        { key: 8, name: 'Daruchini Dwip', poster: 'https://upload.wikimedia.org/wikipedia/en/6/68/Daruchini_Dip.jpg', watched: false, rating: 5 },
        { key: 9, name: 'Life of Pi', poster: 'https://m.media-amazon.com/images/M/MV5BNTg2OTY2ODg5OF5BMl5BanBnXkFtZTcwODM5MTYxOA@@._V1_.jpg', watched: true, }

    ];
    const [movieList, setMovieList] = useState(initialMovieList)

    const [tempMovie, setTempMovie] = useState({});

    const [movieName, setMovieName] = useState("");

    const [moviePoster, setMoviePoster] = useState("");

    const [movieWatched, setMovieWatched] = useState(false);



    const handleSubmit = (evt) => {
        evt.preventDefault();
        setTempMovie(
            {
                key: movieList.length,
                name: movieName,
                poster: moviePoster,
                watched: movieWatched,
            }
        )

    }

    useEffect(() => {
        setMovieList(
            [...movieList, tempMovie]
        )
    }, [tempMovie])

    function handleWatched(movieKey) {
        setMovieList(
            movieList.map((movie) =>
                movie.key === movieKey ? { ...movie, watched: !movie.watched } : { ...movie })
        )
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Movie name:
                    <input
                        type="text"
                        onChange={e => setMovieName(e.target.value)}
                    />
                </label>
                <label>
                    Movie poster:
                    <input
                        type="text"
                        onChange={e => setMoviePoster(e.target.value)}
                    />
                </label>
                <label>
                    watched:
                    <input
                        type="checkbox"
                        onChange={e => setMovieWatched(e.target.checked)}
                    />
                </label>
                <input type="submit" value="Submit" />
            </form>
            <ul>
                {
                    movieList.map(movie =>
                        <MovieCard movie={movie} onClick={() => handleWatched(movie.key)} />)
                }
            </ul>
        </div>
    )
};

export default MovieList;