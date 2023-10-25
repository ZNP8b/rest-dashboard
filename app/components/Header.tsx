import Clock from "./Clock"

const Header = () => {

  return (
    <div className="flex flex-col text-2xl justify-center items-center">
      <span >Пироги номер один</span>
      <Clock />
      <span >18'321'303<span className="text-base"> / 105.05%</span></span>
    </div>
  )
}

export default Header