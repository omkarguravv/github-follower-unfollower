import React from "react";
import Card from "./Card";

function Row({ name, rowDetails, row, length }) {

  return (
    <div className=" h-96 overflow-auto relative text-center">
      {row && (
        <h3 className="sticky top-0 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
          {name} <div className=" text-white font-bold rounded-full  ">{length}</div>
        </h3>
      )}
      {rowDetails.map(Card)}
    </div>
  );
}

export default Row;
