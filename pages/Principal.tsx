
import React from 'react';
import { Quote, BookOpen, Target, Sparkles } from 'lucide-react';

const Principal: React.FC = () => {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-20 items-start">
          {/* Profile Section */}
          <div className="lg:w-1/3 w-full space-y-8">
            <div className="relative">
              <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl bg-slate-100">
                <img 
                  src="https://i.ibb.co/jZ33Lm1s/image.png" 
                  alt="교장 선생님" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-emerald-600 text-white p-6 rounded-2xl shadow-xl hidden sm:block">
                <p className="text-sm opacity-80 mb-1">바이브코딩 학교장</p>
                <p className="text-xl font-bold">김바이브 (Vibe Kim)</p>
              </div>
            </div>

            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
              <h4 className="text-lg font-bold text-slate-900 mb-6 flex items-center space-x-2">
                <BookOpen className="w-5 h-5 text-emerald-600" />
                <span>주요 약력</span>
              </h4>
              <ul className="space-y-4 text-sm text-slate-600">
                <li className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="font-semibold text-slate-800">코딩 교육 경력</span>
                  <span>20년 이상</span>
                </li>
                <li className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="font-semibold text-slate-800">대표 이력</span>
                  <span>전 글로벌 IT 테크팀 리더</span>
                </li>
                <li className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="font-semibold text-slate-800">연구 분야</span>
                  <span>PBL 교수설계 및 알고리즘</span>
                </li>
                <li>
                  <p className="font-semibold text-slate-800 mb-1">활동 내역</p>
                  <p className="leading-relaxed">다수 학교 코딩 캠프 자문위원, '미래 코딩 교육' 저자, 소프트웨어 혁신 공로상 수상</p>
                </li>
              </ul>
            </div>
          </div>

          {/* Letter Section */}
          <div className="lg:w-2/3 w-full">
            <div className="relative">
              <Quote className="absolute -top-10 -left-6 w-16 h-16 text-emerald-50 opacity-100 z-0" />
              <div className="relative z-10">
                <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-8 leading-tight">
                  "코딩은 단순한 언어가 아닌,<br />
                  세상을 바라보는 새로운 렌즈입니다."
                </h2>
                
                <div className="space-y-6 text-slate-700 leading-loose text-lg mb-12">
                  <p>
                    반갑습니다. 바이브코딩 학교장 김바이브입니다. 2015년 처음 바이브코딩의 문을 열었을 때, 
                    제 머릿속에 가득했던 생각은 단 하나였습니다. '어떻게 하면 아이들이 즐거우면서도 깊이 있게 생각할 수 있을까?'였습니다.
                  </p>
                  <p>
                    현대 사회에서 코딩은 선택이 아닌 필수 교양이 되었습니다. 하지만 중요한 것은 문법을 외우는 기술적 습득이 아닙니다. 
                    문제에 직면했을 때 좌절하지 않고, 이를 작은 단위로 쪼개어 분석하고, 논리적인 해결책을 찾아가는 <strong>'컴퓨팅 사고력'</strong>입니다.
                  </p>
                  <p>
                    우리 학교는 학생들이 실패를 두려워하지 않는 곳이기를 바랍니다. 코드가 작동하지 않을 때, 왜 그런지 고민하는 과정이 곧 성장이기 때문입니다. 
                    바이브코딩은 단순히 프로그래머를 양성하는 곳이 아닙니다. 자신의 상상을 코드로 실현하고, 세상을 더 나은 곳으로 만드는 <strong>'창의적 문제 해결사'</strong>를 키워냅니다.
                  </p>
                  <p>
                    학생 한 명 한 명의 호기심이 코딩이라는 도구를 만나 빛날 수 있도록, 
                    저와 모든 교직원은 정성을 다해 지도하겠습니다.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                  <div className="p-6 bg-emerald-50 rounded-2xl border border-emerald-100">
                    <Target className="w-8 h-8 text-emerald-600 mb-4" />
                    <h5 className="font-bold text-slate-900 mb-2 text-lg">성장 중심 수업</h5>
                    <p className="text-sm text-slate-600">결과물보다 과정을 중요하게 생각하며, 시행착오를 통한 깊은 학습을 유도합니다.</p>
                  </div>
                  <div className="p-6 bg-emerald-50 rounded-2xl border border-emerald-100">
                    <Sparkles className="w-8 h-8 text-emerald-600 mb-4" />
                    <h5 className="font-bold text-slate-900 mb-2 text-lg">몰입형 환경</h5>
                    <p className="text-sm text-slate-600">학생들이 스스로 몰입하여 아이디어를 구현할 수 있는 최적의 학습 환경을 제공합니다.</p>
                  </div>
                </div>

                <div className="pt-12 border-t border-slate-100 flex items-center justify-between">
                  <div className="text-sm text-slate-500">
                    <p>바이브코딩 학교</p>
                    <p>학교장 김바이브 배상</p>
                  </div>
                  <img src="https://picsum.photos/seed/signature/200/80" alt="Signature" className="opacity-60 grayscale" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Principal;
