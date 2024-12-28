
export default function DateLine() {
  // Get current date
  const currentDate = new Date()

  // Generate dates for the line (15 days like in the image)
  const getDates = () => {
    const dates = []
    for (let i = -7; i <= 7; i++) {
      const date = new Date()
      date.setDate(currentDate.getDate() + i)
      dates.push(date)
    }
    return dates
  }

  return (
    <div className="w-full max-w-6xl mx-auto p-6">
      <h2 className="text-xl font-semibold mb-6">Schedule</h2>
      
      <div className="flex items-center gap-1 overflow-x-auto">
        {/* Dates row */}
        <div className="flex items-center gap-4 min-w-full mt-4">
          {getDates().map((date, index) => {
            const isToday = date.getDate() === currentDate.getDate() &&
                           date.getMonth() === currentDate.getMonth()
            
            return (
              <div key={index} className="flex flex-col items-center gap-1">
                <span className="text-xs text-gray-500">
                  {date.toLocaleDateString('default', { weekday: 'short' })}
                </span>
                <div
                  className={`
                    w-10 h-10 flex items-center justify-center rounded-full
                    ${isToday 
                      ? 'bg-blue-500 text-white' 
                      : 'hover:bg-gray-100 cursor-pointer'
                    }
                  `}
                >
                  {date.getDate()}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
