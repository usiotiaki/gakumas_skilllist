'use client'

import Image from "next/image";
import { useState } from 'react';
import skillCards from "./data/skill_list.json";
import skillEffects from "./data/skill_effect.json";

export default function Home() {
  const [evolve, setChecked] = useState(false);
  const [open, setOpen] = useState(false);
  const plans = {
    F: "フリー",
    S: "センス",
    L: "ロジック",
    A: "アノマリー"
  };

  const [selectedId, setSelectedId] = useState<number>(skillCards[0].ID);
  const selectedCard = skillCards.find((card) => card.ID === selectedId);

  return (
    <div className="w-full">
      <header className="w-full shadow-md">
        <h1>【学マス】スキルカード図鑑【非公式】</h1>
      </header>
      <main className="w-full">
        <div className="w-full pt-2 px-2">
          {/* フィルタ */}
          <div className="relative w-full pt-2">
            <h2 className="px-2 rounded-full bg-linear-to-r from-amber-500 to-white text-white">フィルタ</h2>
            <button
              onClick={() => setOpen(!open)}
              className="act_h absolute top-2 right-2 border border-gray-200 py-1 px-2 rounded-full bg-white shadow-sm text-xs"
            >
              {open ? '閉じる' : '開く'}
            </button>
            <form action="" id="filter"
              className={`relative my-2 border border-gray-200 rounded-lg px-2 bg-white shadow-md overflow-scroll transition-all duration-300 ${open ? 'open' : ''}`}>
              {/* テキスト検索 */}
              <div className="border-b py-2">
                <h3 className="text-sm text-gray-500 font-semibold">テキスト検索</h3>
                <input name="text" type="text" placeholder="テキスト入力" className="w-[180px] border rounded-tr-md rounded-bl-md p-1 text-xs"/>
              </div>
              {/* プラン */}
              <div className="border-b py-2">
                <h3 className="text-sm text-gray-500 font-semibold">プラン</h3>
                <label className="checklabel"><input name="plan" type="checkbox" value="F" /><span>共通</span></label>
                <label className="checklabel"><input name="plan" type="checkbox" value="S" /><span>センス</span></label>
                <label className="checklabel"><input name="plan" type="checkbox" value="L" /><span>ロジック</span></label>
                <label className="checklabel"><input name="plan" type="checkbox" value="A" /><span>アノマリー</span></label>
              </div>
              {/* レアリティ */}
              <div className="border-b py-2">
                <h3 className="text-sm text-gray-500 font-semibold">レアリティ</h3>
                <label className="checklabel"><input name="rarity" type="checkbox" value="N" /><span>N(基本系)</span></label>
                <label className="checklabel"><input name="rarity" type="checkbox" value="R" /><span>R(青枠)</span></label>
                <label className="checklabel"><input name="rarity" type="checkbox" value="SR" /><span>SR(金枠)</span></label>
                <label className="checklabel"><input name="rarity" type="checkbox" value="SSR" /><span>SSR(虹枠)</span></label>
                <label className="checklabel"><input name="rarity" type="checkbox" value="unique" /><span>固有</span></label>
                <label className="checklabel"><input name="rarity" type="checkbox" value="support" /><span>サポートカード</span></label>
              </div>
              {/* スキルカードタイプ */}
              <div className="border-b py-2">
                <h3 className="text-sm text-gray-500 font-semibold">スキルカードタイプ</h3>
                <label className="checklabel"><input name="type" type="checkbox" value="A" /><span>アクティブ</span></label>
                <label className="checklabel"><input name="type" type="checkbox" value="M" /><span>メンタル</span></label>
                <label className="checklabel"><input name="type" type="checkbox" value="T" /><span>トラブル</span></label>
              </div>
              {/* 重複 */}
              <div className="border-b py-2">
                <h3 className="text-sm text-gray-500 font-semibold">重複</h3>
                <label className="checklabel"><input name="no_duplicate" type="checkbox" value="1" /><span>可</span></label>
                <label className="checklabel"><input name="no_duplicate" type="checkbox" value="0" /><span>不可</span></label>
              </div>
              {/* レッスン中使用回数 */}
              <div className="border-b py-2">
                <h3 className="text-sm text-gray-500 font-semibold">レッスン中使用回数</h3>
                <label className="checklabel"><input name="once" type="checkbox" value="1" /><span>1回</span></label>
                <label className="checklabel"><input name="once" type="checkbox" value="0" /><span>制限なし</span></label>
              </div>
              {/* 効果検索 */}
              <div className="border-b py-2">
                <h3 className="text-sm text-gray-500 font-semibold">効果検索</h3>
                {/* 効果リスト */}
                { skillEffects.map( effect => { return (
                  <label key={effect.efID} className="checklabel">
                    <input name="effect" type="checkbox" value={effect.efCode} />
                    <span>{effect.efName}</span>
                  </label>
                ); }) }
              </div>
              {/* 検索オプション */}
              <div className="py-2">
                <h3 className="text-sm text-gray-500 font-semibold">検索オプション</h3>
                {/* カスタム効果を反映 */}
                <label className="checklabel"><input name="custom_effect" type="checkbox" value="1" defaultChecked /><span>カスタム後の効果を含む</span></label>
                {/* OR検索 or AND検索 */}
                <div>
                  <span className="text-xs">効果の検索方法</span>&nbsp;
                  <label className="inline-flex items-center cursor-pointer">
                    <span className="mr-1 text-xs font-medium text-gray-900 dark:text-gray-300">OR</span>
                    <input type="checkbox" name="search_method" value="and" className="sr-only peer" />
                    <div className="relative w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-gray-200 dark:peer-checked:bg-gray-200"></div>
                    <span className="ml-1 text-xs font-medium text-gray-900 dark:text-gray-300">AND</span>
                  </label>
                </div>
              </div>
              <button type="button" className="btn-reset sticky bottom-0 right-0 bg-white border border-gray-200 py-1 px-2 rounded-full shadow-sm text-xs">フィルタをリセット</button>
            </form>
          </div>
        </div>
        <div id="skill_area" className="w-full flex flex-col md:flex-row">
          {/* 左カラム カード詳細 */}
          <div id="skill_detail" className="relative w-full md:w-96">
            <div className="sticky top-0 left-0 flex flex-wrap">
              <div className="w-full p-2">
                <div className="mb-2 w-full p-2 border border-gray-400 rounded-sm bg-white">
                  <div className="flex flex-wrap">
                    <p className="pr-2 text-xs">
                      <Image
                        src={`/skillcard/${selectedCard?.ID}_${evolve?"evolve":"default"}.png`}
                        alt={`${selectedCard?.name}${evolve&&selectedCard?.type!="T"?"+":""}のアイコン`}
                        width={50}
                        height={50}
                      />
                      <span className="block">{ plans[selectedCard?.plan] }</span>
                      <span className="block">
                        <span className="text-[.6rem] text-gray-400">開放PLv&nbsp;</span>{selectedCard?.plv}
                      </span>
                    </p>
                    <div className="flex-1">
                      <div className="mb-1 w-full border-b flex justify-between">
                        <h3 className="text-sm font-semibold">{selectedCard?.name}{evolve&&selectedCard?.type!="T"?"+":""}</h3>
                        {selectedCard?.type != "T" && (
                        <p className="text-xs">
                          <label className="checklabel block">
                            <input
                              type="checkbox"
                              checked={evolve}
                              onChange={(e) => setChecked(e.target.checked)}
                            />
                            <span className="act_h block rounded-full shadow-xs border border-gray-200 bg-white px-2 text-xs">強化</span>
                          </label>
                        </p>
                        )}
                      </div>
                      {/* カード効果説明 */}
                      <p
                        className="text-xs"
                        dangerouslySetInnerHTML={{ __html: evolve
                          ? selectedCard?.detail_evolve
                          : selectedCard?.detail_default }}>
                      </p>
                    </div>
                  </div>
                </div>
                {/* カスタマイズ */}
                {selectedCard?.custom_limit > 0 && (
                <div className="w-full">
                  <p className="mb-2 text-[.6rem] text-center font-semibold border-b border-green-500">
                    <span className="inline-block px-2 border-t border-green-500 rounded-t-lg text-white bg-green-500">
                      カスタマイズ可能数 {0}/{selectedCard?.custom_limit}
                    </span>
                  </p>
                  <div className="flex space-x-2 text-xs text-center">
                    <p className="w-1/3">
                      <label className="custom_btn act_h relative block mb-1 rounded-md bg-white">
                        <input type="checkbox" className="hidden" />
                        <span className="custom_btn_span relative block border-3 border-white rounded-md shadow-md bg-linear-to-r from-red-500 to-amber-500">
                          <span className="block py-2 text-white">
                            {"カスタム１-１"}
                          </span>
                          <span className="block leading-none">
                            <span className="relative inline-block border-t-3 border-white rounded-t-lg w-[5rem] leading-none bg-white">
                              <Image
                                src="/icon/p.png"
                                alt="Pポイント"
                                width={12}
                                height={12}
                                className="inline absolute left-1 top-0"
                              />
                              40
                            </span>
                          </span>
                        </span>
                        <span className="check"></span>
                      </label>
                      <span className="block text-center text-gray-400">
                        ↓
                      </span>
                      <label className="custom_btn act_h relative block mb-1 rounded-md bg-white">
                        <input type="checkbox" className="hidden" />
                        <span className="custom_btn_span relative block border-3 border-white rounded-md shadow-md bg-linear-to-r from-red-500 to-amber-500">
                          <span className="block py-2 text-white">
                            {"カスタム１-２"}
                          </span>
                          <span className="block leading-none">
                            <span className="relative inline-block border-t-3 border-white rounded-t-lg w-[5rem] leading-none bg-white">
                              <Image
                                src="/icon/p.png"
                                alt="Pポイント"
                                width={12}
                                height={12}
                                className="inline absolute left-1 top-0"
                              />
                              70
                            </span>
                          </span>
                        </span>
                        <span className="check"></span>
                      </label>
                      <span className="block text-center text-gray-400">
                        ↓
                      </span>
                      <label className="custom_btn act_h relative block mb-1 rounded-md bg-white">
                        <input type="checkbox" className="hidden" />
                        <span className="custom_btn_span relative block border-3 border-white rounded-md shadow-md bg-linear-to-r from-red-500 to-amber-500">
                          <span className="block py-2 text-white">
                            {"カスタム１-３"}
                          </span>
                          <span className="block leading-none">
                            <span className="relative inline-block border-t-3 border-white rounded-t-lg w-[5rem] leading-none bg-white">
                              <Image
                                src="/icon/p.png"
                                alt="Pポイント"
                                width={12}
                                height={12}
                                className="inline absolute left-1 top-0"
                              />
                              70
                            </span>
                          </span>
                        </span>
                        <span className="check"></span>
                      </label>
                    </p>
                    <p className="w-1/3">
                      <label className="custom_btn act_h relative block mb-1 rounded-md bg-white">
                        <input type="checkbox" className="hidden" />
                        <span className="custom_btn_span relative block border-3 border-white rounded-md shadow-md bg-linear-to-r from-purple-500 to-fuchsia-400">
                          <span className="block py-2 text-white">
                            {"カスタム２-１"}
                          </span>
                          <span className="block leading-none">
                            <span className="relative inline-block border-t-3 border-white rounded-t-lg w-[5rem] leading-none bg-white">
                              <Image
                                src="/icon/p.png"
                                alt="Pポイント"
                                width={12}
                                height={12}
                                className="inline absolute left-1 top-0"
                              />
                              70
                            </span>
                          </span>
                        </span>
                        <span className="check"></span>
                      </label>
                      <span className="block text-center text-gray-400">
                        ↓
                      </span>
                      <label className="custom_btn act_h relative block mb-1 rounded-md bg-white">
                        <input type="checkbox" className="hidden" />
                        <span className="custom_btn_span relative block border-3 border-white rounded-md shadow-md bg-linear-to-r from-sky-500 to-cyan-300">
                          <span className="block py-2 text-white">
                            {"カスタム２-２"}
                          </span>
                          <span className="block leading-none">
                            <span className="relative inline-block border-t-3 border-white rounded-t-lg w-[5rem] leading-none bg-white">
                              <Image
                                src="/icon/p.png"
                                alt="Pポイント"
                                width={12}
                                height={12}
                                className="inline absolute left-1 top-0"
                              />
                              70
                            </span>
                          </span>
                        </span>
                        <span className="check"></span>
                      </label>
                    </p>
                    <p className="w-1/3">
                      <label className="custom_btn act_h relative block mb-1 rounded-md bg-white">
                        <input type="checkbox" className="hidden" />
                        <span className="custom_btn_span relative block border-3 border-white rounded-md shadow-md bg-linear-to-r from-green-400 to-lime-400">
                          <span className="block py-2 text-white">
                            {"カスタム３"}
                          </span>
                          <span className="block leading-none">
                            <span className="relative inline-block border-t-3 border-white rounded-t-lg w-[5rem] leading-none bg-white">
                              <Image
                                src="/icon/p.png"
                                alt="Pポイント"
                                width={12}
                                height={12}
                                className="inline absolute left-1 top-0"
                              />
                              100
                            </span>
                          </span>
                        </span>
                        <span className="check"></span>
                      </label>
                    </p>
                  </div>
                  <div className="flex px-2">
                    <span className="block flex-1 mr-2 h-[.6rem] border-b border-gray-400"></span>
                    <button className="act_h block rounded-full shadow-xs border border-gray-200 bg-white px-2 text-[.6rem]">
                      リセット
                    </button>
                  </div>
                  <p className="text-center px-3 text-sm">
                    <span className="inline-block w-2/5 text-center">
                      <Image
                        src="/icon/p.png"
                        alt="Pポイント"
                        width={20}
                        height={20}
                        className="inline"
                      />&nbsp;
                      必要Pポイント
                    </span>
                    <span className="inline-block w-1/5 text-center">{"-"}</span>
                  </p>
                </div>
                )}
              </div>
            </div>
          </div>
          {/* 右カラム カードリスト */}
          <div className="flex-1 overflow-y-auto">
            <div className="flex flex-wrap">
              { skillCards.map( skillCard => { return (
                <label key={skillCard.ID} className="skill_icon act_h block w-15 p-2">
                  <input type="radio" name="card" value={skillCard.ID} className="hidden"
                    checked={selectedId === skillCard.ID}
                    onChange={() => setSelectedId(skillCard.ID)}
                  />
                  <span className="frame"></span>
                  <Image
                    src={`/skillcard/${skillCard.ID}_default.png`}
                    alt={skillCard.name}
                    width={50}
                    height={50}
                  />
                </label>
              ); }) }
            </div>
          </div>
        </div>
      </main>
      <footer className="w-full">
      </footer>
    </div>

  );
}
