import React, {useState} from "react";
import "./ChangesTab.css";

//import components
import NavButton from "../components/NavigationButton/NavButton.jsx";

const files = [
    { fileId: 'file1', fileName: 'File One' , isTested: 'passed'},
    { fileId: 'file2', fileName: 'File Two' , isTested: 'failed'},
    { fileId: 'file3', fileName: 'File Three' , isTested: 'pending'},
  ];


const ChangesTabTopBar = () => {
    return (
      <div className="changes-tab-top-bar-container">
        {files.map((file) => (
          <NavButton
            key={file.fileId}
            fileID={file.fileId}
            fileName={file.fileName}
            isActive={false}//Update with redux
            isTested={file.isTested}
          />
        ))}
      </div>
    );
};

export default ChangesTabTopBar;
