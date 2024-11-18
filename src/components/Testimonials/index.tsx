import type { Testimonial } from "../../data/testimonials";
import type { Options } from "react-markdown";

import TestimonialCardButton from "../TestimonialCardButton";
import {
  candidateTestimonials,
  juryTestimonials,
} from "../../data/testimonials";
import { useState, useMemo } from "react";
import Markdown from "react-markdown";
import clsx from "clsx";

const markdownOptions: Options = {
  allowedElements: ["strong", "em", "p"],
};

type TestimonialsProps = {
  type: "candidates" | "jury";
};

const Testimonials = (props: TestimonialsProps) => {
  const [selectedTestimonial, setSelectedTestimonial] =
    useState<Testimonial | null>(null);
  const [isOpened, setIsOpened] = useState(false);

  const handleCloseFromContainer = (
    event: React.MouseEvent<HTMLDivElement>
  ) => {
    if (event.target === event.currentTarget) {
      setIsOpened(null);
    }
  };

  const testimonials = useMemo(() => {
    switch (props.type) {
      case "candidates":
        return candidateTestimonials;
      case "jury":
        return juryTestimonials;
      default:
        return [];
    }
  }, [props.type]);

  const changeSelectedTestimonial = (testimonial: Testimonial) => {
    setSelectedTestimonial(testimonial);
    setIsOpened(true);
  };

  const previousSelectedTestimonial = useMemo(() => {
    if (!selectedTestimonial) return null;

    const currentTestimonialIndex = testimonials.findIndex(
      (testimonial) => testimonial === selectedTestimonial
    );

    const previousTestimonialIndex =
      (currentTestimonialIndex - 1 + testimonials.length) % testimonials.length;

    return testimonials[previousTestimonialIndex] || null;
  }, [selectedTestimonial]);

  const nextSelectedTestimonial = useMemo(() => {
    if (!selectedTestimonial) return null;

    const currentTestimonialIndex = testimonials.findIndex(
      (testimonial) => testimonial === selectedTestimonial
    );

    const nextTestimonialIndex =
      (currentTestimonialIndex + 1) % testimonials.length;

    return testimonials[nextTestimonialIndex] || null;
  }, [selectedTestimonial]);

  const shouldShowPreviousAndNextButtons = testimonials.length > 1;

  return (
    <>
      <ul className="list-none !m-0 grid grid-cols-4 gap-2">
        {testimonials.map((testimonial, index) => (
          <li className="!m-0" key={index}>
            <TestimonialCardButton
              setSelectedTestimonial={changeSelectedTestimonial}
              testimonial={testimonial}
            />
          </li>
        ))}
      </ul>

      <div
        className={clsx(
          "fixed",
          "flex",
          "items-center",
          "justify-center",
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
          { "opacity-0": !isOpened },
          { "opacity-100": isOpened },
          { "pointer-events-none": !isOpened },
          { "pointer-events-auto": isOpened }
        )}
        onClick={handleCloseFromContainer}
      >
        {isOpened && selectedTestimonial && (
          <section className="relative max-w-full max-h-[calc(100vh-10rem)] w-max p-4 rounded dark:bg-gray-800 bg-gray-200 overflow-auto">
            <button
              title="Fermer la fenêtre"
              onClick={() => setIsOpened(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                onClick={() => setIsOpened(false)}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <header className="flex items-center gap-8 justify-between mb-6">
              {previousSelectedTestimonial &&
                shouldShowPreviousAndNextButtons && (
                  <button
                    className="button"
                    onClick={() =>
                      setSelectedTestimonial(previousSelectedTestimonial)
                    }
                    title="Témoignage précédent"
                  >
                    {"<"}
                  </button>
                )}

              <div className="grow w-full text-center">
                <h2>
                  {selectedTestimonial.name &&
                    `Témoignage de ${selectedTestimonial.name}`}
                  {!selectedTestimonial.name && "Témoignage anonyme"}
                </h2>
                <time
                  className="italic text-sm"
                  dateTime={selectedTestimonial?.date.toISOString()}
                >
                  Rédigé le{" "}
                  {selectedTestimonial.date.toLocaleDateString("fr-FR", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              </div>

              {nextSelectedTestimonial && shouldShowPreviousAndNextButtons && (
                <button
                  className="button"
                  onClick={() =>
                    setSelectedTestimonial(nextSelectedTestimonial)
                  }
                  title="Témoignage suivant"
                >
                  {">"}
                </button>
              )}
            </header>

            <div className="grid md:grid-cols-3 gap-8">
              <section>
                <h3>Avant la soutenance</h3>
                <div className="p-2 rounded dark:bg-gray-700 bg-gray-300">
                  {selectedTestimonial.before.map((paragraph, index) => (
                    <Markdown key={index} {...markdownOptions}>
                      {paragraph}
                    </Markdown>
                  ))}
                </div>
              </section>

              <section>
                <h3>Pendant la soutenance</h3>
                <div className="p-2 rounded dark:bg-gray-700 bg-gray-300">
                  {selectedTestimonial.during.map((paragraph, index) => (
                    <Markdown key={index} {...markdownOptions}>
                      {paragraph}
                    </Markdown>
                  ))}
                </div>
              </section>

              <section>
                <h3>Après la soutenance</h3>
                <div className="p-2 rounded dark:bg-gray-700 bg-gray-300">
                  {selectedTestimonial.after.map((paragraph, index) => (
                    <Markdown key={index} {...markdownOptions}>
                      {paragraph}
                    </Markdown>
                  ))}
                </div>
              </section>
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default Testimonials;
