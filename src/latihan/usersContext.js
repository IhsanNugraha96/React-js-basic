import React from "react";

// some mock context values
const users = [
  {
      name: "Harry Potter",
      occupation: "Wizard",
  },
  {
      name: "Kent Clark",
      occupation: "Super hero",
  }
];

export const UserContext = React.createContext(users);