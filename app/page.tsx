// pages/index.tsx
import Head from "next/head";
import Header from "../components/Header";
import Main from "../components/Main";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Stan - Your Creator Store</title>
      </Head>
      <Header />
      <Main />
      {/* Additional components and sections can be added below as required */}
    </div>
  );
}
