
const Header = () => {
  return (
    <div className="flex flex-col justify-center items-center text-2xl py-5
    lg:flex-row lg:justify-between lg:px-10 lg:text-3xl
    xl:px-20 xl:text-4xl">
      <span>Пироги номер один</span>
      <span>Компонент часов</span>
      <span>18'321'303
        <span className="text-base xl:text-2xl">
          {' '}/ 105.05%
        </span>
      </span>
    </div>
  )
}

export default Header