import { profile } from './data/profile'
import './App.css'

export default function App() {
  return (
    <main className="setup_page">
      <p className="setup_label">STEP 01 · DEVELOPMENT SETUP</p>
      <h1>{profile.name_en} <span>UX/UI Portfolio</span></h1>
      <p className="setup_description">
        프로젝트 초기 설정이 완료되었습니다. 섹션별 디자인과 콘텐츠는 다음 단계에서 구현합니다.
      </p>
    </main>
  )
}
