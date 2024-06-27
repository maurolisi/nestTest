import { useRouter } from "next/router";
import { useEffect } from "react";
export default function Nofound() {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      //router.push("/");
      router.back()
    }, 2000);
  }, []);

  return (
    <>
      <h1>Pagina non trovata</h1>
    </>
  );
}
