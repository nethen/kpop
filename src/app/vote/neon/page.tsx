import { NeonTest } from "@/app/components/Neon/NeonTest";
import { neon } from "@neondatabase/serverless";
import { getStartups } from "@/app/components/Neon/actions";

export default async function Page() {
  const startups = await getStartups();
  return (
    <>
      <div className="flex flex-col text-center gap-4 mb-12">
        <h2>Results</h2>
        <section>
          <ul>
            {startups &&
              startups.map((e, i) => (
                <li key={`startup_item--${i}`}>
                  <h3>{e.name}</h3>
                  <p>Votes: {e.votes}</p>
                </li>
              ))}
          </ul>
          <NeonTest />
        </section>
      </div>
    </>
  );
}
