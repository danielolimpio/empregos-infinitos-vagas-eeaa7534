import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useToast } from "@/hooks/use-toast";

export type CandidateRow = {
  id: string;
  name: string;
  role: string;
  experience: string;
  status: "Selecionado" | "Reprovado" | "Em processo" | "Novo";
};

const CandidatesTable: React.FC<{ items: CandidateRow[] }> = ({ items }) => {
  const { toast } = useToast();
  const [rows, setRows] = React.useState(items);

  function setStatus(id: string, status: CandidateRow["status"]) {
    setRows((r) => r.map((x) => (x.id === id ? { ...x, status } : x)));
    toast({ title: `Candidato marcado como ${status}` });
  }

  return (
    <Card className="p-4">
      <h3 className="mb-3 text-base font-medium">Candidatos</h3>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Nome</TableHead>
            <TableHead>Função</TableHead>
            <TableHead>Experiência</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Ações</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map((c) => (
            <TableRow key={c.id}>
              <TableCell className="font-medium">{c.name}</TableCell>
              <TableCell>{c.role}</TableCell>
              <TableCell>{c.experience}</TableCell>
              <TableCell>
                <Badge variant={c.status === "Reprovado" ? "destructive" : c.status === "Selecionado" ? "default" : "secondary"}>
                  {c.status}
                </Badge>
              </TableCell>
              <TableCell className="text-right">
                <div className="flex justify-end gap-2">
                  <Button size="sm" variant="secondary" onClick={() => setStatus(c.id, "Em processo")}>Em processo</Button>
                  <Button size="sm" onClick={() => setStatus(c.id, "Selecionado")}>Selecionar</Button>
                  <Button size="sm" variant="destructive" onClick={() => setStatus(c.id, "Reprovado")}>Reprovar</Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
};

export default CandidatesTable;
