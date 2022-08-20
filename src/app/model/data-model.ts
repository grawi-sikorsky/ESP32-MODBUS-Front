export class DataModel {
    modbusID?:              string;
    pvVoltage?:             string;
    pvCurrent?:             string;
    pvPower?:               string;
    pvStatus?:              string;

    batVoltage?:            string;
    batDischargeCurrent?:   string;
    batChargingCurrent?:    string;
    batChargingPower?:      string;
    batRemainingPercent?:   string;
    batTemperature?:        string;
    batOverallCurrent?:     string;
    batStatus?:             string;
    batChargingStatus?:     string;
    batDischargingStatus?:  string;

    mpptTemperature?:       string;
    loadVoltage?:           string;
    loadCurrent?:           string;
    loadPower?:             string;
    loadStatus?:            string;

    genTotalToday?:         string;
    genTotalMonth?:         string;
    genTotalYear?:          string;
    genTotalAll?:           string;
    consTotalToday?:        string;
    consTotalMonth?:        string;
    consTotalYear?:         string;
    consTotalAll?:          string;

    recordTime?:            string;
    batteryVoltage?:        string;
}

export class SetupModel{
    modbusID?:                  string;
    readingUpdateInterval?:     string;
    postUpdateInterval?:        string;
    setupUpdateInterval?:       string;
}