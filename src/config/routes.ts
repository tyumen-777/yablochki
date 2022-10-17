export enum AppRoutes {
  MAIN = 'main',
  CATALOG = 'catalog'
}

export const routes: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.CATALOG]: '/catalog',
};