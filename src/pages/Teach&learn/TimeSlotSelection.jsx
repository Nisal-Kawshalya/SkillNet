import React, { useState } from "react";
import { Link } from "react-router-dom";

const teachers = [
  {
    name: "Emily Clark",
    subjects: "Mathematics, Physics",
    rating: 4.9,
    avatar: "https://randomuser.me/api/portraits/women/41.jpg",
    desc: "Passionate educator with 10+ years experience, specializing in making complex topics simple and engaging. Dedicated to student success.",
    rate: 50,
  },
  {
    name: "David Lee",
    subjects: "Chemistry, Biology",
    rating: 4.7,
    avatar: "https://randomuser.me/api/portraits/men/42.jpg",
  },
  {
    name: "Sarah Chen",
    subjects: "English Literature, History",
    rating: 4.8,
    avatar: "https://randomuser.me/api/portraits/women/43.jpg",
  },
  {
    name: "Michael Brown",
    subjects: "Computer Science, Coding",
    rating: 4.6,
    avatar: "https://randomuser.me/api/portraits/men/44.jpg",
  },
  {
    name: "Jessica White",
    subjects: "Art History, Graphic Design",
    rating: 4.9,
    avatar: "https://randomuser.me/api/portraits/women/45.jpg",
  },
  {
    name: "Robert Green",
    subjects: "Economics, Business Studies",
    rating: 4.5,
    avatar: "https://randomuser.me/api/portraits/men/46.jpg",
  },
];

const timeSlots = [
  "09:30", "10:00", "10:30", "11:00",
  "12:00", "12:30", "13:00", "13:30",
  "14:30", "15:00", "15:30", "16:00",
  "17:00"
];

