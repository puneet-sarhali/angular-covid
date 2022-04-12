export interface Data {
    province: string;
    date: string;
    cases: number;
    cumulative_cases: number;
    deaths: number;
    cumulative_deaths: number;
    recovered: number;
    cumulative_recovered: number;
    testing: number;
    cumulative_testing: number;
    testing_info: string;
    active_cases: number;
    active_cases_change: number;
    avaccine: string;
    cumulative_avaccine: string;
    dvaccine: string;
    cumulative_dvaccine: string;
    cvaccine: string;
    cumulative_cvaccine: string;
}

export interface RootObject {
    summary: Data[];
    deprecation_warning: string;
}
