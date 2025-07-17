import { Filter, MapPin, DollarSign, Clock, Building } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";

const JobFilters = () => {
  const jobTypes = [
    { id: "full-time", label: "Tempo Integral", count: 1250 },
    { id: "part-time", label: "Meio Período", count: 340 },
    { id: "contract", label: "Contrato", count: 560 },
    { id: "freelance", label: "Freelance", count: 180 },
    { id: "internship", label: "Estágio", count: 290 },
  ];

  const locations = [
    { id: "sp", label: "São Paulo", count: 850 },
    { id: "rj", label: "Rio de Janeiro", count: 420 },
    { id: "mg", label: "Minas Gerais", count: 310 },
    { id: "remote", label: "Remoto", count: 680 },
    { id: "hybrid", label: "Híbrido", count: 240 },
  ];

  const salaryRanges = [
    { id: "1-3k", label: "R$ 1.000 - 3.000", count: 120 },
    { id: "3-5k", label: "R$ 3.000 - 5.000", count: 340 },
    { id: "5-8k", label: "R$ 5.000 - 8.000", count: 280 },
    { id: "8-12k", label: "R$ 8.000 - 12.000", count: 190 },
    { id: "12k+", label: "R$ 12.000+", count: 150 },
  ];

  const companies = [
    { id: "google", label: "Google", count: 24 },
    { id: "microsoft", label: "Microsoft", count: 18 },
    { id: "amazon", label: "Amazon", count: 32 },
    { id: "apple", label: "Apple", count: 15 },
    { id: "meta", label: "Meta", count: 21 },
  ];

  return (
    <div className="w-80 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <Filter className="w-5 h-5" />
            Filtros
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Tipo de Trabalho */}
          <div>
            <h4 className="font-medium mb-3 flex items-center gap-2">
              <Clock className="w-4 h-4" />
              Tipo de Trabalho
            </h4>
            <div className="space-y-2">
              {jobTypes.map((type) => (
                <div key={type.id} className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Checkbox id={type.id} />
                    <label
                      htmlFor={type.id}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {type.label}
                    </label>
                  </div>
                  <span className="text-xs text-muted-foreground">
                    {type.count}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <Separator />

          {/* Localização */}
          <div>
            <h4 className="font-medium mb-3 flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Localização
            </h4>
            <div className="space-y-2">
              {locations.map((location) => (
                <div key={location.id} className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Checkbox id={location.id} />
                    <label
                      htmlFor={location.id}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {location.label}
                    </label>
                  </div>
                  <span className="text-xs text-muted-foreground">
                    {location.count}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <Separator />

          {/* Faixa Salarial */}
          <div>
            <h4 className="font-medium mb-3 flex items-center gap-2">
              <DollarSign className="w-4 h-4" />
              Faixa Salarial
            </h4>
            <div className="space-y-2">
              {salaryRanges.map((range) => (
                <div key={range.id} className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Checkbox id={range.id} />
                    <label
                      htmlFor={range.id}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {range.label}
                    </label>
                  </div>
                  <span className="text-xs text-muted-foreground">
                    {range.count}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <Separator />

          {/* Empresas */}
          <div>
            <h4 className="font-medium mb-3 flex items-center gap-2">
              <Building className="w-4 h-4" />
              Empresas
            </h4>
            <div className="space-y-2">
              {companies.map((company) => (
                <div key={company.id} className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Checkbox id={company.id} />
                    <label
                      htmlFor={company.id}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {company.label}
                    </label>
                  </div>
                  <span className="text-xs text-muted-foreground">
                    {company.count}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      <Button variant="outline" className="w-full">
        Limpar Filtros
      </Button>
    </div>
  );
};

export default JobFilters;