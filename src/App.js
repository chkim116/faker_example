import React from "react";
import Container from "./components/Container";
import { ThemeProvider } from "styled-components";

const theme = {
    ls: "18px",
    ms: "14px",
    ss: "12px",
    white: "#fff",
    black: "#14171a",
    yellow: "rgb(251, 188, 31)",
    lightenBlue: "#657786",
    lightenBlack: "#f5f8fa",
    blue: "#1da1f2",
    red: "#d63031",
    border: "rgba(0,0,0,0.2)",
};

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Container />
        </ThemeProvider>
    );
}

export default App;
