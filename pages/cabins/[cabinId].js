import { useRouter } from "next/router";

function Cabin() {
  const router = useRouter();
  const { cabinId } = router.query;

  return (
    <div>
      <h1>Cabin #{cabinId}</h1>
    </div>
  );
}

export default Cabin;
