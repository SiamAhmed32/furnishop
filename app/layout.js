import "./globals.css";
import { ThemeProvider } from "next-themes";

/* Keep your providers exactly as your app expects them.
   If you are using Redux for cart and LangProvider for i18n, import them. */
import { Providers } from "../lib/providers";
import { LangProvider } from "../lib/langContext";

export const metadata = {
  title: "FurniShop - Modern Furniture Store",
  description:
    "Discover modern, sustainable, and stylish furniture for your home.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <LangProvider>
            <Providers>{children}</Providers>
          </LangProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
