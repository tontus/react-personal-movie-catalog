import { Card, Col, Image, Row } from "react-bootstrap";
import { FaBeer } from 'react-icons/fa';


function MovieCard(props) {
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
    
    
    return (
        <Card className= 'mt-5' style = {{cardStyle}} >
            <Card.Body className= {cardClass}>
                
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
                            
                            props.movie.watched ? <div>
                                <FaBeer />
                                <h2>{props.movie.rating}/5</h2>
                            </div> : <h3>Great movie, watch fast</h3>
                           
                       }
                    </Col>
                    </Row>
        
            </Card.Body>
        </Card>
)

};
export default MovieCard;