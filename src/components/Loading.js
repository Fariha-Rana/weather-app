import Image from "next/image";

export default function Loader() {
  return (
    <div className='flex flex-col justify-center items-center mt-80'>
      <b className="pb-2 font-light ">wait.....</b>
      <Image
        src="/Lightning.gif"
        alt="loading data......."
        width={400}
        height={400}
        priority
        className="w-auto h-auto"
      />
    </div>
  );
}
