import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router';
import MyNav from './MyNav';

function BeerDetail() {
  const { id } = useParams();
  const [detail, setDetail] = useState(null);

  useEffect(() => {
    async function fetchData() {
      let response = await axios.get(
        `https://ih-beers-api2.herokuapp.com/beers/${id}`
      );
      const {
        name,
        image_url,
        tagline,
        contributed_by,
        first_brewed,
        attenuation_level,
        description,
      } = response.data;
      let beer = {
        name,
        image_url,
        tagline,
        contributed_by,
        first_brewed,
        attenuation_level,
        description,
      };
      setDetail(beer);
    }

    fetchData();
  }, [id]);

  if (!detail) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      <MyNav />

      <Card style={{ width: '50%' }} key={id}>
        <Card.Img
          variant="top"
          src={detail.image_url}
          style={{ width: '5rem' }}
        />
        <Card.Body>
          <Card.Title>
            {detail.name} {detail.attenuation_level}
          </Card.Title>
          <Card.Text>
            {detail.tagline} {detail.first_brewed}
            <br />
            {detail.description}
            <br />
            Created by: {detail.contributed_by}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default BeerDetail;
