import React from 'react';

const Display = props => {
  return (
    <div>
      <h2>The Count: </h2>
      <h4 data-testid="balls">Balls:{props.balls}</h4>
      <h4 data-testid="strikes">Strikes:{props.strikes}</h4>
      <h4 data-testid="fouls"> Fouls:{props.fouls}</h4>
      <h4 data-testid="hits">Hits:{props.hits}</h4>
    </div>
  );
};

export default Display;
