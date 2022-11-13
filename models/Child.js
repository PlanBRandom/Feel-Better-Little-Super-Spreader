class MakeChild{
    constructor(childName,childAge,childWeight,tempture,heartRate,sPO2,medicine,medicineDose,medDoseTime,){
      this.name = childName
      this.age = childAge
      this.weight = childWeight
      this.tempture = tempture
      this.heartrate = heartRate
      this.sPO2 = sPO2
      this.medicine = medicine
      this.medicineDose = medicineDose
      this.medDoseTime = medDoseTime
    }
    confirmDose(){
      alert('${this.medicine} at this ${this.medDoseTime}')
    }
    fever(tempture){
        if (tempture =>101){
      alert(`${this.name} has a fever of ${this.doors} degrees`)}
    }
  }
  
  let hondaCivic = new MakeCar('Honda','Civic','Silver', 4)
  
  let teslaRoadster = new MakeCar('Tesla','Roadster', 'Red', 2)