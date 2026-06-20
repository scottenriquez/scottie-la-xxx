import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

const lightVariables = ['--light-1', '--light-2', '--light-3'];

function randomPercentage(): number {
  return Math.round(Math.random() * 100);
}

function applyRandomLightPositions(): void {
  for (const lightVariable of lightVariables) {
    document.documentElement.style.setProperty(lightVariable, `${randomPercentage()}% ${randomPercentage()}%`);
  }
}

if (ExecutionEnvironment.canUseDOM) {
  applyRandomLightPositions();
}
