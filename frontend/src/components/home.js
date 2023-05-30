import * as React from "react";
import Box from "@mui/material/Box";
import apiFiscalia from "../api/fiscaliaApi";
import ListOfFiscalias from "./fiscaliaTable";
import Swal from "sweetalert2";
import AddTaskIcon from "@mui/icons-material/AddTask";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom"

export default function Fiscalia() {
  const [fiscalias, setFiscalias] = React.useState([]);

  const getAllFiscalia = async () => {
    const response = await apiFiscalia.get("fiscalias");
    console.log({ getAll: response });
    setFiscalias(response.data);
  };

  const deleteFiscaliaServuce = async (id) => {
    const response = await apiFiscalia.delete("fiscalias/" + id);
    console.log({ delete: response });
    await getAllFiscalia();
  };

  React.useEffect(() => {
    getAllFiscalia();
    console.log({ fiscaliasInit: fiscalias });
  }, []);

  const deleteFiscalia = (item) => {
    Swal.fire({
      title: "Quiere eliminar la fiscalia?",
      text: `${item.name} -- ${item.address}`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, quiero eliminarla!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteFiscaliaServuce(item.id);
        Swal.fire("De acuerdo!", "La fiscalia ha sido eliminada", "success");
      }
    });
  };

  return (
    <Box
      sx={{
        "& > :not(style)": { m: 2 },
      }}
      noValidate
      autoComplete="off"
    >
      <h1>Fiscalias</h1>

      <Button variant="outlined" startIcon={<AddTaskIcon />}>
        <Link style={{ textDecoration: 'none' }} to={`/form`}>Agregar nueva fiscalia</Link>
      </Button>

      <ListOfFiscalias
        fiscalias={fiscalias}
        deleteFiscalia={deleteFiscalia}
      ></ListOfFiscalias>
    </Box>
  );
}
