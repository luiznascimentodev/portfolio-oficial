<template>
  <div class="advanced-code-particles">
    <!-- Terminal/IDE Style Particles -->
    <div
      v-for="terminal in terminalParticles"
      :key="`terminal-${terminal.id}`"
      class="absolute terminal-particle opacity-10"
      :style="{
        left: terminal.x + '%',
        top: terminal.y + '%',
        animationDelay: terminal.delay + 's',
        animationDuration: terminal.duration + 's'
      }"
    >
      <div
        class="bg-gray-800 rounded-lg border border-gray-600 shadow-xl"
        :style="{ width: terminal.width + 'px', height: terminal.height + 'px' }"
      >
        <!-- Terminal Header -->
        <div class="bg-gray-700 rounded-t-lg p-2 flex items-center">
          <div class="flex space-x-1">
            <div class="w-2 h-2 bg-red-500 rounded-full"></div>
            <div class="w-2 h-2 bg-yellow-500 rounded-full"></div>
            <div class="w-2 h-2 bg-green-500 rounded-full"></div>
          </div>
        </div>

        <!-- Terminal Content -->
        <div class="p-2 space-y-1">
          <div
            v-for="(line, index) in terminal.lines"
            :key="index"
            class="h-1 rounded"
            :class="line.class"
            :style="{ width: line.width }"
          ></div>
        </div>
      </div>
    </div>

    <!-- Code Editor Snippets -->
    <div
      v-for="snippet in codeSnippets"
      :key="`snippet-${snippet.id}`"
      class="absolute code-snippet opacity-8"
      :style="{
        left: snippet.x + '%',
        top: snippet.y + '%',
        animationDelay: snippet.delay + 's',
        animationDuration: snippet.duration + 's'
      }"
    >
      <div class="bg-gray-900 rounded border border-gray-700 p-3 text-xs font-mono">
        <div class="text-blue-400">{{ snippet.comment }}</div>
        <div class="text-emerald-400">{{ snippet.code }}</div>
      </div>
    </div>

    <!-- API/Data Flow Particles -->
    <div
      v-for="api in apiParticles"
      :key="`api-${api.id}`"
      class="absolute api-particle"
      :style="{
        left: api.x + '%',
        top: api.y + '%',
        animationDelay: api.delay + 's',
        animationDuration: api.duration + 's'
      }"
    >
      <svg
        :width="api.size"
        :height="api.size"
        viewBox="0 0 100 100"
        class="drop-shadow-lg opacity-20"
      >
        <!-- Data Flow Visualization -->
        <g v-if="api.type === 'dataflow'">
          <!-- Nodes -->
          <circle cx="20" cy="20" r="8" :fill="api.color" opacity="0.6"/>
          <circle cx="80" cy="20" r="8" :fill="api.color" opacity="0.6"/>
          <circle cx="50" cy="50" r="10" :fill="api.color" opacity="0.8"/>
          <circle cx="20" cy="80" r="8" :fill="api.color" opacity="0.6"/>
          <circle cx="80" cy="80" r="8" :fill="api.color" opacity="0.6"/>

          <!-- Connections -->
          <line x1="20" y1="20" x2="50" y2="50" :stroke="api.color" stroke-width="2" opacity="0.4"/>
          <line x1="80" y1="20" x2="50" y2="50" :stroke="api.color" stroke-width="2" opacity="0.4"/>
          <line x1="50" y1="50" x2="20" y2="80" :stroke="api.color" stroke-width="2" opacity="0.4"/>
          <line x1="50" y1="50" x2="80" y2="80" :stroke="api.color" stroke-width="2" opacity="0.4"/>
        </g>

        <!-- Database Schema -->
        <g v-else-if="api.type === 'database'">
          <rect x="10" y="20" width="80" height="15" :fill="api.color" opacity="0.3" rx="2"/>
          <rect x="10" y="40" width="80" height="15" :fill="api.color" opacity="0.5" rx="2"/>
          <rect x="10" y="60" width="80" height="15" :fill="api.color" opacity="0.4" rx="2"/>
          <!-- Connection lines -->
          <line x1="30" y1="35" x2="30" y2="40" :stroke="api.color" stroke-width="1"/>
          <line x1="70" y1="55" x2="70" y2="60" :stroke="api.color" stroke-width="1"/>
        </g>

        <!-- Cloud/Server -->
        <g v-else-if="api.type === 'cloud'">
          <path d="M25 40c-5 0-10 5-10 10s5 10 10 10h50c8 0 15-7 15-15s-7-15-15-15c-1 0-2 0-3 1-3-8-11-14-20-14-8 0-15 4-19 10-3-2-6-3-8-3z"
                :fill="api.color" opacity="0.4"/>
          <!-- Server lines inside cloud -->
          <rect x="35" y="45" width="30" height="3" :fill="api.color" opacity="0.8"/>
          <rect x="35" y="50" width="25" height="3" :fill="api.color" opacity="0.6"/>
          <rect x="35" y="55" width="28" height="3" :fill="api.color" opacity="0.7"/>
        </g>
      </svg>
    </div>

    <!-- Tech Icons -->
    <div
      v-for="tech in techParticles"
      :key="`tech-${tech.id}`"
      class="absolute tech-particle opacity-15"
      :style="{
        left: tech.x + '%',
        top: tech.y + '%',
        animationDelay: tech.delay + 's',
        animationDuration: tech.duration + 's'
      }"
    >
      <svg
        :width="tech.size"
        :height="tech.size"
        viewBox="0 0 24 24"
        :fill="tech.color"
        class="drop-shadow-sm"
      >
        <!-- HTML Tag -->
        <path v-if="tech.type === 'html'"
          d="M12 2L2 20h20L12 2zm0 3.5L18.5 18h-13L12 5.5z"/>

        <!-- CSS Box -->
        <g v-else-if="tech.type === 'css'">
          <rect x="4" y="4" width="16" height="16" rx="2" fill="none" stroke="currentColor" stroke-width="2"/>
          <rect x="8" y="8" width="8" height="8" rx="1" :fill="tech.color" opacity="0.6"/>
        </g>

        <!-- JavaScript Curly Braces -->
        <path v-else-if="tech.type === 'js'"
          d="M8 3a2 2 0 0 0-2 2v3a2 2 0 0 1-2 2 2 2 0 0 1 2 2v3a2 2 0 0 0 2 2m8 0a2 2 0 0 0 2-2v-3a2 2 0 0 1 2-2 2 2 0 0 1-2-2V5a2 2 0 0 0-2-2"/>

        <!-- React Component -->
        <g v-else-if="tech.type === 'react'">
          <path d="M12 10.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z"/>
          <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2z" fill="none" stroke="currentColor" stroke-width="1"/>
          <ellipse cx="12" cy="12" rx="8" ry="3" fill="none" stroke="currentColor" stroke-width="1"/>
          <ellipse cx="12" cy="12" rx="8" ry="3" fill="none" stroke="currentColor" stroke-width="1" transform="rotate(60 12 12)"/>
          <ellipse cx="12" cy="12" rx="8" ry="3" fill="none" stroke="currentColor" stroke-width="1" transform="rotate(120 12 12)"/>
        </g>

        <!-- Vue Component -->
        <path v-else-if="tech.type === 'vue'"
          d="M12 2L2 20h20L12 2zm0 3.5L18.5 18h-13L12 5.5z"/>
      </svg>
    </div>

    <!-- Git/Version Control Symbols -->
    <div
      v-for="git in gitParticles"
      :key="`git-${git.id}`"
      class="absolute git-particle opacity-25"
      :style="{
        left: git.x + '%',
        top: git.y + '%',
        animationDelay: git.delay + 's',
        animationDuration: git.duration + 's'
      }"
    >
      <svg
        :width="git.size"
        :height="git.size"
        viewBox="0 0 24 24"
        :fill="git.color"
        class="drop-shadow-md"
      >
        <!-- Git Branch -->
        <path v-if="git.type === 'branch'"
          d="M7 3a3 3 0 000 6 3 3 0 100 6 3 3 0 000 6M14 12a3 3 0 100-6 3 3 0 000 6zM7 12h4"/>

        <!-- Git Commit -->
        <g v-else-if="git.type === 'commit'">
          <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" stroke-width="2"/>
          <circle cx="12" cy="12" r="1" fill="currentColor"/>
        </g>

        <!-- Git Merge -->
        <path v-else-if="git.type === 'merge'"
          d="M7 3a3 3 0 000 6c1.1 0 2.1-.6 2.6-1.5L17 14a3 3 0 100-6c-1.1 0-2.1.6-2.6 1.5L7 3z"/>
      </svg>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'

