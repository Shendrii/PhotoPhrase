import styles from "./page.module.css";
import { getPost } from "../_actions/postAction";

export default async function Home() {
  const res = await getPost();
  console.log(res);


export default function Home() {
  return <div></div>;

}
