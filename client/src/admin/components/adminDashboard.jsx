import AdminNavbar from "../components/adminNavbar"
import img1 from "../../assets/1.png"
import { useNavigate } from "react-router-dom"
const people = [
  {
    name: 'Straight Trouser',
    email: 'style-options',
    role: 'Co-Founder / CEO',

    lastSeen: '3h ago',
    lastSeenDateTime: '2023-01-23T13:23Z',
  },
  {
    name: 'Trouser',
    email: 'michael.foster@example.com',
    role: 'Co-Founder / CTO',
    
    lastSeen: '3h ago',
    lastSeenDateTime: '2023-01-23T13:23Z',
  },
  {
    name: 'Skin fit Trouser',
    email: 'dries.vincent@example.com',
    // role: 'Business Relations',
   
    lastSeen: null,
  },
  {
    name: 'Wide leg Trouser',
    email: 'lindsay.walton@example.com',
    // role: 'Front-end Developer',
    
    lastSeen: '3h ago',
    lastSeenDateTime: '2023-01-23T13:23Z',
  },


]

export default function AdminDashboard() {
    const navigate= useNavigate()
  return (
    <>
    <AdminNavbar/>
    <div className="mt-28 ">

    
    <ul role="list" className="divide-y divide-gray-100">
      {people.map((person) => (
        <li key={person.email} className="flex justify-between gap-x-6 py-5 w-80 h-90 cursor-pointer" onClick={()=>{navigate("/trouser-formulae")}}>
          <div className="flex min-w-0 gap-x-4">
            <img className="h-20 w-20 flex-none rounded-full bg-gray-50" src={img1} alt="" />
            <div className="min-w-0 flex-auto">
              <p className="text-sm font-semibold leading-6 text-gray-900">{person.name}</p>
              <p className="mt-1 truncate text-xs leading-5 text-gray-500">{person.email}</p>
            </div>
          </div>
          {/* <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
            {person.lastSeen ? (
              <p className="mt-1 text-xs leading-5 text-gray-500">
                Last seen <time dateTime={person.lastSeenDateTime}>{person.lastSeen}</time>
              </p>
            ) : (
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                </div>
                <p className="text-xs leading-5 text-gray-500">Online</p>
              </div>
            )}
          </div> */}
        </li>
      ))}
    </ul>
    </div>
    </>
  )
}
