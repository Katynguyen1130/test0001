import "./src/styles/global.css";
import { ThemeProvider } from "./src/components/context/themeContext";
import React from "react";
export const wrapRootElement = ({ element }) => <ThemeProvider>{element}</ThemeProvider>;
