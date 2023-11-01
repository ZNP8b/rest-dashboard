'use client'

import moment from "moment"
import 'moment/locale/ru'
moment.locale('ru')

const getWeekFromToday = () => {
  let dateArray = []
  for (let index = 0; index < 7; index++) {
    dateArray.push(moment().add(index, 'days').format('L'))
  }
  return dateArray
}

const todayWeek = getWeekFromToday()

const data = [
  {
    date: todayWeek[0],
    orders: '100',
    revenue: '242 322'
  },
  {
    date: todayWeek[1],
    orders: '100',
    revenue: '242 322'
  },
  {
    date: todayWeek[2],
    orders: '100',
    revenue: '242 322'
  },
  {
    date: todayWeek[3],
    orders: '100',
    revenue: '242 322'
  },
  {
    date: todayWeek[4],
    orders: '100',
    revenue: '242 322'
  },
  {
    date: todayWeek[5],
    orders: '100',
    revenue: '242 322'
  },
  {
    date: todayWeek[6],
    orders: '100',
    revenue: '242 322'
  },
]

const WeekTable = () => {
  return (
    <div className="relative overflow-x-auto shadow-sm h-[calc(100%-45px)] sm:rounded-lg">
      <table className="w-full h-full text-center text-sm text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr >
            <th scope="col" className="px-5 py-2">
              Дата
            </th>
            <th scope="col" className="px-5 py-2">
              Заказы
            </th>
            <th scope="col" className="px-5 py-2">
              Выручка
            </th>
          </tr>
        </thead>

        <tbody>
          {
            data.map((item, index) => (
              <tr key={index} className="even:bg-gray-50 odd:bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th scope="row" className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {item.date}
                </th>
                <td className="px-4 py-3">
                  {item.orders}
                </td>
                <td className="px-4 py-3">
                  {item.revenue}
                </td>
              </tr>
            ))
          }

          <tr className="even:bg-gray-50 odd:bg-white border-b dark:bg-gray-900 dark:border-gray-700">
            <th scope="row" className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              СР.НЕДЕЛЯ
            </th>
            <td className="px-4 py-3">
              181
            </td>
            <td className="px-4 py-3">
              235 356
            </td>
          </tr>

          <tr className="even:bg-gray-50 odd:bg-white border-b dark:bg-gray-900 dark:border-gray-700">
            <th scope="row" className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              ПРЕД.НЕДЕЛЯ
            </th>
            <td className="px-4 py-3">
              181
            </td>
            <td className="px-4 py-3">
              235 356
            </td>
          </tr>

          <tr className="even:bg-gray-50 odd:bg-white dark:bg-gray-900 dark:border-gray-700">
            <th scope="row" className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              СР.МЕСЯЦ
            </th>
            <td className="px-4 py-3">
              181
            </td>
            <td className="px-4 py-3">
              235 356
            </td>
          </tr>

        </tbody>
      </table>
    </div>
  )
}

export default WeekTable