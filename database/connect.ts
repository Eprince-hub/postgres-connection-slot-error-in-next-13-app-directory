import { config } from 'dotenv-safe';
import postgres from 'postgres';

// TODO: try to remove the usage of `dotenv-safe`, while still keeping the `postgres()` call simple below
config();

// TODO: I guess no object should be passed here?
const sql = postgres({});

export async function getFruits() {
  // TODO: Maybe you could make this formatted a bit nicer to make it easier to read
  const fruits = await sql<
    { id: number; name: string; type: string }[]
  >`SELECT * FROM fruits;`;
  return fruits;
}

// TODO: This formatting also looks a bit unusual:
console.log(
  'Connection Count: ',

  sql`
select count(*) from pg_stat_activity;

`.then((x) => console.log('x: ', x)),
);
