import fs from "node:fs";
import path from "node:path";
import Landing from "@/components/Landing";

const mangaReady = fs.existsSync(
  path.join(process.cwd(), "public", "manga", "01.jpg"),
);

export default function Home() {
  return <Landing mangaReady={mangaReady} />;
}
