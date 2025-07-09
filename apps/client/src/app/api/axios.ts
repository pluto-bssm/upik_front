import axios from "axios";

export async function fetchCategory(category: string) {
  try {
    const response = await axios.post("/api/guides", {
      category: category,
    });
    return response.data;
  } catch (error) {
    console.error("카테고리별 가이드 조회 실패:", error);
    throw error;
  }
}