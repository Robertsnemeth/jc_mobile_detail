
const button = ({children}) => {
  return (
    <button className='border border-blue-400 bg-white p-2 text-blue-400 hover:bg-blue-400 hover:text-white transition-all w-[100px] ease-in-out delay-100 duration-500 hover:w-[120px]'>{children}</button>
  )
}

export default button