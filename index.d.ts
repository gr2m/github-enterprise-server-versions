declare module "github-enterprise-server-versions" {
  export function getCurrentVersions(): Promise<number[]>
}
