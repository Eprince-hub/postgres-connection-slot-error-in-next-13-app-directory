import { config } from 'dotenv-safe';
import postgres from 'postgres';

config();

const sql = postgres({});

export async function getFruits() {
  const fruits = await sql<
    { id: number; name: string; type: string }[]
  >`SELECT * FROM fruits;`;
  return fruits;
}

// console.log(
//   'Animals: ',

//   sql<{ id: number; name: string; type: string }[]>`SELECT * FROM fruits;`.then(
//     (x) => console.log('x: ', x),
//   ),
// );

console.log(
  'hello world: ',

  sql`
select count(*) from pg_stat_activity;

`.then((x) => console.log('x: ', x)),
);
