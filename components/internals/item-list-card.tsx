import Image from "next/image";

export default function ListItemCard({ title, description, src }: ListBlockItem) {
  return (
    <div className="relative flex flex-col items-center max-w-[48%] overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-md justify-center" >
      <div className="relative mt-3 overflow-hidden text-gray-700 bg-transparent rounded-none shadow-none bg-clip-border">
        <Image
          src={src}
          alt={title}
          width={50}
          height={50}
        />
      </div>
      <div className="p-6 text-center">
        <h4 className="block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900">
          {title}
        </h4>
        <p className="block mt-3 font-sans text-xl font-normal leading-relaxed text-gray-700">
          {description}
        </p>
      </div>
    </div>
  )
}