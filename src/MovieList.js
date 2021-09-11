import MovieCard from "./MovieCard";

function MovieList() {
    // const movieList = ['The Prophet', 'Life of Pie', 'Daruchini dip'];
    const movieList = [
        { name: 'The Prophet', poster: 'https://upload.wikimedia.org/wikipedia/en/6/65/Kahlil_Gibran%27s_The_Prophet_poster.jpg', watched: true, rating: 4.5 },
        { name: 'Daruchini Dwip', poster: 'https://upload.wikimedia.org/wikipedia/en/6/68/Daruchini_Dip.jpg', watched: false, rating: 5 },
        { name: 'Life of Pi', poster: 'https://m.media-amazon.com/images/M/MV5BNTg2OTY2ODg5OF5BMl5BanBnXkFtZTcwODM5MTYxOA@@._V1_.jpg', watched: true, rating: 3 },
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
    },
    
    ]

    
    

    return (
        <div>
            <ul>
                {
                    movieList.map(movie =>
                        <MovieCard movie={ movie}/>)
                }
            </ul>
        </div>
    )
};

export default MovieList;