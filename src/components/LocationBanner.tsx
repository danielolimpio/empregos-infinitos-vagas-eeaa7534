import { MapPin, X, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useState } from "react";
import type { LocationData } from "@/hooks/useGeolocation";

interface LocationBannerProps {
  location: LocationData | null;
  loading: boolean;
  error: string | null;
  onChangeLocation: () => void;
  onRequestLocation: () => void;
}

export const LocationBanner = ({
  location,
  loading,
  error,
  onChangeLocation,
  onRequestLocation,
}: LocationBannerProps) => {
  const [dismissed, setDismissed] = useState(false);

  if (loading) {
    return (
      <div className="bg-primary/5 border-b border-border">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-center gap-2 text-sm">
            <Navigation className="w-4 h-4 animate-pulse" />
            <span>Detectando sua localização...</span>
          </div>
        </div>
      </div>
    );
  }

  if (location) {
    return (
      <div className="bg-gradient-to-r from-green-600/10 to-emerald-600/10 border-b border-green-600/20">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-green-700 dark:text-green-400" />
              <span className="text-sm font-medium">
                Mostrando vagas em{" "}
                <span className="font-semibold text-green-700 dark:text-green-400">
                  {location.city}, {location.stateCode}
                </span>
              </span>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={onChangeLocation}
              className="text-sm hover:bg-green-600/10"
            >
              Alterar cidade
            </Button>
          </div>
        </div>
      </div>
    );
  }

  if (error && !dismissed) {
    return (
      <Alert className="rounded-none border-x-0 border-t-0 bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-900">
        <div className="container mx-auto px-4">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-start gap-3 flex-1">
              <MapPin className="w-5 h-5 text-amber-600 dark:text-amber-400 mt-0.5" />
              <div className="flex-1">
                <AlertDescription className="text-sm">
                  <span className="font-medium block mb-2">
                    Não conseguimos identificar sua localização.
                  </span>
                  <span className="text-muted-foreground">
                    Para ver vagas próximas a você, permita o acesso à sua localização ou escolha sua cidade manualmente nos filtros.
                  </span>
                </AlertDescription>
                <div className="flex gap-2 mt-3">
                  <Button
                    size="sm"
                    onClick={onRequestLocation}
                    className="bg-amber-600 hover:bg-amber-700 text-white"
                  >
                    <Navigation className="w-4 h-4 mr-2" />
                    Permitir localização
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={onChangeLocation}
                  >
                    Escolher cidade
                  </Button>
                </div>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8"
              onClick={() => setDismissed(true)}
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </Alert>
    );
  }

  return null;
};
