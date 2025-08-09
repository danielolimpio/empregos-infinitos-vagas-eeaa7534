import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import type { CandidateProfileData } from "./CandidateProfile";

const schema = z.object({
  photoUrl: z.string().url().optional().or(z.literal("")),
  fullName: z.string().min(3, "Informe o nome"),
  city: z.string().min(2, "Cidade obrigatória"),
  country: z.string().min(2, "País obrigatório"),
  profession: z.string().min(2, "Profissão obrigatória"),
  status: z.enum(["Desempregado", "Empregado atualmente"]),
  bio: z.string().optional(),
  salaryExpectation: z.string().optional(),
  seniority: z.string().optional(),
  skills: z.string().optional(), // comma separated
});

type Values = z.infer<typeof schema>;

const CandidateProfileForm: React.FC<{
  defaultValues: CandidateProfileData;
  onSubmit: (data: CandidateProfileData) => void;
}> = ({ defaultValues, onSubmit }) => {
  const form = useForm<Values>({
    resolver: zodResolver(schema),
    defaultValues: {
      photoUrl: defaultValues.photoUrl ?? "",
      fullName: defaultValues.fullName,
      city: defaultValues.city,
      country: defaultValues.country,
      profession: defaultValues.profession,
      status: defaultValues.status,
      bio: defaultValues.bio ?? "",
      salaryExpectation: defaultValues.salaryExpectation ?? "",
      seniority: defaultValues.seniority ?? "",
      skills: defaultValues.skills?.join(", ") ?? "",
    },
  });

  function submit(v: Values) {
    const payload: CandidateProfileData = {
      photoUrl: v.photoUrl || undefined,
      fullName: v.fullName,
      city: v.city,
      country: v.country,
      profession: v.profession,
      status: v.status,
      bio: v.bio?.trim() || undefined,
      salaryExpectation: v.salaryExpectation?.trim() || undefined,
      seniority: v.seniority?.trim() || undefined,
      skills: (v.skills || "")
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean),
      experiences: defaultValues.experiences ?? [],
      portfolio: defaultValues.portfolio ?? [],
    };
    onSubmit(payload);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(submit)} className="space-y-4">
        <FormField
          control={form.control}
          name="photoUrl"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Foto (URL)</FormLabel>
              <FormControl>
                <Input placeholder="https://..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField control={form.control} name="fullName" render={({ field }) => (
            <FormItem>
              <FormLabel>Nome completo</FormLabel>
              <FormControl><Input {...field} /></FormControl>
              <FormMessage />
            </FormItem>
          )} />
          <FormField control={form.control} name="profession" render={({ field }) => (
            <FormItem>
              <FormLabel>Profissão</FormLabel>
              <FormControl><Input {...field} /></FormControl>
              <FormMessage />
            </FormItem>
          )} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField control={form.control} name="city" render={({ field }) => (
            <FormItem>
              <FormLabel>Cidade</FormLabel>
              <FormControl><Input {...field} /></FormControl>
              <FormMessage />
            </FormItem>
          )} />
          <FormField control={form.control} name="country" render={({ field }) => (
            <FormItem>
              <FormLabel>País</FormLabel>
              <FormControl><Input {...field} /></FormControl>
              <FormMessage />
            </FormItem>
          )} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField control={form.control} name="status" render={({ field }) => (
            <FormItem>
              <FormLabel>Status</FormLabel>
              <FormControl>
                <select className="w-full rounded-md border bg-background px-3 py-2" value={field.value} onChange={(e) => field.onChange(e.target.value)}>
                  <option value="Desempregado">Desempregado</option>
                  <option value="Empregado atualmente">Empregado atualmente</option>
                </select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )} />
          <FormField control={form.control} name="seniority" render={({ field }) => (
            <FormItem>
              <FormLabel>Senioridade</FormLabel>
              <FormControl>
                <select className="w-full rounded-md border bg-background px-3 py-2" value={field.value} onChange={(e) => field.onChange(e.target.value)}>
                  <option value="">Selecione</option>
                  <option value="Júnior">Júnior</option>
                  <option value="Pleno">Pleno</option>
                  <option value="Sênior">Sênior</option>
                  <option value="Especialista">Especialista</option>
                </select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )} />
        </div>

        <FormField control={form.control} name="salaryExpectation" render={({ field }) => (
          <FormItem>
            <FormLabel>Pretensão salarial</FormLabel>
            <FormControl><Input placeholder="Ex.: R$ 8.000" {...field} /></FormControl>
            <FormMessage />
          </FormItem>
        )} />

        <FormField control={form.control} name="skills" render={({ field }) => (
          <FormItem>
            <FormLabel>Competências (separadas por vírgula)</FormLabel>
            <FormControl><Input placeholder="Ex.: Figma, UX Research, Prototipagem" {...field} /></FormControl>
            <FormMessage />
          </FormItem>
        )} />

        <FormField control={form.control} name="bio" render={({ field }) => (
          <FormItem>
            <FormLabel>Bio profissional</FormLabel>
            <FormControl><Textarea rows={4} {...field} /></FormControl>
            <FormMessage />
          </FormItem>
        )} />

        <Button type="submit" className="w-full">Salvar alterações</Button>
      </form>
    </Form>
  );
};

export default CandidateProfileForm;
