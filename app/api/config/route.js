import { qe } from '../db';
export async function GET() {
    let data = await qe('SELECT * from config');
    return Response.json(data);
}

export async function PUT(req) {
    const data = await req.json()
    qe(`update config 
    set 
    name='${data.data.name}', 
    nickname='${data.data.nickname}',
    phone='${data.data.phone}',
    title='${data.data.title}',
    summary='${data.data.summary}'
    where num='${data.id}'
    `)

    let res = await qe('SELECT * from config');
    return Response.json(res);
}