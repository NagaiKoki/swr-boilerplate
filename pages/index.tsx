import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Home: NextPage = () => {
  const { push } = useRouter();

  useEffect(() => {
    push("/todos/1");
  }, []);

  return <div>SWR Boilerplate</div>;
};

export default Home;
