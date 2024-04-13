"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import Text from "./text"
import ItemList from "./item-list"

interface FunnelPageProps {
  page: Page
}

function Block({ block }: { block: Block }) {
  switch (block.type) {
    case 'text':
      return <Text key={block.id} {...block as TextBlock} />
    case 'image':
      const { src, alt = '' } = block as ImageBlock
      return (
        <div key={block.id} className="relative h-96">
          <Image key={block.id} src={src} alt={alt} className="object-contain" fill sizes="(min-width: 808px) 50vw, 100vw" />
        </div>
      )
    case 'button':
      const { bgColor, color, text } = block as ButtonBlock
      return (
        <div key={block.id} className='flex justify-center p-4'>
          <Button className='min-w-80' style={{ backgroundColor: bgColor, color: color }}>{text}</Button>
        </div>
      )
    case 'list':
      const { items } = block as ListBlock
      return <ItemList key={block.id} items={items} />
    default:
      return null
  }
}

export default function FunnelPage({ page }: FunnelPageProps) {
  return (
    <>
      {page.blocks.map((block) => <Block key={block.id} block={block} />)}
    </>
  )
}
