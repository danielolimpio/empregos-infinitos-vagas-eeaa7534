import React from "react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { SlidersHorizontal } from "lucide-react";

const FilterBar: React.FC = () => {
  return (
    <div className="rounded-lg border bg-card p-4">
      <div className="grid grid-cols-1 gap-3 md:grid-cols-6">
        <div className="md:col-span-2">
          <Input placeholder="Buscar vagas" aria-label="Buscar vagas" />
        </div>
        <Select>
          <SelectTrigger><SelectValue placeholder="Área" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="dev">Desenvolvimento</SelectItem>
            <SelectItem value="design">Design</SelectItem>
            <SelectItem value="dados">Dados</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger><SelectValue placeholder="Cidade" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="sp">São Paulo</SelectItem>
            <SelectItem value="rj">Rio de Janeiro</SelectItem>
            <SelectItem value="bh">Belo Horizonte</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger><SelectValue placeholder="Contrato" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="clt">CLT</SelectItem>
            <SelectItem value="pj">PJ</SelectItem>
            <SelectItem value="estagio">Estágio</SelectItem>
            <SelectItem value="freelancer">Freelancer</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger><SelectValue placeholder="Senioridade" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="jr">Júnior</SelectItem>
            <SelectItem value="pl">Pleno</SelectItem>
            <SelectItem value="sr">Sênior</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="mt-3 flex justify-end">
        <Button variant="secondary" className="inline-flex items-center gap-2"><SlidersHorizontal className="h-4 w-4" />Filtros avançados</Button>
      </div>
    </div>
  );
};

export default FilterBar;
