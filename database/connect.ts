import postgres from 'postgres';

const sql = postgres();

export async function getFruits() {
  const fruits = await sql`
    SELECT * FROM fruits;
  `;
  return fruits;
}

console.log(
  'Connection Count: ',
  sql`
    select count(*) from pg_stat_activity;
`.then((x) => console.log('x: ', x)),
);
