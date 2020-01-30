import React from 'react';
import PropTypes from 'prop-types';

function Food(props) {
  return (
    <div>
      <h1>I like {props.name}</h1>
      <h4>{props.rating}/5</h4>
      <span>{props.img}</span>
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  rating: PropTypes.number
}

const FoodList = [
  {id:1,name: "kimch", image: "<b>img</b>", rating: 5.0},
  {id:2,name: "ramen", image: "<b>img</b>", rating: 3.6},
  {id:3,name: "samgiopsal", image: "<b>img</b>", rating: 2.1},
  {id:4,name: "chuckumi", image: "<b>img</b>", rating: 0.9}
]

function renderFood(dish){
  return <Food key={dish.id} name={dish.name} img={dish.image} rating={dish.rating}/>
}

function App() {
  return (
    <div>
      <div>Hello</div>
      {FoodList.map(renderFood)}
    </div>
    );
}

export default App;