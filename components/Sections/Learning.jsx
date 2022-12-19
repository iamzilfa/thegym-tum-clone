import Image from "next/image";
import Button from "../ui/Button";
import mensmile from "../../public/assets/images/mensmile.webp";
import bartez from "../../public/assets/images/bartez.webp";

const Learning = () => {
  return (
    <div className="mx-auto container px-6 mt-12">
      <div className="flex gap-x-20">
        <div className="flex-1">
          <div className="flex flex-col gap-y-6">
            <Image
              src={mensmile}
              alt="twomen"
              className="h-[16rem] object-cover"
            />
            <div className="flex flex-col gap-y-4">
              <h1 className="text-2xl font-bold tracking-[0.0125rem] leading-[1.875rem] font-RobotoBold">
              We are TUM – the podcast of our university
              </h1>
              <p>
                Benefit from our worldwide network, make contacts and stay
                connected with your Alma Mater!
              </p>
            </div>
            <Button style="border w-[14.25rem] h-[3.75rem]">
              Join the TMU Community
            </Button>
          </div>
        </div>
        <div className="flex flex-col gap-y-6 w-[16.7775rem]">
          <Image
            src={bartez}
            alt="twomen"
            className="h-[16rem] object-cover"
          />
          <div className="flex flex-col gap-y-4">
            <h1 className="text-2xl font-bold tracking-[0.0125rem] leading-[1.875rem] font-RobotoBold">
            Lifelong learning
            </h1>
            <p>
            We offer continuing education opportunities accompanying you over your whole career.
            </p>
          </div>
          <Button style="border w-[19rem] h-[3.75rem]">
            TMU Institute for LifeLong Learning
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Learning;
