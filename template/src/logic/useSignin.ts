import { useState } from "react";

/**
 * Contains all the business logic of signin.
 */
export default function useSignin() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const onSubmit = () => {
    alert("onsubmit");
  };

  return { username, setUsername, password, setPassword, onSubmit };
}
