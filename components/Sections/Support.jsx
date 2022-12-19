import Button from "../ui/Button";

const Support = () => {
  return (
    <div className="mt-12">
      <div className="w-full max-w-[90.5rem]">
        <div className="container max-auto px-6 ">
          <div className="p-[2.5rem] bg-Dusk text-center flex flex-col items-center">
            <h1 className="text-[1.75rem] font-bold tracking-[0.0125rem] leading-[2.1rem] font-RobotoBold">Giving</h1>
            <p className="mt-5 mb-6 text-base">
              Support research, innovation and teaching at one of the best
              technical universities in Europe. Show social responsibility and
              help nurture talent.
            </p>
            <Button style="uppercase w-[138px] font-base h-[3.625rem] bg-LightBlue text-white text-center">support us</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
