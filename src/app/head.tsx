export default function Head() {
  return (
    <>
      {/* PWA primary */}
      <link rel="manifest" href="./manifest.json" />
      <meta name="theme-color" content="#002105" />

      {/* Android → standalone */}
      <meta name="mobile-web-app-capable" content="yes" />

      {/* iOS → standalone */}
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="GRDS" />
      <link rel="apple-touch-icon" sizes="192x192" href="/apple-icon.png" />
    </>
  );
}
