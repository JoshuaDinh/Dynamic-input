import React, { useState } from "react";

const Input = () => {
  const blankCat = { name: "", age: "" };
  const [catState, setCatState] = useState([{ ...blankCat }]);

  const [ownerState, setOwnerState] = useState({
    owner: "",
    description: "",
  });

  const handleOwnerChange = (e) =>
    setOwnerState({
      ...ownerState,
      [e.target.name]: [e.target.value],
    });

  const addCat = () => {
    setCatState([...catState, { ...blankCat }]);
  };

  const handleCatChange = (e) => {
    const updatedCats = [...catState];
    updatedCats[e.target.dataset.idx][e.target.className] = e.target.value;
    setCatState(updatedCats);
  };

  console.log(catState);
  return (
    <form>
      <label htmlFor="owner">Owner</label>
      <input type="text" name="owner" id="owner" />
      <label htmlFor="description">Description</label>
      <input type="text" name="description" id="description" />
      <input type="button" value="Add New Cat" onClick={addCat} />
      {catState.map((val, idx) => {
        const catId = `name-${idx}`;
        const ageId = `age-${idx}`;
        return (
          <div key={`cat-${idx}`}>
            <label htmlFor={catId}>{`Cat #${idx + 1}`}</label>
            <input
              type="text"
              name={catId}
              data-idx={idx}
              id={catId}
              className="name"
              value={catState[idx].name}
              onChange={handleCatChange}
            />
            <label htmlFor={ageId}>Age</label>
            <input
              type="text"
              name={ageId}
              data-idx={idx}
              id={ageId}
              className="age"
              value={catState[idx].age}
              onChange={handleCatChange}
            />
          </div>
        );
      })}
      <input type="submit" value="Submit" />
    </form>
  );
};

export default Input;
