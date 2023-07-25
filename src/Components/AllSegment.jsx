import React, { useState } from "react";
import "./AllSegment.css";
import { Schema } from "./Schema";
import { AddSchema } from "./AddSchema";

export const AllSegment = () => {
  const [addNew, setAddNew] = useState(false);

  const handleAddNew = () => {
    setAddNew(true);
  };

  return (
    <div>
      <div>
        <label htmlFor="">Enter the Name of the Segment</label>
        <br />
        <input type="text" name="" placeholder="Name of the segment" />
      </div>
      <div>
        <p>
          To Save your segment, you need to add the schemas to build the query
        </p>
      </div>
      <div>
        <Schema />
      </div>
      {addNew && (
        <div>
          <AddSchema />
        </div>
      )}
      <div onClick={handleAddNew}>+Add New Schema</div>
    </div>
  );
};
