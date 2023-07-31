import './style.css'
import logoLight from '/assets/logo-white.svg'
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
            <li className="themer__menu__items__item">
                <i className="ri-layout-top-line"></i>
                <span>Title Bar</span>
                <div className="tooltip">
                    <p>Title Bar Style</p>
                    <div className="pick-a-color">
                        <span>Background</span>
                        <toolcool-color-picker id="titleBarBackground" color="#2B2B2B"></toolcool-color-picker>
                    </div>
                </div>
            </li>
            <li className="themer__menu__items__item">
                <i className="ri-layout-left-line"></i>
                <span>Activity Bar</span>
                <div className="tooltip">
                    <p>Activity Bar Style</p>
                    <div className="pick-a-color">
                        <span>Background</span>
                        <toolcool-color-picker color="#333333"></toolcool-color-picker>
                    </div>
                    <div className="pick-a-color">
                        <span>Foreground</span>
                        <toolcool-color-picker color="#737373"></toolcool-color-picker>
                    </div>
                    <p>Activity Bar Badge Style</p>
                    <div className="pick-a-color">
                        <span>Background</span>
                        <toolcool-color-picker color="#e76ff1"></toolcool-color-picker>
                    </div>
                    <div className="pick-a-color">
                        <span>Foreground</span>
                        <toolcool-color-picker color="#e76ff1"></toolcool-color-picker>
                    </div>
                </div>
            </li>
            <li className="themer__menu__items__item">
                <i className="ri-layout-right-2-line"></i>
                <span>Scrollbar Control</span>
                <div className="tooltip">
                    <p>Scroll Bar Control Style</p>
                    <div className="pick-a-color">
                        <span>Shadow</span>
                        <toolcool-color-picker color="#e76ff1"></toolcool-color-picker>
                    </div>
                    <p>Scroll Bar Control Style</p>
                    <div className="pick-a-color">
                        <span>Background</span>
                        <toolcool-color-picker color="#e76ff1"></toolcool-color-picker>
                    </div>
                    <div className="pick-a-color">
                        <span>Active Background</span>
                        <toolcool-color-picker color="#e76ff1"></toolcool-color-picker>
                    </div>
                    <div className="pick-a-color">
                        <span>Hover Background</span>
                        <toolcool-color-picker color="#e76ff1"></toolcool-color-picker>
                    </div>
                </div>
            </li>
            <li className="themer__menu__items__item">
                <i className="ri-edit-box-line"></i>
                <span>Editor</span>
            </li>
            <li className="themer__menu__items__item">
                <i className="ri-layout-left-2-line"></i>
                <span>Side Bar</span>
                <div className="tooltip">
                    <p>Side Bar Style</p>
                    <div className="pick-a-color">
                        <span>Background</span>
                        <toolcool-color-picker color="#e76ff1"></toolcool-color-picker>
                    </div>
                    <p>Section Header Style</p>
                    <div className="pick-a-color">
                        <span>Background</span>
                        <toolcool-color-picker color="#e76ff1"></toolcool-color-picker>
                    </div>
                    <div className="pick-a-color">
                        <span>Foreground</span>
                        <toolcool-color-picker color="#e76ff1"></toolcool-color-picker>
                    </div>
                </div>
            </li>
            <li className="themer__menu__items__item">
                <i className="ri-layout-bottom-line"></i>
                <span>Status Bar</span>
                <div className="tooltip">
                    <p>Status Bar Style</p>
                    <div className="pick-a-color">
                        <span>Background</span>
                        <toolcool-color-picker color="#e76ff1"></toolcool-color-picker>
                    </div>
                    <div className="pick-a-color">
                        <span>Foreground</span>
                        <toolcool-color-picker color="#e76ff1"></toolcool-color-picker>
                    </div>
                    <p>No Folder Style</p>
                    <div className="pick-a-color">
                        <span>Background</span>
                        <toolcool-color-picker color="#e76ff1"></toolcool-color-picker>
                    </div>
                    <div className="pick-a-color">
                        <span>Foreground</span>
                        <toolcool-color-picker color="#e76ff1"></toolcool-color-picker>
                    </div>
                </div>
            </li>
            <li className="themer__menu__items__item">
                <i className="ri-terminal-window-line"></i>
                <span>Panel</span>
                <div className="tooltip">
                    <p>Panel Style</p>
                    <div className="pick-a-color">
                        <span>Background</span>
                        <toolcool-color-picker color="#e76ff1"></toolcool-color-picker>
                    </div>
                    <div className="pick-a-color">
                        <span>Border</span>
                        <toolcool-color-picker color="#e76ff1"></toolcool-color-picker>
                    </div>
                    <div className="pick-a-color">
                        <span>Drop Background</span>
                        <toolcool-color-picker color="#e76ff1"></toolcool-color-picker>
                    </div>
                    <p>Panel Title Style</p>
                    <div className="pick-a-color">
                        <span>Active Border</span>
                        <toolcool-color-picker color="#e76ff1"></toolcool-color-picker>
                    </div>
                    <div className="pick-a-color">
                        <span>Active Foreground</span>
                        <toolcool-color-picker color="#e76ff1"></toolcool-color-picker>
                    </div>
                    <div className="pick-a-color">
                        <span>Inactive Foreground</span>
                        <toolcool-color-picker color="#e76ff1"></toolcool-color-picker>
                    </div>
                </div>
            </li>
            <li className="themer__menu__items__item">
                <i className="ri-terminal-window-line"></i>
                <span>Terminal</span>
                <div className="tooltip">
                    <p>Terminal Style</p>
                    <div className="pick-a-color">
                        <span>Background</span>
                        <toolcool-color-picker color="#e76ff1"></toolcool-color-picker>
                    </div>
                    <div className="pick-a-color">
                        <span>Foreground</span>
                        <toolcool-color-picker color="#e76ff1"></toolcool-color-picker>
                    </div>
                </div>
            </li>
          </ul>
        </div>
        <button className="aside-container asideBtnStyle">Get Theme JSON</button>
      </aside>
      <section className="vsc__themer__preview">
        <section className="titlebar" id="titlebar">
          <div className="titlebar__left">
              <ul>
                  <li><img src={logoLight} alt="" srcset="" /></li>
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
                      <i style={{fontSize:11}} className='codicon codicon-chrome-minimize'></i>
                  </li>
                  <li>
                      <i style={{fontSize:11}} className='codicon codicon-chrome-maximize'></i>
                  </li>
                  <li>
                      <i style={{fontSize:11}} className='codicon codicon-chrome-close'></i>
                  </li>
              </ul>
          </div>
        </section>
        <section className="activitybar">
            <div className="activitybar__top">
                <div className='activitybar__top__icon__active codicon codicon-files'></div>
                <div className='activitybar__top__icon codicon codicon-search'></div>
                <div className='activitybar__top__icon codicon codicon-source-control'></div>
                <div className='activitybar__top__icon codicon codicon-debug-alt'></div>
                <div className='activitybar__top__icon codicon codicon-extensions'></div>
                <div className='activitybar__top__icon codicon codicon-vm-connect'></div>
            </div>
            <div className="activitybar__bottom">
                <div className='activitybar__top__icon codicon codicon-account'></div>
                <div className='activitybar__top__icon codicon codicon-gear'></div>
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
              <pre>
                <code className="language-javascript line-height">
                  
                </code>
              </pre> 
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
                        <li className="terminal__tabs__left__active">terminal</li>
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
                <div style={{fontSize:9}} className='codicon codicon-circle-large'></div>
                <span>{'PS C:\\Your\\Cool\\Project\\File\\Location'}</span>
                <span className="terminal__editor__cursor"></span>
            </div>
        </section>
        <section className="tabs">
            <div className="tabs__tabs">
                <div className="tabs__tabs_welcome">
                    <div className="tabs__tab">
                        <div className="tabs__tab__icon">
                          <img src="../assets/logo-white.svg" alt="" />
                          <span>Welcome</span>
                        </div>
                        <div className='codicon codicon-chrome-close'></div>
                    </div>
                </div>
                <div className="tabs__tabs__js">
                    <div className="tabs__tab tabs__tab__active">
                        <div className="tabs__tab__icon">
                          <i className="devicon-javascript-plain colored"></i>
                          <span>scripts.js</span>
                        </div>
                        <div style={{fontSize:11}} className='codicon codicon-chrome-close'></div>
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

