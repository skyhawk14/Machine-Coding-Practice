export default function useTraverseTree() {
  const insertNode = function (tree, id, isFolder, name) {
    if (tree.id === id && tree.isFolder) {
      tree.items.unshift({
        id: new Date().getTime(),
        name,
        isFolder,
        items: [],
      });
      return tree;
    }
    let newData = tree.items.map((da) => {
      return insertNode(da, id, isFolder, name);
    });
    return { ...tree, items: newData };
  };
  return { insertNode };
}
