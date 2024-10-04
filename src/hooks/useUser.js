import userContext from "../Contexts/userContext";
import { useContext } from "react";

export default function useUser() {
  const context = useContext(userContext);

  return context;
}
