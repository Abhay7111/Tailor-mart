import React from 'react'
import { useParams } from 'react-router-dom'

function FeedProductNotFound() {
    const { } = useParams()
  return (
    <div className="min-w-[95vw] min-h-[20vh] flex flex-col items-center justify-center gap-5 py-5 px-4 text-center select-none">
  {/* Icon Wrapper */}
  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-100 text-red-600 animate-bounce-slow">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-8 w-8">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
    </svg>
  </div>

  {/* Error Message */}
  <h2 className="text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl">
    Item Not Found
  </h2>
  
  <p className="mt-2 max-w-md text-sm text-zinc-600">
    The Item <span className="font-mono bg-zinc-200 px-1.5 py-0.5 rounded text-red-600 font-semibold">"{id}"</span> is not listed on our platform. Please check and try again.
  </p>

  {/* Action Buttons */}
  <div className="mt-6 flex flex-wrap gap-4 justify-center">
    <button 
      onClick={() => window.history.back()}
      className="rounded-lg bg-zinc-950 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800 transition-colors shadow-sm cursor-pointer"
    >
      Go Back
    </button>
    <button 
      onClick={() => window.location.reload()}
      className="rounded-lg border border-zinc-300 bg-white px-4 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-50 transition-colors cursor-pointer"
    >
      Retry
    </button>
  </div>
</div>
  )
}
    
export default FeedProductNotFound
