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

      {/* Hero Skeleton */}
      <div className="pt-32 pb-12 px-4 bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="w-32 h-4 bg-slate-700 rounded mb-6 animate-pulse"></div>
          <div className="w-3/4 h-12 bg-slate-700 rounded mb-4 animate-pulse"></div>
          <div className="w-1/2 h-6 bg-slate-700 rounded animate-pulse"></div>
        </div>
      </div>

      {/* Image Gallery Skeleton */}
      <div className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="aspect-video bg-slate-200 rounded-lg animate-pulse"></div>
            ))}
          </div>

          {/* Content Skeleton */}
          <div className="space-y-6">
            <div className="w-48 h-8 bg-slate-200 rounded animate-pulse"></div>
            <div className="space-y-3">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-full h-4 bg-slate-200 rounded animate-pulse"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
