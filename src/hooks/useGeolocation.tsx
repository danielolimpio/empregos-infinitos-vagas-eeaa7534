import { useState, useEffect } from "react";

export interface LocationData {
  city: string;
  state: string;
  stateCode: string;
  country: string;
  latitude: number;
  longitude: number;
}

export const useGeolocation = () => {
  const [location, setLocation] = useState<LocationData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [permission, setPermission] = useState<"prompt" | "granted" | "denied">("prompt");

  useEffect(() => {
    // Check if geolocation is supported
    if (!navigator.geolocation) {
      setError("Geolocalização não é suportada pelo seu navegador");
      setLoading(false);
      return;
    }

    // Request location
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const { latitude, longitude } = position.coords;
          
          // Use Nominatim (OpenStreetMap) for reverse geocoding
          const response = await fetch(
            `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json&accept-language=pt-BR`,
            {
              headers: {
                'User-Agent': 'JobPortal/1.0'
              }
            }
          );

          if (!response.ok) {
            throw new Error("Erro ao obter dados de localização");
          }

          const data = await response.json();
          const address = data.address;

          // Extract city and state information
          const city = address.city || address.town || address.village || address.municipality || "Cidade não identificada";
          const state = address.state || "Estado não identificado";
          const stateCode = getStateCode(state);

          setLocation({
            city,
            state,
            stateCode,
            country: address.country || "Brasil",
            latitude,
            longitude,
          });
          setPermission("granted");
          setLoading(false);
        } catch (err) {
          setError("Não foi possível identificar sua localização");
          setLoading(false);
        }
      },
      (err) => {
        if (err.code === 1) {
          setPermission("denied");
          setError("Permissão de localização negada");
        } else {
          setError("Não foi possível obter sua localização");
        }
        setLoading(false);
      },
      {
        enableHighAccuracy: false,
        timeout: 10000,
        maximumAge: 300000, // Cache for 5 minutes
      }
    );
  }, []);

  return { location, loading, error, permission };
};

// Map state names to codes
const getStateCode = (stateName: string): string => {
  const stateMap: Record<string, string> = {
    "acre": "AC",
    "alagoas": "AL",
    "amapa": "AP",
    "amazonas": "AM",
    "bahia": "BA",
    "ceara": "CE",
    "distrito federal": "DF",
    "espirito santo": "ES",
    "goias": "GO",
    "maranhao": "MA",
    "mato grosso": "MT",
    "mato grosso do sul": "MS",
    "minas gerais": "MG",
    "para": "PA",
    "paraiba": "PB",
    "parana": "PR",
    "pernambuco": "PE",
    "piaui": "PI",
    "rio de janeiro": "RJ",
    "rio grande do norte": "RN",
    "rio grande do sul": "RS",
    "rondonia": "RO",
    "roraima": "RR",
    "santa catarina": "SC",
    "sao paulo": "SP",
    "sergipe": "SE",
    "tocantins": "TO",
  };

  const normalized = stateName.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  return stateMap[normalized] || stateName.substring(0, 2).toUpperCase();
};
