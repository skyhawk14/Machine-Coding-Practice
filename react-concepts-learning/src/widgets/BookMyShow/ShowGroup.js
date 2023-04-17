import ShowRow from "./ShowRow";

export default function ShowGroup({ rowsData }) {
  return (
    <>
      {rowsData.map((row) => (
        <div
          style={{
            margin: "12px",
            borderRadius: "10px",
          }}
        >
          <span>{row.rowName}</span>
          <ShowRow items={row.columnItems} />
        </div>
      ))}
    </>
  );
}
