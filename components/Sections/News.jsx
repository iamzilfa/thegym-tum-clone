import Button from "../ui/Button";
import Card from "../ui/Card";
import contents from "../../data/content";

const News = () => {
  return (
    <div className="mx-auto container px-6 mt-10">
      <div className="flex">
        <div className="flex-1">
          <div className="flex flex-col space-y-7">
            <div>
              <h1 className="text-[2rem] font-bold font-RobotoBold tracking-[0.0125rem] leading-[2.4rem]">News from TUM</h1>
            </div>
            <div>
              {" "}
              <p className="text-xl tacking-[2.0313rem]">
                News, research results and events: everything that enthuses
                people at our university.
              </p>
            </div>
            <div>
              {" "}
              <Button style="uppercase bg-LightBlue w-[6.3325rem] h-[3.625rem] text-white">
                see all
              </Button>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-12">
          <div className="flex gap-6">
            {contents.slice(0, 2).map((content, index) => (
              <Card key={index} {...content} />
            ))}
          </div>
          <div className="flex -ml-32 gap-6">
            {contents.slice(2).map((content, index) => (
              <Card key={index} {...content} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
