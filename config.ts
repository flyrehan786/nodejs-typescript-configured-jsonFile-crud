import * as dotenv from 'dotenv';
dotenv.config();
interface AppConfig {
  port: string | undefined
}
export const config: AppConfig = { port: process.env?.PORT };
