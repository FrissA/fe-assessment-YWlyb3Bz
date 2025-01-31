import settings from "@assets/settings.svg";
import graphs from "@assets/graphs.svg";
import database from "@assets/database.svg";

const Sidebar: React.FC = () => (
  <aside className="h-full w-64 p-2 border-r">
    <div className="flex items-center space-x-2 mb-6">
      <div className="w-8 h-8 bg-purple-300 rounded"></div>
      <span className="text-sm font-bold">AirOps</span>
    </div>
    <button className="w-full text-sm font-semibold bg-white p-2 rounded-lg shadow-sm border border-gray-200 transition-colors duration-300 hover:bg-gray-200">
      New <span className="text-lg font-normal">+</span>
    </button>
    <nav className="mt-4">
      <div className="flex flex-col space-y-2">
        <a className="text-xs text-gray-600 flex flex-row cursor-pointer rounded-sm transition-colors duration-300 hover:bg-gray-200">
          <img className="mr-2.5 w-13 h-13" alt="Data Icon" src={database} />
          Data Name
        </a>
        <a className="text-xs text-gray-600 flex flex-row cursor-pointer rounded-sm transition-colors duration-300 hover:bg-gray-200">
          <img className="mr-2 w-13 h-13" alt="Monitoring Icon" src={graphs} />
          Monitoring
        </a>
        <a className="text-xs text-gray-600 flex flex-row cursor-pointer rounded-sm transition-colors duration-300 hover:bg-gray-200">
          <img className="mr-2 w-13 h-13" alt="Settings Icon" src={settings} />
          Settings
        </a>
      </div>
    </nav>
  </aside>
);

export default Sidebar;
