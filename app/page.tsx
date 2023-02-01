// TODO: Probably better to use a relative path here, to make the demo less "magical"
import { getFruits } from '@/database/connect';
import styles from './page.module.css';

export default async function Home() {
  const fruits = await getFruits();

  return (
    <main className={styles.main}>
      {fruits.map((fruit: any) => {
        return (
          <div key={fruit.id}>
            <h3>Name: {fruit.name}</h3>

            <h3>Type: {fruit.type}</h3>
          </div>
        );
      })}
    </main>
  );
}
