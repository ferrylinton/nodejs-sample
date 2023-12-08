const exportService = require("./services/exports-service");
const mixExportService = require("./services/mix-exports-service");
const moduleExportService = require("./services/module-exports-service");

console.log(exportService.status);
console.log(moduleExportService.status);

console.log(exportService.getStatus());
console.log(moduleExportService.getStatus());

console.log(mixExportService.status)