// src/resume.ts
import boxen from 'boxen'
import chalk from 'chalk'
import terminalLink from 'terminal-link'

/* ---------- Resume Data ---------- */
import DATA from './resume_data'

/* ---------- Types ---------- */
import type { Education, Experience, Project } from './types'

/* ---------- Helpers ---------- */

const makeLink = (label: string, url?: string) =>
  url ? terminalLink(label, url) : label

function formatColumns(items: string[], cols = 3): string {
  const rows = Math.ceil(items.length / cols)
  const columns: string[][] = Array.from({ length: cols }, (_, c) =>
    items.filter((_, idx) => idx % cols === c)
  )

  const colWidths = columns.map((col) =>
    Math.max(...col.map((s) => s.length), 0)
  )

  const lines: string[] = []
  for (let r = 0; r < rows; r++) {
    const pieces = []
    for (let c = 0; c < cols; c++) {
      const val = columns[c]?.[r] ?? ''
      pieces.push(val.padEnd((colWidths[c] ?? 0) + 2))
    }
    lines.push(pieces.join(''))
  }
  return lines.join('\n')
}

function sectionTitle(title: string) {
  return chalk.bgCyan.black(` ${title.toUpperCase()} `)
}

function formatExperience(exps: Experience[]) {
  return exps
    .map((e) => {
      const header = `${chalk.greenBright(e.role)} ${chalk.dim(
        '•'
      )} ${chalk.yellow(e.company)} ${chalk.dim(
        '(' + e.period + (e.location ? ` — ${e.location}` : '') + ')'
      )}`
      const bullets = e.bullets.map((b) => `${chalk.cyan('›')} ${b}`).join('\n')
      return `${header}\n${bullets}`
    })
    .join('\n\n')
}

function formatProjects(projects: Project[]) {
  return projects
    .map((p) => {
      const title = chalk.magentaBright(p.name)
      const link = p.url ? chalk.blueBright(makeLink('link', p.url)) : ''
      const desc = p.description ? `\n${chalk.white(p.description)}` : ''
      return `${title} ${link}${desc}`
    })
    .join('\n\n')
}

/* ---------- Main print ---------- */

export async function print(): Promise<void> {
  const header = [
    chalk.bold.whiteBright(DATA.name),
    chalk.cyanBright(DATA.title),
    '',
    `${chalk.yellow(DATA.phone)} ${chalk.dim('•')} ${chalk.blue(DATA.email)}`,
    `${chalk.dim('GitHub:')} ${makeLink(
      'himjyotisarma',
      DATA.github
    )} ${chalk.dim('•')} ${chalk.dim('LinkedIn:')} ${makeLink(
      'profile',
      DATA.linkedin
    )}`,
  ].join('\n')

  const content = [
    header,
    '',
    sectionTitle('Summary'),
    DATA.summary,
    '',
    sectionTitle('Skills'),
    formatColumns(DATA.skills),
    '',
    sectionTitle('Experience'),
    formatExperience(DATA.experience),
    '',
    sectionTitle('Projects'),
    formatProjects(DATA.projects),
    '',
    sectionTitle('Education'),
    DATA.education
      .map(
        (e) =>
          `${chalk.green(e.degree)} — ${chalk.yellow(e.school)} ${chalk.dim(
            '(' + e.year + (e.location ? `, ${e.location}` : '') + ')'
          )}`
      )
      .join('\n'),
    '',
    sectionTitle('Languages'),
    DATA.languages
      .map((l) => `${chalk.white(l.lang)} — ${chalk.dim(l.level)}`)
      .join('\n'),
  ].join('\n\n')

  const boxed = boxen(content, {
    padding: 1,
    margin: 1,
    borderStyle: 'double',
    borderColor: 'cyan',
  })

  console.log(boxed)
}
