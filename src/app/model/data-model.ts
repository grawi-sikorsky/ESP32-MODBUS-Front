export class DataModel {
    modbusID?:              string;
    pvVoltage?:             string;
    pvCurrent?:             string;
    pvPower?:               string;
    pvTotalChargingToday?:  string;
    pvTotalCharging?:       string;
    batVoltage?:            string;
    batCurrent?:            string;
    mpptTemperature?:       string;
    batStatus?:             string;
    batChargingStatus?:     string;
    batDischargingStatus?:  string;
    loadVoltage?:           string;
    loadCurrent?:           string;
    loadPower?:             string;
    energyConsumedToday?:   string;
    energyConsumedTotal?:   string;
    espTemperature?:        string;
    espPressure?:           string;
}