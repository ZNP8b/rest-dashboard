'use client'

import { useEffect, useState } from "react"

const Clock = () => {
  const [time, setTime] = useState(new Date())
  const daysOfTheWeek = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ']

  return (
    <div>Clock</div>
  )
}

export default Clock