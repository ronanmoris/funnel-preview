import { Button } from "../ui/button"

export default function ButtonContainer({ bgColor, id, color, text }: Omit<ButtonBlock, 'type'>) {
  return (
    <div key={id} className='flex justify-center p-8'>
      <Button className='min-w-80' style={{ backgroundColor: bgColor, color: color }}>{text}</Button>
    </div>
  )
}