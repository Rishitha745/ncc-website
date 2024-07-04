import React, { useState } from "react";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gray-100">
      <button
        onClick={openModal}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg"
      >
        Open Modal
      </button>

      {isModalOpen && (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-40"></div>
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
              <h2 className="text-xl font-bold mb-4">Modal Heading</h2>
              <p className="mb-4">
                This is a sample paragraph inside the modal. You can put any
                content here.
              </p>
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-red-500 text-white rounded-lg"
              >
                Close
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default App;
