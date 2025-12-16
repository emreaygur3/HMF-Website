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
      <div className="pt-32 pb-16 px-4 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-6xl mx-auto text-center">
          <div className="w-48 h-10 bg-slate-700 rounded mx-auto mb-6 animate-pulse"></div>
          <div className="w-full max-w-3xl h-6 bg-slate-700 rounded mx-auto animate-pulse"></div>
        </div>
      </div>

      {/* Services Grid Skeleton */}
      <div className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-white rounded-lg border border-slate-200 overflow-hidden">
                <div className="h-48 bg-slate-200 animate-pulse"></div>
                <div className="p-8">
                  <div className="w-12 h-12 bg-slate-200 rounded mb-4 animate-pulse"></div>
                  <div className="w-3/4 h-6 bg-slate-200 rounded mb-4 animate-pulse"></div>
                  <div className="space-y-2 mb-6">
                    {[...Array(4)].map((_, j) => (
                      <div key={j} className="w-full h-3 bg-slate-200 rounded animate-pulse"></div>
                    ))}
                  </div>
                  <div className="w-1/2 h-4 bg-slate-200 rounded animate-pulse"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
