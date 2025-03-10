'use client'
import { addInterestedEvent } from '@/app/actions';
import useAuth from '@/app/hooks/useAuth'
import { useRouter } from 'next/navigation';
import { useState, useTransition } from 'react';

export default function ActionButtons({ eventId, interestedUserIds, fromDetails }) {
  const { auth } = useAuth();
  const router = useRouter();

  const isInterested = interestedUserIds.find(id => id === auth?._id);

  const [interested, setInterested] = useState(isInterested);
  const [isPending, startTransition] = useTransition();

  const toggleInterest = async () => {
    if (auth) {
      await addInterestedEvent(eventId, auth?._id);
      setInterested(!isInterested);
    } else {
      router.push('/login')
    }
  }

  const markGoing = () => {
    if (auth) {
      router.push('/payment')
    } else {
      router.push('/login')
    }
  }

  return (
    <div className={`w-full flex gap-4 mt-4 mb-4 ${fromDetails && "flex-1"}`} >
      <button onClick={() => startTransition(() => toggleInterest())} className={`w-full ${interested && "bg-indigo-600 hover:bg-indigo-800"}`}>
        Interested
      </button>
      <button onClick={markGoing} className="w-full bg-[#464849] text-center py-2 px-2 rounded-md border border-[#5F5F5F]/50 shadow-sm cursor-pointer hover:bg-[#3C3D3D] transition-colors active:translate-y-1">
        Going
      </button>
    </div>
  )
}
