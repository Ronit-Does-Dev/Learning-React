
function NavBar() {
  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center">
      {/* Logo */}
      <div className="text-white text-[22px]">
        <a href="/">Logo</a>
      </div>
      
      {/* Navigation Links */}
      <div className="flex space-x-6 text-white text-[22px]">
        <a href="/exchange" className="hover:text-gray-400">Exchange</a>
        <a href="/about" className="hover:text-gray-400">About</a>
        <a href="/pricing" className="hover:text-gray-400">Pricing</a>
        <a href="/history" className="hover:text-gray-400">History</a>
      </div>
      
      {/* Log In Button */}
      <div>
        <a href="/login" className="text-white bg-blue-500 hover:bg-blue-700 text-[22px] font-bold py-2 px-4 rounded">
          Log In
        </a>
      </div>
    </nav>
  );
}

export default NavBar;
