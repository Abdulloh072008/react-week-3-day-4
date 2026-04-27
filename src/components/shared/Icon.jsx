import icon from "../../assets/images/Icon Container4.png"

const Icon = ({text}) => {
  return (
    <>
      <div className='flex items-center gap-3 text-[#B3B3B2]'>
        <img src={icon} alt="" />
        <p>{text}</p>
      </div>
    </>
  )
}

export default Icon
