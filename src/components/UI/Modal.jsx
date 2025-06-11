import React, { useEffect } from "react";
import { HiOutlineXMark } from "react-icons/hi2";

export default function Modal({ children, modalName, currentModal, setcurrentModal }) {
  const displayModal = modalName === currentModal;

  const handleCloseModal = () => setcurrentModal("");

  const handleModalClick = (e) => {
    e.stopPropagation(); // Prevent closing when clicking inside the modal
  };

  const handleOverlayClick = () => {
    handleCloseModal(); // Close modal when clicking outside
  };

  const handleModalEscape = (e) => {
    if (e.key === "Escape") {
      handleCloseModal();
    }
  };

  useEffect(() => {
    // Add event listener when the modal is displayed
    if (displayModal) {
      document.addEventListener("keydown", handleModalEscape);
    } else {
      // Remove event listener when the modal is hidden
      document.removeEventListener("keydown", handleModalEscape);
    }

    // Cleanup when the component is unmounted or modal changes
    return () => {
      document.removeEventListener("keydown", handleModalEscape);
    };
  }, [displayModal]);

  return (
    <div
      onClick={handleOverlayClick}
      className={`fixed inset-0 z-50 flex items-center justify-center sm:16 px-4 md:px-24 transition-all duration-300 ${
        displayModal ? "visible" : "invisible pointer-events-none"
      }`}
    >
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-primary800 transition-opacity duration-300 ${
          displayModal ? "opacity-50 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      ></div>

      {/* Modal Content */}
      <div
        onClick={handleModalClick}
        className={`relative z-10 w-full max-w-[400px] rounded-2xl bg-white basis-[41.2] transition-all duration-300 ${
          displayModal ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        {/* Optional top-right close icon */}
        <button
          onClick={handleCloseModal}
          className="absolute top-2 right-2 p-2 rounded-full text-gray-500 hover:text-gray-800 transition"
        >
        </button>

        {/* Modal body */}
        {React.cloneElement(children, { onClose: handleCloseModal })}
      </div>
    </div>
  );
}
