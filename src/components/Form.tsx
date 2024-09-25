import { LoadingButton } from "@mui/lab";
import { Box, TextField } from "@mui/material";

interface HijoProps {
  ciudad: string;
  setCiudad: React.Dispatch<React.SetStateAction<string>>;
  buscarClima: () => void;
  error: string | null;
  loading: boolean;
}

export default function Form({
  ciudad,
  setCiudad,
  buscarClima,
  error,
  loading,
}: HijoProps) {
  const onsubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    buscarClima(); // Llama a la función para buscar el clima
  };

  // const onsubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   console.log("enviando");
  // };

  return (
    <div>
      {/* formulaio credo con la libreria de Matril UI */}
      <Box
        sx={{
          display: "grid",
          gap: 2,
          justifyContent: "center",
          alignItems: "center",
          maxWidth: "200px",
        }}
        component="form"
        autoComplete="off"
        onSubmit={onsubmit} //Llama a la función para buscar el clima
      >
        <TextField
          id="ciudad"
          label="Ciudad"
          variant="standard"
          size="small"
          fullWidth
          required
          value={ciudad}
          onChange={(e) => setCiudad(e.target.value)}
          helperText={error}
        />

        <LoadingButton
          type="submit"
          loading={loading}
          loadingIndicator="Loading…"
          variant="contained"
          // onClick={handleClick}
        >
          Buscar
        </LoadingButton>
      </Box>
    </div>
  );
}
