import Card from "./Card"
import Preorders from "./Preorders"
import WeekTable from "./WeekTable"


const data = [
  {
    title: 'Среднее время приготовления',
    todayAmount: '10000',
    prevAmount: '10000',
    networkAverage: '10000'
  },
  {
    title: 'Среднее время на полке',
    todayAmount: '20000',
    prevAmount: '20000',
    networkAverage: '20000'
  },
  {
    title: 'Среднее время доставки',
    todayAmount: '30000',
    prevAmount: '30000',
    networkAverage: '30000'
  },
  {
    title: 'Выручка',
    todayAmount: '40000',
    prevAmount: '40000',
    networkAverage: '40000'
  },
  {
    title: 'Средний чек',
    todayAmount: '500000',
    prevAmount: '500000',
    networkAverage: '500000'
  },
]


const Cards = () => {
  return (

    <div className="CardWrapper">

      {/* Карточка */}

      {
        data.map((item, index) => (
          <Card
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