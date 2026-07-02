import { useState } from "react";
import type { Message } from "../types/message";
import { useApiMutation } from "./Api/useApiMutation";

interface ChatRequest {
  message: string;
}

interface ChatResponse {
  reply: string;
}

export function useChat() {
  const [messages, setMessages] = useState<Message[]>([]);

  const { mutate, loading, error } =
    useApiMutation<ChatRequest, ChatResponse>(
      "/api/aiChat",
      "post",
      undefined,
      "Failed to send message"
    );

  const sendMessage = async (message: string) => {
    setMessages((prev) => [...prev, { sender: "user", text: message }]);

    try {
      const res = await mutate({ message });
      setMessages((prev) => [...prev, { sender: "ai", text: res.reply }]);
    } catch {
      //API handles error xoxo
        }
  };

  return { sendMessage, messages, loading, error };
}
