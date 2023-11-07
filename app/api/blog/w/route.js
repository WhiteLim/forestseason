import { qe } from '../../db';

export async function POST(req) {
    const is = await req.json();
    await qe(`insert into blog set
    title="${is.title}",
    contents="${String(is.contents)}",
    category='${is.category}'
    `)
    let data = await qe('SELECT * from blog order by num desc');
    return Response.json(data);
}

export async function PUT(req) {
    const is = await req.json();
    await qe(`update blog set
    title="${is.title}",
    contents="${String(is.contents)}",
    category="${is.category}"
    where num = "${Number(is.num)}"
    `)
    let data = await qe('SELECT * from blog order by num desc');
    return Response.json(data);
}

export async function DELETE(req) {
    const is = req.nextUrl.searchParams.get('num')
    await qe(`delete from blog where num = '${is}' `); 

    let data = await qe('SELECT * from blog order by num desc');
    return Response.json(data);
}

