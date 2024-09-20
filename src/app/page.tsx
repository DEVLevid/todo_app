import Header from "@/components/Header/Header";
import style from "./page.module.scss";
import Tasks from "@/components/Tasks/Tasks";

export default function Home() {
  return (
    <div className={style.mainContainer}>
      <Header />
      <Tasks />
    </div>
  );
}
