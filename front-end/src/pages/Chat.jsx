import { useEffect, useRef, useState } from "react";

const Chat = () => {
  const textareaRef = useRef(null);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);
  const [chatToolsDisplay, setChatToolsDisplay] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const newMessage = [...messages, { text: input, sender: "user" }];
    setMessages(newMessage);
    setInput("");

    if (textareaRef.current) {
      textareaRef.current.value = "";
      textareaRef.current.style.height = "auto";
    }

    setIsLoading(true);

    try {
      const response = await fetch("http://localhost:5005/webhooks/rest/webhook", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          sender: "user_" + Date.now(),
          message: input,
        }),
        credentials: "include",
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const contentType = response.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        const text = await response.text();
        throw new Error(`Invalid content type. Received: ${contentType}, Body: ${text}`);
      }

      const data = await response.json();
      const botMessages = data.map((item) => ({
        text: item.text || "Je n'ai pas compris. Pouvez-vous reformuler?",
        sender: "Bot",
      }));

      setMessages((prev) => [...prev, ...botMessages]);
    } catch (error) {
      console.error("Error:", error);
      setMessages((prev) => [
        ...prev,
        {
          text: "Désolé, une erreur de communication avec le serveur s'est produite.",
          sender: "Bot",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const defaultMessageFile = () => {
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          text: "Our Model does not have this feature yet.",
          sender: "Bot",
        },
      ]);
    }, 600);
  };

  const handleInput = (e) => {
    setInput(e.target.value);
    const textarea = textareaRef.current;
    textarea.style.height = "auto";
    textarea.style.height = Math.min(textarea.scrollHeight, 170) + "px";
  };

  // Process bot messages: Handle bold (**text**) and line breaks
  const renderBotText = (text) => {
    const lines = text.split("\n");
    return lines.map((line, index) => {
      const parts = line.split(/\*\*(.*?)\*\*/);
      const renderedParts = [];
      for (let i = 0; i < parts.length; i++) {
        if (i % 2 === 0) {
          renderedParts.push(parts[i]);
        } else {
          renderedParts.push(<strong key={i}>{parts[i]}</strong>);
        }
      }
      return <div key={index}>{renderedParts}</div>;
    });
  };

  // Process user messages: Handle line breaks only
  const renderUserText = (text) => {
    const lines = text.split("\n");
    return lines.map((line, index) => <div key={index}>{line}</div>);
  };

  return (
    <section className="relative w-full flex flex-col">
      <div className="h-[70vh] overflow-y-scroll custom-scrollbar">
        <div className="flex flex-col p-5">
          {messages.map((msg, index) => (
            <div key={index} className="flex flex-row mb-7">
              {msg.sender === "Bot" && (
                <div className="mr-3 p-1.5 rounded-full">
                  <img
                    src="/startupgenie.png"
                    alt="Image non disponible"
                    className="w-10 h-10 rounded-full flex-1"
                  />
                </div>
              )}
              <div
                className={`p-2 sm:max-w-[80%] max-w-[100%] my-2 rounded-b-lg shadow-md ${
                  msg.sender === "user"
                    ? "bg-main text-[#36135a] font-normal self-end ml-auto"
                    : "bg-black backdrop-blur-lg text-white font-secondary font-normal self-start flex-[2]"
                }`}
              >
                {msg.sender === "Bot" ? renderBotText(msg.text) : renderUserText(msg.text)}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
      </div>

      <div className="fixed bottom-2 flex flex-row items-center justify-center w-full md:px-0">
        <div className="w-[95%] flex flex-col md:w-[60%] bg-main rounded-4xl p-2">
          <textarea
            placeholder="Poser une question ..."
            ref={textareaRef}
            className="mb-2 w-full border-none px-4 py-2 flex-grow resize-none outline-none bg-transparent h-auto min-h-[40px] custom-scrollbar"
            rows="1"
            onChange={handleInput}
          />
          <div className="flex flex-row relative">
            <div className="flex flex-row flex-[4]">
              {!chatToolsDisplay ? (
                <button
                  className="cursor-pointer mr-3 bg-[#36135a] text-2xl font-bold text-white w-12 h-12 rounded-full flex items-center text-center justify-center flex-shrink-0"
                  onClick={() => setChatToolsDisplay(!chatToolsDisplay)}
                >
                  <i className="bx bx-plus"></i>
                </button>
              ) : (
                <div className="mr-3 w-auto p-2 rounded-full bg-[#36135a] h-12 flex flex-row items-center gap-2">
                  <button
                    className="cursor-pointer w-10 h-10 flex justify-center items-center rounded-full border border-white bg-[#CAB3E8]"
                    onClick={() => setChatToolsDisplay(!chatToolsDisplay)}
                  >
                    <i className="bx bx-x text-[#36135a] text-xl"></i>
                  </button>
                  <button
                    className="cursor-pointer w-10 h-10 flex justify-center items-center rounded-full border border-white bg-[#CAB3E8]"
                    onClick={defaultMessageFile}
                  >
                    <i className="bx bxs-file-blank text-[#36135a] text-xl"></i>
                  </button>
                  <button
                    className="cursor-pointer w-10 h-10 flex justify-center items-center rounded-full border border-white bg-[#CAB3E8]"
                    onClick={defaultMessageFile}
                  >
                    <i className="bx bx-microphone text-[#36135a] text-xl"></i>
                  </button>
                </div>
              )}
              {chatToolsDisplay && (
                <>
                  <button
                    className="cursor-pointer mr-3 font-bold border border-[#36135a] bg-main text-[#36135a] w-12 md:w-30 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                    onClick={defaultMessageFile}
                  >
                    <i className="bx bx-globe"></i>{" "}
                    <span className="hidden md:flex">Search</span>
                  </button>
                  <button
                    className="cursor-pointer mr-3 font-bold border border-[#36135a] bg-main text-[#36135a] w-12 md:w-30 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                    onClick={defaultMessageFile}
                  >
                    <i className="bx bx-sun"></i>{" "}
                    <span className="hidden md:flex">Think</span>
                  </button>
                </>
              )}
            </div>
            <button
              className="cursor-pointer text-2xl border border-[#36135a] bg-main font-extrabold text-[#36135a] w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
              onClick={sendMessage}
            >
              <i className="bx bx-up-arrow-alt"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Chat;