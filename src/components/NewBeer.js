import { Button } from 'react-bootstrap';
import React from 'react';
import axios from 'axios';

function NewBeer() {
  const handleSubmit = async (event) => {
    event.preventDefault();
    let newBeer = {
      name: event.target.name.value,
      description: event.target.description.value,
      completed: false,
    };
    await axios.post('https://ih-beers-api2.herokuapp.com/beers/new', newBeer);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label for="name">Name</label>
      <br />
      <input name="name" type="text" id="name" />
      <br />
      <label for="tagline">Tagline</label>
      <br />
      <input name="tagline" type="text" id="tagline" />
      <br />
      <label for="description">Description</label>
      <br />
      <input name="description" type="text" id="description" />
      <br />
      <label for="first_brewed">First Brewed</label>
      <br />
      <input name="first_brewed" type="text" id="first_brewed" />
      <br />
      <label for="brewers_tips">Brewers Tips</label>
      <br />
      <input name="brewers_tips" type="text" id="brewers_tips" />
      <br />
      <label for="attenuation_level">Attenuation Level</label>
      <br />
      <input name="attenuation_level" type="number" id="attenuation_level" />
      <br />
      <label for="contributed_by">Contributed By</label>
      <br />
      <input name="contributed_by" type="text" id="contributed_by" />
      <br />
      <Button type="submit">Submit</Button>
    </form>
  );
}

export default NewBeer;
