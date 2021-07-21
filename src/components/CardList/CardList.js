import React from 'react';
import Card from '../Card/Card';

const CardList = ({ humans }) => {
  const cardArray = humans.map((user, i) => {
    return <Card 
      key={i}
      id={humans[i].id}
      name={humans[i].name}
      email={humans[i].email}
      phone={humans[i].phone}
      website={humans[i].website}
      />
  });
  return (
    <div>
      {cardArray}
    </div>
  );
}

export default CardList;