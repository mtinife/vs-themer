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
          <span className="aside-header">theme type</span>
          <div className="vsc__themer__type__btn">
            <span className="modeActive">dark</span>
            <span>light</span>
          </div>
        </div>
        <div className="vsc__themer__sections">
          <span className="aside-header aside-container">sections</span>
          <ul>
            <li><i class="ri-layout-top-line"></i><span>title bar</span></li>
            <li><i class="ri-layout-left-line"></i><span>activity bar</span></li>
            <li><i class="ri-layout-right-2-line"></i><span>scrollbar control</span></li>
            <li><i class="ri-edit-box-line"></i><span>editor</span></li>
            <li><i class="ri-layout-left-2-line"></i><span>side bar</span></li>
            <li><i class="ri-layout-bottom-line"></i><span>status bar</span></li>
            <li><i class="ri-terminal-window-fill"></i><span>terminal</span></li>
          </ul>
        </div>
        <button className="aside-container asideBtnStyle">Get Theme JSON</button>
      </aside>
      <section className="vsc__themer__preview">
        
      </section>
    </section>
  </>
}

