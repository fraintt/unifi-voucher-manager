import { Voucher } from "./voucher";

export type PrintMode = "list" | "grid";

export type PrintJob = {
  vouchers: Voucher[];
  mode: PrintMode;
  createdAt: number;
};

export type PrintConfig = {
  /** @deprecated Use showHeaderLogo / showQrLogo instead */
  showLogo?: boolean;
  /** Show a logo image at the top of each printed voucher */
  showHeaderLogo: boolean;
  /** Show a logo image embedded inside the WiFi QR code */
  showQrLogo: boolean;
  showDuration: boolean;
  showMaxGuests: boolean;
  showDataUsageLimit: boolean;
  showRxRateLimit: boolean;
  showTxRateLimit: boolean;
  showId: boolean;
  showPrintTime: boolean;
};
