import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export type Message = { id: string; from: "candidato" | "recrutador"; text: string; time: string };

const ChatPanel: React.FC<{ messages: Message[] }> = ({ messages }) => {
  const [value, setValue] = React.useState("");
  const [localMessages, setLocalMessages] = React.useState(messages);

  function send() {
    if (!value.trim()) return;
    setLocalMessages((m) => [...m, { id: crypto.randomUUID(), from: "candidato", text: value, time: new Date().toLocaleTimeString() }]);
    setValue("");
  }

  return (
    <Card className="flex h-[360px] flex-col">
      <div className="flex-1 space-y-3 overflow-y-auto p-4">
        {localMessages.map((msg) => (
          <div key={msg.id} className={`flex items-start gap-2 ${msg.from === "candidato" ? "justify-end" : "justify-start"}`}>
            {msg.from === "recrutador" && (
              <Avatar className="h-6 w-6"><AvatarFallback>R</AvatarFallback></Avatar>
            )}
            <div className={`max-w-[75%] rounded-md border p-2 text-sm ${msg.from === "candidato" ? "bg-muted" : "bg-card"}`}>
              <div>{msg.text}</div>
              <div className="mt-1 text-[10px] text-muted-foreground">{msg.time}</div>
            </div>
            {msg.from === "candidato" && (
              <Avatar className="h-6 w-6"><AvatarFallback>C</AvatarFallback></Avatar>
            )}
          </div>
        ))}
      </div>
      <div className="border-t p-3">
        <div className="flex items-center gap-2">
          <Input placeholder="Escreva uma mensagem..." value={value} onChange={(e) => setValue(e.target.value)} onKeyDown={(e) => e.key === "Enter" && send()} />
          <Button onClick={send}>Enviar</Button>
        </div>
        <div className="mt-1 text-xs text-muted-foreground">Chat ilustrativo. Conectaremos ao Supabase para tempo real.</div>
      </div>
    </Card>
  );
};

export default ChatPanel;
