export type SkillCard = {
  ID: number;             // ID
  sort: number;           // デフォルトの並び順
  name: string;           // スキルカード名
  rarity: string;         // レアリティ(N,R,SR,SSR,unique:固有,support:サポートカード)
  plan: string;           // プラン識別子(S:センス,L:ロジック,A:アノマリー,F:共通)
  type: string;           // タイプ識別子(A:アクティブ,M:メンタル,T:トラブル)
  detail_default: string; // 未強化時のカード効果説明(HTMLを含む文字列)
  detail_evolve: string;  // 強化後のカードの効果説明※カスタムで強化される効果箇所は`{0}`,`{1}`と置換する(HTMLを含む文字列)
  detail_custom: string;  // カカスタム後の効果説明のデフォルト値※detail_evolveの`{0}`,`{1}`箇所。`,`区切りとする
  plv: number;            // 開放Plv(数値)、制限のないものは0
  cost_type: string;      // コスト識別値(energy:体力,no_fine:元気不可,conce:集中,condi:好調,imp:好印象,motiv:やる気,fp:全力値)
  cost: number;           // コスト消費数(負の数を含む数値)
  no_duplicate: number;   // 重複識別値(0:重複可,1:重複不可,2:重複不可、カスタムで重複可)
  once: number;           // レッスン中1回(0:制限なし,1:制限あり,2:制限あり、カスタムで制限なし)
  price: number;          // 相談で購入時の定価
  custom_limit: number;   // カスタム可能回数(0〜3)
  ef_param: number;       // 以降、効果フラグ(空:対象効果なし,1:未強化時にあり,2:強化で追加,3:カスタムで追加可能 ※各フラグ名はskill_effect.csv参照)
  ef_fine: number;
  ef_duration: number;
  ef_reserve: number;
  ef_half_energy: number;
  ef_minus_energy: number;
  ef_evolve: number;
  ef_draw: number;
  ef_shuffle: number;
  ef_add_use: number;
  ef_add_active: number;
  ef_add_turn: number;
  ef_add_param: number;
  ef_invalid: number;
  ef_up_energy: number;
  ef_add_energy: number;
  ef_sub_param: number;
  ef_slump: number;
  ef_no_add_fine: number;
  ef_condi: number;
  ef_best_condi: number;
  ef_conce: number;
  ef_minus_condi: number;
  ef_minus_conce: number;
  ef_imp: number;
  ef_motiv: number;
  ef_minus_imp: number;
  ef_minus_motiv: number;
  ef_serv: number;
  ef_strong: number;
  ef_fullpower: number;
  ef_growth: number;
  ef_minus_fullpower: number;
  ef_off_compass: number;
  ef_fix_compass: number;
  ef_heal_energy: number;
  ef_decrease_energy: number;
};