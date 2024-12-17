
 const NewCourse = ()=>{
    return(
<div className="bg-gray-50 shadow-lg rounded-lg p-8">
 <h4 className="font-serif text-headingColor text-lg md:text-2xl lg:text-3xl mb-4">
  New Addmission</h4>
 <ul>
   <li className="border border-red-500 flex flex-col md:flex-row items-center justify-between border-b">
     {/* Content Box */}
     <div className="border border-red  flex flex-col md:flex-row  md:items-center  gap-4">
       <div className="flex flex-col">
         {/* Title */}
         <h5 className="text-lg font-semibold textColor">
           Admissions Open
         </h5>

         {/* Description */}
         <p className="text-sm text-gray-600">
           Apply now for the next semester to kickstart your
           journey.
         </p>

         {/* Last Date */}
         <span className="text-xs text-red-500 mt-1">
           Last Date: January 15th
         </span>

         {/* Apply Button */}
       <button
         type="button"
         className="w-full md:w-auto bg-blue-500 text-white py-2 px-4 my-2 rounded-lg font-semibold hover:bg-blue-600 transition"
       >
         Apply Now
       </button> 
       </div>

       
     </div>

     {/* Image Box */}
     <div className="border border-red-500 w-64 md:w-52 h-52 bg-gray-200 rounded-lg ">
       <img
         src="https://via.placeholder.com/150x100"
         alt="Admission"
         className="w-full h-full object-cover rounded-lg"
       />
     </div>

   </li>
 </ul>
</div>


    )
 }

export default NewCourse 