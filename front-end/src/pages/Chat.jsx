import { useEffect, useRef, useState } from "react";


const ChatPage = () => {

    const textareaRef = useRef(null);
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");
    const messagesEndRef = useRef(null);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({behavior : "smooth"});
    },[messages]);

    const sendMessage = () => {
        if(!input.trim()) return;
        
        const newMessage = [...messages, {text : input, sender : "user"}];
        setMessages(newMessage);
        setInput("");

        setTimeout(() => {
            setMessages((prev) => [
                ...prev,
                {text:"Default message", sender : "Bot"},
            ]);
        }, 1000);
    };

    const handleInput = (e) => {
        setInput(e.target.value);
        const textarea = textareaRef.current;
        textarea.style.height = "auto";
        textarea.style.height = Math.min(textarea.scrollHeight, 150) + "px";
    };
    return (
        <section className="relative w-full flex flex-col ">
            <div className="flex-1 overflow-y-scroll flex flex-col p-5">
                {
                    messages.map((msg, index) => (
                        <div
                            key={index}
                            className={`p-3 my-2 max-w-xs rounded-b-lg shadow-md ${
                                msg.sender === "user" ? "bg-[#cab2fb] text-white font-bold self-end ml-auto" :
                                "bg-gray-400 text-white font-extrabold self-start"
                            }`}
                            >
                                {msg.text}
                        </div>
                    ))
                }
                <div ref={messagesEndRef} />
            </div>

            <div className="fixed bottom-4 flex flex-row items-center px-4 w-full">
                <div className="flex items-center w-full  bg-[#cab2fb] rounded-full p-2 mr-5">
                    <button className="bg-[#36135a] text-2xl font-bold text-white w-12 h-12 rounded-full flex items-center text-center justify-center flex-shrink-0">
                        +
                    </button>

                    <textarea placeholder="Poser une question ..."
                        ref={textareaRef}
                        className="w-full border-none rounded-full px-4 py-2 flex-grow resize-none outline-none bg-transparent h-auto min-h-[40px] custom-scrollbar mr-1"
                        rows="1"
                        onChange={handleInput}>

                    </textarea>

                    <button className="text-2xl border border-[#36135a] font-extrabold text-[#36135a] w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                        <i class='bx bx-camera'></i>
                    </button>

                </div>
                <button className="text-2xl border border-[#36135a] bg-[#cab2fb] font-extrabold text-[#36135a] w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 "
                        onClick={sendMessage}>
                    <i class='bx bx-up-arrow-alt'></i>
                </button>
            </div>
        </section>
    )

}

export default ChatPage;