import "./globals.css";
import { Providers } from "../lib/providers";
import { LangProvider } from "../lib/langContext";
import { ThemeProvider } from "next-themes";

export const metadata = {
  title: "FurniShop - Modern Furniture Store",
  description:
    "Discover modern, sustainable, and stylish furniture for your home.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={true}
        >
          <LangProvider>
            <Providers>{children}</Providers>
          </LangProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