export default function TimeSlotSelection() {
  const [selectedTeacher, setSelectedTeacher] = useState(teachers[0]);
  const [selectedDate, setSelectedDate] = useState(11);
  const [selectedTime, setSelectedTime] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Top Navbar */}
      <nav className="bg-white border-b flex items-center justify-between px-8 py-3">
        <div className="flex items-center gap-2">
          <Link to="/">
          <span className="font-bold text-lg text-indigo-700">Student Scheduler</span>
          </Link>
        </div>
        <ul className="flex gap-6 text-gray-700 font-medium">
          <li><Link to="/SelectTeacher" className="hover:text-indigo-600">Select Teacher</Link></li>
          <li><Link to="/TimeSlotSelection" className="text-indigo-600 font-semibold">Time Slot Selection</Link></li>
          <li><Link to="/PaymentPage" className="hover:text-indigo-600">Payment</Link></li>
          <li><Link to="/OnlineMeeting" className="hover:text-indigo-600">Online Meeting</Link></li>
        </ul>
        <div className="flex items-center gap-4">
          <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="User" className="h-8 w-8 rounded-full" />
        </div>
      </nav>
      <div className="flex flex-1 gap-8 px-8 pb-12">
        {/* Teacher List Sidebar */}
        <aside className="w-72 bg-white rounded-xl shadow p-6 h-fit mt-8">
          <h2 className="font-semibold mb-4">Find a Teacher</h2>
          <input
            type="text"
            placeholder="Search by name or subject..."
            className="border rounded px-3 py-2 text-sm w-full mb-4"
          />
          <select className="border rounded px-3 py-2 text-sm w-full mb-4">
            <option>All Subjects</option>
          </select>
          <div className="flex flex-col gap-2">
            {teachers.map((t, i) => (
              <button
                key={i}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg border ${selectedTeacher.name === t.name ? "border-blue-400 bg-blue-50" : "border-transparent hover:bg-gray-50"}`}
                onClick={() => setSelectedTeacher(t)}
              >
                <img src={t.avatar} alt={t.name} className="w-8 h-8 rounded-full object-cover" />
                <div className="flex-1 text-left">
                  <div className="font-semibold text-sm text-gray-800">{t.name}</div>
                  <div className="text-xs text-gray-500">{t.subjects}</div>
                  <div className="flex items-center gap-1 text-yellow-500 text-xs">
                    <span>★</span>
                    <span>{t.rating}</span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </aside>
        {/* Main Content */}
        <main className="flex-1 flex flex-col gap-8 mt-8">
          <h1 className="text-2xl font-bold mb-4">Schedule Your Session</h1>
          <div className="flex gap-8">
            {/* Calendar & Time Slots */}
            <section className="bg-white rounded-xl shadow p-6 flex flex-col gap-6 w-[420px]">
              <div>
                <div className="font-semibold mb-2">Select Date & Time</div>
                {/* Simple Calendar */}
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold">June 2025</span>
                  </div>
                  <div className="grid grid-cols-7 gap-1 text-xs text-gray-400 mb-1">
                    {['Su','Mo','Tu','We','Th','Fr','Sa'].map((d,i)=>(<div key={i} className="text-center">{d}</div>))}
                  </div>
                  <div className="grid grid-cols-7 gap-1">
                    {Array.from({length:30},(_,i)=>i+1).map((d)=>(
                      <button
                        key={d}
                        className={`w-8 h-8 rounded-full text-sm ${selectedDate===d?"bg-blue-600 text-white":"hover:bg-blue-100 text-gray-700"}`}
                        onClick={()=>setSelectedDate(d)}
                      >{d}</button>
                    ))}
                  </div>
                </div>
                <div className="font-semibold mb-2">Available Time Slots for June {selectedDate}, 2025</div>
                <div className="grid grid-cols-4 gap-2">
                  {timeSlots.map((t,i)=>(
                    <button
                      key={i}
                      className={`px-2 py-1 rounded border text-sm ${selectedTime===t?"bg-blue-600 text-white border-blue-600":"bg-gray-50 text-gray-700 border-gray-200 hover:bg-blue-50"}`}
                      onClick={()=>setSelectedTime(t)}
                    >{t}</button>
                  ))}
                </div>
              </div>
            </section>
            {/* Booking Summary */}
            <aside className="w-96 bg-white rounded-xl shadow p-6 flex flex-col gap-4">
              <div className="flex items-center gap-3 mb-2">
                <img src={selectedTeacher.avatar} alt={selectedTeacher.name} className="w-14 h-14 rounded-full object-cover" />
                <div>
                  <div className="font-bold text-lg">{selectedTeacher.name}</div>
                  <div className="flex items-center gap-1 text-yellow-500 text-sm">
                    <span>★</span>
                    <span>{selectedTeacher.rating} Rating</span>
                  </div>
                  <div className="text-xs text-gray-500">{selectedTeacher.subjects} Specialist</div>
                </div>
              </div>
              <div className="text-gray-700 text-sm mb-2">{selectedTeacher.desc || "Passionate educator with 10+ years experience, specializing in making complex topics simple and engaging. Dedicated to student success."}</div>
              <div className="border-t pt-2 mt-2">
                <div className="font-semibold mb-1">Session Details</div>
                <div className="text-xs text-gray-500 mb-1">Teacher: {selectedTeacher.name}</div>
                <div className="text-xs text-gray-500 mb-1">Date: June {selectedDate}, 2025</div>
                <div className="text-xs text-gray-500 mb-1">Time: {selectedTime || "Not selected"}</div>
                <div className="text-xs text-gray-500 mb-1">Hourly Rate: ${selectedTeacher.rate?.toFixed(2) || "50.00"}</div>
                <button className="w-full bg-blue-600 text-white rounded px-4 py-2 font-semibold hover:bg-blue-700 mt-2">Select Date & Time to Book</button>
              </div>
            </aside>
          </div>
        </main>
      </div>
      {/* Footer */}
      <footer className="mt-12 text-center text-gray-400 text-sm pb-4">
        <div>Student Scheduler</div>
        <div className="mt-2">© 2024 Student Scheduler.</div>
      </footer>
    </div>
  );
}
