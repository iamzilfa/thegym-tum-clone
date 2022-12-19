import Image from "next/image"
import Button from "./Button"

const CardSercive = ({ image, title, description }) => {
  return (
    <div className="flex flex-col w-80  text-primary hover:text-skyBlue cursor-pointer">
    <Image src={image} alt="image" width={300} height={400} />
    <h3 className="font-bold">{title}</h3>
    <p className="text-sm">{description}</p>
    <div className="">
      <Button />
    </div>
  </div>
  )
}

export default CardSercive