import { IMassageData } from "store/massage/slice";

export interface IChatRowProps {
  image?: JSX.Element;
  open: boolean;
  label: string;
  className?: string;
  onClick?: () => void;
  link?: string;
}
export interface IChatContentProps {
  massageData: IMassageData[]
}