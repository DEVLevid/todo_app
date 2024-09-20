
import Header from "@/components/Header/header";
import style from "./page.module.scss";
import Tasks from "@/components/Tasks/tasks";


export default function Home() {
  return (
    <div className={style.mainContainer}>
      <Header />
      <Tasks />
    </div>
  );
}
