import Card from "./Card"


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
    todayAmount: '',
    prevAmount: '',
    networkAverage: ''
  },
  {
    title: 'Средний чек',
    todayAmount: '',
    prevAmount: '',
    networkAverage: ''
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
        <h1 className="CardHeader">Неделя</h1>
      </div>

      <div className="CardItem-7">
        <h1 className="CardHeader">Предзаказы</h1>
      </div>
    </div>

  )
}

export default Cards