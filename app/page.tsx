
export default function Home() {
  return (
    <main>
      <div className="flex flex-col justify-center items-center gap-3 p-3">
        <div className="cardItem" >
          <div className="border-b-2 border-gray-400/60">
            <h1 className="text-xl bg-sky-200">Выручка</h1>
          </div>
          <div>
            <p className="text-4xl text-blue-700 pt-3">198'591<span className="text-2xl"> / 76</span></p>
            <p className="text-lg">231 400<span className="text-sm"> / 89 ↘</span></p>
          </div>
        </div>

      </div>
    </main>
  )
}
