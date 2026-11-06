# 공통 콘텐츠 데이터

React와 DOM에 의존하지 않는 데이터만 보관합니다. 웹 UI와 향후 PDF 전용 레이아웃에서 함께 사용합니다.

- `profile.ts`: 개인 프로필과 외부 링크.
- `projects.ts`: WORKS의 6개 프로젝트 데이터. `order`로 순서를 지정하며, 미정 상세 정보는 각 프로젝트에서 덮어써 입력합니다.
- `../types/portfolio.ts`: 데이터 타입. 미정 정보는 `null`, 미정 목록은 빈 배열로 표현합니다.
- `about.ts`: 소개, 학력, 경력, 자격증, 스킬, FAQ 및 추후 사진 데이터. 미확정 FAQ 답변과 사진은 null이며 UI에서 준비 중으로 표시합니다.

기여도는 실제 0~100 수치가 제공된 경우에만 입력합니다. `null`을 0%로 표시하지 않습니다.
72초는 `presentation: 'external'`로 구분하고 UX/UI 공통 모달을 사용하지 않습니다.
이미지와 URL이 없는 경우 클릭 가능한 임시 링크나 임의 이미지를 만들지 않습니다.

## WORKS 편집

- `name`, `subtitle`, `project_type`: 프로젝트명, 영문명, 유형.
- `summary`: 카드의 한 줄 소개. `description`: 모달의 상세 소개.
- `keywords`, `my_role`, `tools`: 키워드 3~4개, 담당 역할, 실제 사용 도구.
- `contribution`: `{ planning: null, design: null, development: null }`에서 확인된 값만 0~100 숫자로 변경합니다.
- `thumbnail`, `image`: 카드와 모달 이미지. `{ src: '/images/project.webp', alt: '이미지 설명', width: 1200, height: 900, fit: 'contain', position: 'center' }` 형태입니다. 예시 경로에 실제 파일을 넣거나 import한 이미지 경로를 사용하세요. 기본 `contain`은 전체 이미지를 보존하며 `cover`와 `position`으로 잘림을 조정할 수 있습니다. 모달 이미지를 생략하면 썸네일을 사용합니다.
- `process_url`, `live_url`: 실제 링크가 있을 때만 모달 버튼이 표시됩니다.
- `presentation: 'external'`인 72초는 `external_url`에 실제 YouTube 주소를 넣으면 외부 링크가 활성화됩니다. 모달은 열리지 않습니다.
