
import Header from "@/components/Header/header";
import Tasks from "@/components/Tasks/tasks";
import style from "./page.module.scss";


export default function Home() {
  return (
    <div className={style.mainContainer}>
      <Header />
      <Tasks />
    </div>
  );
}
