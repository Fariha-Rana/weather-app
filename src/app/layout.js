import { Inter } from "next/font/google";
import "./globals.css";

// export const dynamic = 'force-dynamic'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "WeatherState - Your Ultimate Weather Companion",
  description: "Explore real-time weather updates, forecasts, and alerts with WeatherWise.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
          {children}
      </body>
    </html>
  );
}
