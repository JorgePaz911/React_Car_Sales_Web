import React from "react";

const Form = ({ name }) => {
  return (
    <div className="formspaceold">
      {name}
      <form>
        <label>
          <input type="text" name="name" />
        </label>
      </form>
    </div>
  );
};

export default Form;
