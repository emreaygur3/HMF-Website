export default function Loading() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Skeleton */}
      <div className="fixed w-full bg-white border-b border-slate-200 z-50 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex justify-between items-center">
          <div className="w-20 h-8 bg-slate-200 rounded animate-pulse"></div>
          <div className="hidden md:flex gap-8">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-20 h-4 bg-slate-200 rounded animate-pulse"></div>
            ))}
          </div>
        </div>
      </div>

      {/* Hero Image Skeleton */}
      <div className="pt-32 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="w-32 h-4 bg-slate-200 rounded mb-6 animate-pulse"></div>
          <div className="h-96 bg-slate-200 rounded-lg animate-pulse mb-8"></div>
        </div>
      </div>

      {/* Content Skeleton */}
      <div className="py-12 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <div className="w-64 h-10 bg-slate-200 rounded mb-8 animate-pulse"></div>
          
          {/* Info Grid Skeleton */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="bg-white p-6 rounded-lg border border-slate-200">
                <div className="w-10 h-10 bg-slate-200 rounded mb-4 animate-pulse"></div>
                <div className="w-24 h-4 bg-slate-200 rounded mb-2 animate-pulse"></div>
                <div className="w-32 h-3 bg-slate-200 rounded animate-pulse"></div>
              </div>
            ))}
          </div>

          {/* Description Skeleton */}
          <div className="bg-white p-8 rounded-lg border border-slate-200 space-y-4">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="w-full h-4 bg-slate-200 rounded animate-pulse"></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
