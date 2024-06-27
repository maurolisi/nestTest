import ark from '../api/arkimede'
import Form from '../../components/table/form'
import {useRouter} from 'next/router'
export async function getServerSideProps(context:any){
const id=context.params.id
  const token:any =await ark.getToken();
  const ep:string=await ark.getEpisodi(token[0].token,'select * from episodi where id='+id)
console.log(ep);
  return{
    props:{
      ep:ep,
      id:id
    }
  }
}

export default  function Table(props:any) {
    console.log(props)
    // return<h1>pippo</h1>
  var ep;
  if (props.id == 0) {
    ep = [
      {
        id: 0,
        Sigla: null,
        Serie: null,
        Ordine: null,
        Stagione_Episodio: null,
        TitoloOriginale: null,
        TitoloItaliano: null,
        Foto: null,
        FotoSuStic: null,
        Riassunto: null,
      },
    ];
  } else ep=props.ep;
  return (
<>
  <Form ep={ep[0]} />

  </>
);

}