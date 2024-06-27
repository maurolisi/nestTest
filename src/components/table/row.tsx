import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
export default function Row(props:any) {
  const router = useRouter();

 

  return (
    <tr id={"row_" + props.ep.id}>
      <td>
        <Image src={props.ep.FotoSuStic} width={160} height={110} alt="foto" />
      </td>
      <td className="align-middle">{props.ep.Serie}</td>
      <td className="align-middle">{props.ep.Stagione_Episodio}</td>
      <td className="align-middle">{props.ep.TitoloOriginale}</td>
      <td className="align-middle">{props.ep.TitoloItaliano}</td>
      <td className="align-middle">
        <Link
          // onClick={() => alert("pippo")}
          href={`/tabella/${props.ep.id}?act=view`}
        >
          <i className="fas fa-search fa-2x text-success"></i>
        </Link>
      </td>
      <td className="align-middle">
        <Link 
        href={`/tabella/${props.ep.id}?act=edit`}

        >
          <i className="fas fa-edit fa-2x text-info"></i>
        </Link>
      </td>
    </tr>
  );
}