import React, { useState } from "react";
import { useTranslation } from "react-i18next";

export default function Tabs({
  tabs,
  children,
  tabClassName,
  activeTabClassName,
  bodyClassName,
}: ITabs) {
  const { t } = useTranslation();
  const [tab, setTab] = useState<number>(0);
  return (
    <>
      <div className="flex">
        {tabs.map((title, i) => (
          <Tab
            title={t(title)}
            onClick={() => setTab(i)}
            className={tab === i ? activeTabClassName : tabClassName}
          />
        ))}
      </div>
      <div className={bodyClassName || ""}>{children[tab]}</div>
    </>
  );
}

export function Tab({ title, onClick, className }: ITab) {
  return (
    <button className={`flex-1 ${className}`} onClick={onClick}>
      {title}
    </button>
  );
}

interface ITabs {
  tabs: string[];
  children: React.ReactElement[];
  tabClassName?: string;
  activeTabClassName?: string;
  bodyClassName?: string;
}

interface ITab {
  title: string;
  onClick: () => void;
  className?: string;
}
