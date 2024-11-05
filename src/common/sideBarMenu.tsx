import React from 'react';
import { Link } from 'react-router-dom';

const SideBarMenu = ({ headline, Icon, isActive, setActive }:any) => {
  const isClickable = Icon !== null; // Determines if the item should be clickable

  return (
    <div
      className={`flex flex-row items-center py-1 ${isClickable && isActive ? 'textColor font-semibold' : ''}`}
      onClick={isClickable ? () => setActive(headline) : undefined} // Only set active if clickable
    >
      {isClickable ? (
        <Link to={headline} className="flex flex-row items-center">
          <div className="pr-3">{Icon && <Icon />}</div>
          {headline}
        </Link>
      ) : (
        // Render as plain text if not clickable
        <div className="flex flex-row items-center text-gray-500">
          {headline}
        </div>
      )}
    </div>
  );
};

export default SideBarMenu;