export default {
  name: 'AdvancedCodeParticles',
  setup() {
    const terminalParticles = ref([])
    const codeSnippets = ref([])
    const apiParticles = ref([])
    const gitParticles = ref([])
    const techParticles = ref([])

    const colors = [
      '#3b82f6', '#10b981', '#8b5cf6', '#f59e0b', '#ef4444', '#06b6d4', '#ec4899', '#84cc16'
    ]

    const codeExamples = [
      { comment: '// React Hook', code: 'useState(0)' },
      { comment: '// Arrow Function', code: '() => { }' },
      { comment: '// Async/Await', code: 'await fetch()' },
      { comment: '// Destructuring', code: 'const { x } = obj' },
      { comment: '// Template String', code: '`Hello ${name}`' },
      { comment: '// CSS Grid', code: 'display: grid' },
      { comment: '// Vue Composition', code: 'const { ref } = vue' },
      { comment: '// TypeScript', code: 'interface User {}' },
      { comment: '// MongoDB Query', code: 'db.find({ })' },
    ]

    const generateTerminalParticles = () => {
      const particles = []
      // Aumentado para 4 terminais com melhor distribuição espacial
      const positions = [
        { x: 10, y: 15 },
        { x: 75, y: 25 },
        { x: 20, y: 70 },
        { x: 80, y: 75 }
      ]

      for (let i = 0; i < 4; i++) {
        const lines = []
        const lineCount = Math.floor(Math.random() * 3) + 2

        for (let j = 0; j < lineCount; j++) {
          lines.push({
            width: Math.random() * 45 + 20 + '%',
            class: [
              'bg-green-400', 'bg-blue-400', 'bg-yellow-400', 'bg-purple-400', 'bg-cyan-400'
            ][Math.floor(Math.random() * 5)]
          })
        }

        const basePos = positions[i]
        particles.push({
          id: i,
          x: basePos.x + (Math.random() * 8 - 4), // Pequena variação na posição
          y: basePos.y + (Math.random() * 8 - 4),
          width: Math.random() * 50 + 70,
          height: Math.random() * 25 + 35,
          lines,
          delay: Math.random() * 12,
          duration: Math.random() * 15 + 20,
        })
      }
      return particles
    }

    const generateCodeSnippets = () => {
      const snippets = []
      // Aumentado para 3 snippets com posições estratégicas
      const positions = [
        { x: 5, y: 50 },
        { x: 85, y: 10 },
        { x: 60, y: 85 }
      ]

      for (let i = 0; i < 3; i++) {
        const example = codeExamples[Math.floor(Math.random() * codeExamples.length)]
        const basePos = positions[i]

        snippets.push({
          id: i,
          x: basePos.x + (Math.random() * 6 - 3),
          y: basePos.y + (Math.random() * 6 - 3),
          comment: example.comment,
          code: example.code,
          delay: Math.random() * 8,
          duration: Math.random() * 18 + 20,
        })
      }
      return snippets
    }

    const generateAPIParticles = () => {
      const particles = []
      const types = ['dataflow', 'database', 'cloud']

      // Aumentado para 6 partículas com distribuição em grid
      const positions = [
        { x: 15, y: 8 },
        { x: 45, y: 15 },
        { x: 75, y: 5 },
        { x: 25, y: 45 },
        { x: 70, y: 50 },
        { x: 10, y: 85 }
      ]

      for (let i = 0; i < 6; i++) {
        const basePos = positions[i]
        particles.push({
          id: i,
          type: types[Math.floor(Math.random() * types.length)],
          x: basePos.x + (Math.random() * 10 - 5),
          y: basePos.y + (Math.random() * 10 - 5),
          size: Math.random() * 35 + 50,
          color: colors[Math.floor(Math.random() * colors.length)],
          delay: Math.random() * 20,
          duration: Math.random() * 25 + 30,
        })
      }
      return particles
    }

    const generateGitParticles = () => {
      const particles = []
      const types = ['branch', 'commit', 'merge']

      // Aumentado para 8 partículas com distribuição espalhada
      const positions = [
        { x: 30, y: 20 },
        { x: 65, y: 30 },
        { x: 15, y: 35 },
        { x: 50, y: 5 },
        { x: 85, y: 60 },
        { x: 35, y: 75 },
        { x: 90, y: 20 },
        { x: 5, y: 65 }
      ]

      for (let i = 0; i < 8; i++) {
        const basePos = positions[i]
        particles.push({
          id: i,
          type: types[Math.floor(Math.random() * types.length)],
          x: basePos.x + (Math.random() * 8 - 4),
          y: basePos.y + (Math.random() * 8 - 4),
          size: Math.random() * 12 + 18,
          color: colors[Math.floor(Math.random() * colors.length)],
          delay: Math.random() * 25,
          duration: Math.random() * 30 + 25,
        })
      }
      return particles
    }

    const generateTechParticles = () => {
      const particles = []
      const types = ['html', 'css', 'js', 'react', 'vue']

      // 10 ícones de tecnologia espalhados de forma estratégica
      const positions = [
        { x: 40, y: 8 },
        { x: 82, y: 45 },
        { x: 12, y: 25 },
        { x: 55, y: 35 },
        { x: 25, y: 60 },
        { x: 75, y: 12 },
        { x: 8, y: 78 },
        { x: 60, y: 70 },
        { x: 88, y: 80 },
        { x: 45, y: 90 }
      ]

      for (let i = 0; i < 10; i++) {
        const basePos = positions[i]
        particles.push({
          id: i,
          type: types[Math.floor(Math.random() * types.length)],
          x: basePos.x + (Math.random() * 6 - 3),
          y: basePos.y + (Math.random() * 6 - 3),
          size: Math.random() * 8 + 16,
          color: colors[Math.floor(Math.random() * colors.length)],
          delay: Math.random() * 30,
          duration: Math.random() * 40 + 35,
        })
      }
      return particles
    }

    onMounted(() => {
      terminalParticles.value = generateTerminalParticles()
      codeSnippets.value = generateCodeSnippets()
      apiParticles.value = generateAPIParticles()
      gitParticles.value = generateGitParticles()
      techParticles.value = generateTechParticles()
    })

    return {
      terminalParticles,
      codeSnippets,
      apiParticles,
      gitParticles,
      techParticles
    }
  }
}
</script>

