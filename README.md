# Sujin Roh — UX/UI Portfolio

React + TypeScript + Vite를 사용하는 개인 포트폴리오입니다.
현재는 **STEP 03 ABOUT 구현 완료** 상태입니다. SELECTED WORKS, CONTACT, FOOTER는 아직 구현하지 않았습니다.

## 실행

프로젝트 폴더의 VSCode 터미널에서 실행합니다.

```sh
npm install
npm run dev
```

이미 패키지가 설치되어 있다면 `npm run dev`만 실행합니다.
터미널에 표시되는 Local 주소(기본 `http://localhost:5173`)를 브라우저에서 엽니다.
서버 종료는 `Ctrl+C`입니다.

```sh
npm run lint      # ESLint 코드 검사
npm run typecheck # TypeScript 검사
npm run build     # 타입 검사 + dist 폴더에 프로덕션 빌드
npm run preview   # 빌드 결과 로컬 확인
```

새 환경에서 잠금 파일과 동일하게 설치하려면 `npm ci`를 사용합니다.
Vite 실행에는 Node.js 20.19+ 또는 22.12+가 필요합니다. 초기 작업 환경은 Node 26입니다.

## 구조

```text
docs/project_guidelines.md  프로젝트 기준 및 추후 결정 사항
public/                    변환 없이 제공할 정적 파일 (현재 비어 있음)
src/
  assets/                  이미지 등 번들 자산 (현재 비어 있음)
  components/              향후 공통 UI (현재 비어 있음)
  data/
    profile.ts             제공된 기본 프로필
    projects.ts            프로젝트 데이터 자리 (빈 배열)
    README.md              데이터 작성 원칙
  styles/
    fonts.css              Inter Latin 로컬 폰트 선언
    tokens.css             색상, 폰트, 간격, 포커스 토큰
    global.css             기본 스타일 및 Reduced Motion
  types/portfolio.ts       UI와 독립적인 데이터 타입
  App.tsx / App.css        초기 설정 확인 화면
  main.tsx                 React 진입점 및 CSS/폰트 로딩
index.html                 한국어 문서, title 및 description
eslint.config.js           TypeScript / React Hooks / Refresh 검사
tsconfig*.json             엄격한 타입 검사 및 빌드 설정
vite.config.ts             React Vite 플러그인
package.json               패키지 및 실행 명령
package-lock.json          설치 버전 고정
```

## 스타일과 폰트

- 일반 CSS 사용. 클래스·일반 변수·함수·데이터 키는 snake_case.
- 컴포넌트/타입은 PascalCase, React 및 외부 API 이름은 공식 문법 유지.
- Inter Variable의 Latin 폰트만 패키지에서 불러와 사이트와 함께 제공합니다. Google Fonts 요청은 없습니다.
- 한글은 Apple SD Gothic Neo → Malgun Gothic → Noto Sans KR → 시스템 폰트 순으로 사용합니다. 한글 폰트는 별도 다운로드하지 않습니다.
- `@fontsource-variable/inter` 폰트는 패키지에 포함된 OFL 라이선스를 따릅니다.
- 기본 테마는 Light Mode이며 CSS 변수로 확장할 수 있습니다.

## STEP 02 구현 및 브라우저 확인

- `src/components/Header/`: 중앙 정렬 메뉴. Home은 #home으로 이동합니다. 나머지는 준비 중인 비활성 링크이며 향후 앵커는 데이터에 보관합니다.
- `src/components/Hero/`: 사진과 타이포를 하나의 비율 고정 그룹으로 구성합니다. 페이지는 세로 Flex, HERO는 남은 높이를 채우는 Grid로 그룹 전체를 정중앙에 배치합니다.
- 사진은 그룹 내부 절대 위치, 텍스트는 z-index 1입니다. `--portrait_position`으로 사진 크롭 위치를 조정합니다.
- 그룹 너비는 화면 너비와 높이에 맞춰 제한하고, 글자는 그룹 기준 cqw 단위로 비례 조절합니다. 매우 낮은 화면에서는 최소 높이를 유지하며 세로 스크롤을 허용합니다.
- 마우스가 HERO 너비의 58%를 넘으면 두 번째 사진, 42%보다 왼쪽이면 첫 번째 사진으로 바뀝니다. 최소 전환 간격은 400ms입니다.
- 매 움직임마다 React 상태를 변경하지 않고 전환 시에만 data 속성을 변경합니다. 영역을 벗어나거나 입력/동작 설정이 바뀌면 첫 사진으로 복귀합니다.
- 터치 및 Reduced Motion 환경에서는 첫 사진만 표시합니다. 두 이미지는 동일 인물의 대체 표현으로 하나의 접근 가능한 이미지 설명을 공유합니다.
- Storytelling URL은 `src/data/profile.ts`에서 공통 관리합니다.
- 새 패키지는 설치하지 않았습니다. 제공된 PNG 원본을 사용합니다.

