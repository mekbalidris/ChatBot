import { useRef } from "react";


const ChatPage = () => {

    const textareaRef = useRef(null);

    const handleInput = () => {
        const textarea = textareaRef.current;
        textarea.style.height = "auto";
        textarea.style.height = Math.min(textarea.scrollHeight, 150) + "px";
    };
    return (
        <section className="relative w-full">
            <div>

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

                    <button className="text-xl border border-[#36135a] font-bold text-[#36135a] w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                        ca
                    </button>

                </div>
                <button className="text-xl border border-[#36135a] bg-[#cab2fb] font-bold text-[#36135a] w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ">
                    ar
                </button>
            </div>
        </section>
    )

}

export default ChatPage;