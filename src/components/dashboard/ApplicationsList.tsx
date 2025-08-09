import React from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Building2, MapPin, Clock, Users2 } from "lucide-react";

export type Application = {
  id: string;
  title: string;
  company: string;
  location: string;
  type: "Remota" | "Híbrida" | "Presencial";
  jobStatus: "Aberta" | "Preenchida";
  appStatus: "Enviada" | "Visualizada" | "Em análise" | "Respondida" | "Reprovada" | "Aprovada";
  appliedAt: string; // ISO date string
  applicants?: number;
  daysLeft?: number;
};

const statusVariant: Record<Application["appStatus"], "default" | "secondary" | "destructive" | "outline"> = {
  "Enviada": "default",
  "Visualizada": "secondary",
  "Em análise": "secondary",
  "Respondida": "outline",
  "Reprovada": "destructive",
  "Aprovada": "default",
};

const ApplicationsList: React.FC<{ items: Application[]; onView?: (id: string) => void }> = ({ items, onView }) => {
  return (
    <div className="space-y-3">
      {items.map((v) => (
        <Card key={v.id} className="p-4">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-base font-medium">{v.title}</h3>
                <Badge variant={v.jobStatus === "Aberta" ? "secondary" : "outline"}>{v.jobStatus}</Badge>
                <Badge variant={statusVariant[v.appStatus]}>{v.appStatus}</Badge>
              </div>
              <div className="mt-1 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-1"><Building2 className="h-4 w-4" />{v.company}</span>
                <Separator orientation="vertical" className="h-4" />
                <span className="inline-flex items-center gap-1"><MapPin className="h-4 w-4" />{v.location} • {v.type}</span>
                {typeof v.applicants === "number" && (
                  <>
                    <Separator orientation="vertical" className="h-4" />
                    <span className="inline-flex items-center gap-1"><Users2 className="h-4 w-4" />{v.applicants} candidatos</span>
                  </>
                )}
                {typeof v.daysLeft === "number" && (
                  <>
                    <Separator orientation="vertical" className="h-4" />
                    <span className="inline-flex items-center gap-1"><Clock className="h-4 w-4" />{v.daysLeft} dias restantes</span>
                  </>
                )}
              </div>
              <div className="mt-2 text-xs text-muted-foreground">Aplicado há {timeSince(v.appliedAt)}</div>
            </div>

            <div className="flex-none">
              <Button size="sm" onClick={() => onView?.(v.id)}>Ver detalhes</Button>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

function timeSince(dateIso: string): string {
  const diff = Date.now() - new Date(dateIso).getTime();
  const hours = Math.floor(diff / 3_600_000);
  if (hours < 24) return `${hours}h`;
  const days = Math.floor(hours / 24);
  return `${days}d`;
}

export default ApplicationsList;
