import { useState } from "react";

const Safari = ({ url, imageSrc, className }) => {
  const [inputUrl, setInputUrl] = useState(url || "");

  return (
    <div className={`w-full max-w-3xl mx-auto border rounded-lg shadow-lg bg-white ${className}`}>
      {/* Safari Top Bar */}
      <div className="flex items-center space-x-2 p-2 bg-gray-100 rounded-t-lg">
        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        <input
          type="text"
          value={inputUrl}
          onChange={(e) => setInputUrl(e.target.value)}
          className="flex-1 px-3 py-1 border rounded-md bg-white text-gray-700 outline-none"
        />
      </div>

      {/* Image Preview */}
      <div className="p-2">
        <img
          src={imageSrc}
          url="magicui.design"
          alt="Safari Preview"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

export default Safari;
