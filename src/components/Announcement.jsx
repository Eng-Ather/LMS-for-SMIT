
const Announcement = ()=>{
    return(
<div>
     <div className="bg-gray-50 shadow-lg rounded-lg p-8">
        <h4 className="text-3xl text-headingColor font-serif mb-4 headingColor">
          Announcements
        </h4>
        <ul className="space-y-3">
          <li className="flex items-center">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
            <p >
              Admissions for the next semester are now open. Apply by January
              15th!
            </p>
          </li>
          <li className="flex items-center">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
            <p >
              Check out our new professional development workshops.
            </p>
          </li>
          <li className="flex items-center">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
            <p >
              Campus facilities will be closed for winter break from Dec 24th to
              Jan 2nd.
            </p>
          </li>
        </ul>
      </div>
</div>
        
    )
}

export default Announcement