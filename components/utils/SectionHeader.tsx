import Reveal from './Reveal'

interface Props {
  title: string
  dir: 'l' | 'r'
}

const SectionHeader = ({ title, dir }: Props) => {
  return (
    <div
      className="mb-[2.4rem] flex items-center gap-[2.4rem]"
      style={{ flexDirection: dir === 'l' ? 'row' : 'row-reverse' }}
    >
      <h3>
        <Reveal>
          <span className="text-end text-lg font-black md:text-xl">
            {title}
            <span className="text-brand">.</span>
          </span>
        </Reveal>
      </h3>
      <div className="h-[1px] w-full bg-typography opacity-30" />
    </div>
  )
}

export default SectionHeader
