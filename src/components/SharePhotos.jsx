
import React, { useRef, useState, useEffect } from "react";

export default function SharePhotos() {
  const inputRef = useRef(null);
  const [photos, setPhotos] = useState([]);

  // Add photos
  const handleFiles = (e) => {
    const files = Array.from(e.target.files || []);

    const validFiles = files.filter((file) =>
      file.type.startsWith("image/")
    );

    const newPhotos = validFiles.map((file) => ({
      id: `${file.name}-${Date.now()}-${Math.random()}`,
      file,
      preview: URL.createObjectURL(file),
    }));

    setPhotos((prev) => [...prev, ...newPhotos]);

    e.target.value = "";
  };

  // Delete photo
  const handleDelete = (id) => {
    setPhotos((prev) => {
      const photoToDelete = prev.find(
        (photo) => photo.id === id
      );

      if (photoToDelete) {
        URL.revokeObjectURL(photoToDelete.preview);
      }

      return prev.filter((photo) => photo.id !== id);
    });
  };

  // Clean up preview URLs
  useEffect(() => {
    return () => {
      photos.forEach((photo) => {
        URL.revokeObjectURL(photo.preview);
      });
    };
  }, [photos]);

  return (
    <section className="w-full px-6 py-16 text-center bg-[#f5f1e9]">

      {/* Decorative divider */}
      <div className="flex items-center justify-center gap-3 mb-7">
        <span className="w-12 h-px bg-[#b9a5a0]/60" />
        <span className="text-[#783b4a] text-sm">♡</span>
        <span className="w-12 h-px bg-[#b9a5a0]/60" />
      </div>

      {/* Title */}
      <h2 className="text-[30px] font-script text-black mb-3">
        Share Your Memories
      </h2>

      {/* Description */}
      <p className="text-[12px] leading-6 text-[#88766f] max-w-[290px] mx-auto mb-7">
        Կիսվեք մեզ հետ ձեր լուսանկարներով և
        դարձեք մեր օրվա ամենագեղեցիկ հիշողությունների
        մի մասը։
      </p>

      {/* Camera icon / Uploaded photos */}
      {photos.length === 0 ? (
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
      ) : (
        <div className="max-w-lg mx-auto mb-6 grid grid-cols-3 gap-3">
          {photos.map((photo) => (
            <div
              key={photo.id}
              className="relative aspect-square rounded-md"
            >
              <img
                src={photo.preview}
                alt="Uploaded memory"
                className="w-full h-full object-cover rounded-xl transition-transform duration-500 hover:scale-105"
              />

              {/* Remove button */}
              <button
                type="button"
                onClick={() => handleDelete(photo.id)}
                aria-label="Remove photo"
                className="absolute -top-1.5 -right-1.5 w-6 h-6 rounded-full bg-[#8C8580] text-white flex items-center justify-center shadow-md hover:bg-[#5e2938] transition-colors"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="w-3.5 h-3.5"
                >
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      )}

      {/* File input */}
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        multiple
        onChange={handleFiles}
        className="hidden"
      />

      {/* Upload button */}
      <button
        type="button"
        onClick={() => inputRef.current?.click()}
        className="px-8 py-3 border border-[#783b4a] rounded-xl text-[#783b4a] text-[12px] tracking-wide transition-all duration-300 hover:bg-[#783b4a] hover:text-[#f5f1e9]"
      >
        {photos.length > 0
          ? "Ավելացնել լուսանկարներ"
          : "Վերբեռնել լուսանկարներ"}
      </button>

      {/* Helper text */}
      <p className="text-[10px] text-[#a18e86] mt-3">
        {photos.length > 0
          ? `${photos.length} լուսանկար ընտրված է ♡`
          : "Կիսվեք ձեր լուսանկարներով մեզ հետ ♡"}
      </p>

    </section>
  );
}
