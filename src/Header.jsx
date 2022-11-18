import SearchBox from './SearchBox';

function Header({ setFiltered }) {
  return (
    <header className="flex flex-col md:flex-row justify-between">
      <h1 className="text-8xl">
        Posh Properties
      </h1>

      <SearchBox setFiltered={setFiltered} />
    </header>
  );
};

export default Header;
