import { MapPin, Building, Clock, DollarSign, Bookmark } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface JobCardProps {
  job: {
    id: string;
    title: string;
    company: string;
    location: string;
    type: string;
    salary: string;
    posted: string;
    description: string;
    requirements: string[];
    logo?: string;
  };
}

const JobCard = ({ job }: JobCardProps) => {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:scale-[1.02] border-2 hover:border-primary/20">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
              <Building className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                {job.title}
              </h3>
              <p className="text-muted-foreground font-medium">{job.company}</p>
            </div>
          </div>
          <Button variant="ghost" size="icon" className="hover:bg-primary/10">
            <Bookmark className="w-4 h-4" />
          </Button>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <MapPin className="w-4 h-4" />
            {job.location}
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            {job.posted}
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
            {job.type}
          </Badge>
          <div className="flex items-center gap-1 text-success font-semibold">
            <DollarSign className="w-4 h-4" />
            {job.salary}
          </div>
        </div>

        <p className="text-sm text-muted-foreground line-clamp-2">
          {job.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {job.requirements.slice(0, 3).map((req, index) => (
            <Badge key={index} variant="outline" className="text-xs">
              {req}
            </Badge>
          ))}
          {job.requirements.length > 3 && (
            <Badge variant="outline" className="text-xs">
              +{job.requirements.length - 3} mais
            </Badge>
          )}
        </div>
      </CardContent>

      <CardFooter className="pt-3">
        <div className="flex items-center gap-2 w-full">
          <Button variant="outline" className="flex-1">
            Ver Detalhes
          </Button>
          <Button variant="default" className="flex-1">
            Candidatar-se
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default JobCard;