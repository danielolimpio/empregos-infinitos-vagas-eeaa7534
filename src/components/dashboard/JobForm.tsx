import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RichTextEditor } from "@/components/ui/rich-text-editor";

const jobSchema = z.object({
  company_name: z.string().min(2, "Nome da empresa obrigatório"),
  title: z.string().min(3, "Título da vaga obrigatório"),
  location: z.string().min(2, "Localização obrigatória"),
  salary: z.string().optional(),
  type: z.enum(["Presencial", "Remoto", "Híbrido"], {
    required_error: "Selecione o tipo de trabalho",
  }),
  contract: z.enum(["CLT", "PJ", "Temporário", "Estágio"], {
    required_error: "Selecione o tipo de contrato",
  }),
  description: z.string().min(20, "Descrição deve ter no mínimo 20 caracteres"),
  requirements: z.string().optional(),
  benefits: z.string().optional(),
});

type JobFormValues = z.infer<typeof jobSchema>;

interface JobFormProps {
  onSubmit: (data: JobFormValues) => Promise<void>;
  onCancel: () => void;
  defaultValues?: Partial<JobFormValues>;
  isEdit?: boolean;
}

export const JobForm: React.FC<JobFormProps> = ({ 
  onSubmit, 
  onCancel, 
  defaultValues,
  isEdit = false 
}) => {
  const form = useForm<JobFormValues>({
    resolver: zodResolver(jobSchema),
    defaultValues: {
      company_name: defaultValues?.company_name || "",
      title: defaultValues?.title || "",
      location: defaultValues?.location || "",
      salary: defaultValues?.salary || "",
      type: defaultValues?.type || undefined,
      contract: defaultValues?.contract || undefined,
      description: defaultValues?.description || "",
      requirements: defaultValues?.requirements || "",
      benefits: defaultValues?.benefits || "",
    },
  });

  const handleSubmit = async (data: JobFormValues) => {
    await onSubmit(data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="company_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nome da Empresa</FormLabel>
                <FormControl>
                  <Input placeholder="Ex: Tech Company Ltda" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Título da Vaga</FormLabel>
                <FormControl>
                  <Input placeholder="Ex: Desenvolvedor Full Stack" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Localização</FormLabel>
                <FormControl>
                  <Input placeholder="Ex: São Paulo, SP" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="salary"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Salário (opcional)</FormLabel>
                <FormControl>
                  <Input placeholder="Ex: R$ 8.000 - R$ 12.000" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="type"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tipo de Trabalho</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Presencial">Presencial</SelectItem>
                    <SelectItem value="Remoto">Remoto</SelectItem>
                    <SelectItem value="Híbrido">Híbrido</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="contract"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tipo de Contrato</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="CLT">CLT</SelectItem>
                    <SelectItem value="PJ">PJ</SelectItem>
                    <SelectItem value="Temporário">Temporário</SelectItem>
                    <SelectItem value="Estágio">Estágio</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Descrição da Vaga</FormLabel>
              <FormControl>
                <RichTextEditor
                  value={field.value || ""}
                  onChange={field.onChange}
                  placeholder="Descreva as principais responsabilidades e atribuições da vaga..."
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="requirements"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Requisitos (opcional)</FormLabel>
              <FormControl>
                <RichTextEditor
                  value={field.value || ""}
                  onChange={field.onChange}
                  placeholder="Liste os requisitos técnicos e experiências necessárias..."
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="benefits"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Benefícios (opcional)</FormLabel>
              <FormControl>
                <RichTextEditor
                  value={field.value || ""}
                  onChange={field.onChange}
                  placeholder="Ex: Vale alimentação, plano de saúde, home office..."
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex gap-2 justify-end">
          <Button type="button" variant="outline" onClick={onCancel}>
            Cancelar
          </Button>
          <Button type="submit">
            {isEdit ? "Atualizar Vaga" : "Publicar Vaga"}
          </Button>
        </div>
      </form>
    </Form>
  );
};
