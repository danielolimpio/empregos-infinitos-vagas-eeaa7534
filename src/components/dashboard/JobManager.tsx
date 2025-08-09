import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Pencil, Trash2, PlusCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export type Job = {
  id: string;
  title: string;
  location: string;
  type: "Remota" | "Híbrida" | "Presencial";
  status: "Aberta" | "Preenchida";
};

const JobManager: React.FC<{ jobs: Job[] }> = ({ jobs }) => {
  const { toast } = useToast();
  const [list, setList] = React.useState<Job[]>(jobs);

  function toggleStatus(id: string) {
    setList((l) => l.map((j) => (j.id === id ? { ...j, status: j.status === "Aberta" ? "Preenchida" : "Aberta" } : j)));
    toast({ title: "Status atualizado" });
  }

  return (
    <Card className="p-4">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-base font-medium">Minhas vagas</h3>
        <Button size="sm" className="inline-flex items-center gap-2" onClick={() => toast({ title: "Criar nova vaga", description: "Conectaremos ao formulário em breve." })}>
          <PlusCircle className="h-4 w-4" /> Nova vaga
        </Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Título</TableHead>
            <TableHead>Local</TableHead>
            <TableHead>Tipo</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Ações</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {list.map((j) => (
            <TableRow key={j.id}>
              <TableCell className="font-medium">{j.title}</TableCell>
              <TableCell>{j.location}</TableCell>
              <TableCell>{j.type}</TableCell>
              <TableCell><Badge variant={j.status === "Aberta" ? "secondary" : "outline"}>{j.status}</Badge></TableCell>
              <TableCell className="text-right">
                <div className="flex justify-end gap-2">
                  <Button size="icon" variant="ghost" onClick={() => toast({ title: "Editar vaga" })}><Pencil className="h-4 w-4" /></Button>
                  <Button size="icon" variant="ghost" onClick={() => toggleStatus(j.id)}><Badge className="px-2">{j.status === "Aberta" ? "Fechar" : "Abrir"}</Badge></Button>
                  <Button size="icon" variant="ghost" onClick={() => setList((l) => l.filter((x) => x.id !== j.id))}><Trash2 className="h-4 w-4" /></Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
};

export default JobManager;
