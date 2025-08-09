import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Mail, Phone, MapPin } from "lucide-react";

export type CompanyData = {
  logoUrl?: string;
  name: string;
  location: string;
  description?: string;
  seals?: string[];
  email?: string;
  phone?: string;
};

const RecruiterCompanyCard: React.FC<{ data: CompanyData }> = ({ data }) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-start gap-4">
        <Avatar className="h-14 w-14">
          <AvatarImage src={data.logoUrl} alt={`Logo ${data.name}`} />
          <AvatarFallback>{data.name.slice(0,2).toUpperCase()}</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <CardTitle className="text-lg">{data.name}</CardTitle>
          <div className="mt-1 text-sm text-muted-foreground inline-flex items-center gap-1"><MapPin className="h-4 w-4" />{data.location}</div>
          {data.description && <p className="mt-2 text-sm text-muted-foreground">{data.description}</p>}
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        {data.seals?.length ? (
          <div className="flex flex-wrap gap-2">
            {data.seals.map((s) => (
              <Badge key={s} variant="secondary">{s}</Badge>
            ))}
          </div>
        ) : null}
        <div className="flex flex-wrap gap-4 text-sm">
          {data.email && (
            <div className="inline-flex items-center gap-2"><Mail className="h-4 w-4" /> {data.email}</div>
          )}
          {data.phone && (
            <div className="inline-flex items-center gap-2"><Phone className="h-4 w-4" /> {data.phone}</div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default RecruiterCompanyCard;
