import { createContext, useContext, useState, useEffect } from 'react';

const ChatContext = createContext();

export function ChatProvider({ children }) {
  const [chatHistory, setChatHistory] = useState([]);

  // Load chat history from localStorage on initial render
  useEffect(() => {
    const hist = JSON.parse(localStorage.getItem("historique")) || [];
    setChatHistory(hist);
  }, []);

  // Function to update chat history
  const updateChatHistory = (newChat) => {
    const hist = JSON.parse(localStorage.getItem("historique")) || [];
    const filtered = hist.filter((c) => c.id !== newChat.id);
    const updated = [...filtered, newChat];
    localStorage.setItem("historique", JSON.stringify(updated));
    setChatHistory(updated);
  };

  return (
    <ChatContext.Provider value={{ chatHistory, updateChatHistory }}>
      {children}
    </ChatContext.Provider>
  );
}

export function useChat() {
  return useContext(ChatContext);
} 