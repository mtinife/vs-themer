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
            <li><i className="ri-layout-top-line"></i><span>title bar</span></li>
            <li><i className="ri-layout-left-line"></i><span>activity bar</span></li>
            <li><i className="ri-layout-right-2-line"></i><span>scrollbar control</span></li>
            <li><i className="ri-edit-box-line"></i><span>editor</span></li>
            <li><i className="ri-layout-left-2-line"></i><span>side bar</span></li>
            <li><i className="ri-layout-bottom-line"></i><span>status bar</span></li>
            <li><i className="ri-terminal-window-fill"></i><span>terminal</span></li>
          </ul>
        </div>
        <button className="aside-container asideBtnStyle">Get Theme JSON</button>
      </aside>
      <section className="vsc__themer__preview">
        <section className="titlebar" id="titlebar">
          <div className="titlebar__left">
              <ul>
                  <li><img src="./images/logo-white.svg" alt="" srcset="" /></li>
                  <li>File</li>
                  <li>Edit</li>
                  <li>Selection</li>
                  <li>View</li>
                  <li>Go</li>
                  <li>Run</li>
                  <li>Terminal</li>
                  <li>Help</li>
              </ul>
          </div>
          <div className="titlebar__center">
              scripts.js <span className="dot"></span> Very Cool Project <span className="dot"></span> Visual Studio Code
          </div>
          <div className="titlebar__right">
              <ul>
                  <li>
                      <i className='codicon codicon-chrome-minimize'></i>
                  </li>
                  <li>
                      <i className='codicon codicon-chrome-maximize'></i>
                  </li>
                  <li>
                      <i className='codicon codicon-chrome-close'></i>
                  </li>
              </ul>
          </div>
        </section>
        <section className="activitybar">
            <div className="activitybar__top">
                <div className='codicon codicon-files'></div>
                <div className='codicon codicon-search'></div>
                <div className='codicon codicon-source-control'></div>
                <div className='codicon codicon-debug-alt'></div>
                <div className='codicon codicon-extensions'></div>
                <div className='codicon codicon-vm-connect'></div>
            </div>
            <div className="activitybar__bottom">
                <div className='codicon codicon-account'></div>
                <div className='codicon codicon-gear'></div>
            </div>
        </section>
        <section className="statusbar">
            <div className="statusbar__remote">
                <div className='codicon codicon-remote'></div>
            </div>
            <div className="statusbar__items">
                <div className="statusbar__items__left">
                    <div className='codicon codicon-error'></div>
                    <span>0</span>
                    <div className='codicon codicon-warning'></div>
                    <span>0</span>
                </div>
                <div className="statusbar__items__right">
                    <span>Layout: US</span>
                    <div className='codicon codicon-feedback'></div>
                    <div className='codicon codicon-bell-dot'></div>
                </div>
            </div>
        </section>
        <section className="sidebar">
            <div className="sidebar__top">
                <div className="sidebar__explorer">
                    <span>explorer</span>
                    <div className='codicon codicon-ellipsis'></div>
                </div>
                <div className="sidebar__top__project">
                    <div className="sidebar__dropdown">
                        <div className='codicon codicon-chevron-down'></div>
                        <span>Very Cool project Workspace</span>
                    </div>
                </div>
            </div>
            <div className="sidebar__bottom">
                <div className="sidebar__outline">
                    <div className="sidebar__dropdown">
                        <div className='codicon codicon-chevron-right'></div>
                            <span>outline</span>
                    </div>
                </div>
                <div className="sidebar__timeline">
                    <div className="sidebar__dropdown">
                        <div className='codicon codicon-chevron-right'></div>
                        <span>timeline</span>
                    </div>
                </div>
            </div>
        </section>
        <section className="editor">
            <div className="editor__program">
                <ul className="editor__program__nums">
                    <li>1 <div className='codicon codicon-folding-expanded'></div></li>
                    <li>2 <div className='codicon codicon-blank'></div></li>
                    <li>3 <div className='codicon codicon-blank'></div></li>
                    <li>4 <div className='codicon codicon-blank'></div></li>
                    <li>5 <div className='codicon codicon-blank'></div></li>
                    <li>6 <div className='codicon codicon-blank'></div></li>
                    <li>7 <div className='codicon codicon-blank'></div></li>
                    <li>8 <div className='codicon codicon-blank'></div></li>
                    <li>9 <div className='codicon codicon-blank'></div></li>
                    <li>10 <div className='codicon codicon-blank'></div></li>
                    <li>11 <div className='codicon codicon-blank'></div></li>
                    <li>12 <div className='codicon codicon-blank'></div></li>
                    <li>13 <div className='codicon codicon-blank'></div></li>
                    <li>14 <div className='codicon codicon-blank'></div></li>
                    <li>15 <div className='codicon codicon-blank'></div></li>
                </ul>
                <ul className="editor__program__code">

                </ul>
            </div>
            <div className="editor__minimap"></div>
        </section>
        <section className="scrollbar">
            <div className="scrollbar__bar"></div>
            <div className="scrollbar__cursorpoint"></div>
        </section>
        <section className="terminal">
            <div className="terminal__tabs">
                <div className="terminal__tabs__left">
                    <ul>
                        <li>problems</li>
                        <li>output</li>
                        <li>debug console</li>
                        <li>terminal</li>
                        <li>comments</li>
                    </ul>
                </div>
                <div className="terminal__tabs__right">
                    <div className='codicon codicon-split-horizontal'></div>
                    <div className='codicon codicon-trash'></div>
                    <div className='codicon codicon-ellipsis'></div>
                    <div className='codicon codicon-chevron-up'></div>
                    <div className='codicon codicon-chrome-close'></div>
                </div>
            </div>
            <div className="terminal__editor">
                <div className='codicon codicon-circle-large'></div>
                <span>{'PS C:\\Your\\Cool\\Project\\File\\Location'}</span>
                <span className="terminal__editor__cursor"></span>
            </div>
        </section>
        <section className="tabs">
            <div className="tabs__tabs">
                <div className="tabs__tabs_welcome">
                    <div className="tabs__tab">
                        <img src="./images/logo-white.svg" alt="" />
                        <span>Welcome</span>
                        <div className='codicon codicon-chrome-close'></div>
                    </div>
                </div>
                <div className="tabs__tabs__js">
                    <div className="tabs__tab tabs__tab__active">
                        <i className="ri-javascript-fill"></i>
                        <span>scripts.js</span>
                        <div className='codicon codicon-chrome-close'></div>
                    </div>
                </div>
            </div>
            <div className="tabs__icons">
                <div className='codicon codicon-split-horizontal'></div>
                <div className='codicon codicon-ellipsis'></div>
            </div>
        </section> 
      </section>
    </section>
  </>
}

