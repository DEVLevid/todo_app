import Header from "@/components/Header/header";
import style from "./page.module.scss";

export default function Home() {
  return <div className={style.mainContainer}>
    <Header />
  </div>;
}
