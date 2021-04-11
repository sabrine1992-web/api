import React from "react";
import {Card} from "react-bootstrap";
function CardComponent (props){
return (

<>
<Card border="primary" style={{ width: '18rem' , marginBottom : 30}}>
<Card.Header>{props.valueItem.id}</Card.Header>
<Card.Body>
<Card.Title>{props.valueItem.name}</Card.Title>
<Card.Text>
Some quick example text to build on the card title and make up the bulk
of the card's content.
</Card.Text>
<ul>
<li>{props.valueItem.phone}</li>
<li>{props.valueItem.website}</li>
<li>{props.valueItem.email}</li>

</ul>
</Card.Body>
</Card>

<br />
</>
);
}

export default CardComponent;