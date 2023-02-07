import { NavLink } from 'react-router-dom';
import { routes } from 'src/routes';

const Sidebar = () => (
  <div className="flex w-96 flex-col bg-gray-300">
    {[
      {
        label: 'Home',
        to: routes.home,
      },
      {
        label: 'Api',
        to: routes.api,
      },
    ].map((item) => (
      <NavLink
        key={item.to}
        className="m-4 rounded-full bg-gray-200 p-2 px-4 text-white hover:bg-gray-400 hover:text-black"
        to={item.to}
      >
        {item.label}
      </NavLink>
    ))}
  </div>
);

export default Sidebar;
