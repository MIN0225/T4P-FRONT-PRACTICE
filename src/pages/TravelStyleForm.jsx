import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

const categories = [
  "체험 액티비티",
  "SNS 핫플레이스",
  "자연과 함께",
  "유명 관광지",
  "여유롭게 힐링",
  "문화 · 예술 · 역사",
  "여행지 느낌 물씬",
  "쇼핑",
  "관광보다는 먹방",
  "독특한 이색 장소",
  "확실한 일정",
  "대중교통 위주",
];

const companions = [
  "혼자",
  "친구와",
  "연인과",
  "배우자와",
  "아이와",
  "부모님과",
];

export default function TravelStyleForm() {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <div className="max-w-4xl mx-auto py-16 px-4">
        <h1 className="text-2xl font-bold text-center mb-2">여행 성향 분석</h1>
        <p className="text-center text-gray-500 mb-10">
          나의 여행 스타일을 분석하여 맞춤형 여행 코스를 추천해드립니다.
        </p>

        <div className="bg-gray-50 rounded-xl p-6 mb-10">
          <h2 className="text-lg font-semibold mb-4">좋아하는 여행 스타일</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {categories.map((item) => (
              <label key={item} className="flex items-center gap-2">
                <input type="checkbox" className="form-checkbox accent-black" />
                <span>{item}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="bg-gray-50 rounded-xl p-6 mb-10">
          <h2 className="text-lg font-semibold mb-4">누구와 떠나나요</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {companions.map((item) => (
              <label key={item} className="flex items-center gap-2">
                <input type="checkbox" className="form-checkbox accent-black" />
                <span>{item}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={() => navigate("/TravelPlan")}
            className="bg-blue-600 text-white rounded px-6 py-3 hover:bg-blue-800 transition"
          >
            분석 시작하기
          </button>
        </div>
      </div>
    </>
  );
}
