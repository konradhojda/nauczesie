import Image from "next/image";
import Slider from "../components/Slider";

interface Config {
  template: "LIGHT" | "DARK";
}

export default function Home({ template }: Config) {
  return (
    <div className="flex flex-col gap-6">
      <Slider />
      {/*<IconBox/>*/}
      <div className="container mx-auto">
        <div className="flex justify-center items-center">
          <div className="w-1/2">
            <Image
              src="https://placekitten.com/g/1200/800"
              alt="https://placekitten.com/g/1200/800"
            />
          </div>
          <div className="flex flex-col w-1/2 items-center justify-center gap-5">
            <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h2>
            <p className="text-justify max-w-[80%]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
              iste quibusdam unde. Aliquam blanditiis dignissimos doloribus eius
              et illo, ipsum libero mollitia numquam quibusdam quos similique
              suscipit voluptatibus. Itaque, magnam. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Delectus dignissimos dolores
              laudantium nemo similique? Dicta, dolorum ducimus harum id impedit
              nesciunt odio praesentium, qui reprehenderit repudiandae sint
              tempora vero voluptates.
            </p>
          </div>
        </div>
      </div>
      <Slider />
      <div className="container mx-auto">
        <div className="flex justify-center items-center">
          <div className="flex flex-col w-1/2 items-center justify-center gap-5">
            <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h2>
            <p className="text-justify max-w-[80%]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
              iste quibusdam unde. Aliquam blanditiis dignissimos doloribus eius
              et illo, ipsum libero mollitia numquam quibusdam quos similique
              suscipit voluptatibus. Itaque, magnam. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Delectus dignissimos dolores
              laudantium nemo similique? Dicta, dolorum ducimus harum id impedit
              nesciunt odio praesentium, qui reprehenderit repudiandae sint
              tempora vero voluptates.
            </p>
          </div>
          <div className="w-1/2">
            <Image
              src="https://placekitten.com/g/1200/800"
              alt="https://placekitten.com/g/1200/800"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(config: Config) {
  // Fetch data from external API
  // const res = await fetch(`https://.../data`);
  // const data = await myData;

  // Pass data to the page via props
  return {
    props: {
      myData,
    },
  };
}

const myData = {
  template: "LIGHT",
};
