// Estados brasileiros e suas respectivas cidades principais
export const brazilianStates = [
  { value: "AC", label: "Acre" },
  { value: "AL", label: "Alagoas" },
  { value: "AP", label: "Amapá" },
  { value: "AM", label: "Amazonas" },
  { value: "BA", label: "Bahia" },
  { value: "CE", label: "Ceará" },
  { value: "DF", label: "Distrito Federal" },
  { value: "ES", label: "Espírito Santo" },
  { value: "GO", label: "Goiás" },
  { value: "MA", label: "Maranhão" },
  { value: "MT", label: "Mato Grosso" },
  { value: "MS", label: "Mato Grosso do Sul" },
  { value: "MG", label: "Minas Gerais" },
  { value: "PA", label: "Pará" },
  { value: "PB", label: "Paraíba" },
  { value: "PR", label: "Paraná" },
  { value: "PE", label: "Pernambuco" },
  { value: "PI", label: "Piauí" },
  { value: "RJ", label: "Rio de Janeiro" },
  { value: "RN", label: "Rio Grande do Norte" },
  { value: "RS", label: "Rio Grande do Sul" },
  { value: "RO", label: "Rondônia" },
  { value: "RR", label: "Roraima" },
  { value: "SC", label: "Santa Catarina" },
  { value: "SP", label: "São Paulo" },
  { value: "SE", label: "Sergipe" },
  { value: "TO", label: "Tocantins" }
];

// Principais cidades por estado
export const citiesByState: Record<string, { value: string; label: string }[]> = {
  "SP": [
    { value: "sao-paulo", label: "São Paulo" },
    { value: "campinas", label: "Campinas" },
    { value: "sao-jose-dos-campos", label: "São José dos Campos" },
    { value: "ribeirão-preto", label: "Ribeirão Preto" },
    { value: "santos", label: "Santos" },
    { value: "sorocaba", label: "Sorocaba" },
    { value: "sao-bernardo-do-campo", label: "São Bernardo do Campo" },
    { value: "santo-andre", label: "Santo André" },
    { value: "osasco", label: "Osasco" },
    { value: "bauru", label: "Bauru" }
  ],
  "RJ": [
    { value: "rio-de-janeiro", label: "Rio de Janeiro" },
    { value: "niteroi", label: "Niterói" },
    { value: "nova-iguacu", label: "Nova Iguaçu" },
    { value: "duque-de-caxias", label: "Duque de Caxias" },
    { value: "campos-dos-goytacazes", label: "Campos dos Goytacazes" },
    { value: "petropolis", label: "Petrópolis" },
    { value: "volta-redonda", label: "Volta Redonda" },
    { value: "magé", label: "Magé" },
    { value: "itaborai", label: "Itaboraí" },
    { value: "cabo-frio", label: "Cabo Frio" }
  ],
  "MG": [
    { value: "belo-horizonte", label: "Belo Horizonte" },
    { value: "uberlandia", label: "Uberlândia" },
    { value: "contagem", label: "Contagem" },
    { value: "juiz-de-fora", label: "Juiz de Fora" },
    { value: "betim", label: "Betim" },
    { value: "montes-claros", label: "Montes Claros" },
    { value: "ribeirao-das-neves", label: "Ribeirão das Neves" },
    { value: "uberaba", label: "Uberaba" },
    { value: "governador-valadares", label: "Governador Valadares" },
    { value: "ipatinga", label: "Ipatinga" }
  ],
  "RS": [
    { value: "porto-alegre", label: "Porto Alegre" },
    { value: "caxias-do-sul", label: "Caxias do Sul" },
    { value: "pelotas", label: "Pelotas" },
    { value: "canoas", label: "Canoas" },
    { value: "santa-maria", label: "Santa Maria" },
    { value: "gravatai", label: "Gravataí" },
    { value: "viamao", label: "Viamão" },
    { value: "novo-hamburgo", label: "Novo Hamburgo" },
    { value: "sao-leopoldo", label: "São Leopoldo" },
    { value: "rio-grande", label: "Rio Grande" }
  ],
  "PR": [
    { value: "curitiba", label: "Curitiba" },
    { value: "londrina", label: "Londrina" },
    { value: "maringa", label: "Maringá" },
    { value: "ponta-grossa", label: "Ponta Grossa" },
    { value: "cascavel", label: "Cascavel" },
    { value: "sao-jose-dos-pinhais", label: "São José dos Pinhais" },
    { value: "foz-do-iguacu", label: "Foz do Iguaçu" },
    { value: "colombo", label: "Colombo" },
    { value: "guarapuava", label: "Guarapuava" },
    { value: "paranagua", label: "Paranaguá" }
  ],
  "SC": [
    { value: "florianopolis", label: "Florianópolis" },
    { value: "joinville", label: "Joinville" },
    { value: "blumenau", label: "Blumenau" },
    { value: "sao-jose", label: "São José" },
    { value: "criciuma", label: "Criciúma" },
    { value: "chapeco", label: "Chapecó" },
    { value: "itajai", label: "Itajaí" },
    { value: "lages", label: "Lages" },
    { value: "palhoça", label: "Palhoça" },
    { value: "balneario-camboriu", label: "Balneário Camboriú" }
  ],
  "BA": [
    { value: "salvador", label: "Salvador" },
    { value: "feira-de-santana", label: "Feira de Santana" },
    { value: "vitoria-da-conquista", label: "Vitória da Conquista" },
    { value: "camaçari", label: "Camaçari" },
    { value: "itabuna", label: "Itabuna" },
    { value: "juazeiro", label: "Juazeiro" },
    { value: "lauro-de-freitas", label: "Lauro de Freitas" },
    { value: "ilheus", label: "Ilhéus" },
    { value: "jequie", label: "Jequié" },
    { value: "teixeira-de-freitas", label: "Teixeira de Freitas" }
  ],
  "GO": [
    { value: "goiania", label: "Goiânia" },
    { value: "aparecida-de-goiania", label: "Aparecida de Goiânia" },
    { value: "anapolis", label: "Anápolis" },
    { value: "rio-verde", label: "Rio Verde" },
    { value: "luziania", label: "Luziânia" },
    { value: "águas-lindas", label: "Águas Lindas de Goiás" },
    { value: "valparaiso", label: "Valparaíso de Goiás" },
    { value: "trindade", label: "Trindade" },
    { value: "formosa", label: "Formosa" },
    { value: "novo-gama", label: "Novo Gama" }
  ],
  "PE": [
    { value: "recife", label: "Recife" },
    { value: "jaboatao", label: "Jaboatão dos Guararapes" },
    { value: "olinda", label: "Olinda" },
    { value: "caruaru", label: "Caruaru" },
    { value: "petrolina", label: "Petrolina" },
    { value: "paulista", label: "Paulista" },
    { value: "cabo", label: "Cabo de Santo Agostinho" },
    { value: "camaragibe", label: "Camaragibe" },
    { value: "garanhuns", label: "Garanhuns" },
    { value: "vitoria", label: "Vitória de Santo Antão" }
  ],
  "CE": [
    { value: "fortaleza", label: "Fortaleza" },
    { value: "caucaia", label: "Caucaia" },
    { value: "juazeiro-do-norte", label: "Juazeiro do Norte" },
    { value: "maranguape", label: "Maranguape" },
    { value: "sobral", label: "Sobral" },
    { value: "crato", label: "Crato" },
    { value: "itapipoca", label: "Itapipoca" },
    { value: "maracanau", label: "Maracanaú" },
    { value: "pacatuba", label: "Pacatuba" },
    { value: "aquiraz", label: "Aquiraz" }
  ]
};

