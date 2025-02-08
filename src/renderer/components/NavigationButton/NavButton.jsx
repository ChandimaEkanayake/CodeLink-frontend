import React from 'react';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import WarningIcon from '@mui/icons-material/Warning';
import './NavButton.css';


const NavButton = ({ fileID,fileName, isActive, isTested }) => {
    const renderIcon = () => {
      switch (isTested) {
        case 'passed':
          return <ThumbUpIcon className="iconPassed" />;
        case 'failed':
          return <ThumbDownIcon className="iconFailed" />;
        default:
          return <WarningIcon className="iconPending" />;
      }
    };

    const handleTabSelection = () => {
      console.log(`Selected tab: ${fileID}`);
      // Update with redux state
    };
  
    return (
      <button 
        onClick={handleTabSelection} 
        className={`navButton ${isActive ? 'active' : ''}`
        }>

        <span className="fileName">{fileName}</span>
        <span className="iconWrapper">
          {renderIcon()}
        </span>

      </button>
    );
  };
  
  export default NavButton;
  