<style scoped>
.terminal-particle {
  animation: drift-terminal infinite ease-in-out;
  will-change: transform;
}

.code-snippet {
  animation: fade-slide infinite ease-in-out;
  will-change: transform, opacity;
}

.api-particle {
  animation: pulse-float infinite ease-in-out;
  will-change: transform, opacity;
}

.git-particle {
  animation: rotate-drift infinite linear;
  will-change: transform;
}

.tech-particle {
  animation: gentle-float infinite ease-in-out;
  will-change: transform, opacity;
}

@keyframes drift-terminal {
  0%, 100% {
    transform: translateX(0px) translateY(0px);
  }
  33% {
    transform: translateX(15px) translateY(-8px);
  }
  66% {
    transform: translateX(-10px) translateY(5px);
  }
}

@keyframes fade-slide {
  0% {
    opacity: 0;
    transform: translateY(30px) translateX(-10px);
  }
  25% {
    opacity: 0.15;
    transform: translateY(10px) translateX(0px);
  }
  50% {
    opacity: 0.2;
    transform: translateY(0px) translateX(5px);
  }
  75% {
    opacity: 0.15;
    transform: translateY(-10px) translateX(0px);
  }
  100% {
    opacity: 0;
    transform: translateY(-30px) translateX(10px);
  }
}

