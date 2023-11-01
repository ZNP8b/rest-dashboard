'use client'

import { useEffect, useState } from "react";
import Card from "./Card"
import Preorders from "./Preorders"
import WeekTable from "./WeekTable"
import axios from 'axios';


const Cards = () => {

  const [data, setData] = useState([
    {
      title: 'Загрузка',
      todayAmount: 'Загрузка',
      prevAmount: 'Загрузка',
      networkAverage: 'Загрузка'
    },
    {
      title: 'Загрузка',
      todayAmount: 'Загрузка',
      prevAmount: 'Загрузка',
      networkAverage: 'Загрузка'
    },
    {
      title: 'Загрузка',
      todayAmount: 'Загрузка',
      prevAmount: 'Загрузка',
      networkAverage: 'Загрузка'
    },
    {
      title: 'Загрузка',
      todayAmount: 'Загрузка',
      prevAmount: 'Загрузка',
      networkAverage: 'Загрузка'
    },
    {
      title: 'Загрузка',
      todayAmount: 'Загрузка',
      prevAmount: 'Загрузка',
      networkAverage: 'Загрузка'
    },
  ])




  useEffect(() => {
    axios.post(`${process.env.NEXT_PUBLIC_API_URL}/v1/dashboard`, {
      build_summary: false,
      date_range: "2023-11-01",
      report_type: "SALES"
    })
      .then(function (response) {
        setData([
          {
            title: 'Среднее время приготовления',
            todayAmount: response.data.data.average_cooking_time.today,
            prevAmount: response.data.data.average_cooking_time.prev_amount,
            networkAverage: response.data.data.average_cooking_time.network_average
          },
          {
            title: 'Среднее время на полке',
            todayAmount: response.data.data.average_guest_wait_time
              .today,
            prevAmount: response.data.data.average_guest_wait_time
              .prev_amount,
            networkAverage: response.data.data.average_guest_wait_time
              .network_average
          },
          {
            title: 'Среднее время доставки',
            todayAmount: response.data.data.average_delivery_time.today,
            prevAmount: response.data.data.average_delivery_time.prev_amount,
            networkAverage: response.data.data.average_delivery_time.network_average
          },
          {
            title: 'Выручка',
            todayAmount: response.data.data.sum.today,
            prevAmount: response.data.data.sum.prev_amount,
            networkAverage: response.data.data.sum.network_average
          },
          {
            title: 'Средний чек',
            todayAmount: response.data.data.average_sum.today,
            prevAmount: response.data.data.average_sum.prev_amount,
            networkAverage: response.data.data.average_sum.network_average
          },
        ])
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
          setData([
            {
              title: 'Среднее время приготовления',
              todayAmount: response.data.data.average_cooking_time.today,
              prevAmount: response.data.data.average_cooking_time.prev_amount,
              networkAverage: response.data.data.average_cooking_time.network_average
            },
            {
              title: 'Среднее время на полке',
              todayAmount: response.data.data.average_guest_wait_time
                .today,
              prevAmount: response.data.data.average_guest_wait_time
                .prev_amount,
              networkAverage: response.data.data.average_guest_wait_time
                .network_average
            },
            {
              title: 'Среднее время доставки',
              todayAmount: response.data.data.average_delivery_time.today,
              prevAmount: response.data.data.average_delivery_time.prev_amount,
              networkAverage: response.data.data.average_delivery_time.network_average
            },
            {
              title: 'Выручка',
              todayAmount: response.data.data.sum.today,
              prevAmount: response.data.data.sum.prev_amount,
              networkAverage: response.data.data.sum.network_average
            },
            {
              title: 'Средний чек',
              todayAmount: response.data.data.average_sum.today,
              prevAmount: response.data.data.average_sum.prev_amount,
              networkAverage: response.data.data.average_sum.network_average
            },
          ])
        })
        .catch(function (error) {
          console.log(error)
        });
    }, 3600000)
    return () => clearInterval(timer)
  }, [])

  // useEffect(() => {
  //   axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/dashboard`).then(response => {
  //     setData(response.data)
  //   });
  //   const timer = setInterval(() => {
  //     axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/dashboard`).then(response => {
  //       setData(response.data)
  //     });
  //   }, 60000)
  //   return () => clearInterval(timer)
  // }, [])

  return (

    <div className="CardWrapper">

      {/* Карточка */}

      {
        data.map((item, index) => (
          <Card
            key={index}
            index={index}
            title={item.title}
            todayAmount={item.todayAmount}
            prevAmount={item.prevAmount}
            networkAverage={item.networkAverage} />
        ))
      }

      <div className="CardItem-6">
        <h1 className="CardHeader bg-blue-200">Неделя</h1>
        <WeekTable />
      </div>

      <div className="CardItem-7">
        <h1 className="CardHeader bg-green-200">Предзаказы</h1>
        <Preorders />
      </div>
    </div>

  )
}

export default Cards