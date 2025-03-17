import { useEffect, useRef, useState } from "react";


const ChatPage = () => {

    const textareaRef = useRef(null);
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");
    const messagesEndRef = useRef(null);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    const sendMessage = () => {
        if (!input.trim()) return;

        const newMessage = [...messages, { text: input, sender: "user" }];
        setMessages(newMessage);
        setInput("");
        if (textareaRef.current) {
            textareaRef.current.value = "";
            textareaRef.current.style.height = "auto";
        }

        setTimeout(() => {
            setMessages((prev) => [
                ...prev,
                {
                    text: "Default messageDefault messageDefault messageDefault messageDefault messageDefault messageDefault messageDefault messageDefault messageDefault messageDefault messageDefault message",
                    sender: "Bot"
                },
            ]);
        }, 1000);
    };

    const handleInput = (e) => {
        setInput(e.target.value);
        const textarea = textareaRef.current;
        textarea.style.height = "auto";
        textarea.style.height = Math.min(textarea.scrollHeight, 170) + "px";
    };
    return (
        <section className="relative w-full flex flex-col ">
            <div className="h-[80vh] overflow-y-scroll p-5 custom-scrollbar">
                <div className="flex flex-col p-5">
                    {
                        messages.map((msg, index) => (
                            <div
                                key={index}
                                className="flex flex-row mb-7"
                            >
                                {msg.sender === "Bot" &&
                                    <div className="h-[60px] w-[60px] mr-3 p-1.5 rounded-full">

                                        <img src="/startupgenie-01.png"
                                            alt="Image non disponible"
                                            className="h-auto w-auto rounded-full" />

                                    </div>
                                }
                                <div className={`p-2 sm:max-w-[80%] max-w-[100%] my-2 rounded-b-lg shadow-md  ${msg.sender === "user" ? "bg-[#cab2fb] text-[#36135a] font-bold self-end ml-auto" :
                                    "bg-transparent backdrop-blur-lg text-white font-secondary font-bold self-start"
                                    }`}>
                                    {msg.text}
                                </div>
                            </div>
                        ))
                    }
                    <div ref={messagesEndRef} />
                </div>
            </div>

            <div className="fixed bottom-4 flex flex-row items-center px-4 w-full">
                <div className="flex items-center w-full  bg-[#cab2fb] rounded-full p-2 mr-5">
                    <button className="bg-[#36135a] text-2xl font-bold text-white w-12 h-12 rounded-full flex items-center text-center justify-center flex-shrink-0">
                        <i className='bx bx-plus'></i>
                    </button>

                    <textarea placeholder="Poser une question ..."
                        ref={textareaRef}
                        className="w-full border-none px-4 py-2 flex-grow resize-none outline-none bg-transparent h-auto min-h-[40px] custom-scrollbar mr-1"
                        rows="1"
                        onChange={handleInput}>

                    </textarea>

                    <button className="text-2xl border border-[#36135a] font-extrabold text-[#36135a] w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                        <i className='bx bx-camera'></i>
                    </button>

                </div>
                <button className="text-2xl border border-[#36135a] bg-[#cab2fb] font-extrabold text-[#36135a] w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 "
                    onClick={sendMessage}>
                    <i className='bx bx-up-arrow-alt'></i>
                </button>
            </div>
        </section>
    )

}

export default ChatPage;