@keyframes pulse-float {
  0%, 100% {
    transform: scale(1) translateY(0px) translateX(0px);
    opacity: 0.25;
  }
  25% {
    transform: scale(1.08) translateY(-12px) translateX(8px);
    opacity: 0.35;
  }
  50% {
    transform: scale(0.95) translateY(-5px) translateX(-5px);
    opacity: 0.3;
  }
  75% {
    transform: scale(1.03) translateY(3px) translateX(3px);
    opacity: 0.28;
  }
}

@keyframes rotate-drift {
  0% {
    transform: rotate(0deg) translateX(0px) translateY(0px);
  }
  25% {
    transform: rotate(90deg) translateX(8px) translateY(-5px);
  }
  50% {
    transform: rotate(180deg) translateX(0px) translateY(8px);
  }
  75% {
    transform: rotate(270deg) translateX(-8px) translateY(-3px);
  }
  100% {
    transform: rotate(360deg) translateX(0px) translateY(0px);
  }
}

@keyframes gentle-float {
  0%, 100% {
    transform: translateY(0px) translateX(0px) scale(1);
    opacity: 0.15;
  }
  33% {
    transform: translateY(-6px) translateX(3px) scale(1.05);
    opacity: 0.25;
  }
  66% {
    transform: translateY(2px) translateX(-2px) scale(0.98);
    opacity: 0.18;
  }
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .terminal-particle,
  .code-snippet,
  .api-particle,
  .git-particle,
  .tech-particle {
    opacity: 0.4;
  }
}

@media (max-width: 480px) {
  .terminal-particle,
  .code-snippet,
  .api-particle,
  .git-particle,
  .tech-particle {
    opacity: 0.25;
  }
}

/* Z-index layering for advanced particles - Below navigation */
.advanced-code-particles {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1 !important;
}
</style>