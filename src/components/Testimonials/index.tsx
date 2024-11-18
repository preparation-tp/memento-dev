import type { Testimonial } from "../../data/testimonials";

import TestimonialCardButton from "../TestimonialCardButton";
import testimonials from "../../data/testimonials";
import { useState, useEffect } from "react";
import clsx from "clsx";

const Testimonials = () => {
  const [selectedTestimonial, setSelectedTestimonial] =
    useState<Testimonial | null>(null);

  const handleCloseFromContainer = (
    event: React.MouseEvent<HTMLDivElement>
  ) => {
    if (event.target === event.currentTarget) {
      setSelectedTestimonial(null);
    }
  };

  return (
    <>
      <ul className="list-none !m-0 grid grid-cols-4 gap-2">
        {testimonials.map((testimonial, index) => (
          <li className="!m-0" key={index}>
            <TestimonialCardButton
              setSelectedTestimonial={setSelectedTestimonial}
              testimonial={testimonial}
            />
          </li>
        ))}
      </ul>

      <div
        className={clsx(
          "fixed",
          "w-screen",
          "h-screen",
          "bg-black/50",
          "backdrop-blur",
          "inset-0",
          "m-0",
          "p-4",
          "z-50",
          "no-mt",
          "transition-opacity",
          "duration-300",
          { "opacity-0": !selectedTestimonial },
          { "opacity-100": selectedTestimonial },
          { "pointer-events-none": !selectedTestimonial },
          { "pointer-events-auto": selectedTestimonial }
        )}
        onClick={handleCloseFromContainer}
      >
        <div></div>
      </div>
    </>
  );
};

export default Testimonials;
