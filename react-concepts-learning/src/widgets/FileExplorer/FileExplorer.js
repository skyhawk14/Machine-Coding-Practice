import { useState } from "react";
import useTraverseTree from "./Custom-Hooks/use-traverse-tree";
import { explorerData } from "./data";
import DisplayFileFolder from "./DisplayFileFolder";

export default function FileExplorer() {
  const [fileData, setFileData] = useState(explorerData);
  const { insertNode } = useTraverseTree();
  const handleInsertNode = function (id, isFolder, name) {
    const data = insertNode(explorerData, id, isFolder, name);
    setFileData(data);
  };
  return (
    <DisplayFileFolder
      fileData={fileData}
      level={0}
      handleInsertNode={handleInsertNode}
    />
  );
}
