import React, { useState } from "react";

const ProjectModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">
      <div className="bg-[#1a1a1a] rounded-2xl max-w-2xl max-h-[90vh] overflow-y-auto p-8 relative">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl"
        >
          &times;
        </button>
        <h3 className="text-3xl font-bold mb-4">Project Title</h3>
        <p className="text-gray-300 mb-4">
          Detailed information about the project goes here.
        </p>
      </div>
    </div>
  );
};

export default ProjectModal;
