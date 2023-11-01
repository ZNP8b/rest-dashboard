const data = ['1', '2', '3', '4']

const Preorders = () => {

  return (
    <div className="flex flex-col-reverse">
      {
        data.map((item, index) => (
          <div key={index} className={`even:bg-gray-100 odd:bg-white p-2 text-center`}>
            {item}
          </div>
        ))
      }
    </div>
  )
}

export default Preorders