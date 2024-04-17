import Image from "next/image";
import { addGrunge } from "./actions/createGrudge";
import { sql } from "@vercel/postgres";
import SubmitButton from "@/components/SubmitButton";

export default async function Home() {
  const {rows} = await sql`SELECT * from Grundes`
  console.log(rows)
  return (
    <>
      <form action={addGrunge}>
        <div className="mb-5">
          <label
            htmlFor="grudge"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Base input
          </label>
          <input
            type="text"
            id="grudge"
            name="grudge"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <SubmitButton/>
      </form>
      <div>
      {
        rows?.map((item,index)=>(
          <div key={index}>{item.name}</div>
        ))
      }
      </div>
    </>
  );
}
