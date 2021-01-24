export interface Server {
  HostName: string;
  CountryLong: string;
  CountryShort: string;
  IP: string;
  LogType: string;
  Message: string;
  NumVpnSessions: number;
  OpenVPN_ConfigData_Base64: string;
  Operator: string;
  Ping: number;
  Score: number;
  Speed: number;
  TotalTraffic: number;
  TotalUsers: number;
  Uptime: number;
}
