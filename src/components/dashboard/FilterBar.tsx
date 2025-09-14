import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { SlidersHorizontal } from "lucide-react";
import { brazilianStates, citiesByState, jobTypes } from "@/data/locations";

const FilterBar: React.FC = () => {
  const [selectedState, setSelectedState] = useState<string>("");
  const [selectedCity, setSelectedCity] = useState<string>("");

  const handleStateChange = (state: string) => {
    setSelectedState(state);
    setSelectedCity(""); // Reset city when state changes
  };

  const availableCities = selectedState ? citiesByState[selectedState] || [] : [];

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
            <SelectItem value="marketing">Marketing</SelectItem>
            <SelectItem value="vendas">Vendas</SelectItem>
            <SelectItem value="rh">Recursos Humanos</SelectItem>
            <SelectItem value="financeiro">Financeiro</SelectItem>
            <SelectItem value="juridico">Jurídico</SelectItem>
            <SelectItem value="operacional">Operacional</SelectItem>
            <SelectItem value="educacao">Educação</SelectItem>
          </SelectContent>
        </Select>

        <Select value={selectedState} onValueChange={handleStateChange}>
          <SelectTrigger><SelectValue placeholder="Estado" /></SelectTrigger>
          <SelectContent>
            {brazilianStates.map((state) => (
              <SelectItem key={state.value} value={state.value}>
                {state.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={selectedCity} onValueChange={setSelectedCity} disabled={!selectedState}>
          <SelectTrigger><SelectValue placeholder="Cidade" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="remoto">Remoto</SelectItem>
            <SelectItem value="hibrido">Híbrido</SelectItem>
            <SelectItem value="internacional">Internacional</SelectItem>
            {availableCities.map((city) => (
              <SelectItem key={city.value} value={city.value}>
                {city.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select>
          <SelectTrigger><SelectValue placeholder="Tipo de Trabalho" /></SelectTrigger>
          <SelectContent>
            {jobTypes.map((type) => (
              <SelectItem key={type.value} value={type.value}>
                {type.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select>
          <SelectTrigger><SelectValue placeholder="Senioridade" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="jr">Júnior</SelectItem>
            <SelectItem value="pl">Pleno</SelectItem>
            <SelectItem value="sr">Sênior</SelectItem>
            <SelectItem value="especialista">Especialista</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="mt-3 flex justify-end">
        <Button variant="secondary" className="inline-flex items-center gap-2">
          <SlidersHorizontal className="h-4 w-4" />
          Filtros avançados
        </Button>
      </div>
    </div>
  );
};

export default FilterBar;
