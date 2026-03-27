/**
 * public 相対パスと同一キーで Vite バンドル URL を引く（図の 404 / 基底パスずれ対策）
 */
import diagramFrontierFiveAxes from "./assets/figures/diagram-frontier-five-axes.svg?url";
import diagramIdeThreeKinds from "./assets/figures/diagram-ide-three-kinds.svg?url";

export const BUNDLED_MEDIA_URL = {
  "articles/diagram-frontier-five-axes.svg": diagramFrontierFiveAxes,
  "articles/diagram-ide-three-kinds.svg": diagramIdeThreeKinds,
};
