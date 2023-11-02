import { qe } from '../db';
export async function GET() {
    let data = await qe('SELECT * from portfolio order by num desc');
    return Response.json(data);
}

export async function POST(req) {
    const is = await req.json();
    await qe(`insert into portfolio set
    title='${is.title}',
    useskill='${is.useskill}',
    url='${is.url}',
    work='${is.work}',
    workdate='${is.workdate}',
    team='${is.team}',
    info='${is.info}',
    img='${is.img}',
    date='${is.date}'
    `)
    let data = await qe('SELECT * from portfolio');
    return Response.json(data);
}

export async function PUT(req) {
    const is = await req.json();
    await qe(`update portfolio set
    title='${is.title}',
    useskill='${is.useskill}',
    url='${is.url}',
    work='${is.work}',
    workdate='${is.workdate}',
    team='${is.team}',
    info='${is.info}',
    date='${is.date}'
    where num = '${Number(is.num)}'
    `)
    let data = await qe('SELECT * from portfolio');
    return Response.json(data);
}

export async function DELETE(req) {
    const is = req.nextUrl.searchParams.get('num')
    await qe(`delete from portfolio where num = '${is}' `); 

    let data = await qe('SELECT * from portfolio');
    return Response.json(data);
}

