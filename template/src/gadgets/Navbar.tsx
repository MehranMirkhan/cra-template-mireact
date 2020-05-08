import React from "react";
import { useTranslation } from "react-i18next";

import useLang from "src/logic/useLang";
import useOpen from "src/logic/useOpen";

import GlobeIcon from "src/assets/icons/globe";

import { RelativeModal, CenterModal } from "src/widgets/Modal";
import Tabs from "src/widgets/Tabs";
import SigninForm from "./SigninForm";

function Navbar() {
  const { t } = useTranslation();
  return (
    <nav className="flex items-center justify-between flex-wrap bg-teal-500 px-2 py-2">
      <div>
        <NavButton text={t("Docs")}></NavButton>
        <NavButton text={t("Examples")}></NavButton>
        <NavButton text={t("Blog")}></NavButton>
      </div>
      <div className="flex items-center">
        <LangSelector />
        <AuthModal />
      </div>
    </nav>
  );
}

function NavButton({ text }: INavButton) {
  return (
    <a href="#" className="mx-2 text-teal-200 hover:text-white cursor-pointer">
      {text}
    </a>
  );
}

function LangSelector() {
  const { lang, langs, setLang } = useLang();
  const { isOpen, open, close } = useOpen();
  const onSelectLang = (l: string) => () => {
    setLang(l);
    close();
  };
  return (
    <div className="relative">
      <button className="flex items-center mx-4 text-white" onClick={open}>
        <GlobeIcon className="h-5 w-5 fill-current mx-1" />
        <span>{langs[lang || "en"]}</span>
      </button>
      <RelativeModal isOpen={isOpen} onClose={close}>
        <div
          className={`absolute mt-2 mx-4 border rounded-md border-gray-400 overflow-hidden`}
        >
          {Object.keys(langs).map((l) => (
            <button
              key={l}
              onClick={onSelectLang(l)}
              className={`block px-3 py-1 text-sm bg-white w-full border-t border-gray-400 first:border-t-0 first:pt-2 last:border-b-0 last:pb-2 ${
                l === lang
                  ? "text-teal-500"
                  : "text-gray-800 hover:text-white hover:bg-blue-500"
              }`}
            >
              {langs[l]}
            </button>
          ))}
        </div>
      </RelativeModal>
    </div>
  );
}

function AuthModal() {
  const { t } = useTranslation();
  const { isOpen, open, close } = useOpen();
  return (
    <div className="relative">
      <div className="rounded overflow-hidden border">
        <button
          onClick={open}
          className="inline-block px-4 py-2 leading-none text-sm text-white hover:bg-white hover:text-teal-500 hover:border-transparent ltr:border-r rtl:border-l"
        >
          {t("Signin")}
        </button>
        <button
          onClick={open}
          className="inline-block px-4 py-2 leading-none text-sm text-white hover:bg-white hover:text-teal-500 hover:border-transparent"
        >
          {t("Signup")}
        </button>
      </div>
      <CenterModal isOpen={isOpen} onClose={close}>
        <div className="bg-white rounded-md overflow-hidden w-64">
          <Tabs
            tabs={["Signin", "Signup"]}
            tabClassName="bg-teal-500 px-4 py-1 text-gray-300 hover:text-white"
            activeTabClassName="bg-teal-300 px-4 py-1 text-white"
            bodyClassName="px-4 py-2"
          >
            <SigninForm />
            <p>Tab 2</p>
          </Tabs>
        </div>
      </CenterModal>
    </div>
  );
}

export default Navbar;

interface INavButton {
  text: string;
}
