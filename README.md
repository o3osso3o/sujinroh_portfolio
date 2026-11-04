# Sujin Roh — UX/UI Portfolio

React + TypeScript + Vite를 사용하는 개인 포트폴리오입니다.
현재는 **STEP 01 초기 설정만 완료**한 상태이며 실제 섹션 UI는 없습니다.

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

## 브라우저 확인

- 밝은 배경에 STEP 01, Sujin Roh, UX/UI Portfolio, 초기 설정 안내가 보이는지 확인합니다.
- 모바일 너비와 200% 확대에서도 내용이 잘리거나 가로 스크롤이 생기지 않는지 확인합니다.
- 실제 섹션, 이미지, 링크, 폼은 아직 표시하지 않습니다.

## 향후 작업

먼저 HEADER/HERO 디자인 레퍼런스를 받아 구조와 반응형 기준을 결정합니다.
프로젝트 정보, 기여도, URL 및 이미지는 제공된 내용만 사용합니다.

현재는 기본 CSR입니다. CSR은 설정이 단순하지만 초기 HTML에 주요 콘텐츠가 없으므로,
실제 콘텐츠 구현 전 빌드 시 HTML을 생성하는 SSG와 비교하여 도입 방식을 설명하고 결정합니다.
SSG는 검색 및 공유에 유리한 초기 HTML을 제공하지만 사전 렌더링과 브라우저 전용 코드 처리가 추가됩니다.
이번 단계에서는 SSG 도구, Formspree, PDF 기능 및 Vercel 배포를 추가하지 않습니다.
배포 도메인과 공유 이미지가 정해지면 canonical, sitemap, Open Graph를 완성합니다.

## 의존성 검사 메모

초기 설치의 `npm audit`에서 ESLint 계열 개발 의존성의 `minimatch` 관련 중간 위험도 경고 12건이 보고되었습니다.
호환성을 깨뜨리는 강제 다운그레이드나 메이저 버전 override는 적용하지 않았습니다.
해당 도구는 배포된 앱의 실행 코드에는 포함되지 않으며, 후속 호환 업데이트 시 다시 확인합니다.
