export default function ShowRow({ items }) {
  return (
    <>
      {items.map((item, idx) => (
        <span
          key={item.id}
          className="seat"
          style={{
            padding: "5px",
            fontSize: "25px",
            margin: "5px",
            color: "white",
            borderRadius: "10px",
            backgroundColor: item.isVacant ? "gray" : "blue",
            visibility: item.isSeat ? "" : "hidden",
          }}
        >
          {idx + 1}
        </span>
      ))}
    </>
  );
}
