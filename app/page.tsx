
export default function Home() {
  return (
    <main>

      <div className="flex flex-col justify-center items-center gap-3 p-3
      lg:grid xl:grid-cols-4 xl:grid-rows-3 h-[calc(100vh-80px)]
      lg:grid-cols-3 lg:grid-rows-3">
        <div className="cardItem" >
          <h1>Среднее время приготовления</h1>
        </div>
        <div className="cardItem col-start-1 row-start-2">
          <h1>Среднее время на полке</h1>
        </div>
        <div className="cardItem col-start-1 row-start-3">
          <h1>Среднее время доставки</h1>
        </div>
        <div className="cardItem col-start-2 row-start-1">
          <h1>Выручка</h1>
        </div>
        <div className="cardItem xl:col-start-3 xl:row-start-1
        lg:col-start-2 lg:row-start-2">
          <h1>Средний чек</h1>
        </div>
        <div className="cardItem xl:col-span-2 xl:row-span-2 col-start-2 xl:row-start-2
        lg:row-start-3">
          <h1>Неделя</h1>
        </div>
        <div className="cardItem row-span-3 xl:col-start-4 row-start-1
        lg:col-start-3">
          <h1>Заказы</h1>
        </div>
      </div>




      {/* <div className="flex flex-col justify-center items-center gap-3 p-3
      xl:grid grid-cols-7 grid-rows-4">

        <div className="cardItem row-span-4" >
          <div className="border-b-2 border-gray-400/60">
            <h1 className="text-xl bg-sky-200">Выручка</h1>
          </div>
          <div>
            <p className="text-4xl text-blue-700 pt-3">198'591<span className="text-2xl"> / 76</span></p>
            <p className="text-lg">231 400<span className="text-sm"> / 89 ↘</span></p>
          </div>
        </div>

        <div className="cardItem col-start-2 row-start-2" >
          <div className="border-b-2 border-gray-400/60">
            <h1 className="text-xl bg-sky-200">Выручка</h1>
          </div>
          <div>
            <p className="text-4xl text-blue-700 pt-3">198'591<span className="text-2xl"> / 76</span></p>
            <p className="text-lg">231 400<span className="text-sm"> / 89 ↘</span></p>
          </div>
        </div>

        <div className="cardItem col-start-2 row-start-3" >
          <div className="border-b-2 border-gray-400/60">
            <h1 className="text-xl bg-sky-200">Выручка</h1>
          </div>
          <div>
            <p className="text-4xl text-blue-700 pt-3">198'591<span className="text-2xl"> / 76</span></p>
            <p className="text-lg">231 400<span className="text-sm"> / 89 ↘</span></p>
          </div>
        </div>

        <div className="cardItem col-start-2 row-start-4" >
          <div className="border-b-2 border-gray-400/60">
            <h1 className="text-xl bg-sky-200">Выручка</h1>
          </div>
          <div>
            <p className="text-4xl text-blue-700 pt-3">198'591<span className="text-2xl"> / 76</span></p>
            <p className="text-lg">231 400<span className="text-sm"> / 89 ↘</span></p>
          </div>
        </div>

        <div className="cardItem col-span-2 col-start-3 row-start-1" >
          <div className="border-b-2 border-gray-400/60">
            <h1 className="text-xl bg-sky-200">Выручка</h1>
          </div>
          <div>
            <p className="text-4xl text-blue-700 pt-3">198'591<span className="text-2xl"> / 76</span></p>
            <p className="text-lg">231 400<span className="text-sm"> / 89 ↘</span></p>
          </div>
        </div>

        <div className="cardItem col-span-2 row-span-3 col-start-3 row-start-2" >
          <div className="border-b-2 border-gray-400/60">
            <h1 className="text-xl bg-sky-200">Выручка</h1>
          </div>
          <div>
            <p className="text-4xl text-blue-700 pt-3">198'591<span className="text-2xl"> / 76</span></p>
            <p className="text-lg">231 400<span className="text-sm"> / 89 ↘</span></p>
          </div>
        </div>

        <div className="cardItem col-span-3 col-start-5 row-start-1" >
          <div className="border-b-2 border-gray-400/60">
            <h1 className="text-xl bg-sky-200">Выручка</h1>
          </div>
          <div>
            <p className="text-4xl text-blue-700 pt-3">198'591<span className="text-2xl"> / 76</span></p>
            <p className="text-lg">231 400<span className="text-sm"> / 89 ↘</span></p>
          </div>
        </div>

        <div className="cardItem col-span-3 col-start-5 row-start-2" >
          <div className="border-b-2 border-gray-400/60">
            <h1 className="text-xl bg-sky-200">Выручка</h1>
          </div>
          <div>
            <p className="text-4xl text-blue-700 pt-3">198'591<span className="text-2xl"> / 76</span></p>
            <p className="text-lg">231 400<span className="text-sm"> / 89 ↘</span></p>
          </div>
        </div>

        <div className="cardItem col-span-3 col-start-5 row-start-3" >
          <div className="border-b-2 border-gray-400/60">
            <h1 className="text-xl bg-sky-200">Выручка</h1>
          </div>
          <div>
            <p className="text-4xl text-blue-700 pt-3">198'591<span className="text-2xl"> / 76</span></p>
            <p className="text-lg">231 400<span className="text-sm"> / 89 ↘</span></p>
          </div>
        </div>

        <div className="cardItem col-span-3 col-start-5 row-start-4" >
          <div className="border-b-2 border-gray-400/60">
            <h1 className="text-xl bg-sky-200">Выручка</h1>
          </div>
          <div>
            <p className="text-4xl text-blue-700 pt-3">198'591<span className="text-2xl"> / 76</span></p>
            <p className="text-lg">231 400<span className="text-sm"> / 89 ↘</span></p>
          </div>
        </div>

        <div className="cardItem" >
          <div className="border-b-2 border-gray-400/60">
            <h1 className="text-xl bg-sky-200">Выручка</h1>
          </div>
          <div>
            <p className="text-4xl text-blue-700 pt-3">198'591<span className="text-2xl"> / 76</span></p>
            <p className="text-lg">231 400<span className="text-sm"> / 89 ↘</span></p>
          </div>
        </div>

      </div> */}
    </main>
  )
}
