
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY || "";

export const getGeminiResponse = async (userMessage: string) => {
  if (!API_KEY) return "API Key가 설정되지 않았습니다.";

  const ai = new GoogleGenAI({ apiKey: API_KEY });
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userMessage,
      config: {
        systemInstruction: `당신은 '바이브코딩 학교'의 전문 상담사입니다. 
        사용자에게 친절하고 전문적인 말투로 코딩 교육의 중요성과 바이브코딩 학교의 강점을 설명해야 합니다. 
        바이브코딩은 2015년부터 시작된 전문 기관이며, 초중고 맞춤형 PBL(Project Based Learning) 교육을 합니다.
        답변은 3문장 이내로 명확하게 해주세요.`,
        temperature: 0.7,
      },
    });

    return response.text || "죄송합니다. 현재 상담이 어렵습니다.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "상담 서비스에 연결할 수 없습니다. 잠시 후 다시 시도해 주세요.";
  }
};
