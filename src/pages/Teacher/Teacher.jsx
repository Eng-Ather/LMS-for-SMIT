import { Link } from 'react-router-dom';
import DateLine from './Date';
import Courses from './Courses';

function Teacher() {
  return (
    <div className="min-h-screen bg-gray-100 flex shadow h-screen">
      {/* Side block */}
      <div className="bg-gray-200 flex flex-start flex-col w-1/5">
        <div className="font-serif text-headingColor h-16 content-center mx-auto text-2xl ">
          TEACHER
        </div>

        <Link to="/assignments" className="font-serif font-semibold text-headingColor bg-gray-400 border p-4">
          Assignments
        </Link>

        <Link to="/teachers" className="font-serif font-semibold text-headingColor bg-gray-400 border p-4">
          Teachers
        </Link>

        <Link to="/assignmentSchedule" className="font-serif font-semibold text-headingColor bg-gray-400 border p-4">
          Add Assignments
        </Link>
      </div>

      {/* /center box */}
      <div className="p-8 flex flex-col flex-end w-4/5 border">
        <div>
           <DateLine/>
           <Courses/>

        </div>
      </div>
    </div>
  );
}

export default Teacher;
