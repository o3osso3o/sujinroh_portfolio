import './Header.css'

const navigation_items = [
  { label: 'Home', href: '#home', available: true },
  { label: 'About', href: '#about', available: true },
  { label: 'Works', href: '#works', available: true },
  { label: 'Contact', href: '#contact', available: true },
]

export default function Header() {
  return (
    <header className="site_header">
      <nav aria-label="주요 메뉴">
        <ul className="navigation_list">
          {navigation_items.map((item) => (
            <li key={item.href}>
              {item.available ? (
                <a href={item.href}>{item.label}</a>
              ) : (
                <span role="link" aria-disabled="true" aria-label={`${item.label} (준비 중)`}>
                  {item.label}
                </span>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
