import React, { useState } from "react";

const SearchBar = (props) => {
  const [text, setText] = useState("");

  //   const onInputChange = (e) => {
  //     setText(e.target.value);
  //   };
  const onFormSubmit = (e) => {
    e.preventDefault();
    props.onSubmit(text);
  };
  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={onFormSubmit}>
        <div className="field">
          <label>Image Search</label>
          <input
            type="text"
            placeholder="Enter text here"
            value={text}
            // onChange={onInputChange}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
