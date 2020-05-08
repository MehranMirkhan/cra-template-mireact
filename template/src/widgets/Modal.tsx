import React from "react";

/**
 * It is used for cases where the opened box is close to the triggering button.
 * (e.g. DropDown)
 */
export function RelativeModal({ children, isOpen, onClose }: IModal) {
  return (
    <>
      {isOpen && (
        <>
          <button
            className="fixed inset-0 h-full w-full cursor-default"
            onClick={onClose}
          />
          {children}
        </>
      )}
    </>
  );
}

/**
 * It is used for cases where the opened box is in the center of the screen.
 */
export function CenterModal({ children, isOpen, onClose }: IModal) {
  return (
    <>
      {isOpen && (
        <>
          <button
            className="fixed inset-0 h-full w-full bg-black bg-opacity-50 cursor-default"
            onClick={onClose}
          />
          <div
            style={{
              position: "fixed",
              left: "50%",
              top: "50%",
              transform: "translateX(-50%) translateY(-50%)",
            }}
          >
            {children}
          </div>
        </>
      )}
    </>
  );
}

interface IModal {
  children: React.ReactElement;
  isOpen: boolean;
  onClose: () => void;
}
