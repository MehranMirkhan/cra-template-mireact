import React from "react";
import { useTranslation } from "react-i18next";

import { TemplateWithNavbar } from ".";

export default function () {
  const { t } = useTranslation();
  return <TemplateWithNavbar>{t("Home")}</TemplateWithNavbar>;
}