// Adicionar outras principais cidades para estados restantes seria muito extenso
// Para fins práticos, vamos usar as capitais para os demais estados
const capitalsByState: Record<string, string> = {
  "AC": "Rio Branco",
  "AL": "Maceió",
  "AP": "Macapá",
  "AM": "Manaus",
  "DF": "Brasília",
  "ES": "Vitória",
  "MA": "São Luís",
  "MT": "Cuiabá",
  "MS": "Campo Grande",
  "PA": "Belém",
  "PB": "João Pessoa",
  "PI": "Teresina",
  "RN": "Natal",
  "RO": "Porto Velho",
  "RR": "Boa Vista",
  "SE": "Aracaju",
  "TO": "Palmas"
};

// Preencher cidades para estados que não têm lista completa
Object.keys(capitalsByState).forEach(state => {
  if (!citiesByState[state]) {
    citiesByState[state] = [
      { value: capitalsByState[state].toLowerCase().replace(/\s+/g, '-'), label: capitalsByState[state] }
    ];
  }
});

export const jobTypes = [
  { value: "integral", label: "Tempo Integral" },
  { value: "meio-periodo", label: "Meio Período" },
  { value: "temporario", label: "Temporário" },
  { value: "estagio", label: "Estágio" },
  { value: "freelancer", label: "Freelancer" },
  { value: "aprendiz", label: "Aprendiz" },
  { value: "voluntariado", label: "Voluntariado" },
  { value: "horario-flexivel", label: "Horário Flexível" },
  { value: "turnos-rotativos", label: "Turnos Rotativos" },
  { value: "consultoria", label: "Consultoria" },
  { value: "parceria", label: "Parceria" }
];