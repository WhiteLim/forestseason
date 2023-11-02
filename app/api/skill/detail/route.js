import { qe } from '../../db';


export async function GET(req) {
    const is = Number(req.nextUrl.searchParams.get('num'))
    let data = await qe(`SELECT * from portfolio order by num desc `);
    let serdata = data.filter(n=> { 
        let k = n.useskill.split(',')
        for(let i=0; i<k.length; i++){
            if(k[i] == is){
                return true;
            }
        }
    })
    return Response.json(serdata);
}
