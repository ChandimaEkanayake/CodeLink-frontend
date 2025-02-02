import React from "react";
import './VersionExplorer.css';

const CommitCard = ({ commit, isSelected, onClick }) => {
  return (
    <div
      className={`commit-card ${isSelected ? 'selected' : ''}`}
      onClick={onClick}
    >
      <h4 className="commit-message">{commit.message}</h4>
      <div className="commit-details">
        <p className="commit-author">
          <span className="commit-label">Author: </span>
          <span className="commit-value">{commit.author}</span>
        </p>
        <p className="commit-id">
          <span className="commit-label">Commit: </span>
          <span className="commit-value">{commit.commit_id}</span>
        </p>
      </div>
    </div>
  );
};

export default CommitCard;