
import React, { useState, useEffect, useCallback } from 'react';
import { ArrowRight, Star, Users, Layout as LayoutIcon, ChevronLeft, ChevronRight } from 'lucide-react';
import { PROGRAMS } from '../constants';

const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      title: "미래를 코딩하는\n바이브코딩 학교",
      desc: "단순한 기술이 아닌, 논리적 사고와 창의력을 교육합니다.",
      img: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2000&auto=format&fit=crop"
    },
    {
      title: "스스로 해결하는\n즐거움을 배웁니다",
      desc: "프로젝트 기반 수업으로 완성되는 나만의 결과물.",
      img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2000&auto=format&fit=crop"
    }
  ];

  const nextSlide = useCallback(() => {
    setCurrentSlide(prev => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <div className="space-y-24 pb-24">
      {/* 1. Hero Section Slider */}
      <section className="relative h-[600px] overflow-hidden bg-slate-900 group/slider">
        {slides.map((slide, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              currentSlide === idx ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="absolute inset-0 bg-black/50 z-10" />
            <img 
              src={slide.img} 
              alt="Hero" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 z-20 flex items-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="max-w-2xl fade-in">
                  <h1 className="text-4xl sm:text-6xl font-extrabold text-white leading-tight mb-6 whitespace-pre-line">
                    {slide.title}
                  </h1>
                  <p className="text-xl text-slate-200 mb-10">
                    {slide.desc}
                  </p>
                  <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                    <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-bold transition-all transform hover:scale-105">
                      프로그램 보기
                    </button>
                    <button className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border border-white/30 px-8 py-4 rounded-lg font-bold transition-all">
                      입학 안내서 다운로드
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Buttons (좌우 버튼) */}
        <button 
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-white/10 text-white hover:bg-white/30 transition-all opacity-0 group-hover/slider:opacity-100 focus:outline-none backdrop-blur-sm"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-8 h-8" />
        </button>
        <button 
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-white/10 text-white hover:bg-white/30 transition-all opacity-0 group-hover/slider:opacity-100 focus:outline-none backdrop-blur-sm"
          aria-label="Next slide"
        >
          <ChevronRight className="w-8 h-8" />
        </button>

        {/* Indicators */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex space-x-3">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`w-12 h-1.5 rounded-full transition-all ${
                currentSlide === idx ? 'bg-emerald-500' : 'bg-white/30'
              }`}
            />
          ))}
        </div>
      </section>

      {/* 2. Photo Gallery & Space */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">아이들이 즐겁게 배우는 공간</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            쾌적한 최신 장비와 협동 학습을 위한 오픈형 공간에서 창의적인 아이디어가 발현됩니다.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 h-[500px]">
          <div className="md:col-span-2 overflow-hidden rounded-2xl group relative">
            <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000" alt="Space 1" className="w-full h-full object-cover transition-transform group-hover:scale-110" />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all" />
          </div>
          <div className="overflow-hidden rounded-2xl group relative">
            <img src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1000" alt="Space 2" className="w-full h-full object-cover transition-transform group-hover:scale-110" />
          </div>
          <div className="overflow-hidden rounded-2xl group relative">
            <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1000" alt="Space 3" className="w-full h-full object-cover transition-transform group-hover:scale-110" />
          </div>
          <div className="md:col-span-1 overflow-hidden rounded-2xl group relative">
            <img src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=1000" alt="Space 4" className="w-full h-full object-cover transition-transform group-hover:scale-110" />
          </div>
          <div className="md:col-span-1 overflow-hidden rounded-2xl group relative">
            <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1000" alt="Space 5" className="w-full h-full object-cover transition-transform group-hover:scale-110" />
          </div>
        </div>
      </section>

      {/* 3. Strength & Programs */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <span className="text-emerald-600 font-bold tracking-wider text-sm uppercase">Curriculum</span>
              <h2 className="text-4xl font-bold text-slate-900 mt-2">바이브코딩만의 교육 강점</h2>
            </div>
            <p className="text-slate-600 max-w-md">
              실질적인 문제 해결 능력을 키우는 단계별 커리큘럼을 통해 학생들은 스스로 사고하는 법을 터득합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PROGRAMS.map((program, idx) => (
              <div key={idx} className="bg-[#f9fafb] p-8 rounded-3xl border border-transparent hover:border-emerald-200 hover:bg-white hover:shadow-xl transition-all group">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  {idx === 0 ? <Star className="w-6 h-6" /> : idx === 1 ? <Users className="w-6 h-6" /> : <LayoutIcon className="w-6 h-6" />}
                </div>
                <span className="text-emerald-600 text-xs font-bold px-2 py-1 bg-emerald-50 rounded-md">{program.level}</span>
                <h3 className="text-xl font-bold text-slate-900 mt-4 mb-3">{program.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {program.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {program.tags.map(tag => (
                    <span key={tag} className="text-[10px] bg-white border border-slate-200 text-slate-500 px-2 py-1 rounded">#{tag}</span>
                  ))}
                </div>
                <button className="flex items-center space-x-2 text-emerald-600 font-bold group-hover:translate-x-2 transition-transform">
                  <span>상세보기</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>

          {/* Stats Summary */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 border-t border-gray-100 pt-16">
            <div className="text-center">
              <div className="text-4xl font-black text-slate-900 mb-2">9+</div>
              <div className="text-sm text-slate-500">교육 역사 (년)</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-slate-900 mb-2">2,500+</div>
              <div className="text-sm text-slate-500">졸업생 수</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-slate-900 mb-2">150+</div>
              <div className="text-sm text-slate-500">대외 경진대회 수상</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-slate-900 mb-2">98%</div>
              <div className="text-sm text-slate-500">학부모 만족도</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
