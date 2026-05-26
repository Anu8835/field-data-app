import { useState } from 'react';
import { Menu, X, Download, Plus, Search } from 'lucide-react';

export default function FieldDataCollectionAppDesign() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('entry');
  const [searchTerm, setSearchTerm] = useState('');

  const stats = [
    { title: 'Total Visits', value: '248' },
    { title: 'Beneficiaries', value: '5,420' },
    { title: 'School Visits', value: '92' },
    { title: 'Village Visits', value: '156' },
  ];

  const reports = [
    'Daily Report',
    'Weekly Report',
    'Monthly Summary',
    'Village Wise Data',
    'School Wise Data',
    'Beneficiary Analysis',
  ];

  const entries = [
    {
      id: 1,
      date: '10/03/2026',
      officer: 'Sunil Rawat',
      location: 'Gram Palam',
      type: 'Legal Awareness',
      beneficiaries: '300',
      status: 'Saved',
    },
    {
      id: 2,
      date: '10/03/2026',
      officer: 'Sangeeta Devi',
      location: 'Palli Gaon',
      type: 'School Visit',
      beneficiaries: '35',
      status: 'Synced',
    },
  ];

  const automationFeatures = [
    { title: 'Auto Email', desc: 'Monthly reports automatically sent to your Gmail.' },
    { title: 'Excel Export', desc: 'One-click download for office reporting.' },
    { title: 'Analytics', desc: 'Week-wise and month-wise performance tracking.' },
    { title: 'Mobile App', desc: 'Install directly on Android phones.' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Mobile Header */}
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex-1">
            <h1 className="text-lg md:text-2xl font-bold text-gray-800">
              Legal Awareness
            </h1>
            <p className="text-xs md:text-sm text-gray-500">Field Data App</p>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Buttons */}
          <div className="hidden md:flex gap-2">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-xl shadow hover:bg-blue-700 transition flex items-center gap-2">
              <Plus size={18} /> New Entry
            </button>
            <button className="bg-green-600 text-white px-4 py-2 rounded-xl shadow hover:bg-green-700 transition flex items-center gap-2">
              <Download size={18} /> Export
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t bg-gray-50 p-4 space-y-2">
            <button className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg font-semibold hover:bg-blue-700 transition flex items-center justify-center gap-2">
              <Plus size={18} /> New Entry
            </button>
            <button className="w-full bg-green-600 text-white px-4 py-3 rounded-lg font-semibold hover:bg-green-700 transition flex items-center justify-center gap-2">
              <Download size={18} /> Export Excel
            </button>
          </div>
        )}
      </header>

      <div className="max-w-6xl mx-auto px-4 py-4 space-y-4 md:space-y-6">
        {/* Stats Grid - Mobile Optimized */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-4 md:p-5 shadow-sm hover:shadow-md transition"
            >
              <p className="text-gray-500 text-xs md:text-sm">{item.title}</p>
              <h2 className="text-2xl md:text-3xl font-bold mt-2 text-gray-800">
                {item.value}
              </h2>
            </div>
          ))}
        </div>

        {/* Tab Navigation for Mobile */}
        <div className="md:hidden grid grid-cols-3 gap-2 bg-white rounded-xl p-1 shadow-sm">
          <button
            onClick={() => setActiveTab('entry')}
            className={`py-3 px-3 rounded-lg font-semibold text-sm transition ${
              activeTab === 'entry'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700'
            }`}
          >
            Entry
          </button>
          <button
            onClick={() => setActiveTab('filters')}
            className={`py-3 px-3 rounded-lg font-semibold text-sm transition ${
              activeTab === 'filters'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700'
            }`}
          >
            Filters
          </button>
          <button
            onClick={() => setActiveTab('reports')}
            className={`py-3 px-3 rounded-lg font-semibold text-sm transition ${
              activeTab === 'reports'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700'
            }`}
          >
            Reports
          </button>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-4 md:gap-6">
          {/* Entry Form - Mobile Hidden/Tab View */}
          <div
            className={`lg:col-span-2 bg-white rounded-2xl shadow-sm p-4 md:p-6 ${
              activeTab !== 'entry' && 'md:block hidden'
            }`}
          >
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
              New Field Entry
            </h2>

            <div className="space-y-3">
              <input
                className="w-full border border-gray-300 rounded-xl p-3 md:p-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Officer Name"
              />

              <input
                type="date"
                className="w-full border border-gray-300 rounded-xl p-3 md:p-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
              />

              <select className="w-full border border-gray-300 rounded-xl p-3 md:p-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600">
                <option>Select Area Type</option>
                <option>Village</option>
                <option>School</option>
                <option>College</option>
                <option>Camp</option>
              </select>

              <input
                className="w-full border border-gray-300 rounded-xl p-3 md:p-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Village / School Name"
              />

              <input
                className="w-full border border-gray-300 rounded-xl p-3 md:p-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Block / Tehsil"
              />

              <input
                type="number"
                className="w-full border border-gray-300 rounded-xl p-3 md:p-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Beneficiaries Count"
              />
            </div>

            <textarea
              className="w-full border border-gray-300 rounded-xl p-3 md:p-4 mt-3 h-24 md:h-28 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Program Details / Remarks"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
              <input
                type="file"
                className="border border-gray-300 rounded-xl p-3 md:p-4 text-sm"
              />

              <button className="bg-blue-600 text-white rounded-xl p-3 md:p-4 font-semibold hover:bg-blue-700 transition w-full">
                Save Entry
              </button>
            </div>
          </div>

          {/* Filters & Reports - Mobile Hidden/Tab View */}
          <div
            className={`bg-white rounded-2xl shadow-sm p-4 md:p-6 space-y-5 ${
              activeTab === 'entry' && 'md:block hidden'
            }`}
          >
            {/* Filters Section */}
            {(activeTab === 'filters' || activeTab === '') && (
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
                  Filters
                </h2>

                <div className="space-y-3">
                  <input
                    type="date"
                    className="w-full border border-gray-300 rounded-xl p-3 md:p-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />

                  <select className="w-full border border-gray-300 rounded-xl p-3 md:p-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600">
                    <option>Select Village</option>
                  </select>

                  <select className="w-full border border-gray-300 rounded-xl p-3 md:p-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600">
                    <option>Select Week</option>
                  </select>

                  <select className="w-full border border-gray-300 rounded-xl p-3 md:p-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600">
                    <option>Select Month</option>
                  </select>
                </div>
              </div>
            )}

            {/* Reports Section */}
            {(activeTab === 'reports' || activeTab === '') && (
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
                  Reports
                </h2>

                <div className="space-y-2">
                  {reports.map((item, index) => (
                    <button
                      key={index}
                      className="w-full text-left bg-gradient-to-r from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100 rounded-xl p-4 transition font-medium text-gray-700 text-sm md:text-base"
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Recent Entries - Mobile Card View */}
        <div className="bg-white rounded-2xl shadow-sm p-4 md:p-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-4">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800">
              Recent Entries
            </h2>

            <div className="relative">
              <Search className="absolute left-3 top-3 text-gray-400" size={18} />
              <input
                className="w-full border border-gray-300 rounded-xl p-3 pl-10 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          {/* Mobile Card View */}
          <div className="md:hidden space-y-3">
            {entries.map((entry) => (
              <div
                key={entry.id}
                className="border border-gray-200 rounded-xl p-4 hover:bg-gray-50 transition"
              >
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <p className="font-semibold text-gray-800">{entry.officer}</p>
                    <p className="text-xs text-gray-500">{entry.date}</p>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      entry.status === 'Saved'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-blue-100 text-blue-700'
                    }`}
                  >
                    {entry.status}
                  </span>
                </div>

                <div className="space-y-1 text-sm">
                  <p className="text-gray-700">
                    <span className="font-medium">Location:</span> {entry.location}
                  </p>
                  <p className="text-gray-700">
                    <span className="font-medium">Type:</span> {entry.type}
                  </p>
                  <p className="text-gray-700">
                    <span className="font-medium">Beneficiaries:</span> {entry.beneficiaries}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop Table View */}
          <div className="hidden md:block overflow-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b text-left text-gray-500">
                  <th className="p-3">Date</th>
                  <th className="p-3">Officer</th>
                  <th className="p-3">Location</th>
                  <th className="p-3">Type</th>
                  <th className="p-3">Beneficiaries</th>
                  <th className="p-3">Status</th>
                </tr>
              </thead>

              <tbody>
                {entries.map((entry) => (
                  <tr key={entry.id} className="border-b hover:bg-gray-50">
                    <td className="p-3">{entry.date}</td>
                    <td className="p-3">{entry.officer}</td>
                    <td className="p-3">{entry.location}</td>
                    <td className="p-3">{entry.type}</td>
                    <td className="p-3">{entry.beneficiaries}</td>
                    <td className="p-3">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          entry.status === 'Saved'
                            ? 'bg-green-100 text-green-700'
                            : 'bg-blue-100 text-blue-700'
                        }`}
                      >
                        {entry.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* PWA Install Section */}
        <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-2xl p-5 md:p-8 shadow-lg">
          <div className="space-y-4">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2">
                Install Android App
              </h2>
              <p className="text-sm md:text-base text-blue-100">
                This app can be installed directly on Android phones like a real mobile application.
                Users can save entries offline and sync data automatically when internet is available.
              </p>
            </div>

            <button className="w-full md:w-auto bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold shadow hover:bg-gray-50 transition">
              Install App
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-3 md:gap-4 mt-6">
            {[
              { title: 'Offline Support', desc: 'Data entry works even without internet.' },
              { title: 'Auto Sync', desc: 'All entries automatically sync to cloud database.' },
              { title: 'Fast Mobile UI', desc: 'Optimized for government field reporting work.' },
            ].map((feature, idx) => (
              <div key={idx} className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                <h3 className="font-bold text-lg">{feature.title}</h3>
                <p className="text-sm text-blue-100 mt-2">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Automation Features */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl p-5 md:p-8 shadow-lg">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Automation Features
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
            {automationFeatures.map((feature, idx) => (
              <div key={idx} className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                <h3 className="font-bold text-lg">{feature.title}</h3>
                <p className="text-sm text-indigo-100 mt-2">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
