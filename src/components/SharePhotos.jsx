
import React, { useRef, useState } from "react";

export default function SharePhotos({ onFilesSelected }) {
  const inputRef = useRef(null);
  const [photos, setPhotos] = useState([]);

  const handleFiles = (e) => {
    const files = Array.from(e.target.files || []);
    if (!files.length) return;

    setPhotos((prev) => [
      ...prev,
      ...files.map((file) => ({
        file,
        preview: URL.createObjectURL(file),
      })),
    ]);

    onFilesSelected?.(files);
    e.target.value = "";
  };

  return (
    <section className="w-full px-6 py-16 text-center bg-[#f5f1e9]">
      {/* Decorative divider */}
      <div className="flex items-center justify-center gap-3 mb-7">
        <span className="w-12 h-px bg-[#b9a5a0]/60" />
        <span className="text-[#783b4a] text-sm">♡</span>
        <span className="w-12 h-px bg-[#b9a5a0]/60" />
      </div>

      <h2
        className="text-[30px] font-script text-black mb-3"
      >
        Share Your Memories
      </h2>

      <p className="text-[12px] leading-6 text-[#88766f] max-w-[290px] mx-auto mb-7">
        Կիսվեք մեզ հետ ձեր լուսանկարներով և
        դարձեք մեր օրվա ամենագեղեցիկ հիշողությունների
        մի մասը։
      </p>

      {/* Decorative camera icon */}
      <div className="mx-auto mb-5 flex items-center justify-center w-14 h-14 rounded-full border border-[#783b4a]/30 text-[#783b4a]">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          className="w-6 h-6"
        >
          <rect x="3" y="6" width="18" height="14" rx="2" />
          <circle cx="12" cy="13" r="3.5" />
          <path d="M8 6l1.5-2h5L16 6" />
        </svg>
      </div>

      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        multiple
        onChange={handleFiles}
        className="hidden"
      />

      <button
        type="button"
        onClick={() => inputRef.current?.click()}
        className="px-8 py-3 border border-[#783b4a] rounded-xl text-[#783b4a] text-[12px] tracking-wide transition-all duration-300 hover:bg-[#783b4a] hover:text-[#f5f1e9]"
      >
        Վերբեռնել լուսանկարներ
      </button>

      <p className="text-[10px] text-[#a18e86] mt-3">
        Կիսվեք ձեր լուսանկարներով մեզ հետ ♡
      </p>

      {photos.length > 0 && (
        <div className="mt-7 grid grid-cols-3 gap-2">
          {photos.map((photo, index) => (
            <img
              key={index}
              src={photo.preview}
              alt="Uploaded memory"
              className="w-full aspect-square object-cover rounded-md"
            />
          ))}
        </div>
      )}
    </section>
  );
}
