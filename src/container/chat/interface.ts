import { IinitialState } from "store/massage/slice";
import {MouseEvent}  from "react"
export interface IChatContainerProps {
    handleInputChange: (event: {
        target: {
            value: React.SetStateAction<string>;
        };
    }) => void,
    handleSend: (e?: MouseEvent<HTMLButtonElement, MouseEvent>) => void,
    data: {
        reducer: {
            massage: IinitialState[];
        };
    },
    input: string
    user_id: number
};