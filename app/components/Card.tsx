
const Card = ({ index, title, todayAmount, prevAmount, networkAverage }: { index: number, title: string, todayAmount?: string, prevAmount?: string, networkAverage?: string }) => {
  return (
    <div className={`CardItem-${index + 1}`}>

      {/* Заголовок карточки */}
      <h1 className="CardHeader">{title}</h1>

      {/* Контент карточки */}
      <div className="CardContent">

        <div className="flex flex-col text-center">
          <span className="text-sm text-blue-700">Сегодня</span>
          <span className="text-4xl text-blue-700">{todayAmount}</span>
        </div>

        <div className="flex text-center justify-center items-center gap-6">

          <div className="flex flex-col">
            <span className="text-sm">Предыдущий период</span>
            <span className="text-4xl">{prevAmount}</span>
          </div>

          <div className="flex flex-col">
            <span className="text-sm">Среднее по сети</span>
            <span className="text-4xl">{networkAverage}</span>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Card