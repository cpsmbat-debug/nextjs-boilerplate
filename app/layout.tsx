
export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=AW-17516892111"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'AW-17516892111');
</script> <!-- Event snippet for Achat conversion page -->
<script>
  gtag('event', 'conversion', {
      'send_to': 'AW-17516892111/9j4ACKTdgJAbEM-f2qBB',
      'transaction_id': ''
  });
</script> <head>
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-17516892111"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17516892111');
          `
        }} />
      <!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=AW-17516892111"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'AW-17516892111');
</script><<!-- Event snippet for Achat conversion page -->
<script>
  gtag('event', 'conversion', {
      'send_to': 'AW-17516892111/9j4ACKTdgJAbEM-f2qBB',
      'transaction_id': ''
  });
</script>head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}<!-- Event snippet for Achat conversion page -->
<script>
  gtag('event', 'conversion', {
      'send_to': 'AW-17516892111/9j4ACKTdgJAbEM-f2qBB',
      'transaction_id': ''
  });
</script>
