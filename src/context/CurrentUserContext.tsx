import React from "react";

interface User {
  name: string;
  email: string;
  gender: string;
  dateOfBirth: string;
  lastName: string;
  patronymic: string;
  registrationDate: Date | undefined;
  rating: number | null;
  _id: string;
  avatar: string | undefined;
}

interface CurrentUserContextProps {
  currentUser: User | null;
  setCurrentUser: (user: User | null) => void;
}

export const CurrentUserContext = React.createContext<CurrentUserContextProps>({
  currentUser: null,
  setCurrentUser: () => {},
});
