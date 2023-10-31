
const WeekTable = () => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-center text-sm text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr >
            <th scope="col" className="px-6 py-3">
              Дата
            </th>
            <th scope="col" className="px-6 py-3">
              Заказы
            </th>
            <th scope="col" className="px-6 py-3">
              Выручка
            </th>
          </tr>
        </thead>

        <tbody>

          <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              17-09-2023
            </th>
            <td className="px-6 py-4">
              100
            </td>
            <td className="px-6 py-4">
              242 322
            </td>
          </tr>

          <tr className="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              18-09-2023
            </th>
            <td className="px-6 py-4">
              232
            </td>
            <td className="px-6 py-4">
              366 687
            </td>
          </tr>

        </tbody>
      </table>
    </div>
  )
}

export default WeekTable