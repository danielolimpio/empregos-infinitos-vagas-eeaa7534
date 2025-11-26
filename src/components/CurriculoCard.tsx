import { FileText } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const CurriculoCard = () => {
  return (
    <Card className="border-2 border-success/20 bg-success/5 shadow-lg">
      <CardHeader className="pb-3">
        <div className="flex items-center gap-2 mb-2">
          <FileText className="w-5 h-5 text-success" />
          <CardTitle className="text-lg">Crie seu Currículo</CardTitle>
        </div>
        <CardDescription className="text-sm">
          Destaque-se com um currículo profissional e aumente suas chances de ser contratado
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-0">
        <Button
          variant="success"
          className="w-full"
          size="lg"
          asChild
        >
          <a 
            href="https://fazercurriculo.com" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Criar Currículo Grátis
          </a>
        </Button>
      </CardContent>
    </Card>
  );
};

export default CurriculoCard;
