import "./globals.css";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo/logo.png" type="image/x-icon" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="keywords" content="Logix, logo design, online platform" />
        <meta name="author" content="Farirai Masocha" />
        <meta property="og:title" content="Logix" />
        <meta property="og:description" content="Logix is an innovative online platform that allows users to create stunning logos effortlessly." />
      </head>
      <body
        className=""
      >
        {children}
      </body>
    </html >
  );
}
