
const Cards = () => {
  return (
    <div className="grid grid-cols-3 grid-rows-3 gap-2 p-5 h-[calc(100vh-90px)]">

      <div className="cardItem" >1</div>

      <div className="cardItem cardItem-2">2</div>

      <div className="cardItem cardItem-3">3</div>

      <div className="cardItem-4">
        <div className="cardItem flex-1">4</div>
        <div className="cardItem flex-1">5</div>
      </div>

      <div className="cardItem cardItem-5">6</div>

      <div className="cardItem cardItem-6">7</div>

    </div>
  )
}

export default Cards