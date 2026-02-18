
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, Bot, User, PhoneCall } from 'lucide-react';
import { getGeminiResponse } from '../services/geminiService';
import { ChatMessage } from '../types';

const AICounselor: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: '안녕하세요! 바이브코딩 상담 챗봇입니다. 교육 과정이나 역사에 대해 궁금한 점이 있으신가면 무엇이든 물어보세요.' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMsg = inputValue.trim();
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setInputValue('');
    setIsLoading(true);

    const response = await getGeminiResponse(userMsg);
    setMessages(prev => [...prev, { role: 'model', text: response }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end space-y-4">
      {isOpen && (
        <div className="bg-white w-80 sm:w-96 h-[500px] rounded-2xl shadow-2xl flex flex-col border border-gray-100 overflow-hidden fade-in mb-2">
          {/* Header */}
          <div className="bg-emerald-600 p-4 flex justify-between items-center text-white">
            <div className="flex items-center space-x-2">
              <Bot className="w-5 h-5" />
              <span className="font-bold">바이브코딩 AI 상담사</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-emerald-700 p-1 rounded">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Chat area */}
          <div ref={scrollRef} className="flex-grow p-4 overflow-y-auto space-y-4 bg-slate-50">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`flex max-w-[80%] space-x-2 ${msg.role === 'user' ? 'flex-row-reverse space-x-reverse' : 'flex-row'}`}>
                  <div className={`p-2 rounded-lg ${msg.role === 'user' ? 'bg-emerald-600 text-white' : 'bg-white border border-gray-200 shadow-sm text-slate-800'}`}>
                    <p className="text-sm whitespace-pre-wrap">{msg.text}</p>
                  </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white border border-gray-200 shadow-sm p-3 rounded-lg">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce delay-100"></div>
                    <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce delay-200"></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input area */}
          <div className="p-4 bg-white border-t border-gray-100 flex items-center space-x-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="궁금한 내용을 입력하세요..."
              className="flex-grow text-sm border-gray-200 rounded-lg p-2 focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 outline-none"
            />
            <button
              onClick={handleSend}
              disabled={isLoading}
              className="bg-emerald-600 text-white p-2 rounded-lg hover:bg-emerald-700 transition-colors disabled:opacity-50"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Action Buttons Row */}
      <div className="flex items-center space-x-3">
        {/* Inquiry Button */}
        {!isOpen && (
          <button
            className="bg-white text-emerald-600 border-2 border-emerald-600 px-6 py-4 rounded-full shadow-lg hover:shadow-xl hover:bg-emerald-50 transition-all flex items-center space-x-2 font-bold"
            onClick={() => window.location.href = 'tel:02-1234-5678'}
          >
            <PhoneCall className="w-5 h-5 text-emerald-600" />
            <span className="hidden sm:inline">상담 문의</span>
          </button>
        )}

        {/* AI Chat Button */}
        {!isOpen && (
          <button
            onClick={() => setIsOpen(true)}
            className="bg-emerald-600 text-white p-4 rounded-full shadow-lg hover:bg-emerald-700 hover:scale-105 transition-all flex items-center space-x-2"
          >
            <MessageSquare className="w-6 h-6" />
            <span className="hidden sm:inline font-bold">상담 시작하기</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default AICounselor;
