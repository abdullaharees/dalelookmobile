import { useState } from 'react';

import plusprofm from "../pictures/plusprofm.svg"


function Addpicm() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUploadClick = () => {
    // Handle upload logic here
  };

  return (
    <div>

      <div className="flex items-center mb-4">
        <div className="absolute top-[3.5rem] right-[9rem] w-[6.5rem] h-[6.5rem] bg-gray-200 rounded-full"></div>
        <button className="">
            <img className="absolute top-[8.2rem] right-[9.2rem] w-[1.2rem]" src={plusprofm} alt="plusprofm" />   
        </button>
        <input
          type="file"
          className="hidden"
          accept="image/*"
          onChange={handleFileSelect}
        />
      </div>

      {selectedFile && (
        <div className="flex items-center mb-4">
          <div className="absolute top-[3.5rem] right-[8.7rem] w-[6.5rem] h-[6.5rem] bg-gray-200 rounded-full"></div>
          <div>
            <p className="font-bold">{selectedFile.name}</p>
            <p>{selectedFile.size} bytes</p>
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full mt-2"
              onClick={handleUploadClick}
            >
              Upload
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Addpicm