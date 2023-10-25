import Clock from "./Clock"

const Header = () => {

  return (
    <div className="flex flex-col text-2xl justify-center items-center bg-gray-300">
      <span>Название ресторана</span>
      <Clock />
      <span>Выручка за месяц</span>
    </div>
  )
}

export default Header