import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Beers from '../assets/beers.png';
import Random from '../assets/random-beer.png';
import New from '../assets/new-beer.png';

function Home() {
  return (
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={Beers} />
        <Card.Body>
          <Card.Title>
            <Link to={'/beers'}>All Beers</Link>
          </Card.Title>
          <Card.Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            mollis fermentum tortor eu facilisis. Etiam finibus euismod
            venenatis.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={Random} />
        <Card.Body>
          <Card.Title>
            <Link to={'/random-beer'}>Random Beer</Link>
          </Card.Title>
          <Card.Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            mollis fermentum tortor eu facilisis. Etiam finibus euismod
            venenatis.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={New} />
        <Card.Body>
          <Card.Title>
            <Link to={'/new-beer'}>New Beer</Link>
          </Card.Title>
          <Card.Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            mollis fermentum tortor eu facilisis. Etiam finibus euismod
            venenatis.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Home;
