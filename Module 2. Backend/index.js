
// 1. Importar os y mostrar info del sistema
import os from "os";
console.log("Sistema operativo:", os.platform());
console.log("Arquitectura:", os.arch());
console.log("Versión:", os.release());


// 2. Memoria y conversión a GB
const totalMemory = os.totalmem();
const freeMemory  = os.freemem();
const toGB = bytes => (bytes / 1024 / 1024 / 1024).toFixed(2);
console.log("Total (GB):", toGB(totalMemory));
console.log("Libre (GB):", toGB(freeMemory));

// 3. CPU con map y reduce
const cpus = os.cpus();
console.log("Número de CPUs:", cpus.length);
// map: extraer solo el modelo de cada CPU
const cpuModels = cpus.map(cpu => cpu.model);
// reduce: calcular velocidad media
const avgSpeed = cpus.reduce((acc, cpu) => acc + cpu.speed, 0) / cpus.length;
console.log("Velocidad media CPU:", avgSpeed);


// 4. Objeto resumen del sistema
const systemInfo = {
  platform:      os.platform(),
  cpuCount:      cpus.length,
  cpuModel:      cpus[0].model,
  memoryTotalGB: toGB(os.totalmem()),
  memoryFreeGB:  toGB(os.freemem())
};
console.log("Resumen:", systemInfo);