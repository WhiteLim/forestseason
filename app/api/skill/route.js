import { qe } from '../db';
export async function GET() {
    let data = await qe('SELECT * from skillinfo');
    return Response.json(data);
}

export async function POST(req) {
    const is = await req.json();
    let pers = Number(is.per)
    await qe(`insert into skillinfo set
    id='${is.id}',
    ab='${is.ab}',
    per=${Number(pers)},
    text='${is.text}',
    color='${is.color}',
    logo='${is.logo}',
    logocolor='${is.logocolor}',
    style='${is.styled}'
    `)
    const data = await qe('SELECT * from skillinfo');
    return Response.json(data);
}

export async function PUT(req) {
    const is = await req.json();
    let pers = Number(is.insert.per)
    await qe(`update skillinfo set
    id='${is.insert.id}',
    ab='${is.insert.ab}',
    per=${Number(pers)},
    text='${is.insert.text}',
    color='${is.insert.color}',
    logo='${is.insert.logo}',
    logocolor='${is.insert.logocolor}',
    style='${is.insert.styled}'
    where num = '${is.skilldetail}'
    `)
    const data = await qe('SELECT * from skillinfo');
    return Response.json(data);

}