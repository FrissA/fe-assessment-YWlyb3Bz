import magnifyingGlass from "@assets/magnifyingGlass.svg";

const Header: React.FC = () => (
  <div className="flex justify-between items-center p-5 pb-6 border-b">
    <h1 className="text-2xl font-bold">Workflows</h1>
    <div className="flex space-x-2">
      <button className="border px-3 py-1 rounded">Sort ⬇️</button>
      <div className="border px-3 py-1 rounded-md flex flex-row">
        <img
          className="mr-2.5 w-13 h-13"
          alt="Search Icon"
          src={magnifyingGlass}
        />
        <input
          className="focus:ring-0 focus:outline-none"
          type="text"
          placeholder="Search workflows"
        />
      </div>
    </div>
  </div>
);

export default Header;
