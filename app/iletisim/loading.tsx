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
      <div className="pt-32 pb-16 px-4 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-6xl mx-auto text-center">
          <div className="w-48 h-12 bg-slate-200 rounded mx-auto mb-6 animate-pulse"></div>
          <div className="w-full max-w-3xl h-6 bg-slate-200 rounded mx-auto animate-pulse"></div>
        </div>
      </div>

      {/* Form Skeleton */}
      <div className="py-20 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Info Skeleton */}
          <div className="space-y-8">
            <div className="w-48 h-8 bg-slate-200 rounded animate-pulse mb-8"></div>
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex gap-4">
                <div className="w-6 h-6 bg-slate-200 rounded animate-pulse"></div>
                <div className="flex-1 space-y-2">
                  <div className="w-32 h-5 bg-slate-200 rounded animate-pulse"></div>
                  <div className="w-48 h-4 bg-slate-200 rounded animate-pulse"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Form Skeleton */}
          <div className="space-y-6">
            <div className="w-48 h-8 bg-slate-200 rounded animate-pulse mb-8"></div>
            {[...Array(5)].map((_, i) => (
              <div key={i} className="space-y-2">
                <div className="w-24 h-4 bg-slate-200 rounded animate-pulse"></div>
                <div className="w-full h-10 bg-slate-200 rounded animate-pulse"></div>
              </div>
            ))}
            <div className="w-full h-12 bg-slate-200 rounded animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
