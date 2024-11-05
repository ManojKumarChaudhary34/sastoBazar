export const Nav = () => {
  return (
    <nav className="bg-slate-500 flex justify-between h-20 items-center">
      <div className="w-24">
        <img src="logo.png" alt="logo" />
      </div>
      <li className="space-x-6 flex uppercase">
        <ul>home</ul>
        <ul>men</ul>
        <ul>women</ul>
        <ul>electronics</ul>
        <ul>jowelery</ul>
      </li>
      <div className="flex space-x-6">
        <img className="w-5" src="search.png" alt="search image" />
        <img
          className="w-5"
          src="shopping-cart.png"
          alt="shopping-cart image"
        />
      </div>
    </nav>
  );
};
