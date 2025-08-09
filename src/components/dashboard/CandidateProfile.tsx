import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { MapPin, Briefcase, CircleAlert } from "lucide-react";

export type CandidateProfileData = {
  photoUrl?: string;
  fullName: string;
  city: string;
  country: string;
  profession: string;
  status: "Desempregado" | "Empregado atualmente";
  bio?: string;
  skills: string[];
  salaryExpectation?: string;
  seniority?: "Júnior" | "Pleno" | "Sênior" | "Especialista" | string;
  portfolio?: { title: string; url: string; image?: string }[];
  experiences?: { role: string; company: string; period: string }[];
};

const CandidateProfile: React.FC<{ data: CandidateProfileData } & React.HTMLAttributes<HTMLDivElement>> = ({ data, className }) => {
  return (
    <Card className={className}>
      <CardHeader>
        <div className="flex items-start gap-4">
          <Avatar className="h-16 w-16">
            <AvatarImage src={data.photoUrl} alt={`Foto de ${data.fullName}`} />
            <AvatarFallback>{data.fullName?.slice(0,2).toUpperCase()}</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <CardTitle className="text-xl">{data.fullName}</CardTitle>
            <div className="mt-1 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-1"><MapPin className="h-4 w-4" />{data.city}, {data.country}</span>
              <Separator orientation="vertical" className="h-4" />
              <span className="inline-flex items-center gap-1"><Briefcase className="h-4 w-4" />{data.profession}</span>
            </div>
            <div className="mt-2">
              <Badge variant="secondary" className="inline-flex items-center gap-1">
                <CircleAlert className="h-3.5 w-3.5" /> {data.status}
              </Badge>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4 animate-fade-in">
        {data.bio && (
          <p className="text-sm text-muted-foreground">{data.bio}</p>
        )}
        {(data.salaryExpectation || data.seniority) && (
          <div className="flex flex-wrap gap-2 text-sm">
            {data.seniority && (
              <Badge variant="outline">Senioridade: {data.seniority}</Badge>
            )}
            {data.salaryExpectation && (
              <Badge variant="outline">Pretensão: {data.salaryExpectation}</Badge>
            )}
          </div>
        )}
        {data.skills?.length ? (
          <div>
            <h4 className="mb-2 text-sm font-medium">Competências</h4>
            <div className="flex flex-wrap gap-2">
              {data.skills.map((s) => (
                <Badge key={s} variant="secondary" className="hover-scale">{s}</Badge>
              ))}
            </div>
          </div>
        ) : null}

        {data.experiences?.length ? (
          <div>
            <h4 className="mb-2 text-sm font-medium">Experiências</h4>
            <ul className="space-y-2 text-sm">
              {data.experiences.map((e, idx) => (
                <li key={idx} className="rounded-md border p-3">
                  <div className="font-medium">{e.role}</div>
                  <div className="text-muted-foreground">{e.company} • {e.period}</div>
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        {data.portfolio?.length ? (
          <div>
            <h4 className="mb-2 text-sm font-medium">Portfólio</h4>
            <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
              {data.portfolio.map((p) => (
                <a key={p.url} href={p.url} target="_blank" rel="noopener noreferrer" className="rounded-md border p-2 story-link">
                  <div className="text-sm font-medium line-clamp-2">{p.title}</div>
                  <div className="text-xs text-muted-foreground truncate">{p.url}</div>
                </a>
              ))}
            </div>
          </div>
        ) : null}
      </CardContent>
    </Card>
  );
};

export default CandidateProfile;
