import puppeteer from 'puppeteer'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'
import { createServer } from 'node:http'
import { createReadStream } from 'node:fs'

const __dirname = dirname(fileURLToPath(import.meta.url))
const distDir = join(__dirname, 'dist')

async function serveStatic(dir, port = 8080) {
  return new Promise((resolve) => {
    const server = createServer((req, res) => {
      let path = req.url === '/' ? '/index.html' : req.url
      const filePath = join(dir, path)
      createReadStream(filePath)
        .on('error', () => {
          res.statusCode = 404
          res.end('Not found')
        })
        .pipe(res)
    }).listen(port, () => resolve(server))
  })
}

async function test() {
  const server = await serveStatic(distDir, 8080)

  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  })

  const page = await browser.newPage()

  // Capturer les logs console et erreurs
  page.on('console', (msg) => {
    console.log('CONSOLE:', msg.type(), msg.text())
  })
  page.on('pageerror', (err) => {
    console.error('PAGE ERROR:', err)
  })

  console.log('Loading http://localhost:8080/')
  await page.goto('http://localhost:8080/', {
    waitUntil: 'networkidle0',
    timeout: 30000,
  })

  const appContent = await page.$eval('#app', (el) => el.innerHTML)
  console.log('Contenu de #app :', appContent)

  await browser.close()
  server.close()
}

test().catch(console.error)
