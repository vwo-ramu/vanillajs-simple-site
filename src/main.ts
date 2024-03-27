import './style.scss'
import { setupCounter } from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `

  <nav>
    <ul>
      <li><strong>Acme Corp</strong></li>
    </ul>
    <ul>
      <li><a href="#">About</a></li>
      <li><a href="#">Services</a></li>
      <li><a href="#">Products</a></li>
    </ul>
  </nav>

  <main class="container">
    <h1>Sample VWO Testing</h1>

    <ul>
      <li>
        <a href="https://vwo.com/" target="_blank">
          VWO Website
        </a>
      </li>

      <li>
        <a href="https://help.vwo.com/hc/en-us" target="_blank">
        VWO KB articles
        </a>
      </li>
    </ul>

        
    

    <div class="card">
      <button id="counter" type="button"></button>
    </div>
  </main>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
