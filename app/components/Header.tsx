'use client'

import { useEffect, useState } from "react";
import Clock from "./Clock"
import axios from "axios";

const Header = () => {

  const [data, setData] = useState({
    department: 'Загрузка',
    sumToday: 'Загрузка',
    sumPrev: 'Загрузка'
  })


  useEffect(() => {
    axios.post(`${process.env.NEXT_PUBLIC_API_URL}/v1/dashboard`, {
      build_summary: false,
      date_range: "2023-11-01",
      report_type: "SALES"
    })
      .then(function (response) {
        setData({
          department: response.data.department,
          sumToday: response.data.data.sum.today,
          sumPrev: 'Загрузка'
        })
      })
      .catch(function (error) {
        console.log(error)
      });

    const timer = setInterval(() => {
      axios.post(`${process.env.NEXT_PUBLIC_API_URL}/v1/dashboard`, {
        build_summary: false,
        date_range: "2023-11-01",
        report_type: "SALES"
      })
        .then(function (response) {
          setData({
            department: response.data.department,
            sumToday: response.data.data.sum.today,
            sumPrev: 'Загрузка'
          })
        })
        .catch(function (error) {
          console.log(error)
        });
    }, 3600000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="flex flex-col justify-center items-center text-2xl py-5
    lg:flex-row lg:justify-between lg:px-10 lg:text-3xl
    xl:px-20 xl:text-4xl">
      <span>{data.department}</span>
      <Clock />
      <span>{data.sumToday.toLocaleString()}
        <span className="text-base xl:text-2xl">
          {' '}/ 105.05%
        </span>
      </span>
    </div>
  )
}

export default Header