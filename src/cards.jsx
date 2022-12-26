import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
function cards({data}) {
  return (
    <div>
        <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{data.userName}</Card.Title>
          <Card.Text>
            {data.description}
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>privacy : {data.privacy}</ListGroup.Item>
          <ListGroup.Item>id : {data._id}</ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <Card.Link href="#">{data.image}</Card.Link>
        </Card.Body>
      </Card>
    </div>
  )
}

export default cards