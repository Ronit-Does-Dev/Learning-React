
function NavBar() {
  return (
    <nav className="bg-[#EAF4CF] h-[94px] w-[100vw] flex justify-stretch items-center border-b-2 border-[#D5E0B6] leading-[100%]">
      {/* Logo */}
      <div className="font-bebas text-black text-[22px] w-[20%] text-center hover:text-[1.5em]">
        <a href="/">CONCURR</a>
      </div>
      
      {/* Navigation Links */}
      <div className="font-sans text-lg flex items-center justify-center gap-5 text-black text-[1.1rem] grow">
        <a href="/exchange" className="hover:text-gray-400">Exchange</a>
        <a href="/about" className="hover:text-gray-400">About</a>
        <a href="/pricing" className="hover:text-gray-400">Pricing</a>
        <a href="/history" className="hover:text-gray-400">History</a>
      </div>

      <div className="h-[100%] w-[20%] hidden min-[850px]:flex justify-center items-center text-center text-black text-[22px] font-regular">
        <a href="tel:+91-780-185-9576">+91 7801859576</a>
      </div>
      
      {/* Log In Button */}
      <div className="h-[100%] w-[20%] flex justify-center items-center text-center text-black bg-[#FAFFE6] hover:bg-[#f2ffbd] text-[22px] font-regular">
        <a href="/login">
          Log In
        </a>
      </div>
    </nav>
  );
}

export default NavBar;
