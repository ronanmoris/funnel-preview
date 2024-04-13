import ItemListCard from "./item-list-card"

interface ItemListProps {
  items: Array<ListBlockItem>
}

export default function ItemList({ items }: ItemListProps) {
  return (
    <div className='flex flex-wrap w-full justify-center gap-2 mt-2'>
      {items.map(item => {
        const { id, title, description, src } = item
        return (
          <ItemListCard
            key={id}
            id={id}
            description={description}
            title={title}
            src={src}
          />
        )
      })}
    </div>
  )
}