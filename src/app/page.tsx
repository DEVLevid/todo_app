
import Header from "../components/Header/Header";
import Tasks from "../components/Tasks/Tasks";
import style from "./page.module.scss";

export default function Home() {
  return (
    <div className={style.mainContainer}>
      <Header />
      <Tasks />
    </div>
  );
}
