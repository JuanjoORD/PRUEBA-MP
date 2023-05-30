import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Avatar from '@mui/material/Avatar';
import { Link } from "react-router-dom"

export default function SearchAppBar() {
  return (
    <div sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "#ECF0F1" }} >
        <Toolbar>
            <Link to={'/'}>
          <Avatar
            alt="MP Loo"
            src="https://scontent.fgua1-3.fna.fbcdn.net/v/t1.6435-9/118566888_3869541703063158_4799742594718365293_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=973b4a&_nc_ohc=UplEzoEvaSAAX_Q8j_y&_nc_ht=scontent.fgua1-3.fna&oh=00_AT_peBVoNtcA-XpAIkG9YTvL3nK_EBWHF9ByYcNEAQTaow&oe=634621B8"
            sx={{ width: 56, height: 56 }}
          />
          </Link>

          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" }, color: "#34495E" }}
          >
            Ministerio Público
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
