import { NavLink } from 'react-router-dom';
import { routes } from 'src/routes';

const Sidebar = () => (
  <div className="flex w-96 flex-col border-r border-r-gray-300 bg-white pt-10">
    {[
      {
        label: 'Home',
        to: routes.home,
      },
      {
        label: 'Another page',
        to: routes.anotherPage,
      },
    ].map((item) => (
      <NavLink
        key={item.to}
        className="mx-4 my-1 rounded-md bg-gray-400 p-2 px-4 text-gray-1000 hover:bg-gray-600"
        to={item.to}
      >
        {item.label}
      </NavLink>
    ))}
  </div>
);

export default Sidebar;
