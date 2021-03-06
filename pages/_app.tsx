import { ThemeProvider } from "next-themes";

import "../assets/main.css";

import "typeface-open-sans";
import "typeface-merriweather";
import "@fontsource/fira-code";

const MyApp: React.FC<any> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider defaultTheme="system" enableSystem={true} attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;