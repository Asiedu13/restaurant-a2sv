;import "./globals.css";
import { Source_Sans_3 } from "next/font/google";


const sourceSansPro = Source_Sans_3({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-source-sans-pro",
});

export const metadata = {
    title: "Meal Search",
    description: "Find your meal easily",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sourceSansPro.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
