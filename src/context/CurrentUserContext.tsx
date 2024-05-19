import React from "react";

interface User {
  name: string;
  email: string;
  password: string;
  city: string;
  dateOfBirth: string;
  gender: string;
}

interface CurrentUserContextProps {
  currentUser: User | null;
  setCurrentUser: (user: User | null) => void;
}

export const CurrentUserContext = React.createContext<CurrentUserContextProps>({
  currentUser: null,
  setCurrentUser: () => {},
});
