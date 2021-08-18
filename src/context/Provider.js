import React, { useState } from 'react';
import CarsContext from './CarsContext';

const Provider = ({children}) => {

  const INITIAL_STATE = {
    cars: {
      red: false,
      blue: false,
      yellow: false,
    },
  }

  const [state, setState] = useState(INITIAL_STATE)

  const moveCar = (car, side) => {
    setState({
      cars: {
        ...state.cars,
        [car]: side,
      },
    });
  };

  const context = {
    ...this.state,
    moveCar: this.moveCar,
  };

    return (
      <CarsContext.Provider value={context}>
        {children}
      </CarsContext.Provider>
    );
  }
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
