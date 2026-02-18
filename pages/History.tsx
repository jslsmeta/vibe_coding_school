
import React from 'react';
import { TIMELINE_DATA } from '../constants';
import { Calendar, CheckCircle2 } from 'lucide-react';

const History: React.FC = () => {
  return (
    <div className="py-20 bg-[#f9fafb]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">함께 걸어온 바이브코딩의 시간</h2>
          <p className="text-slate-600">2015년의 첫 시작부터 현재까지, 한결같은 마음으로 학생들의 미래를 고민해왔습니다.</p>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 -translate-x-1/2 w-0.5 h-full bg-emerald-100 hidden md:block" />

          <div className="space-y-16">
            {TIMELINE_DATA.map((event, idx) => (
              <div key={event.year} className={`flex flex-col md:flex-row items-center gap-8 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                {/* Year Bubble */}
                <div className="flex-1 w-full">
                  <div className={`p-8 bg-white rounded-3xl shadow-sm border border-gray-100 fade-in ${idx % 2 === 0 ? 'md:ml-auto md:text-left' : 'md:mr-auto md:text-right'}`}>
                    <div className="flex items-center space-x-2 text-emerald-600 font-bold mb-4 md:hidden">
                       <Calendar className="w-5 h-5" />
                       <span>{event.year}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">{event.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{event.description}</p>
                    <div className="mt-6 flex flex-wrap gap-2">
                       <div className="flex items-center space-x-1 bg-emerald-50 text-emerald-600 px-3 py-1 rounded-full text-xs font-semibold">
                         <CheckCircle2 className="w-3 h-3" />
                         <span>주요 성과</span>
                       </div>
                    </div>
                  </div>
                </div>

                {/* Center Circle */}
                <div className="relative z-10 w-12 h-12 bg-white border-4 border-emerald-500 rounded-full flex items-center justify-center hidden md:flex">
                  <span className="text-xs font-bold text-emerald-600">{event.year}</span>
                </div>

                <div className="flex-1 hidden md:block" />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-24 text-center bg-emerald-600 rounded-3xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">내일을 향한 바이브코딩의 약속</h3>
          <p className="opacity-90 leading-relaxed max-w-2xl mx-auto mb-8">
            우리는 기술의 변화 속에서도 변하지 않는 가치, <br />
            '스스로 생각하는 힘'을 길러주기 위해 멈추지 않고 발전할 것입니다.
          </p>
          <button className="bg-white text-emerald-600 font-bold px-8 py-4 rounded-xl hover:bg-slate-100 transition-all">
            교육 문의하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default History;
