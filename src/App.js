
import './App.css';
import Card from './../src/Components/Card'
import { useState, useEffect } from "react";

const dataCard = [] ;

function App() {

  const [cardData, setCardData] = useState(dataCard);
  
  useEffect(() => {

    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setCardData(data));

  }, []);


  return (
    <div>
  {cardData.map((card, index) => (
    <Card key={index} data={card}/>
  ))}
  <Card title='ciao'/>
    </div>
  );
}

export default App;
