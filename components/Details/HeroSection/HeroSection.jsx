import ActionButtons from '@/components/Buttons/ActionButtons'
import Image from 'next/image'

export default function HeroSection({ eventInfo }) {
  return (
    <section className="container">
      <div className="bg-gradient-to-b from-slate-200/20 to-slate-800/30 h-[500px] relative">
        <Image
          src={eventInfo?.imageUrl}
          fill
          alt={eventInfo?.name}
        />
      </div>
      <div className="flex items-end">
        <div className="flex-auto py-4">
          <h1 className="font-bold text-2xl">{eventInfo?.name}</h1>
          <p className="text-[#9C9C9C] text-base mt-1">{eventInfo?.location}</p>
          <div className="text-[#737373] text-sm mt-1">
            <span>{eventInfo?.interested_ids?.length || 0} Interested {" "}</span>
            <span>|</span>
            <span>{" "}{eventInfo?.going_ids?.length || 0} Going</span>
          </div>
        </div>
        <ActionButtons fromDetails={true} />
      </div>
    </section>
  )
}
