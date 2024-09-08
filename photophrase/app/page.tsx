import { getPost } from "../_actions/postAction";

export default async function Home() {
  const res = await getPost();
  console.log(res);
}