확인 항목:
1. 1440px, 768px, 375px 및 320px 너비에서 메뉴와 Portfolio가 잘리지 않는지 확인합니다.
2. 전체 비주얼 그룹이 헤더 아래 영역의 중앙에 있고 외부 링크가 오른쪽 하단에 있는지 확인합니다.
3. 마우스를 좌우로 움직일 때 사진 위치는 고정되고 이미지만 교체되는지 확인합니다.
4. 모바일 및 동작 줄이기 설정에서 첫 번째 사진이 유지되는지 확인합니다.
5. Tab으로 Home과 외부 링크의 포커스를 확인하고, 외부 링크가 새 탭에서 열리는지 확인합니다.

ESLint, TypeScript, 프로덕션 빌드 통과. 연결 가능한 브라우저가 없어 실제 화면 검수는 미완료입니다.
다음 섹션은 별도 요청을 받은 후 구현합니다. SSG, Formspree, PDF, 배포는 아직 추가하지 않았습니다.

## 의존성 검사 메모

초기 설치의 `npm audit`에서 ESLint 계열 개발 의존성의 `minimatch` 관련 중간 위험도 경고 12건이 보고되었습니다.
호환성을 깨뜨리는 강제 다운그레이드나 메이저 버전 override는 적용하지 않았습니다.
해당 도구는 배포된 앱의 실행 코드에는 포함되지 않으며, 후속 호환 업데이트 시 다시 확인합니다.

## STEP 03 — ABOUT

- `src/data/about.ts`: 소개, 학력, 경력, 자격증, 스킬 그룹, FAQ 질문/답변 및 사진 데이터. React에 의존하지 않아 PDF 페이지에서 재사용할 수 있습니다.
- `src/types/portfolio.ts`: ProfileEntry, Skill, SkillGroup, FaqItem, ProfileImage 타입 추가.
- `src/components/About/About.tsx`: 소개 및 데이터 기반 프로필/스킬 렌더링.
- `src/components/About/Faq.tsx`: 기본 전체 닫힘, 한 번에 하나만 열림. 네이티브 버튼으로 Enter/Space 조작, aria-expanded/aria-controls 연결. 답변 영역은 닫힐 때 접근성 트리에서도 제외됩니다. 열릴 때 짧은 페이드, Reduced Motion에서는 효과 없음.
- `src/components/About/About.css`: 전용 클래스 범위, 4열 → 1088px 이하 2열 → 640px 이하 1열. FAQ도 모바일에서 사진/질문 세로 배치.
- `src/App.tsx`, `src/App.css`: ABOUT 연결 및 기존 헤더 60px를 제외한 첫 화면 높이 보존. HERO 소스/스타일과 HEADER 스타일은 유지했습니다.
- HEADER About 메뉴만 활성화했습니다.

추후 필요한 자료: FAQ 사진(파일명, 대체 텍스트), 네 질문의 최종 답변, 사용 가능한 스킬 로고 자산. 현재 사진은 명시적 빈 영역, 답변은 ‘답변 준비 중입니다.’, 스킬은 로고가 아닌 텍스트 약자로 표시합니다.

검증: ESLint, TypeScript, 프로덕션 빌드 통과. 실제 브라우저 검수는 미완료입니다. `npm run dev` 후 1440px / 768px / 375px에서 열 재배치, 가로 넘침, About 메뉴 이동, Tab 및 Enter/Space로 FAQ 동작을 확인하세요.
