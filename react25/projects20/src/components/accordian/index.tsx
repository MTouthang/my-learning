import React, { useState } from 'react';
import data from './data';

const Accordion: React.FC = () => {
  const [selected, setSelected] = useState(null);

  const handleSingleSelect = (getCurrentId) => {
    console.log(getCurrentId);
  };

  return (
    <>
      <div className="wrapper">
        <div className="accordion">
          {data && data.length > 0 ? (
            data.map((dataItem) => (
              <div className="item">
                <div
                  onClick={() => handleSingleSelect(dataItem.id)}
                  className="title"
                >
                  <h3> {dataItem.question}</h3>
                  <span> + </span>
                </div>
              </div>
            ))
          ) : (
            <div>
              <h3> No data found </h3>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Accordion;
