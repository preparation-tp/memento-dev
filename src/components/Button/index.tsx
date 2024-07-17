import clsx from "clsx";

type CommonProps = {
  children: React.ReactNode;
  className?: string;
};

type ButtonProps = CommonProps &
  (
    | {
        href: string;
        onClick?: never;
      }
    | {
        href?: never;
        onClick: () => void;
      }
  );

const Button = (props: ButtonProps) => {
  const Component = props.href ? "a" : ("button" as React.ElementType);

  const buttonClassNames = ["button", "max-w-full", "w-fit"];

  return (
    <Component
      className={clsx(buttonClassNames, props.className)}
      href={props.href}
      onClick={props.onClick}
    >
      {props.children}
    </Component>
  );
};

export default Button;
