/**
 * public 相対パスと同一キーで Vite バンドル URL を引く（図の 404 / 基底パスずれ対策）
 */
import diagramFrontierFiveAxes from "./assets/figures/diagram-frontier-five-axes.svg?url";
import diagramIdeThreeKinds from "./assets/figures/diagram-ide-three-kinds.svg?url";
import diagramEnterpriseBackendPatterns from "./assets/figures/diagram-enterprise-backend-patterns.svg?url";
import diagramEntraPostgresFlow from "./assets/figures/diagram-entra-postgres-flow.svg?url";
import diagramOpenaiSixLayerRag from "./assets/figures/diagram-openai-six-layer-rag.svg?url";
import diagramRagPipeline4steps from "./assets/figures/diagram-rag-pipeline-4steps.svg?url";

export const BUNDLED_MEDIA_URL = {
  "articles/diagram-frontier-five-axes.svg": diagramFrontierFiveAxes,
  "articles/diagram-ide-three-kinds.svg": diagramIdeThreeKinds,
  "articles/diagram-enterprise-backend-patterns.svg": diagramEnterpriseBackendPatterns,
  "articles/diagram-entra-postgres-flow.svg": diagramEntraPostgresFlow,
  "articles/diagram-openai-six-layer-rag.svg": diagramOpenaiSixLayerRag,
  "articles/diagram-rag-pipeline-4steps.svg": diagramRagPipeline4steps,
};
