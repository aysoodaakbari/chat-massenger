import { MouseEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IinitialState, addMassage } from "../../store/massage/slice";
import { useSearchParams } from "react-router-dom";
import { OpenAI } from "openai";
import { randomNumberInRange } from "../../utils/generateRandomNum";
import ChatContent from "../../pages/chat";
import { IChatContainerProps } from "./interface";

const ChatContainer = () => {
    const [searchParams] = useSearchParams();
    const user_id = Number(searchParams.get("id"));
    const [input, setInput] = useState<string>("");
    const [generatedText, setGeneratedText] = useState("");

    const openai = new OpenAI({
        apiKey: "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",
        dangerouslyAllowBrowser: true,
    });

    const generateText = async () => {
        const response = await openai.completions.create({
            model: "text-davinci-003",
            prompt: input,
            max_tokens: 50,
        });
        setGeneratedText(response.choices[0].text);
    };

    const dispatch = useDispatch();
    const data = useSelector<
        { reducer: { massage: IinitialState[] } },
        { reducer: { massage: IinitialState[] } }
    >((state) => state);

    const handleSend = (e?: MouseEvent<HTMLButtonElement, MouseEvent>) => {
        if (input === "") {
            e?.preventDefault();
        } else {
            dispatch(
                addMassage({
                    newMassage: [
                        {
                            massageId: randomNumberInRange(10, 900),
                            sender: "aysooda",
                            text: input,
                        },
                    ],
                    userId: user_id,
                }),
            );

            if (input.trim() !== "") {
                setInput("");
            }
            generateText();
            setTimeout(
                () =>
                    dispatch(
                        addMassage({
                            newMassage: [
                                {
                                    massageId: randomNumberInRange(10, 900),
                                    sender: "bot",
                                    text: generatedText || "Hi How can I assist you?",
                                },
                            ],
                            userId: user_id,
                        }),
                    ),
                3000,
            );
        }
    };
    const handleInputChange = (event: {
        target: { value: React.SetStateAction<string> };
    }) => {
        setInput(event.target.value);
    };
    const chatProps: IChatContainerProps = {
        handleInputChange,
        handleSend,
        data,
        input,
        user_id
    }
    return (
        <ChatContent {...chatProps} />
    )
}

export default ChatContainer