import { FC } from "react";
import Logo from "./logo";
import Nav from "./nav";

/** 
 ヘッダーのコンポーネント
 @returns {JSX}
*/
const Header: FC = () => {
  return (
    <header className="flex justify-center items-center">
      <div className="container flex flex-row justify-between items-center">
        <Logo isBoxStyle />
        <Nav />
      </div>
    </header>
  );
};

export default Header;