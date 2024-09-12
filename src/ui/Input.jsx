import React, { useState } from "react";

const Input = ({ label, state, setState, type = 'text' }) => {

  return (
    <div class="mb-5">
      <label
        for="password"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {label}
      </label>
      <input value={state} onChange={e => setState(e.target.value)}
        type={type}
        id="password"
        class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
        required
      />
    </div>
  );
};

export default Input;
