type ListBlockItem = {
  id: string
  title: string
  description: string
  src: string
}

type ButtonBlock = {
  id: string
  color: string
  bgColor: string
  text: string
  type: string
}

type ImageBlock = {
  id: string
  alt: string
  src: string
  type: string
}

type TextBlock = {
  id: string
  text: string
  color: string
  align: string
  type: string
}

type ListBlock = {
  id: string
  items: Array<ListBlockItem>
  type: string
}

type Block = ButtonBlock | ImageBlock | ListBlock | TextBlock

interface Page {
  id: string
  blocks: Array<Block>
}

interface FunnelData {
  name: string
  bgColor: string
  pages: Array<Page>
}