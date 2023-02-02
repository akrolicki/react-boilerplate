import { NavLink } from 'react-router-dom';

const Sidebar = () => (
  <div className="flex w-96 flex-col bg-gray-600">
    <NavLink to="/">Home</NavLink>
    <NavLink to="/another-page">Another Page</NavLink>
  </div>
);

export default Sidebar;
