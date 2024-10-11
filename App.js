import React from "react";
import { Container, Typography, Button, IconButton, Grid } from "@mui/material";
import { PhoneInTalkOutlined, MailOutlined } from "@mui/icons-material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const yellowTheme = createTheme({
  palette: {
    primary: {
      main: "#ffc107", // Yellow
    },
  },
  typography: {
    fontFamily: "Google Sans, sans-serif",
  },
});

function App() {
  const handleAboutClick = () => {
    window.location.href = "#about";
  };

  const handleHomeClick = () => {
    window.location.href = "";
  };

  return (
    <ThemeProvider theme={yellowTheme}>
      <Container maxWidth="lg">
        <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <IconButton onClick={handleHomeClick}>
            <Typography variant="h6">Home</Typography>
          </IconButton>
          <IconButton onClick={handleAboutClick}>
            <Typography variant="h6">About</Typography>
          </IconButton>
          <IconButton>
            <PhoneInTalkOutlined />
            <Typography variant="body1">+20 115 628 0809</Typography>
          </IconButton>
          <IconButton>
            <MailOutlined />
            <Typography variant="body1">zenitsuz196@gmail.com</Typography>
          </IconButton>
        </header>

        <main>
          <section id="home">
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <Typography variant="h4">Welcome!</Typography>
                <Typography variant="body1">
                  This is my personal website where you can learn more about me.
                </Typography>
                <Button variant="contained">Let's Connect!</Button>
              </Grid>
              <Grid item xs={12} md={6}>
                {/* Add your creative feature here! (e.g., Animated avatar, interactive timeline) */}
                <div style={{ position: "relative" }}>
                  <img src="yourimage.jpg" alt="Your Photo" style={{ width: "100%" }} />
                  <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
                    <Typography variant="h6" color="primary">
                      Click to see my skills!
                    </Typography>
                  </div>
                </div>
              </Grid>
            </Grid>
          </section>

          <section id="about">
            <Typography variant="h4">About Me</Typography>
            <Typography variant="body1">
              {/* Add your personal bio here */}
              Write a detailed description about yourself, your interests, and your goals. 
            </Typography>
          </section>
        </main>
      </Container>
    </ThemeProvider>
  );
}

export default App;
