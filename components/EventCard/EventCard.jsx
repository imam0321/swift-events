import Image from 'next/image'

export default function EventCard() {
  return (
    <div>
      <div className="overflow-hidden rounded-md bg-[#242526]">
        <Image src="/google-io-2023-1.png" alt="Event 1" className="w-full" height={500} width={500} />

        <div className="p-3">
          <a href="./details.html" className="font-bold text-lg">Google I/O Extended</a>
          <p className="text-[#9C9C9C] text-sm mt-1">Rangpur, Dhaka, Bangladesh, Rangpur, Bangladesh</p>
          <div className="text-[#737373] text-sm mt-1">
            <span>1k Interested</span>
            <span>|</span>
            <span>40K Going</span>
          </div>

          <div className="w-full flex gap-4 mt-4">
            <button className="w-full bg-indigo-600 hover:bg-indigo-800">Interested</button>
            <button className="w-full">Going</button>
          </div>
        </div>
      </div>
    </div>
  )
}
