export default function QuizResults() {
  // Mock data matching the image
  const quizzes = [
    {
      id: 4765,
      title: "New Lesson Quiz",
      course: "test-bug",
      lesson: "New Lesson",
      awaitingReview: 0,
      totalAttempts: 0,
      averageGrade: "0",
    },
    {
      id: 4579,
      title: "New Lesson Quiz",
      course: "test-quiz",
      lesson: "tq",
      awaitingReview: 0,
      totalAttempts: 3,
      averageGrade: "0",
    },
    {
      id: 4588,
      title: "New Lesson Quiz",
      course: "test-quiz",
      lesson: "t13",
      awaitingReview: 0,
      totalAttempts: 1,
      averageGrade: "0",
    },
    {
      id: 4794,
      title: "Quiz 1",
      course: "sub",
      lesson: "Quiz 1",
      awaitingReview: 0,
      totalAttempts: 3,
      averageGrade: "0",
    },
    {
      id: 4515,
      title: "You're In The Right Place Quiz",
      course: "Free Course Lead Magnet Template",
      lesson: "You're In The Right Place",
      awaitingReview: 0,
      totalAttempts: 0,
      averageGrade: "0",
    },
    {
      id: 4515,
      title: "You're In The Right Place Quiz",
      course: "Free Course Lead Magnet Template",
      lesson: "You're In The Right Place",
      awaitingReview: 0,
      totalAttempts: 0,
      averageGrade: "0",
    },
    {
      id: 4515,
      title: "You're In The Right Place Quiz",
      course: "Free Course Lead Magnet Template",
      lesson: "You're In The Right Place",
      awaitingReview: 0,
      totalAttempts: 0,
      averageGrade: "0",
    },
    {
      id: 4515,
      title: "You're In The Right Place Quiz",
      course: "Free Course Lead Magnet Template",
      lesson: "You're In The Right Place",
      awaitingReview: 0,
      totalAttempts: 0,
      averageGrade: "0",
    },
    {
      id: 4515,
      title: "You're In The Right Place Quiz",
      course: "Free Course Lead Magnet Template",
      lesson: "You're In The Right Place",
      awaitingReview: 0,
      totalAttempts: 0,
      averageGrade: "0",
    },
    {
      id: 4515,
      title: "You're In The Right Place Quiz",
      course: "Free Course Lead Magnet Template",
      lesson: "You're In The Right Place",
      awaitingReview: 0,
      totalAttempts: 0,
      averageGrade: "0",
    },
    {
      id: 4515,
      title: "You're In The Right Place Quiz",
      course: "Free Course Lead Magnet Template",
      lesson: "You're In The Right Place",
      awaitingReview: 0,
      totalAttempts: 0,
      averageGrade: "0",
    },
    {
      id: 4515,
      title: "You're In The Right Place Quiz",
      course: "Free Course Lead Magnet Template",
      lesson: "You're In The Right Place",
      awaitingReview: 0,
      totalAttempts: 0,
      averageGrade: "0",
    },
  ]

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="mb-6 flex justify-between items-center">
        <h1 className="text-xl font-semibold text-gray-800">Quizzes</h1>
        <div className="relative">
          <input
            type="text"
            placeholder="Search quizzes..."
            className="w-64 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Title
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Course
              </th>
            
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                Awaiting Review
              </th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                Total Attempts
              </th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                Average Grade
              </th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {quizzes.map((quiz) => (
              <tr key={quiz.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {quiz.id}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <a href="#" className="text-blue-600 hover:text-blue-900 text-sm font-medium">
                    {quiz.title}
                  </a>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {quiz.course}
                </td>
               
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">
                  {quiz.awaitingReview}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">
                  {quiz.totalAttempts}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">
                  {quiz.averageGrade}%
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                  <button className="text-white bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded-md text-sm">
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

