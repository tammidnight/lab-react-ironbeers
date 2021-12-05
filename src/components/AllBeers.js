import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import MyNav from './MyNav';

function AllBeers() {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      let response = await axios.get(
        'https://ih-beers-api2.herokuapp.com/beers'
      );
      setBeers(response.data);
    }

    fetchData();
  }, []);

  if (!beers.length) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <MyNav />

      {beers.map((elem) => {
        return (
          <Card style={{ width: '50%' }} key={elem._id}>
            <Card.Img
              variant="top"
              src={elem.image_url}
              style={{ width: '5rem' }}
            />
            <Card.Body>
              <Card.Title>
                <Link to={`/beers/${elem._id}`}>{elem.name}</Link>
              </Card.Title>
              <Card.Text>
                {elem.tagline}
                <br />
                Created by: {elem.contributed_by}
              </Card.Text>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
}

export default AllBeers;
