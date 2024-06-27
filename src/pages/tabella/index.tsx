import ark from '../api/arkimede'
import Row from "../../components/table/row";
export async function getServerSideProps(){
 // export async function getStaticProps(){
  const token:any =await ark.getToken();
  const ep:string=await ark.getEpisodi(token[0].token,'select * from episodi')
  return{
    props:{
      tk:token,
      ep:ep
    }
  }
}

export default function Tabella(props:any) {
  const tbl2 = props.ep.map((item:any) => {
    return <Row key={item.id} ep={item} />;
  });

  return (
    <div>
      <table className="table table-bordered table-striped">
        <thead>
          <tr className="bg-info">
            <th>Foto</th>
            <th>Sigla</th>
            <th>Stag.Ep</th>
            <th>Titolo Originale</th>
            <th>Titolo</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>{tbl2}</tbody>
      </table>
    </div>
  );
}