import React, { FC } from "react";
import Footer from "../shared/Footer";
import Header from "../shared/Header";
import style from "./pagelayout.module.scss";

interface IProps {
  children: React.ReactNode;
}

const PageLayout: FC<IProps> = ({ children }) => {
  return (
    <div className={style.main_container}>
      <div className={style.wrapper}>
        <Header />
        <div className={style.content}>{children}</div>
        <Footer />
      </div>
    </div>
  );
};

export default PageLayout;
