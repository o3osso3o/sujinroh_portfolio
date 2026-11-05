# Sujin Roh — UX/UI Portfolio

## 협업 범위
- 단계별로 구현하고 각 단계 완료 후 다음 요청을 기다린다.
- 현재 STEP 03: ABOUT까지 구현한다. HEADER/HERO 디자인과 인터랙션은 유지하고 이후 섹션은 다음 요청을 기다린다.
- 디자인 레퍼런스는 섹션별로 제공받는다. 임의의 이미지, URL, 기여도, 프로젝트 설명을 생성하지 않는다.

## 구현 기준
- React + TypeScript + Vite, 일반 CSS. 불필요한 라이브러리 추가 금지.
- CSS 클래스, 일반 변수/함수, 데이터 속성은 snake_case.
- 컴포넌트와 타입은 PascalCase. HTML/React/외부 API의 공식 이름은 유지한다.
- Swiss / Editorial Minimal: 타이포그래피, 여백, 그리드 중심. 현재 Light Mode만 구현한다.
- WCAG 2.2 AA 목표: 시맨틱 구조, 키보드, 포커스, 대비, Reduced Motion, 오류 안내를 확인한다.
- 프로필과 프로젝트 데이터는 UI에서 분리하고 향후 별도 PDF 레이아웃에서 재사용한다. PDF 기능은 현재 구현하지 않는다.

## 향후 페이지 구성
HEADER → HERO → ABOUT(FAQ 포함) → SELECTED WORKS → CONTACT → FOOTER.
- HEADER: Home / About / Works / Contact 앵커와 반응형 내비게이션.
- HERO: 인물 사진 2장, Portfolio / ROH / SUJIN. 마우스 좌우 구역에 따라 사진을 전환한다. 터치 및 Reduced Motion은 첫 사진을 유지한다.
- Storytelling Portfolio 링크는 HERO와 FOOTER 모두 배치. URL은 `src/data/profile.ts`에서 공통 관리한다.
- ABOUT: 소개, 학력, 경력, 자격증, 스킬. 웹디자인개발기능사는 필기 합격으로 표기.
- FAQ: 사진과 키보드 접근 가능한 아코디언. 답변은 미정.
- 프로젝트 순서: 오늘도락, Simmons Global, 태극당, 광동제약, TOT, 72초.
- 앞의 5개는 공통 모달. 기여도는 Planning / Design / Development 실제 수치만 사용.
- 모달: 이미지, 제목, 유형/키워드, 소개, 역할, 기여도, 도구, View Process / View Live. 포커스 이동/복귀와 Esc 지원.
- 72초: Art Department / Video Production 경력. 일반 UX/UI 모달 제외. 전체 제작/연출 담당으로 표현하지 않는다.
- CONTACT: 2열, Name / Email / Subject(일반 텍스트) / Message, Formspree. Form ID 추후 제공.
- 이메일: o3osso3o@gmail.com (`mailto:` 사용).
- FOOTER: © 2026 SUJIN ROH / Storytelling Portfolio / Back to Top. GitHub 링크 제외.
- 스킬 로고는 별도 요청 없이 다운로드하지 않는다.

## 추후 결정
- 실제 이미지와 대체 텍스트, 프로젝트 설명/역할/기여도/링크, FAQ 답변.
- 섹션별 디자인 레퍼런스, Formspree ID, 배포 도메인.
- Vercel 배포 전 canonical, sitemap, Open Graph 이미지 확정.
- SSG 도입 전 CSR 대비 장단점과 구현 난이도를 설명한다.
