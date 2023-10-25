import Clock from "./Clock"

const Header = () => {

  return (
    <div className="flex justify-around">
      <span>Название ресторана</span>
      <Clock />
      <span>Выручка за месяц</span>
    </div>
  )
}

export default Header