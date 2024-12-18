
const UpcommingEvent = ()=>{
    return(

        <div className="bg-gray-50 shadow-lg rounded-lg p-8">
        <h4 className="text-3xl text-headingColor font-serif mb-4 headingColor">
          Upcoming Events
        </h4>
        <ul className="space-y-3">
          <li className="flex items-center">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
            <p className="textColor">
              Join us for our upcoming Annual IT Workshop on February 10th.
              Register now to secure your spot!
            </p>
          </li>
          <li className="flex items-center">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
            <p className="textColor">
              Check out our new professional development workshops.
            </p>
          </li>
        </ul>
      </div>
    )
}

export default UpcommingEvent