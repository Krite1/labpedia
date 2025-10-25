import { useEffect } from 'react'
export default function AdSense({ slotId, style }) {
  useEffect(() => {
    try { (window.adsbygoogle = window.adsbygoogle || []).push({}) } catch (e) {}
  }, [])
  return (
    <ins
      className="adsbygoogle"
      style={style || { display: 'block', textAlign: 'center', margin: '16px auto' }}
      data-ad-client={process.env.NEXT_PUBLIC_ADSENSE_ID}
      data-ad-slot={slotId}
      data-ad-format="auto"
      data-full-width-responsive="true"
    ></ins>
  )
}
