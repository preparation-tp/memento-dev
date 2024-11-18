import type { Testimonial } from "../../data/testimonials";

type TestimonialProps = {
  testimonial: Testimonial;
  setSelectedTestimonial: (testimonial: Testimonial) => void;
};

const TestimonialCardButton = (props: TestimonialProps) => {
  const handleClick = () => {
    props.setSelectedTestimonial(props.testimonial);
  };

  return (
    <button onClick={handleClick}>
      <h3>{props.testimonial.name || "Anonyme"}</h3>

      <time dateTime={props.testimonial.date.toISOString()}>
        {props.testimonial.date.toLocaleDateString("fr-FR", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </time>
    </button>
  );
};

export default TestimonialCardButton;
