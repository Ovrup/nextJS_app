import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./main.scss";
// The following import prevents a Font Awesome icon server-side rendering bug,
// where the icons flash from a very large icon down to a properly sized one:
import '@fortawesome/fontawesome-svg-core/styles.css';
// Prevent fontawesome from adding its CSS since we did it manually above:
import { config } from '@fortawesome/fontawesome-svg-core';
import ThemeProvider, { useTheme } from "./../context/theme-context";
import LoggerProvider from "src/context/logger-context";
import ConsoleLogger from "src/utils/logging/consoleLogger";
import { setLogger } from "src/utils/logging/logger";
config.autoAddCss = false; /* eslint-disable import/first */

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Poppulo",
  description: "Built using Next.JS",
};

export default function RootLayout({
  children,
  header,
  footer
}: Readonly<{
  children: React.ReactNode;
  header: React.ReactNode;
  footer: React.ReactNode
}>) {

  const logger = new ConsoleLogger();
  setLogger(logger)

  return (

    <html lang="en">
      <ThemeProvider>
        <LoggerProvider>
          <body className={inter.className}>
            {header}
            {children}
            {footer}
          </body>
        </LoggerProvider>
      </ThemeProvider>
    </html>
  );
}
