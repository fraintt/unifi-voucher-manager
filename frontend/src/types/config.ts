import { PrintConfig } from "@/types/print";

export type RuntimeConfig = {
  IS_LOGO_INVERTIBLE: boolean;
  WIFI_SSID?: string;
  WIFI_PASSWORD?: string;
  WIFI_TYPE?: string;
  WIFI_HIDDEN?: string;
  PRINT_CONFIG: PrintConfig;
};

export const DEFAULT_RUNTIME_CONFIG: RuntimeConfig = {
  IS_LOGO_INVERTIBLE: false,
  PRINT_CONFIG: {
    // Legacy field kept for backwards-compat; new fields take precedence
    showLogo: true,
    showHeaderLogo: true,
    showQrLogo: true,
    showDuration: true,
    showMaxGuests: true,
    showDataUsageLimit: true,
    showRxRateLimit: true,
    showTxRateLimit: true,
    showId: true,
    showPrintTime: true,
  },
};
