<!-- Event snippet for Achat conversion page -->
<script>
  gtag('event', 'conversion', {
      'send_to': 'AW-17516892111/9j4ACKTdgJAbEM-f2qBB',
      'transaction_id': ''
  });
</script>'use client'
import { useEffect } from 'react'

export default function SuccessPage() {
  useEffect(() => {
    window.gtag('event', 'conversion', {
      send_to: 'AW-17516892111/9j4ACKTdgJAbEM-f2qBB',
      transaction_id: ''
    })
  }, [])

  return (
    <div>
      <h1>Misaotra tamin'ny commande!</h1>
    </div>
  )
}