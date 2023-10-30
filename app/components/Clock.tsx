'use client'

import { useEffect, useState } from "react"

const Clock = () => {
  const [time, setTime] = useState(new Date())
  const daysOfTheWeek = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ']

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <span suppressHydrationWarning >
      {
        daysOfTheWeek[time.getDay()]
        + ' - ' +
        time.toLocaleDateString() +
        ' - ' +
        time.toLocaleTimeString('ru-RU', { hour: "2-digit", minute: "2-digit" })
      }
    </span>
  )
}

export default Clock