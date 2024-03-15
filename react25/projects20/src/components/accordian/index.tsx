import React, { useState } from 'react';
import data from './data';
import './style.css';

const Accordion: React.FC = () => {
  const [selected, setSelected] = useState<string | null>();
  const [enableMultiSelection, setEnableMultiSelection] =
    useState<boolean>(false);
  const [multiple, setMultiple] = useState<string[]>([]);

  const handleSingleSelect = (getCurrentId: string) => {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  };

  const handleMultiSelection = (getCurrentId: string) => {
    const copyMultiple = [...multiple];
    const findIndexOfCurrentId = copyMultiple.indexOf(getCurrentId);
    if (findIndexOfCurrentId === -1) {
      copyMultiple.push(getCurrentId);
    } else {
      copyMultiple.splice(findIndexOfCurrentId, 1);
    }
    setMultiple(copyMultiple);
  };
  console.log(selected, multiple);

  return (
    <>
      <div className="wrapper">
        <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>
          {' '}
          Enable multiple selection{' '}
        </button>
        <div className="accordion">
          {data && data.length > 0 ? (
            data.map((dataItem) => (
              <div className="item">
                <div
                  onClick={
                    enableMultiSelection
                      ? () => handleMultiSelection(dataItem.id)
                      : () => handleSingleSelect(dataItem.id)
                  }
                  className="title"
                >
                  <h3> {dataItem.question}</h3>
                  <span> + </span>
                </div>
                {selected === dataItem.id ||
                multiple.indexOf(dataItem.id) !== -1 ? (
                  <div className="content"> {dataItem.answer} </div>
                ) : null}
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
