import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ندى جمعة ❤️
إنتي أجمل هدية من ربنا ليا
وأحسن حد دخل حياتي
إنتي كل حاجة وأغلى حاجة تنور عنيا
وإنتي دايمًا جنبي ومعايا
يا ست البنات 💖",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="apple-touch-icon" ></link>
      </head>
      <body>{children}</body>
    </html>
  );
}
