import Link from 'next/link';

const NavBar = () =>
  (
    <>
      <nav>
        <menu>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
        </menu>
      </nav>
    </>
  );

export default NavBar;
