import "server-only";

import { DEFAULT_RUNTIME_CONFIG, RuntimeConfig } from "@/types/config";
import fs from "fs";
import path from "path";

let cachedConfig: RuntimeConfig | null = null;

function withDefaults(config: Partial<RuntimeConfig>): RuntimeConfig {
  const mergedPrint = {
    ...DEFAULT_RUNTIME_CONFIG.PRINT_CONFIG,
    ...config.PRINT_CONFIG,
  };

  // Backwards-compat: if only the legacy `showLogo` field is present (no new
  // fields), propagate its value to both new fields so existing configs work.
  if (
    config.PRINT_CONFIG &&
    "showLogo" in config.PRINT_CONFIG &&
    !("showHeaderLogo" in config.PRINT_CONFIG) &&
    !("showQrLogo" in config.PRINT_CONFIG)
  ) {
    const legacy = (config.PRINT_CONFIG as { showLogo?: boolean }).showLogo ?? true;
    mergedPrint.showHeaderLogo = legacy;
    mergedPrint.showQrLogo = legacy;
  }

  return {
    ...DEFAULT_RUNTIME_CONFIG,
    ...config,
    PRINT_CONFIG: mergedPrint,
  };
}

export function getRuntimeConfig(): RuntimeConfig {
  if (cachedConfig) {
    return cachedConfig;
  }

  const file = path.join(process.cwd(), "public", "runtime-config.json");

  try {
    const config = JSON.parse(fs.readFileSync(file, "utf8"));
    return withDefaults(config);
  } catch (error) {
    console.warn("Unable to read runtime config:", error);
    return DEFAULT_RUNTIME_CONFIG;
  }
}
