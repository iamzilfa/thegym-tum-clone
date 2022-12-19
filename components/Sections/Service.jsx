import Image from "next/image";
import Button from "../ui/Button";
import twomen from "../../public/assets/images/twomen.webp";
import yellow from "../../public/assets/images/yellow.webp";
import lady from "../../public/assets/images/lady.webp";

const Service = () => {
  return (
    <div className="mt-12 w-full">
      <div className="max-auto container px-6">
        <div className="grid md:grid-cols-3">
          <div className="flex flex-col gap-y-6 w-[16.7775rem]">
            <Image src={twomen} alt="twomen" className="h-[16rem] object-cover" />
            <div className="flex flex-col gap-y-4">
              <h1 className="text-2xl font-bold tracking-[0.0125rem] leading-[1.875rem] font-RobotoBold">Stay connected</h1>
              <p>
                Benefit from our worldwide network, make contacts and stay
                connected with your Alma Mater!
              </p>
            </div>
            <Button style="border w-[14.25rem] h-[3.75rem]">
              Join the TMU Community
            </Button>
          </div>
          <div className="flex flex-col gap-y-6 w-[16.7775rem]">
            <Image src={yellow} alt="twomen" className="h-[16rem] object-cover" />
            <div className="flex flex-col gap-y-4">
              <h1 className="text-2xl font-bold tracking-[0.0125rem] leading-[1.875rem] font-RobotoBold">TUMint Relocation Service</h1>
              <p>
                Benefit from our worldwide network, make contacts and stay
                connected with your Alma Mater!
              </p>
            </div>
            <Button style="border w-[14.25rem] h-[3.75rem]">
              See our services
            </Button>
          </div>
          <div className="flex flex-col gap-y-6 w-[16.7775rem]">
            <Image src={lady} alt="twomen" className="h-[16rem] object-cover" />
            <div className="flex flex-col gap-y-4">
              <h1 className="text-2xl font-bold tracking-[0.0125rem] leading-[1.875rem] font-RobotoBold">Stay connected</h1>
              <p>
                Benefit from our worldwide network, make contacts and stay
                connected with your Alma Mater!
              </p>
            </div>
            <Button style="border w-[14.25rem] h-[3.75rem]">
              Shop online
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
