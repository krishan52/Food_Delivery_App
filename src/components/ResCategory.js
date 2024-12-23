import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import ItemList from './ItemList';
import { useState } from 'react';


const ResCategory = ({data, showItems,setShowIndex}) => {

  const handleClick = () => {
    setShowIndex();
  }

  return (
    <div>
      {/**Header */}
      <div className="w-6/12 bg-gray-50 shadow-lg mx-auto p-4 my-5">
      <div className="flex justify-between cursor-pointer" onClick={handleClick}>
        <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
        <span ><FontAwesomeIcon icon={faAngleDown} /></span>
        </div>
        {showItems && <ItemList items={data.itemCards}/>}
      </div>
    </div>
  );
};

export default ResCategory;