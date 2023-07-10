import Page from "../components/Page.tsx";
import RouteAuthRules from "../enums/RouteAuthRules.tsx";

export default function NotFound() {
  return (
    <Page
      title="OPS..."
      pretitle="Não foi possível encontrar o que você estava procurando"
      authRule={{ rule: RouteAuthRules.NO_RULE }}
    />
  );
}
