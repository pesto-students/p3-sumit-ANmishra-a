import "./SearchUrl.css";
import React, { useState } from "react";
function SearchUrl({ setUserInputTo, setResult }) {
  const [userInput, setUserInput] = useState();

  const onChangeHandler = (event) => {
    setUserInput(event.target.value);
  };
  setUserInputTo(userInput); // to send user input
  function fetchData() {
    console.log("clicked", userInput);

    const Url = `https://api.shrtco.de/v2/shorten?url=${userInput}`;
    fetch(Url)
      .then((data) => data.json())
      .then((res) => setResult(res.result.short_link));
  }

  return (
    <div className="search-area__container">
      <input
        value={userInput}
        onChange={onChangeHandler}
        type="text"
        className="link"
        placeholder="Shorten a link here..."
      ></input>
      <button onClick={() => fetchData()} className="search-area__button ">
        Shorten it!
      </button>
    </div>
  );
}
export default SearchUrl;
