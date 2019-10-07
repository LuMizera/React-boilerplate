import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { shootAlert } from "../store/ducks/alert/actions";

const Home: React.FC = () => {
  const dispatch = useDispatch();

  const [value, setValue] = useState<string>("");

  const dispatchAlert = (event: React.FormEvent) => {
    event.preventDefault();
    if (value !== "") {
      dispatch(shootAlert(value));
    } else {
      alert("You must put something on the text input");
    }
    setValue("");
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <div className="container">
      <div className="title-container">
        <div>Hello</div>
      </div>
      <div className="form-container">
        <div>
          <form onSubmit={dispatchAlert}>
            <input
              type="text"
              onChange={handleChange}
              value={value}
              placeholder="Text to be alerted"
            />
            <button>asd</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
