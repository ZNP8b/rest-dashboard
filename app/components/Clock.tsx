'use client'

import { useEffect, useState } from "react"

const Clock = () => {
  const [time, setTime] = useState(new Date())

  return (
    <div>Компонент часов</div>
  )
}

export default Clock