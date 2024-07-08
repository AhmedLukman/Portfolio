import { World } from "@/components/ui/Globe";
import PageHeader from "@/components/ui/PageHeader";
import PageWrapper from "@/components/ui/PageWrapper";
import SectionHeader from "@/components/ui/SectionHeader";
import { WobbleCard } from "@/components/ui/WobbleCard";
import {
  Card,
  CardHeader,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@nextui-org/react";
import Image from "next/image";
import React from "react";

const globeConfig = {
  pointSize: 4,
  globeColor: "#062056",
  showAtmosphere: true,
  atmosphereColor: "#FFFFFF",
  atmosphereAltitude: 0.1,
  emissive: "#062056",
  emissiveIntensity: 0.1,
  shininess: 0.9,
  polygonColor: "rgba(255,255,255,0.7)",
  ambientLight: "#38bdf8",
  directionalLeftLight: "#ffffff",
  directionalTopLight: "#ffffff",
  pointLight: "#ffffff",
  arcTime: 1000,
  arcLength: 0.9,
  rings: 1,
  maxRings: 3,
  initialPosition: { lat: 22.3193, lng: 114.1694 },
  autoRotate: true,
  autoRotateSpeed: 0.5,
};
const colors = ["#06b6d4", "#3b82f6", "#6366f1"];
const sampleArcs = [
  {
    order: 1,
    startLat: -19.885592,
    startLng: -43.951191,
    endLat: -22.9068,
    endLng: -43.1729,
    arcAlt: 0.1,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 1,
    startLat: 28.6139,
    startLng: 77.209,
    endLat: 3.139,
    endLng: 101.6869,
    arcAlt: 0.2,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 1,
    startLat: -19.885592,
    startLng: -43.951191,
    endLat: -1.303396,
    endLng: 36.852443,
    arcAlt: 0.5,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 2,
    startLat: 1.3521,
    startLng: 103.8198,
    endLat: 35.6762,
    endLng: 139.6503,
    arcAlt: 0.2,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 2,
    startLat: 51.5072,
    startLng: -0.1276,
    endLat: 3.139,
    endLng: 101.6869,
    arcAlt: 0.3,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 2,
    startLat: -15.785493,
    startLng: -47.909029,
    endLat: 36.162809,
    endLng: -115.119411,
    arcAlt: 0.3,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 3,
    startLat: -33.8688,
    startLng: 151.2093,
    endLat: 22.3193,
    endLng: 114.1694,
    arcAlt: 0.3,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 3,
    startLat: 21.3099,
    startLng: -157.8581,
    endLat: 40.7128,
    endLng: -74.006,
    arcAlt: 0.3,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 3,
    startLat: -6.2088,
    startLng: 106.8456,
    endLat: 51.5072,
    endLng: -0.1276,
    arcAlt: 0.3,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 4,
    startLat: 11.986597,
    startLng: 8.571831,
    endLat: -15.595412,
    endLng: -56.05918,
    arcAlt: 0.5,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 4,
    startLat: -34.6037,
    startLng: -58.3816,
    endLat: 22.3193,
    endLng: 114.1694,
    arcAlt: 0.7,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 4,
    startLat: 51.5072,
    startLng: -0.1276,
    endLat: 48.8566,
    endLng: -2.3522,
    arcAlt: 0.1,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 5,
    startLat: 14.5995,
    startLng: 120.9842,
    endLat: 51.5072,
    endLng: -0.1276,
    arcAlt: 0.3,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 5,
    startLat: 1.3521,
    startLng: 103.8198,
    endLat: -33.8688,
    endLng: 151.2093,
    arcAlt: 0.2,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 5,
    startLat: 34.0522,
    startLng: -118.2437,
    endLat: 48.8566,
    endLng: -2.3522,
    arcAlt: 0.2,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 6,
    startLat: -15.432563,
    startLng: 28.315853,
    endLat: 1.094136,
    endLng: -63.34546,
    arcAlt: 0.7,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 6,
    startLat: 37.5665,
    startLng: 126.978,
    endLat: 35.6762,
    endLng: 139.6503,
    arcAlt: 0.1,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 6,
    startLat: 22.3193,
    startLng: 114.1694,
    endLat: 51.5072,
    endLng: -0.1276,
    arcAlt: 0.3,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 7,
    startLat: -19.885592,
    startLng: -43.951191,
    endLat: -15.595412,
    endLng: -56.05918,
    arcAlt: 0.1,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 7,
    startLat: 48.8566,
    startLng: -2.3522,
    endLat: 52.52,
    endLng: 13.405,
    arcAlt: 0.1,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 7,
    startLat: 52.52,
    startLng: 13.405,
    endLat: 34.0522,
    endLng: -118.2437,
    arcAlt: 0.2,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 8,
    startLat: -8.833221,
    startLng: 13.264837,
    endLat: -33.936138,
    endLng: 18.436529,
    arcAlt: 0.2,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 8,
    startLat: 49.2827,
    startLng: -123.1207,
    endLat: 52.3676,
    endLng: 4.9041,
    arcAlt: 0.2,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 8,
    startLat: 1.3521,
    startLng: 103.8198,
    endLat: 40.7128,
    endLng: -74.006,
    arcAlt: 0.5,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 9,
    startLat: 51.5072,
    startLng: -0.1276,
    endLat: 34.0522,
    endLng: -118.2437,
    arcAlt: 0.2,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 9,
    startLat: 22.3193,
    startLng: 114.1694,
    endLat: -22.9068,
    endLng: -43.1729,
    arcAlt: 0.7,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 9,
    startLat: 1.3521,
    startLng: 103.8198,
    endLat: -34.6037,
    endLng: -58.3816,
    arcAlt: 0.5,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 10,
    startLat: -22.9068,
    startLng: -43.1729,
    endLat: 28.6139,
    endLng: 77.209,
    arcAlt: 0.7,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 10,
    startLat: 34.0522,
    startLng: -118.2437,
    endLat: 31.2304,
    endLng: 121.4737,
    arcAlt: 0.3,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 10,
    startLat: -6.2088,
    startLng: 106.8456,
    endLat: 52.3676,
    endLng: 4.9041,
    arcAlt: 0.3,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 11,
    startLat: 41.9028,
    startLng: 12.4964,
    endLat: 34.0522,
    endLng: -118.2437,
    arcAlt: 0.2,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 11,
    startLat: -6.2088,
    startLng: 106.8456,
    endLat: 31.2304,
    endLng: 121.4737,
    arcAlt: 0.2,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 11,
    startLat: 22.3193,
    startLng: 114.1694,
    endLat: 1.3521,
    endLng: 103.8198,
    arcAlt: 0.2,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 12,
    startLat: 34.0522,
    startLng: -118.2437,
    endLat: 37.7749,
    endLng: -122.4194,
    arcAlt: 0.1,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 12,
    startLat: 35.6762,
    startLng: 139.6503,
    endLat: 22.3193,
    endLng: 114.1694,
    arcAlt: 0.2,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 12,
    startLat: 22.3193,
    startLng: 114.1694,
    endLat: 34.0522,
    endLng: -118.2437,
    arcAlt: 0.3,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 13,
    startLat: 52.52,
    startLng: 13.405,
    endLat: 22.3193,
    endLng: 114.1694,
    arcAlt: 0.3,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 13,
    startLat: 11.986597,
    startLng: 8.571831,
    endLat: 35.6762,
    endLng: 139.6503,
    arcAlt: 0.3,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 13,
    startLat: -22.9068,
    startLng: -43.1729,
    endLat: -34.6037,
    endLng: -58.3816,
    arcAlt: 0.1,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 14,
    startLat: -33.936138,
    startLng: 18.436529,
    endLat: 21.395643,
    endLng: 39.883798,
    arcAlt: 0.3,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
];

const AboutPage = () => {
  return (
    <PageWrapper>
      <PageHeader>About me</PageHeader>
      <section className="mt-16">
        <p className="text-slate-300">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et
          recusandae perferendis accusantium deserunt natus soluta veniam
          mollitia obcaecati animi ad ducimus, beatae similique aliquid
          distinctio non eos asperiores placeat magni. Odio enim iste magnam
          aliquid alias exercitationem molestias at, maiores numquam saepe
          dignissimos similique accusantium fugit, dolores ratione modi aperiam
          nisi placeat reprehenderit officiis minus! Quae iure excepturi quam!
          Possimus!
        </p>
        <br />
        <p className="text-slate-300">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere
          eligendi distinctio molestiae ab culpa natus libero, rem aliquam?
          Obcaecati eaque sit ratione ab laudantium deleniti ipsum est. Est,
          quas recusandae! Autem quis distinctio beatae temporibus, quibusdam
          excepturi. A ut maiores minus quod omnis aperiam, aut esse maxime
          quibusdam libero illum mollitia incidunt adipisci tenetur beatae
          similique dolores. Dolores, eum obcaecati.
        </p>
        <br />
        <p className="text-slate-300">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem natus
          amet commodi architecto ratione doloribus quos, inventore sit dolorem
          consequuntur nisi, velit odio libero. Obcaecati sit quam id adipisci
          debitis. Aperiam fuga officiis recusandae consectetur facilis, et enim
          autem vitae doloribus, mollitia itaque earum accusamus nostrum.
          Corrupti placeat amet corporis vitae veniam tenetur laudantium at
          cumque animi? Dolor, magnam ex.
        </p>
      </section>
      <section className="mt-14">
        <SectionHeader className="text-center">Mastery</SectionHeader>
        <div className="flex gap-5 mt-8">
          <Popover offset={10} placement="bottom">
            <PopoverTrigger>
              <Card isPressable className="w-full h-72">
                <CardHeader className="absolute z-20 top-1 flex-col items-start">
                  <h4 className="text-slate-200 font-bold text-xl">
                    Front-End
                  </h4>
                </CardHeader>
                <div className="inset-0 absolute bg-black/60 z-10" />
                <Image
                  fill
                  alt=""
                  className="z-0 w-full h-full object-cover object-right"
                  src="/assets/images/frontend.jpg"
                />
              </Card>
            </PopoverTrigger>
            <PopoverContent className="bg-purple-900 text-white">
              <p className="p-2 max-w-xs">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Eveniet cupiditate mollitia saepe sunt error numquam distinctio?
              </p>
            </PopoverContent>
          </Popover>
          <Popover offset={10} placement="bottom">
            <PopoverTrigger>
              <Card isPressable className="w-full h-72">
                <CardHeader className="absolute z-20 top-1 flex-col items-start">
                  <h4 className="text-slate-200 font-bold text-xl">Back-End</h4>
                </CardHeader>
                <div className="inset-0 absolute bg-black/60 z-10" />
                <Image
                  fill
                  alt=""
                  className="z-0 w-full h-full object-cover"
                  src="/assets/images/backend.jpg"
                />
              </Card>
            </PopoverTrigger>
            <PopoverContent className="bg-purple-900 text-white">
              <p className="p-2 max-w-xs">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Eveniet cupiditate mollitia saepe sunt error numquam distinctio?
              </p>
            </PopoverContent>
          </Popover>
          <Popover placement="bottom" offset={10}>
            <PopoverTrigger>
              <Card isPressable className="w-full h-72">
                <CardHeader className="absolute z-20 top-1 flex-col items-start">
                  <h4 className="text-slate-200 font-bold text-xl">UI/UX</h4>
                </CardHeader>
                <div className="inset-0 absolute bg-black/60 z-10" />
                <Image
                  fill
                  alt=""
                  className="z-0 w-full h-full object-cover"
                  src="/assets/images/design.jpg"
                />
              </Card>
            </PopoverTrigger>
            <PopoverContent className="bg-purple-900 text-white">
              <p className="p-2 max-w-xs">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Eveniet cupiditate mollitia saepe sunt error numquam distinctio?
              </p>
            </PopoverContent>
          </Popover>
        </div>
      </section>
      <section className="mt-14">
        <SectionHeader className="text-center">Why i am fit</SectionHeader>
        <div className="grid grid-cols-1 lg:grid-cols-3 mt-8 gap-4 max-w-7xl mx-auto w-full">
          <WobbleCard
            containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
            className=""
          >
            <div className="m ">
              <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                Up-to-Date with Evolving Technology
              </h2>
              <p className="mt-4 text-left  text-base/6 text-neutral-200">
                I stay current with the latest trends and advancements in
                technology, continuously enhancing my skills to bring the best
                solutions to the table.
              </p>
            </div>
          </WobbleCard>
          <WobbleCard containerClassName="col-span-1 min-h-[300px]">
            <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              User centric
            </h2>
            <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
              I create intuitive, user-focused solutions by blending technical
              skill with a deep understanding of user behavior.
            </p>
          </WobbleCard>
          <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
            <div className="flex">
              <div className="w-1/2">
                <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                  Flexible with different Time Zone
                </h2>
                <p className="mt-6 max-w-[26rem] text-left  text-base/6 text-neutral-200">
                  I am adept at accommodating various time zones, ensuring
                  seamless collaboration with global teams and clients
                  regardless of the hour.
                </p>
              </div>
              <div className="w-1/2 relative overflow-hidden flex items-center justify-center  h-[19rem] px-4">
                <div className="absolute w-full h-96 z-10">
                  <World data={sampleArcs} globeConfig={globeConfig} />
                </div>
              </div>
            </div>
          </WobbleCard>
        </div>
      </section>
    </PageWrapper>
  );
};

export default AboutPage;
