import Image from "next/image";
import { promises as fs } from 'fs';
import Link from "next/link";
import FunnelContainer from "@/components/internals/funnel-container";

export default async function Home() {
  const file = await fs.readFile(process.cwd() + '/app/data.json', 'utf8');
  const data: FunnelData = JSON.parse(file);

  return (
    <div className="min-h-screen p-5 lg:px-20 xl:px-48 2xl:px-80">
      <header>
        <Link href='/'>
          <Image src='https://perspective.imgix.net/assets/app/logo/256x256.png?auto=compress&dpr=2' alt='Perspective Logo' width={32} height={32} />
        </Link>
      </header>
      <FunnelContainer data={data} />
    </div>
  );
}
