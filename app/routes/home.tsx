import type { Route } from "./+types/home";
import { Dashboard } from "../dashboard/dashboard";
// import { Welcome } from "../welcome/welcome";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "GA4GH Analytics Dashboard PoC" },
    { name: "description", content: "GA4GH Analytics Dashboard PoC" },
  ];
}

export default function Home() {
  return <Dashboard />
}

// export default function Home() {
//   return <Welcome />;
// }
