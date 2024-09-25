import { LoadingButton } from "@mui/lab";
import { Box, TextField } from "@mui/material";

interface HijoProps {
  ciudad: string;
  setCiudad: React.Dispatch<React.SetStateAction<string>>;
  lat: string;
  setLat: React.Dispatch<React.SetStateAction<string>>;
  lon: string;
  setLon: React.Dispatch<React.SetStateAction<string>>;
  codigoPostal: string;
  setCodigoPostal: React.Dispatch<React.SetStateAction<string>>;
  buscarClima: () => void;
  error: string | null;
  loading: boolean;
}

export default function Form({
  ciudad,
  setCiudad,
  lat,
  setLat,
  lon,
  setLon,
  codigoPostal,
  setCodigoPostal,
  buscarClima,
  error,
  loading,
}: HijoProps) {
  const onsubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    buscarClima(); // Llama a la función para buscar el clima
  };

  return (
    <div>
      <Box
        sx={{
          display: "grid",
          gap: 2,
          justifyContent: "center",
          alignItems: "center",
          maxWidth: "300px",
        }}
        component="form"
        autoComplete="off"
        onSubmit={onsubmit}
      >
        {/* Input de ciudad */}
        <TextField
          id="ciudad"
          label="Ciudad"
          variant="standard"
          size="small"
          fullWidth
          value={ciudad}
          onChange={(e) => setCiudad(e.target.value)}
        />

        {/* Input de código postal */}
        <TextField
          id="codigoPostal"
          label="Código Postal"
          variant="standard"
          size="small"
          fullWidth
          value={codigoPostal}
          onChange={(e) => setCodigoPostal(e.target.value)}
        />

        {/* Input de latitud */}
        <TextField
          id="latitud"
          label="Latitud"
          variant="standard"
          size="small"
          fullWidth
          value={lat}
          onChange={(e) => setLat(e.target.value)}
        />

        {/* Input de longitud */}
        <TextField
          id="longitud"
          label="Longitud"
          variant="standard"
          size="small"
          fullWidth
          value={lon}
          onChange={(e) => setLon(e.target.value)}
        />

        <LoadingButton
          type="submit"
          loading={loading}
          loadingIndicator="Buscando..."
          variant="contained"
        >
          Buscar
        </LoadingButton>
      </Box>
    </div>
  );
}
