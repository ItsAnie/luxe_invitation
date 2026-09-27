import { useState } from "react";
import {
  addDoc,
  collection,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../firebase";

export default function RSVP({ weddingId, deadline }) {
  const [form, setForm] = useState({
    name: "",
    attendance: "",
    guests: "1",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addDoc(
        collection(db, "weddings", weddingId, "rsvps"),
        {
          name: form.name,
          attendance: form.attendance,
          guests:
            form.attendance === "yes"
              ? Number(form.guests)
              : 0,
          message: form.message,
          createdAt: serverTimestamp(),
        }
      );

      alert("Ձեր պատասխանը հաջողությամբ ուղարկվեց");

      setForm({
        name: "",
        attendance: "",
        guests: "1",
        message: "",
      });
    } catch (error) {
      console.error("RSVP error:", error);
      alert(
        "Չհաջողվեց ուղարկել պատասխանը։ Խնդրում ենք կրկին փորձել։"
      );
    }
  };

  return (
    <section className="bg-[#f5f1e9] px-8 pb-12">
      <div className="mx-auto max-w-lg">

        {/* Decorative line */}
        <div className="mb-6 flex items-center justify-center gap-4">
          <span className="h-px w-12 bg-[#6B2737]/30" />

          <span className="text-[12px] text-[#6B2737]">
            ♡
          </span>

          <span className="h-px w-12 bg-[#6B2737]/30" />
        </div>

        {/* Title */}
        <div className="text-center">
          <h2 className="font-script text-[30px] font-light text-black">
            RSVP
          </h2>

          <p className="mx-auto max-w-sm font-serif text-[12px] leading-6 text-[#77776c]">
            Խնդրում ենք տեղեկացնել մեզ Ձեր մասնակցության
            մասին մինչև{" "}
            <span className="text-black">
              {deadline}
            </span>
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="mt-8 space-y-9"
        >

          {/* Name */}
          <div>
            <label className="mb-3 block font-sans text-[12px] tracking-[0.08em]">
              Անուն, ազգանուն
            </label>

            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Գրեք Ձեր անունը"
              required
              className="w-full border-b border-[#aaa993]/60 bg-transparent px-0 py-3 font-sans text-[12px] outline-none transition-colors duration-300 placeholder:text-[#aaa99d] placeholder:text-[12px] focus:border-black"
            />
          </div>

          {/* Attendance */}
          <div>
            <label className="mb-4 block font-sans text-[12px] tracking-[0.08em]">
              Կմասնակցե՞ք մեր հարսանիքին
            </label>

            <div className="grid grid-cols-2 gap-4">

              {/* Yes */}
              <button
                type="button"
                onClick={() =>
                  setForm((prev) => ({
                    ...prev,
                    attendance: "yes",
                  }))
                }
                className={`cursor-pointer border border-2 rounded-xl py-3 font-sans text-[12px]
                          transition-all duration-300 ${form.attendance === "yes"
                          ? "border-[#6B2737] bg-[#6B2737] text-white"
                          : "border-[#6B2737] bg-transparent text-[#6B2737] hover:border-[#6B2737]"
                      }`}
              >
                Այո, սիրով
              </button>

              {/* No */}
              <button
                type="button"
                onClick={() =>
                  setForm((prev) => ({
                    ...prev,
                    attendance: "no",
                  }))
                }
                className={`cursor-pointer border border-2 rounded-xl py-3 font-sans text-[12px]
                          transition-all duration-300 ${form.attendance === "no"
                          ? "border-[#6B2737] bg-[#6B2737] text-white"
                          : "border-[#6B2737] bg-transparent text-[#6B2737] hover:border-[#6B2737]"
                      }`}
              >
                Ցավոք, ոչ
              </button>

            </div>
          </div>

          {/* Guests */}
          {form.attendance === "yes" && (
            <div className="animate-[fadeIn_0.4s_ease-out]">
              <label className="mb-3 block font-sans text-[12px] tracking-[0.08em]">
                Հյուրերի քանակը
              </label>

              <select
                name="guests"
                value={form.guests}
                onChange={handleChange}
                className="w-full cursor-pointer border-b border-[#aaa993]/60 bg-transparent px-0 py-3 font-sans text-[12px] outline-none transition-colors duration-300 focus:border-black"
              >
                <option value="1">1 հյուր</option>
                <option value="2">2 հյուր</option>
                <option value="3">3 հյուր</option>
                <option value="4">4 հյուր</option>
                <option value="5">5 հյուր</option>
              </select>
            </div>
          )}

          {/* Message */}
          <div>
            <label className="mb-3 block font-sans text-[12px] tracking-[0.08em]">
              Հաղորդագրություն
            </label>

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows="3"
              placeholder="Ցանկության դեպքում թողեք մեզ մի քանի խոսք..."
              className="h-[60px] w-full resize-none border-b border-[#aaa993]/60 bg-transparent px-0 py-3 font-sans text-[12px] placeholder:text-[12px] leading-6 outline-none transition-colors duration-300 placeholder:text-[#aaa99d] focus:border-black"
            />
          </div>

          {/* Submit */}
          <div className="text-center">
            <button
              type="submit"
              disabled={!form.attendance}
              className={`min-w-[180px] cursor-pointer border rounded-xl px-9 py-3.5 font-sans text-[12px] uppercase transition-all duration-300 ${
                form.attendance
                  ? "border-[#6B2737] bg-[#6B2737] text-white hover:bg-[#541d2c]"
                  : "cursor-not-allowed border-[#6B2737]/40 bg-[#aaa993]/20 text-[#6B2737]/40"
              }`}
            >
              Ուղարկել
            </button>
          </div>

        </form>

        {/* Bottom decoration */}
        <div className="mt-12 flex items-center justify-center gap-4">
          <span className="h-px w-16 bg-[#6B2737]/20" />
          <span className="text-[10px] text-[#6B2737]/70">
            ELARIS
          </span>
          <span className="h-px w-16 bg-[#6B2737]/20" />
        </div>

      </div>
    </section>
  );
}