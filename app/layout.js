import "./globals.css";

export const metadata = {
  title: "Logix",
  description:
    "Logix is an open-source platform that provides free tools for startup founders to build their products with ease.",
  icons: {
    icon: "/logo/logo.png",
  },
  keywords: "Logix, open source, startup tools, product building, free tools",
  openGraph: {
    title: "Logix",
    description:
      "Logix offers open-source tools to help startup founders build and launch their products effortlessly.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">
        {children}
      </body>
    </html>
  );
}
