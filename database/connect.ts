import postgres from 'postgres';

const sql = postgres();

type Fruit = {
  id: number;
  name: string;
  type: string;
};

export async function getFruits() {
  const fruits = await sql<Fruit[]>`
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
