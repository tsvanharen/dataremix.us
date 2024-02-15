export enum Route {
  HOME = '/',
  INSIGHTS = '/insights',
  INSIGHT_HOME_BREAK_INS = '/insights/home-break-ins',
  FAQS = '/faqs'
}

export function GetInsightsRoutes() {
  Object.values(Route).filter((v) => {
    const value = v as string;

    return value.startsWith('/insights/');
  })

}

export default Route