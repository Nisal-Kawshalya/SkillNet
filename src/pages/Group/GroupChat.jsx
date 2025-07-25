import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

const groups = [
  {
    name: "Project Synergy",
    active: true,
    note: "Let's finalize the Q3 report",
  },
  { name: "Marketing Campaign", note: "Big launch strategy" },
  { name: "Dev Team Sync", note: "Daily standup at 10am" },
  { name: "HR Announcements", note: "Holiday schedule" },
  { name: "Product Feedback", note: "Feature voting" },
  { name: "Water Cooler Chat", note: "Random" },
  { name: "Design Critiques", note: "" },
];

const messages = [
  {
    user: "Alice Johnson",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    time: "10:05 AM",
    text: "Good morning everyone! Hope you all had a productive start to the week. Just a reminder that our Q3 report review meeting is scheduled for tomorrow at 10 AM. Please ensure your sections are finalized and uploaded to the shared drive by end of day today. Let me know if you have any questions!",
  },
  {
    user: "Bob Smith",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
    time: "10:10 AM",
    text: "My section is almost done, just polishing up the data visualization. Will upload in an hour. Is there a specific format we need for the financial projections?",
  },
  {
    user: "You",
    avatar: "https://randomuser.me/api/portraits/men/51.jpg",
    time: "10:12 AM",
    text: "Hi Alice and Bob! For financial projections, please use the provided Excel template. It ensures consistency across all sections. Bob, if you need a hand with the data viz, I'm free after 11 AM.",
    highlight: true,
  },
  {
    user: "Alice Johnson",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    time: "10:15 AM",
    text: "Thanks, [Your Name]! That's really helpful. Bob, definitely reach out if you get stuck. And remember, the executive summary should be concise and highlight key achievements and challenges.",
  },
  {
    user: "You",
    avatar: "https://randomuser.me/api/portraits/men/51.jpg",
    time: "10:20 AM",
    text: "I've just uploaded the marketing section. It includes the latest campaign performance metrics and a few mockups for the upcoming product launch. Feedback is welcome!",
    highlight: true,
    images: [
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=facearea&w=200&h=120",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=200&h=120",
    ],
  },
  {
    user: "Charlie Brown",
    avatar: "https://randomuser.me/api/portraits/men/46.jpg",
    time: "10:25 AM",
    text: "Great work on the mockups! They look really sharp. I'll take a closer look this afternoon. Just uploaded the revised tech roadmap document. Please review and provide your comments by EOD.",
    images: [
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=facearea&w=200&h=120",
    ],
  },
  {
    user: "Alice Johnson",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    time: "10:30 AM",
    text: "Acknowledged, Charlie. Thanks for the swift update. Everyone, let's remember to keep our discussions focused and constructive!",
  },
  {
    user: "David Lee",
    avatar: "https://randomuser.me/api/portraits/men/47.jpg",
    time: "10:35 AM",
    text: "Just reviewing the campaign performance now. Looks promising! Quick question about the user acquisition forecast for next quarter - are we factoring in the new social media platform partnership?",
  },
  {
    user: "You",
    avatar: "https://randomuser.me/api/portraits/men/51.jpg",
    time: "10:40 AM",
    text: "David, yes, the social media partnership forecast is integrated. I've added a specific section on that. Let's sync up after the meeting if you want a deeper dive.",
    highlight: true,
  },
  {
    user: "Bob Smith",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
    time: "10:45 AM",
    text: "Just uploaded my finalized financial section. The data visualization is updated as well. Let me know if everything looks good on your end, Alice!",
  },
  {
    user: "Alice Johnson",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    time: "10:50 AM",
    text: "Excellent, Bob! I'll review it right away. Thank you all for your prompt contributions. We're looking good for tomorrow's review!",
  },
];

