import React from 'react';
import changesData from '../data/changesData.js';
import './ChangesTab.css';

const ChangesTab = () => {
  return (
    <div className="changes-container">
      {/* Feature Container */}
      <div className="changes-card">
        <div className="feature-section">
          <div className="feature-header">
            <div className="story-id">User Story ID: {changesData.storyId}</div>
            <div className="feature-title">{changesData.featureTitle}</div>
          </div>
        </div>
      </div>

      {/* Context Container */}
      <div className="changes-card">
        <div className="context-section">
          {changesData.context}
        </div>
      </div>

      {/* Code Display */}
      <div className="changes-card code-section">
        <div className="code-scroll">
          <pre className="code-content">
            <code>
              {changesData.codeContent}
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
};

export default ChangesTab;