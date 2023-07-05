import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{ bgcolor: "#1f1f24", color: "#FFFFFFB3", py: 3 }}
    >
      <Container>
        <Typography variant="body2" color="#FFFFFFB3" align="center">
          {"Gostou? Contribua no nosso "}
          <Link
            target="_blank"
            rel="noopener"
            href="https://github.com/MATA63-20231/geral"
            color="inherit"
          >
            GitHub
          </Link>
          {" "}
          🤍
        </Typography>
      </Container>
    </Box>
  );
}