export default function GroupChat() {
  const [input, setInput] = useState("");
  const chatRef = useRef(null);
  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, []);

  // Voting state for each request (mock, by index)
  const [votes, setVotes] = useState([
    { participate: 2, teach: 1 }, // for Project Synergy
    { participate: 1, teach: 0 }, // for Marketing Campaign
  ]);

  const handleVote = (idx, type) => {
    setVotes((vs) =>
      vs.map((v, i) => (i === idx ? { ...v, [type]: v[type] + 1 } : v))
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Top Navbar */}
      <nav className="bg-white border-b flex items-center justify-between px-8 py-3">
        <div className="flex items-center gap-2">
          <Link to="/">
            <span className="font-bold text-lg text-indigo-700">ChatFlow</span>
          </Link>
        </div>
        <ul className="flex gap-6 text-gray-700 font-medium">
          <li>
            <Link to="/JoinGroup" className="hover:text-indigo-600">
              JoinGroup
            </Link>
          </li>
          <li>
            <Link to="#" className="text-indigo-600 font-semibold">
              Groups
            </Link>
          </li>
          <li>
            <Link to="/Settings" className="hover:text-indigo-600">
              Settings
            </Link>
          </li>
        </ul>
        <div className="flex items-center gap-4">
          <input
            type="text"
            placeholder="Search anything..."
            className="border rounded px-3 py-2 text-sm w-64"
          />
          <Link
            to="/Profile"
            className="flex items-center gap-2 hover:bg-gray-100 px-2 py-1 rounded"
          >
            <img
              src="https://randomuser.me/api/portraits/men/14.jpg"
              alt="Jane Doe"
              className="h-8 w-8 rounded-full object-cover border-2 border-white shadow"
            />
            <span className="font-medium text-gray-700">Jane Doe</span>
          </Link>
        </div>
      </nav>
      <main className="flex-1 flex gap-6 px-8 py-6">
        {/* Sidebar */}
        <aside className="w-64 bg-white rounded-xl shadow p-4 flex flex-col gap-4">
          <h2 className="font-semibold text-lg mb-2">My Groups</h2>
          <div className="flex flex-col gap-1">
            {groups.map((g, i) => (
              <button
                key={i}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg ${
                  g.active
                    ? "bg-blue-100 text-blue-700 font-semibold"
                    : "hover:bg-gray-100 text-gray-700"
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-blue-500 inline-block"></span>
                <span className="flex-1 text-left">{g.name}</span>
                <span className="text-xs text-gray-400 truncate max-w-[80px]">
                  {g.note}
                </span>
              </button>
            ))}
          </div>
          <button className="mt-4 border rounded px-3 py-2 font-semibold text-sm hover:bg-gray-100">
            Create New Group
          </button>
        </aside>
        {/* Chat Area */}
        <section className="flex-1 flex flex-col bg-white rounded-xl shadow p-0">
          {/* Chat Header */}
          <div className="border-b px-6 py-4 flex items-center justify-between">
            <div>
              <h1 className="font-bold text-xl">Project Synergy</h1>
              <div className="text-xs text-gray-500">
                Connecting teams and fostering collaboration.
              </div>
            </div>
            <Link to="/CreateGroupRequest">
              <button className="border rounded px-3 py-1 text-sm font-semibold hover:bg-gray-100">
                Create Request
              </button>
            </Link>
          </div>
          {/* Chat Messages */}
          <div
            className="flex-1 overflow-y-auto px-6 py-4 space-y-4"
            ref={chatRef}
            style={{ maxHeight: "calc(100vh - 220px)" }}
          >
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${
                  msg.user === "You" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`flex items-end gap-2 max-w-2xl ${
                    msg.user === "You" ? "flex-row-reverse" : ""
                  }`}
                >
                  <Link to="/Profile">
                    <img
                      src={msg.avatar}
                      alt={msg.user}
                      className="w-8 h-8 rounded-full object-cover border-2 border-white shadow"
                    />
                  </Link>
                  <div
                    className={`flex flex-col ${
                      msg.user === "You" ? "items-end" : "items-start"
                    }`}
                  >
                    <div
                      className={`text-xs text-gray-500 mb-1 ${
                        msg.user === "You" ? "text-right" : ""
                      }`}
                    >
                      {msg.user} {msg.time}
                    </div>
                    <div
                      className={`rounded-lg px-4 py-2 mb-1 ${
                        msg.highlight
                          ? "bg-blue-500 text-white"
                          : "bg-gray-100 text-gray-800"
                      } ${
                        msg.user === "You"
                          ? "rounded-br-none"
                          : "rounded-bl-none"
                      }`}
                    >
                      {msg.text}
                    </div>
                    {msg.images && (
                      <div className="flex gap-2 mt-1">
                        {msg.images.map((img, j) => (
                          <img
                            key={j}
                            src={img}
                            alt="attachment"
                            className="w-32 h-20 object-cover rounded border"
                          />
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Message Input */}
          <form
            className="border-t px-6 py-2 flex items-center gap-2"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <input
              type="text"
              className="flex-1 border rounded px-3 py-2 text-sm"
              placeholder="Type your message here..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button className="bg-blue-600 text-white rounded px-4 py-2 font-semibold hover:bg-blue-700">
              Send Message
            </button>
          </form>
        </section>
        {/* Right Sidebar */}
        <aside className="w-80 flex flex-col gap-8">
          {/* Group Requests Box */}
          <div className="bg-white rounded-xl shadow p-6 mb-2">
            <Link to="/GroupRequests">
            <h3 className="font-semibold mb-4">Group Requests</h3>
            </Link>

            {/* Mock group requests data */}
            {[
              {
                groupName: "Project Synergy",
                creator: {
                  name: "Alice Johnson",
                  avatar: "https://randomuser.me/api/portraits/women/44.jpg",
                },
                interested: [
                  {
                    name: "Bob Smith",
                    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
                  },
                  {
                    name: "Charlie Brown",
                    avatar: "https://randomuser.me/api/portraits/men/46.jpg",
                  },
                  {
                    name: "Eve Carter",
                    avatar: "https://randomuser.me/api/portraits/women/48.jpg",
                  },
                ],
              },
              {
                groupName: "Marketing Campaign",
                creator: {
                  name: "David Lee",
                  avatar: "https://randomuser.me/api/portraits/men/47.jpg",
                },
                interested: [
                  {
                    name: "Grace Kim",
                    avatar: "https://randomuser.me/api/portraits/women/49.jpg",
                  },
                  {
                    name: "Frank Miller",
                    avatar: "https://randomuser.me/api/portraits/men/50.jpg",
                  },
                ],
              },
            ].map((req, idx) => (
              <div
                key={idx}
                className="mb-6 last:mb-0 border-b pb-4 last:border-b-0 last:pb-0"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">
                    {req.groupName}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm mb-2">
                  <Link to="/Profile">
                    <img
                      src={req.creator.avatar}
                      alt={req.creator.name}
                      className="w-7 h-7 rounded-full object-cover border"
                    />
                  </Link>
                  <span className="font-medium">Created by</span>
                  <span className="text-gray-700">{req.creator.name}</span>
                </div>
                <div>
                  <div className="font-semibold text-sm mb-1">
                    Interested Participants:
                  </div>
                  <div className="flex -space-x-2 mb-1">
                    {req.interested.map((user, i) => (
                      <Link to="/Profile" key={i}>
                        <img
                          src={user.avatar}
                          alt={user.name}
                          title={user.name}
                          className="w-8 h-8 rounded-full border-2 border-white shadow -ml-2 first:ml-0"
                        />
                      </Link>
                    ))}
                  </div>
                  <div className="text-xs text-gray-500 mb-2">
                    {req.interested.map((u) => u.name).join(", ")}
                  </div>
                  {/* Voting Buttons */}
                  <div className="flex gap-2 mt-2">
                    <button
                      className="flex-1 border rounded px-3 py-1 text-xs font-semibold hover:bg-blue-50 text-blue-700 border-blue-200"
                      onClick={() => handleVote(idx, "participate")}
                      type="button"
                    >
                      👍 I want to participate ({votes[idx]?.participate || 0})
                    </button>
                    <button
                      className="flex-1 border rounded px-3 py-1 text-xs font-semibold hover:bg-green-50 text-green-700 border-green-200"
                      onClick={() => handleVote(idx, "teach")}
                      type="button"
                    >
                      🧑‍🏫 I want to teach/accept ({votes[idx]?.teach || 0})
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Shared Files Box (unchanged) */}
        </aside>
      </main>
      {/* Footer */}
      <footer className="mt-8 text-center text-gray-400 text-xs pb-4">
        <div>© 2023 ChatFlow. All rights reserved.</div>
      </footer>
    </div>
  );
}
