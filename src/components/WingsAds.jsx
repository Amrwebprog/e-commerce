import { useEffect, useState } from 'react'

export default function WingsAds() {
  const [countdown, setCountdown] = useState(5) // بدء العد من 5
  const [isVisible, setIsVisible] = useState(true) // التحكم في ظهور الإعلان

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1)
      }, 1000)
      return () => clearTimeout(timer) // تنظيف التايمر بعد انتهاءه
    } else {
      setIsVisible(false) // إخفاء الإعلان بعد انتهاء العد التنازلي
    }
  }, [countdown])

  // إخفاء الإعلان عند انتهاء العد التنازلي
  if (!isVisible) {
    return null
  }

  return (
    <div className="d-flex position-fixed bg-secondary justify-content-center text-center align-items-center wings-ads">
      <div className="position-absolute top-0 start-0 p-1 bg-danger">
        {countdown}
      </div>
      <h1>Your Ads here</h1>
    </div>
  )
}
