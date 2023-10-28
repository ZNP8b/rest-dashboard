import Clock from "./Clock"

const Header = () => {

  return (
    <div className="flex flex-col py-5 text-2xl justify-center items-center
    lg:flex-row lg:justify-between xl:px-20 lg:px-10 xl:text-4xl lg:text-3xl">
      <span >Пироги номер один</span>
      <Clock />
      <span >18'321'303<span className="text-base xl:text-2xl"> / 105.05%</span></span>
    </div>
  )
}

export default Header