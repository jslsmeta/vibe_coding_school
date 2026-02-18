
import React, { useState } from 'react';
import { Menu, X, Code2, PhoneCall } from 'lucide-react';
import { NAV_ITEMS, COLORS } from '../constants';

interface LayoutProps {
  children: React.ReactNode;
  activeTab: string;
  setActiveTab: (path: string) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, activeTab, setActiveTab }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 naver-shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            {/* Logo */}
            <div 
              className="flex items-center cursor-pointer space-x-2"
              onClick={() => setActiveTab('/')}
            >
              <div className="bg-emerald-600 p-1.5 rounded-lg">
                <Code2 className="text-white w-6 h-6" />
              </div>
              <span className="text-xl font-bold text-slate-900">바이브코딩</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.path}
                  onClick={() => setActiveTab(item.path)}
                  className={`text-sm font-medium transition-colors ${
                    activeTab === item.path 
                    ? 'text-emerald-600 border-b-2 border-emerald-600 pb-1' 
                    : 'text-slate-600 hover:text-emerald-500'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Desktop CTA Placeholder - Removed as requested to move button */}
            <div className="hidden md:block w-32"></div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-slate-600 hover:text-emerald-600 p-2"
              >
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 animate-slideDown">
            <div className="px-4 py-4 space-y-3">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.path}
                  onClick={() => {
                    setActiveTab(item.path);
                    setIsMenuOpen(false);
                  }}
                  className="block w-full text-left px-4 py-2 text-slate-600 font-medium hover:bg-emerald-50 hover:text-emerald-600 rounded-lg transition-all"
                >
                  {item.label}
                </button>
              ))}
              <button className="w-full flex justify-center items-center space-x-2 bg-emerald-600 text-white px-4 py-3 rounded-lg text-sm font-bold mt-4">
                <PhoneCall className="w-4 h-4" />
                <span>지금 바로 상담하기</span>
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 px-4 border-t border-slate-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center space-x-2 text-white mb-6">
              <Code2 className="w-6 h-6 text-emerald-500" />
              <span className="text-xl font-bold">바이브코딩 학교</span>
            </div>
            <p className="text-sm leading-relaxed mb-4">
              2015년부터 이어온 전문 코딩 교육의 자부심.<br />
              아이들의 잠재력을 현실의 코드로 바꾸는 교육을 실현합니다.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-6">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li>주소: 서울특별시 강남구 코딩대로 123, 바이브빌딩</li>
              <li>전화: 02-1234-5678</li>
              <li>이메일: hello@vibecoding.edu</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Newsletter</h4>
            <p className="text-sm mb-4">최신 교육 소식과 이벤트 정보를 받아보세요.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="이메일 입력" 
                className="bg-slate-800 border-none rounded-l-lg px-4 py-2 text-white w-full focus:ring-1 focus:ring-emerald-500"
              />
              <button className="bg-emerald-600 text-white px-4 py-2 rounded-r-lg hover:bg-emerald-700 transition-all font-medium">
                구독
              </button>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-slate-800 text-center text-xs">
          © 2024 바이브코딩 학교. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Layout;
