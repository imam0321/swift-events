import Image from 'next/image'
import ActionButtons from '../Buttons/ActionButtons'
import Link from 'next/link'
import EventSchemaScript from '../meta/EventSchemaScript'

export default function EventCard({ event }) {
  return (
    <div>
      <div className="overflow-hidden rounded-md bg-[#242526] h-[400px]">
        <EventSchemaScript event={event} />
        <div className="h-[230px] relative">
          <Image
            src={event?.imageUrl}
            fill
            alt={event?.name || "Event Image"}
          />
        </div>
        <div className="p-3">
          <Link href={`/details/${event?._id}`} className="font-bold text-lg">{event?.name}</Link>
          <p className="text-[#9C9C9C] text-sm mt-1">{event?.location}</p>
          <div className="text-[#737373] text-sm mt-1">
            <span>{event?.interested_ids?.length || 0} Interested </span>
            <span>|</span>
            <span> {event?.going_ids?.length || 0} Going</span>
          </div>
          <ActionButtons eventId={event?._id} interestedUserIds={event?.interested_ids} goingUserId={event?.going_ids} />
        </div>
      </div>
    </div>
  )
}
