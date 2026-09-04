/**
 * 遅延読み込みの失敗を受け止め、白紙にしない。
 *
 * `retryChunk` がセッション中1回だけ読み直しを試みる。それでも駄目だった場合に
 * ここへ来る。エラー境界が無いと React はツリーごと落とし、`<div id="root">` が
 * 空のまま残る。**読者からは「真っ白なページ」に見える。**
 *
 * 2026年9月4日、朝の更新直後に記事ページだけが白紙になった。原因はデプロイで
 * ハッシュ付きチャンクが差し替わり、古い index.html がキャッシュに残っていた
 * ことだったが、**画面には何も出ないため、読者には何が起きたのか分からなかった。**
 *
 * ここでは原因を推測して断定せず、**やれることを1つ示す**にとどめる。
 */
import { Component } from "react";

export default class ChunkErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { failed: false };
  }

  static getDerivedStateFromError() {
    return { failed: true };
  }

  render() {
    if (!this.state.failed) return this.props.children;

    return (
      <div className="chunk-error" role="alert">
        <p className="chunk-error__title">この部分を読み込めませんでした。</p>
        <p className="chunk-error__body">
          サイトの更新直後に、ブラウザが古い状態を覚えていると起きることがあります。
          ページを再読み込みすると直ることが多いです。
        </p>
        <button
          type="button"
          className="chunk-error__button"
          onClick={() => window.location.reload()}
        >
          再読み込み
        </button>
      </div>
    );
  }
}
