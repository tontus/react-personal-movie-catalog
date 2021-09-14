import { Card, Col, Image, Row, Button } from "react-bootstrap";
import { FaBeer } from 'react-icons/fa';
import { useState } from "react";

function MovieCard(props) {
    console.log(props.movie)
    var cardClass = ''
    var cardStyle = ''

    if (props.movie.watched)
        {cardClass = 'Watched'
        cardStyle = 'background-color: #c8e6c9'}
    else
    {
        cardClass = 'NotWatched'
        cardStyle = 'background-color: #fff'
    }
    const [movieWatched, setMovieWatched] = useState(props.movie.watched)
    
    
    function handleClick (){
        setMovieWatched(!movieWatched)
    }
    
    return (
        <Card className= 'mt-5' style = {{cardStyle}} >
            <Card.Body className= {cardClass}>
                <p>local value: {movieWatched.toString()}</p>
                
                <p>props value: { props.movie.watched.toString()}</p>
                    <Row>
                        <Col>
                            <Image src={props.movie.poster} style={{ height: 200 }}/>
                    </Col>
                    <Col>
                        <h1>
                            {props.movie.name}
                        </h1>
                    </Col>
                    <Col>
                        {
                            
                            movieWatched ? <div>
                                <FaBeer />
                                <h2>{props.movie.rating}/5</h2>
                            </div> : <h3>Great movie, watch fast</h3>
                           
                        }
                        
            <Button onClick={handleClick}>
                button
            </Button>
                    </Col>
                    </Row>
        
            </Card.Body>
        </Card>
)

};
export default MovieCard;