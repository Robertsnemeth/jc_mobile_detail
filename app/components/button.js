
const button = ({children}) => {
  return (
    <button className='bg-blue-400 p-2 text-white border border-blue-400 hover:bg-white hover:text-blue-400 hover:border hover:border-blue-400 transition-all w-[100px] ease-in-out delay-100 duration-500 hover:w-[120px]'>{children}</button>
  )
}

export default button