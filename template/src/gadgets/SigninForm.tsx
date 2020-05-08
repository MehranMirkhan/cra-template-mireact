import React from "react";
import { useTranslation } from "react-i18next";

import useSignin from "src/logic/useSignin";

export default function SigninForm() {
  const { t } = useTranslation();
  const {
    username,
    setUsername,
    password,
    setPassword,
    onSubmit,
  } = useSignin();

  return (
    <form>
      <label>{t("Username")}</label>
      <input
        type="username"
        name="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="border rounded w-full"
      />
      <label>{t("Password")}</label>
      <input
        type="password"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border rounded w-full"
      />
      <button className="btn mt-4" onClick={onSubmit}>{t("Submit")}</button>
    </form>
  );
}
