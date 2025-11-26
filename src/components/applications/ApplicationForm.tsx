import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const applicationSchema = z.object({
  cover_letter: z.string().min(50, "A carta de apresentação deve ter pelo menos 50 caracteres"),
  resume_url: z.string().url("URL inválida").optional().or(z.literal("")),
  candidate_notes: z.string().optional(),
});

type ApplicationFormValues = z.infer<typeof applicationSchema>;

interface ApplicationFormProps {
  onSubmit: (data: ApplicationFormValues) => Promise<void>;
  onCancel: () => void;
  jobTitle: string;
  isLoading?: boolean;
}

export const ApplicationForm: React.FC<ApplicationFormProps> = ({
  onSubmit,
  onCancel,
  jobTitle,
  isLoading = false,
}) => {
  const form = useForm<ApplicationFormValues>({
    resolver: zodResolver(applicationSchema),
    defaultValues: {
      cover_letter: "",
      resume_url: "",
      candidate_notes: "",
    },
  });

  const handleSubmit = async (data: ApplicationFormValues) => {
    await onSubmit(data);
  };

  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-lg font-semibold">Candidatar-se para:</h3>
        <p className="text-muted-foreground">{jobTitle}</p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="cover_letter"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Carta de Apresentação *</FormLabel>
                <FormControl>
                  <Textarea
                    rows={6}
                    placeholder="Conte por que você é o candidato ideal para esta vaga. Destaque suas experiências e competências relevantes..."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="resume_url"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Link do Currículo (opcional)</FormLabel>
                <FormControl>
                  <Input
                    type="url"
                    placeholder="https://exemplo.com/meu-curriculo.pdf"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="candidate_notes"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Observações Adicionais (opcional)</FormLabel>
                <FormControl>
                  <Textarea
                    rows={3}
                    placeholder="Informações adicionais que você gostaria de compartilhar..."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex gap-2 justify-end pt-4">
            <Button type="button" variant="outline" onClick={onCancel} disabled={isLoading}>
              Cancelar
            </Button>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? "Enviando..." : "Enviar Candidatura"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};
