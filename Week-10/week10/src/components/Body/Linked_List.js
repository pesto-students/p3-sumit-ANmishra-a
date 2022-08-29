import "./ResultBox.css";
// import { useState } from "react";
function Link_list({ sortResult, longResult }) {
  const data = [
    {
      input: "http://localhost",
      output: "short cut",
      key: 1,
    },
  ];
  // const [inertialData, setNewData] = useState([data]);
  // setNewData(...inertialData, {
  //   input: { sortResult },
  //   output: { longResult },
  // });
  const copyData = function () {
    console.log("clicked");
    navigator.clipboard.writeText(sortResult);
  };

  console.log("from linked list");
  console.log(sortResult, longResult);
  return (
    <div className="Link-container">
      <p>{longResult}</p>
      <div className="Link_result">
        <p id="link">{sortResult}</p>
        <button className="Link_copy__button" onClick={copyData}>
          COPY
        </button>
      </div>
    </div>
  );
}
export default Link_list;
