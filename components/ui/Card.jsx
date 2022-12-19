import Image from "next/image";

const Card = ({ picture, subject,subtitle, description,date,tag }) => {
  return (
    <div className="flex flex-col w-80  text-primary hover:text-skyBlue cursor-pointer gap-y-3">
      <Image src={picture} alt="image" width={300} height={400} />
      <h3 className="font-bold">{subject}</h3>
      <h3 className="font-bold text-xl">{subtitle}</h3>
      <p className="text-sm">{description}</p>
      <div className="text-sm flex justify-between">
        <span>{date}</span>
        <span>{tag}</span>
      </div>
    </div>
  );
};

export default Card;
