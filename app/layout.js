import "./styles/globals.scss";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Janis Ozolins | UX Developer",
  description: "Frontend Developer with Passion for UX Design",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta name="theme-color" content="#212121" />
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
