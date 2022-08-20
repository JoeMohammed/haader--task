interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export default function MainButton({ children, ...rest }: IButton) {
  return (
    <button {...rest} className="main_button">
      {children}
    </button>
  );
}
