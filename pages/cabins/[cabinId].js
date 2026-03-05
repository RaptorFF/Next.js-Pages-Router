import Head from "next/head";
import { useRouter } from "next/router";

function Cabin() {
  const router = useRouter();
  const { cabinId } = router.query;

  return (
    <>
    <Head>
        <title>Cabin #{cabinId} - The Wild Oasis</title>
    </Head>
      <div>
        <h1>Cabin #{cabinId}</h1>
      </div>
    </>
  );
}

export default Cabin;
