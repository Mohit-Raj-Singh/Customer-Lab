import React, { useState } from "react";
import "./SaveSegment.css";
import { AllSegment } from "./AllSegment";

export const SaveSegment = () => {
//   const [openAllSegment, setOpenAllSegment] = useState[false];
  const [opensegment,setOpensegment]=useState(false)

  const handleOpneAllSegment = () => {
    setOpensegment(true);
  };

  return (
    <div>
      <button className="saveSeg" onClick={handleOpneAllSegment}>
        Save Segment
      </button>
      {opensegment && (
        <div>
          <AllSegment />
        </div>
      )}
    </div>
  );
};
