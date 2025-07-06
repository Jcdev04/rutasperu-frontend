type Props = {
  color: string;
}

export default function Header( {color = "white"} : Props) {
  return (
    <header className='w-full py-4 px-10'>
        <div className="flex gap-5 items-center">
            <h1 className={`text-{${color}} text-[64px] font-bold`}>RutasPeru</h1>
        </div>
    </header>
  )
}
