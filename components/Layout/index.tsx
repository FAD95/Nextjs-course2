import NavBar from '@components/NavBar';
const Layout: React.FC = ({ children }) =>
  <>
    <NavBar/>
    {children}
    <footer>This is the footer</footer>
  </>;
export default Layout;
