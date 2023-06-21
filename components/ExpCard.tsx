import Reavel from "./Reveal";

interface Props {
  name: string;
  period: string;
  title: string;
  loc: string;
  desc: string;
  tech: string[];
}

const ExpCard = ({ name, period, title, loc, desc, tech }: Props) => {
  return (
    <div className='mb-[2.4rem] border-b border-primary-light px-[1.2rem] pb-[2.4rem]'>
      <div className='mb-[1.2rem] flex items-center justify-between'>
        <Reavel>
          <span className='text-md font-bold'>{name}</span>
        </Reavel>
        <Reavel>
          <span className='text-[18px]'>{period}</span>
        </Reavel>
      </div>
      <div className='mb-[1.2rem] flex items-center justify-between'>
        <Reavel>
          <span className='text-[18px] font-bold text-brand'>{title}</span>
        </Reavel>
        <Reavel>
          <span className='text-[18px]'>{loc}</span>
        </Reavel>
      </div>
      <Reavel>
        <p className='mb-[1.8rem] text-[18px] font-extralight'>{desc}</p>
      </Reavel>
      <Reavel>
        <div className='flex flex-wrap gap-[1.2rem]'>
          {tech.map((v, i) => (
            <span
              key={i}
              className='rounded-full bg-primary-light px-[0.8rem] py-[0.2rem] text-xs'
            >
              {v}
            </span>
          ))}
        </div>
      </Reavel>
    </div>
  );
};

export default ExpCard;
