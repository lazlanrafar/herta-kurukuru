import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Herta KuruKuru~</title>
        <link rel="shortcut icon" type="image/png" href="/logo.png" />
      </head>
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
