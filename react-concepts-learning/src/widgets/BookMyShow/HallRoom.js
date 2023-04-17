import { seatData } from "./data";
import ShowGroup from "./ShowGroup";

export default function HallRoom() {
  return (
    <>
      {seatData.map((group) => {
        return (
          <>
            <p className="groupName">
              {group.groupName}
              <span
                className="groupPrice"
                style={{
                  marginLeft: "10px",
                }}
              >
                Rs {group.price}
              </span>
              <hr />
            </p>
            <ShowGroup rowsData={group.rows} />
          </>
        );
      })}
    </>
  );
}
