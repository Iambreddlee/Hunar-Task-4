import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faMapMarkerAlt, faClock } from '@fortawesome/free-solid-svg-icons';

const icons = {
  1: faPhone,
  2: faMapMarkerAlt,
  3: faClock,
};
export default function Cards({ logo, title, description }) {
  return (
    <div className="border p-4 rounded-lg shadow-md bg-orange-500 flex items-center space-x-4">
      <FontAwesomeIcon icon={icons[logo]} className="text-white text-2xl" />
      <div>
        <h2 className="text-xl text-white font-bold mb-2">{title}</h2>
        <p className='text-white'>{description}</p>
      </div>
    </div>
  )
}
