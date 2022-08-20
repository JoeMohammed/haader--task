type TTitle = {
  children: React.ReactNode;
};

export default function Title({ children }: TTitle) {
  return <h3 className="mainTitle">{children}</h3>;
}
