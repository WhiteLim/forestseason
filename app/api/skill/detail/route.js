import { qe } from '../../db';


export async function GET(req) {
    const is = req.nextUrl.searchParams.get('num')
    let data = await qe(`SELECT * from portfolio where useskill like '%${is}%' order by num desc `);
    return Response.json(data);
}
