import React from "react";
import { Card } from "@/components/ui/card";
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from "recharts";

const COLORS = ["hsl(var(--primary))", "hsl(var(--muted-foreground))"] as const;

const MetricsOverview: React.FC<{ evaluatedPct?: number }> = ({ evaluatedPct = 46 }) => {
  const data = [
    { name: "Avaliados", value: evaluatedPct },
    { name: "Pendentes", value: 100 - evaluatedPct },
  ];

  return (
    <Card className="p-4">
      <h3 className="mb-3 text-base font-medium">Andamento das avaliações</h3>
      <div className="h-48">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie data={data} dataKey="value" nameKey="name" innerRadius={50} outerRadius={70} paddingAngle={2}>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-2 text-sm text-muted-foreground">{evaluatedPct}% dos candidatos já foram avaliados</div>
    </Card>
  );
};

export default MetricsOverview;
