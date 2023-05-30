import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Paper, Button } from "@mui/material/";
import apiFiscalia from "../api/fiscaliaApi";
import { useParams, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function Fiscalia() {
  const { id } = useParams();
  const pathId = id;
  const paperStyle = { padding: "50px 20px", width: 600, margin: "20px auto" };
  const navigate = useNavigate();

  const [name, setName] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [lat, setLat] = React.useState("");
  const [long, setLong] = React.useState("");

  React.useEffect(() => {
    const getOneFiscalia = async (fiscaliaId) => {
      const response = await apiFiscalia.get("fiscalias/" + fiscaliaId);
      console.log({ response });
      if (response.data.id) {
        setName(response.data.name);
        setAddress(response.data.address);
        setPhone(response.data.phone);
        setLat(response.data.latitude);
        setLong(response.data.longitude);
      }
    };

    if (pathId !== undefined && pathId !== null) {
      getOneFiscalia(pathId);
    }
  }, []);

  console.log({ elIdesito: pathId });

  const handleClick = async (e) => {
    e.preventDefault();
    let fiscalia = { name, address, phone, latitude: lat, longitude: long };
    if (pathId !== undefined && pathId !== null) {
      fiscalia = {
        ...fiscalia,
        id: pathId,
      };
    }
    console.log(fiscalia);

    const response = await apiFiscalia.post("fiscalias", fiscalia);
    console.log({intentoSave: response, xd: response.data})
    if (response && response.data && response.data.id) {
      if (pathId !== undefined && pathId !== null) {
        Swal.fire("Se actualizo exitosamente!", "", "success");
      } else {
        Swal.fire("Se registro exitosamente!", "", "success");
        Swal.fire({
          title: "Quieres registrar otra fiscalia?",
          showDenyButton: true,
          allowOutsideClick: false,
          confirmButtonText: "Si, registrar otra",
          denyButtonText: `No quiero registrar`,
          icon: "question",
        }).then((result) => {
          /* Read more about isConfirmed, isDenied below */
          if (result.isConfirmed) {
            Swal.fire("De acuerdo!", "Registremos otra fiscalia", "info");
            setName("");
            setAddress("");
            setPhone("");
            setLat("");
            setLong("");
          } else if (result.isDenied) {
            navigate("/");
            Swal.fire("Perfecto!", "", "info");
          }
        });
      }
    } else {
      Swal.fire("Que mal!", "No se pudo registrar la nueva fiscalia", "error");
    }
  };

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, borderSpacing: "20px" },
      }}
      noValidate
      autoComplete="off"
    >
      <Paper elevation={3} style={paperStyle}>
        <h1 style={{ color: "#1B2668" }}>Formulario</h1>
        <TextField
          id="outlined-helperText"
          label="Nombre"
          variant="filled"
          fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <TextField
          id="outlined-helperText"
          label="Dirección"
          variant="filled"
          fullWidth
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />

        <TextField
          id="outlined-helperText"
          label="Número de teléfono"
          variant="filled"
          fullWidth
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <TextField
          id="outlined-helperText"
          label="Latitud"
          variant="filled"
          fullWidth
          value={lat}
          onChange={(e) => setLat(e.target.value)}
          style={{ width: "45%", marginRight: "2%" }}
        />

        <TextField
          id="outlined-helperText"
          label="Longitud"
          variant="filled"
          fullWidth
          value={long}
          onChange={(e) => setLong(e.target.value)}
          style={{ width: "45%", marginLeft: "2%" }}
        />

        <Button
          variant="contained"
          onClick={handleClick}
          style={{ marginTop: "5px" }}
        >
          Enviar
        </Button>
      </Paper>
    </Box>
  );
}
