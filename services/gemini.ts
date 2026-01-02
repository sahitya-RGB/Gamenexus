
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const checkListingSafety = async (description: string, price: number, game: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Analyze this gaming marketplace listing for potential fraud or policy violations. 
      Game: ${game}
      Price: ₹${price}
      Description: ${description}`,
      config: {
        systemInstruction: "You are a fraud detection expert for a gaming marketplace. Identify risks like account phishing, unrealistic pricing, or suspicious delivery promises. Return results in JSON format.",
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            isSafe: { type: Type.BOOLEAN },
            riskScore: { type: Type.NUMBER, description: "0 to 100 risk score" },
            concerns: { type: Type.ARRAY, items: { type: Type.STRING } },
            recommendation: { type: Type.STRING }
          },
          required: ["isSafe", "riskScore", "recommendation"]
        }
      }
    });
    
    return JSON.parse(response.text);
  } catch (error) {
    console.error("AI Fraud Check Error:", error);
    return { isSafe: true, riskScore: 0, concerns: [], recommendation: "Error performing check" };
  }
};

export const getSmartRecommendations = async (userHistory: string[]) => {
    try {
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: `Based on a user's interest in: ${userHistory.join(', ')}, suggest 3 gaming asset categories they might like.`,
        config: {
            responseMimeType: "application/json",
            responseSchema: {
                type: Type.ARRAY,
                items: {
                    type: Type.OBJECT,
                    properties: {
                        category: { type: Type.STRING },
                        reason: { type: Type.STRING }
                    }
                }
            }
        }
      });
      return JSON.parse(response.text);
    } catch (error) {
        return [];
    }
}
