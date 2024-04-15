"use client"

import Text from "./text"
import ItemList from "./item-list"
import ImageContainer from "./image-container"
import ButtonContainer from "./button-container"

interface FunnelPageProps {
  page: Page
}

function Block({ block }: { block: Block }) {
  switch (block.type) {
    case 'text':
      return <Text key={block.id} {...block as TextBlock} />
    case 'image':
      const { src, alt } = block as ImageBlock
      return <ImageContainer src={src} alt={alt} id={block.id} />
    case 'button':
      const { bgColor, color, text } = block as ButtonBlock
      return <ButtonContainer bgColor={bgColor} color={color} text={text} id={block.id} />
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
