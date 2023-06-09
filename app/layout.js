import "./styles/globals.scss";

export const metadata = {
  title: "Janis Ozolins | UX Developer",
  description: "Frontend Developer with Passion for UX Design",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
