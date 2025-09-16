import { useState } from "react";

const Image = ({ src, alt,obj="cover" }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative w-full h-auto overflow-hidden">
      {!loaded && (
        <div className="w-full h-[480px] bg-gray-200 animate-pulse rounded-lg" />
      )}

      <img
        src={src}
        alt={alt}
        onLoad={() => setLoaded(true)}
        className={`w-full transition-opacity duration-500 h-auto max-h-[400px] object-${obj} rounded-2xl mb-4 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
};

export default Image;
