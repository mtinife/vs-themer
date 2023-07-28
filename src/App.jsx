import './style.css'
import logoLight from '../public/assets/logo-white.svg'
import 'remixicon/fonts/remixicon.css'
import '../node_modules/@vscode/codicons/dist/codicon.css'

export default function App() {
  return <>
    <section className="vsc__themer">
      <aside className="vsc__themer__menu">
        <div className="vsc__themer__menu__logo aside-container">
            <img src={logoLight} alt="Dynamic VS Code Themer Logo Light" />
            <span>VS Code Themer</span>
        </div>
        <div className="vsc__themer__name aside-container">
          <input type="text" placeholder="Theme Name" />
        </div>
        <div className="vsc__themer__type aside-container">
          <span>theme type</span>
          <div className="vsc__themer__type__btn">
            <span>dark</span>
            <span>light</span>
          </div>
        </div>
        <div className="vsc__themer__sections">
          <span className="aside-container">sections</span>
          <ul>
            <li className="aside-container"><i class="ri-layout-top-line"></i><span>title bar</span></li>
          </ul>
        </div>
      </aside>
      <section className="vsc__themer__preview">
        
      </section>
    </section>
  </>
}

