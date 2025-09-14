import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { ImageUpload } from "@/components/ui/image-upload";
import type { CompanyData } from "./RecruiterCompanyCard";

const schema = z.object({
  logoUrl: z.string().url().optional().or(z.literal("")),
  name: z.string().min(2, "Informe o nome da empresa"),
  location: z.string().min(2, "Informe a localização"),
  description: z.string().optional(),
  seals: z.string().optional(),
  email: z.string().email("E-mail inválido").optional().or(z.literal("")),
  phone: z.string().optional(),
});

type Values = z.infer<typeof schema>;

const RecruiterProfileForm: React.FC<{
  defaultValues: CompanyData;
  onSubmit: (data: CompanyData) => void;
}> = ({ defaultValues, onSubmit }) => {
  const form = useForm<Values>({
    resolver: zodResolver(schema),
    defaultValues: {
      logoUrl: defaultValues.logoUrl ?? "",
      name: defaultValues.name,
      location: defaultValues.location,
      description: defaultValues.description ?? "",
      seals: defaultValues.seals?.join(", ") ?? "",
      email: defaultValues.email ?? "",
      phone: defaultValues.phone ?? "",
    },
  });

  function submit(v: Values) {
    const payload: CompanyData = {
      logoUrl: v.logoUrl || undefined,
      name: v.name,
      location: v.location,
      description: v.description?.trim() || undefined,
      seals: (v.seals || "")
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean),
      email: v.email || undefined,
      phone: v.phone || undefined,
    };
    onSubmit(payload);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(submit)} className="space-y-4">
        <FormField control={form.control} name="logoUrl" render={({ field }) => (
          <FormItem>
            <FormLabel>Logo da empresa</FormLabel>
            <FormControl>
              <ImageUpload 
                value={field.value} 
                onChange={field.onChange}
                placeholder="Adicionar logo da empresa"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )} />

        <FormField control={form.control} name="name" render={({ field }) => (
          <FormItem>
            <FormLabel>Nome</FormLabel>
            <FormControl><Input {...field} /></FormControl>
            <FormMessage />
          </FormItem>
        )} />

        <FormField control={form.control} name="location" render={({ field }) => (
          <FormItem>
            <FormLabel>Localização</FormLabel>
            <FormControl><Input {...field} /></FormControl>
            <FormMessage />
          </FormItem>
        )} />

        <FormField control={form.control} name="description" render={({ field }) => (
          <FormItem>
            <FormLabel>Descrição</FormLabel>
            <FormControl><Textarea rows={4} {...field} /></FormControl>
            <FormMessage />
          </FormItem>
        )} />

        <FormField control={form.control} name="seals" render={({ field }) => (
          <FormItem>
            <FormLabel>Selos (separados por vírgula)</FormLabel>
            <FormControl><Input placeholder="Ex.: Ótimo ambiente, Empresa certificada" {...field} /></FormControl>
            <FormMessage />
          </FormItem>
        )} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField control={form.control} name="email" render={({ field }) => (
            <FormItem>
              <FormLabel>E-mail</FormLabel>
              <FormControl><Input type="email" {...field} /></FormControl>
              <FormMessage />
            </FormItem>
          )} />
          <FormField control={form.control} name="phone" render={({ field }) => (
            <FormItem>
              <FormLabel>Telefone</FormLabel>
              <FormControl><Input {...field} /></FormControl>
              <FormMessage />
            </FormItem>
          )} />
        </div>

        <Button type="submit" className="w-full">Salvar alterações</Button>
      </form>
    </Form>
  );
};

export default RecruiterProfileForm;
