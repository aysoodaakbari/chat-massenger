export interface IChatRowProps {
  image?: JSX.Element;
  open: boolean;
  label: string;
  className?: string;
  onClick?: () => void;
  link?: string;
}
