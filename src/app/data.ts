export interface Data {
    cases: number,
    cases_daily: number,
    date: string,
    deaths: number,
    deaths_daily: number,
    hospitalizations: number,
    hospitalizations_daily: number,
    icu: number,
    icu_daily: number,
    region: string,
    tests_completed: number,
    tests_completed_daily: number,
}

export interface RootObject {
    summary: Data[];
    deprecation_warning: string;
}
