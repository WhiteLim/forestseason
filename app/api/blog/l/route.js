import { qe } from '../../db';
export async function GET() {
    let data = await qe('SELECT * from blog order by num desc');
    return Response.json(data);
}