import { createContext, useState } from "react";

export const UserContext = createContext<Object>({});

interface IProps {
  children: React.ReactNode;
}

export const UserProvider = ({ children }: IProps) => {
  const [userInput, setUserInput] = useState({
    fullName: "",
    nickname: "",
    email: "",
    birthday: "",
    age: "",
    terms: false,
    linkedin: "",
    github: "",
    certificates: "",
    teamName: "",
    institution: "",
    graduation: "",
  });

  return (
    <UserContext.Provider value={{ userInput, setUserInput }}>
      {children}
    </UserContext.Provider>
  );
};
