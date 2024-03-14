import React from 'react';

function Button({ onClick }) {
  return (
    <button onClick={onClick} data-testid="my-button">
      clicked me
    </button>
  );
}

export default Button;
