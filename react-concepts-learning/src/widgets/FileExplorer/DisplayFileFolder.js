import { useState } from "react";
import "./FileExplorer.css";
export default function DisplayFileFolder({
  fileData,
  level,
  handleInsertNode,
}) {
  const [isExpanded, setIsExpanded] = useState(true);
  const [showInput, setShowInput] = useState({
    isVisible: false,
    isFolder: null,
  });
  const handleAddFolder = function (e, isFolder) {
    e.stopPropagation();
    setIsExpanded(true);
    setShowInput({
      isVisible: true,
      isFolder,
    });
  };
  const addFileFolder = function (id, e) {
    if (e.keyCode === 13) {
      console.log(id, e.target.value);
      setShowInput({
        isVisible: false,
        isFolder: null,
      });
      handleInsertNode(id, showInput.isFolder, e.target.value);
    }
  };
  return (
    <div style={{ marginLeft: `${level * 20}px` }}>
      <div className="fileName">
        <span className="fileName">
          <span
            onClick={(e) => {
              e.stopPropagation();
              setIsExpanded(!isExpanded);
            }}
          >
            {fileData.isFolder ? "📂" : "🗂"}&nbsp;&nbsp;
          </span>
          {fileData.name}
        </span>
        {fileData.isFolder && (
          <>
            <button
              className="fileFolder"
              onClick={(e) => handleAddFolder(e, true)}
            >
              Folder +
            </button>
            <button
              className="fileFolder"
              onClick={(e) => handleAddFolder(e, false)}
            >
              File +
            </button>
          </>
        )}
      </div>
      <div style={{ display: isExpanded ? "block" : "none" }}>
        {showInput.isVisible && (
          <>
            <span>{showInput.isFolder ? "📂" : "🗂"}&nbsp;&nbsp;</span>
            <input
              style={{ marginLeft: `${level * 20}px` }}
              autoFocus
              onKeyDown={(e) => addFileFolder(fileData.id, e)}
              onBlur={() => {
                setShowInput({
                  ...showInput,
                  isVisible: false,
                });
              }}
              type="text"
            />
          </>
        )}
      </div>
      {fileData.items.length > 0 &&
        fileData.items.map((d) => (
          <DisplayFileFolder
            key={d.id}
            fileData={d}
            level={level + 1}
            handleInsertNode={handleInsertNode}
          />
        ))}
    </div>
  );
}
