'use client'

import Image from "next/image";
import { useState } from 'react';
import skillCards from "./data/skill_list.json";
import skillEffects from "./data/skill_effect.json";

export default function Home() {
  const [evolve, setChecked] = useState(false);

  return (
    <div className="w-full">
      <header className="w-full shadow-md">
        <h1>【学マス】スキルカード図鑑【非公式】</h1>
      </header>
      <main className="w-full">
        <div className="w-full p-2">
          <h2>検索</h2>
          <form action="">
            <div className="border-b">
              <h3>テキスト検索</h3>
              <input name="text" type="text" placeholder="テキスト入力" />
            </div>
            <div className="border-b">
              <h3>プラン</h3>
              <label><input name="plan" type="radio" value="F" /> 共通</label>
              <label><input name="plan" type="radio" value="S" /> センス</label>
              <label><input name="plan" type="radio" value="L" /> ロジック</label>
              <label><input name="plan" type="radio" value="A" /> アノマリー</label>
            </div>
            <div className="border-b">
              <h3>スキルカードタイプ</h3>
              <label><input name="type" type="checkbox" value="A" /> アクティブ</label>
              <label><input name="type" type="checkbox" value="M" /> メンタル</label>
              <label><input name="type" type="checkbox" value="T" /> トラブル</label>
            </div>
            <div className="border-b">
              <h3>重複</h3>
              <label><input name="no_duplicate" type="checkbox" value="1" /> 可</label>
              <label><input name="no_duplicate" type="checkbox" value="0" /> 不可</label>
            </div>
            <div className="border-b">
              <h3>レッスン中使用回数</h3>
              <label><input name="once" type="checkbox" value="1" /> 1回</label>
              <label><input name="once" type="checkbox" value="0" /> 制限なし</label>
            </div>
            <div className="border-b">
              <h3>効果</h3>
              { skillEffects.map( effect => { return (
                <label key={effect.efID}>
                  <input name="effect" type="checkbox" value={effect.efCode} />
                  {effect.efName}
                </label>
              ); }) }
            </div>
          </form>
        </div>
        <div className="w-full flex">
          {/* 左カラム カード詳細 */}
          <div className="w-96">
            <div className="flex flex-wrap">
              <div className="w-full p-2">
                <div className="mb-2 w-full p-2 border border-gray-400 rounded-sm">
                  <div className="flex flex-wrap">
                    <p className="pr-2 text-xs">
                      <Image
                        src={`/skillcard/${skillCards[0].ID}_${evolve?"evolve":"default"}.png`}
                        alt={`${skillCards[0].name}${evolve?"+":""}`}
                        width={50}
                        height={50}
                      />
                      <span className="block">フリー</span>
                      <span className="block">
                        <span className="text-[.6rem] text-gray-400">開放PLv&nbsp;</span>{skillCards[0].plv}
                      </span>
                    </p>
                    <div className="flex-1">
                      <div className="mb-1 w-full border-b flex justify-between">
                        <h3 className="text-sm font-semibold">{skillCards[0].name}{evolve?"+":""}</h3>
                        <p className="text-xs">
                          <label className="block">
                            <input
                              type="checkbox"
                              checked={evolve}
                              onChange={(e) => setChecked(e.target.checked)}
                            />
                            強化
                          </label>
                        </p>
                      </div>
                      {/* カード効果説明 */}
                      <p
                        className="text-xs"
                        dangerouslySetInnerHTML={{ __html: evolve
                          ? skillCards[0].detail_evolve
                          : skillCards[0].detail_default }}>
                      </p>
                    </div>
                  </div>
                </div>
                {/* カスタマイズ */}
                <div className="w-full">
                  <p className="mb-2 text-[.6rem] text-center font-semibold border-b border-green-500">
                    <span className="inline-block px-2 border-t border-green-500 rounded-t-lg text-white bg-green-500">
                      カスタマイズ可能数 {0}/{3}
                    </span>
                  </p>
                  <div className="flex space-x-2 text-xs text-center">
                    <p className="w-1/3">
                      <label className="relative block mb-2 border-3 border-white rounded-md shadow-md bg-linear-to-r from-red-500 to-amber-500">
                        <input type="checkbox" className="hidden" />
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
                      </label>
                      <label className="relative block mt-4 mb-2 border-3 border-white rounded-md shadow-md bg-linear-to-r from-red-500 to-amber-500">
                        <span className="absolute left-[50%] -translate-x-1/2 -translate-y-full text-gray-400">
                          ↓
                        </span>
                        <input type="checkbox" className="hidden" />
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
                      </label>
                    </p>
                    <p className="w-1/3">
                      <label className="relative block mb-2 border-3 border-white rounded-md shadow-md bg-linear-to-r from-purple-500 to-fuchsia-400">
                        <input type="checkbox" className="hidden" />
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
                      </label>
                      <label className="relative block mt-4 mb-2 border-3 border-white rounded-md shadow-md bg-linear-to-r from-sky-500 to-cyan-300">
                        <span className="absolute left-[50%] -translate-x-1/2 -translate-y-full text-gray-400">
                          ↓
                        </span>
                        <input type="checkbox" className="hidden" />
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
                      </label>
                    </p>
                    <p className="w-1/3">
                      <label className="relative block mb-2 border-3 border-white rounded-md shadow-md bg-linear-to-r from-green-400 to-lime-400">
                        <input type="checkbox" className="hidden" />
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
                      </label>
                    </p>
                  </div>
                  <div className="flex px-2">
                    <span className="block flex-1 mr-2 h-[.6rem] border-b border-gray-400"></span>
                    <button className="block rounded-full shadow-xs border border-gray-200 px-2 text-[.6rem]">
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
              </div>
            </div>
          </div>
          {/* 右カラム カードリスト */}
          <div className="flex-1">
            <div className="flex flex-wrap">
              { skillCards.map( skillCard => { return (
                <a key={skillCard.ID}
                  className="block w-15 p-2"
                >
                  <Image
                    src={`/skillcard/${skillCard.ID}_default.png`}
                    alt={skillCard.name}
                    width={50}
                    height={50}
                  />
                </a>
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
