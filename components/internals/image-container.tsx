import Image from "next/image";

export default function ImageContainer({ src, id, alt = '' }: Omit<ImageBlock, 'type'>) {
  return (
    <div key={id} className="relative h-64 sm:h-80">
      <Image src={src} alt={alt} className="object-contain" fill />
    </div>
  )
}