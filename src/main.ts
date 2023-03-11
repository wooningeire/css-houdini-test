import './app.css'
import App from './App.svelte'

import paintWorkletUrl from "./worklet?url";


CSS.paintWorklet.addModule(paintWorkletUrl);

const app = new App({
  target: document.getElementById('app')
})

export default app
