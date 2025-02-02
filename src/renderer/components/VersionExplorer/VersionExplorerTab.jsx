import './VersionExplorer.css';
import React, { useEffect, useState } from "react";
import fetchVersionData from '../../data/versionData';
import CommitCard from "./CommitCard.jsx";

const VersionExplorerTab = () => {
  const [branches, setBranches] = useState([]);
  const [expandedBranchId, setExpandedBranchId] = useState(null);

  useEffect(() => {
    fetchVersionData().then((data) => {
      setBranches(data.branches);
    });
  }, []);

  const handleBranchClick = (branchId) => {
    setExpandedBranchId(expandedBranchId === branchId ? null : branchId);
  };

  return (
    <div className="version-explorer-container">
      <div className="version-explorer-header">
        <span>VERSION EXPLORER</span>
        <button className="close-button">×</button>
      </div>
      {branches.map((branch) => (
        <div key={branch.branch_id} className="branch-container">
          <div
            className={`branch-header ${expandedBranchId === branch.branch_id ? 'expanded' : ''}`}
            onClick={() => handleBranchClick(branch.branch_id)}
          >
            <span className="branch-icon">📁</span>
            <h3 className="branch-name">{branch.branch_id}</h3>
            <span className={`branch-arrow ${expandedBranchId === branch.branch_id ? 'expanded' : ''}`}>
              ▶
            </span>
          </div>
          <div className={`commits-container ${expandedBranchId === branch.branch_id ? 'expanded' : ''}`}>
            {branch.commits.map((commit) => (
              <CommitCard
                key={commit.commit_id}
                commit={commit}
                isSelected={false}
                onClick={() => {}}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default VersionExplorerTab;