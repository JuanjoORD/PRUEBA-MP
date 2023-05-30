import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom"

function App(props) {
  const { fiscalias, deleteFiscalia } = props;
  console.log({ LasProps: fiscalias });

  return (
    <Grid sx={{ flexGrow: 1 }} container spacing={6} >
      {fiscalias.map((fiscalia) => {
        return (
          <Grid item xs={4} key={fiscalia.id}>
            <Card sx={{ maxWidth: 345 }}>
              <div style={{ position: "relative" }}>
                <a href={`https://www.google.com/maps/search/?api=1&query=${fiscalia.latitude},${fiscalia.longitude}`} target="_blank" >
                <CardMedia
                  component="img"
                  alt="Maps"
                  height="140"
                  image="https://www.elgrupoinformatico.com/static/Noticias/2022/05/google-maps-1200x675.jpg"
                />
                <div
                  style={{
                    position: "absolute",
                    color: "black",
                    top: 10,
                    left: "50%",
                    top: "50%",
                    transform: "translateX(-50%)",
                    fontSize: "15px",
                  }}
                >
                  {" "}
                  Click para ver en Maps
                </div>
                </a>
              </div>

              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {fiscalia.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {fiscalia.address}
                </Typography>
              </CardContent>
              <CardActions>
                <Button variant="outlined" startIcon={<EditIcon />}>
                  <Link to={`/form/${fiscalia.id}`} >Editar</Link>
                </Button>
                <Button variant="outlined" color="secondary" startIcon={<DeleteIcon />}
                onClick={() => deleteFiscalia(fiscalia)}>
                  Eliminar
                </Button>
              </CardActions>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
}

export default App;
