const fruits = [
  { name: 'Apple', type: 'Pome' },
  { name: 'Banana', type: 'Berry' },
  { name: 'Mango', type: 'Stone' },
  { name: 'Kiwi', type: 'Berry' },
  { name: 'Pineapple', type: 'Multiple' },
];

export async function up(sql) {
  await sql`
    INSERT INTO fruits ${sql(fruits, 'name', 'type')}
  `;
}

export async function down(sql) {
  for (const fruit of fruits) {
    await sql`
      DELETE FROM
        fruits
      WHERE
        name = ${fruit.name} AND
        type = ${fruit.type}
    `;
  }
}
