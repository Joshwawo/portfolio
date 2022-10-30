import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <div className="divp">
      <div className="w-full bg-white rounded-lg p-4 flex flex-col xl:flex-row gap-4 items-center justify-center md:justify-between">
        <Link to={"/"}>
          <h2 className="uppercase font-semibold cursor-pointer text-xl">
            Jorge Morales
          </h2>
        </Link>
        <nav className="flex items-center gap-4">
          <a
            href="#"
            className="xl:py-1 xl:px-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Inicio
          </a>
          <Link
            to="/patasdepollo"
            className="xl:py-1 xl:px-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Dev
          </Link>
          <a
            href="#"
            className="xl:py-1 xl:px-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Servicios
          </a>
          <a
            href="#"
            className="xl:py-1 xl:px-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Blog
          </a>
          <a
            href="#"
            className="xl:py-1 xl:px-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Contacto
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
