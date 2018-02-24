using System;
using System.ComponentModel.DataAnnotations;
using MongoDB.Bson;

namespace JT_Transport.Model
{
  /// <summary>
  /// Details of vehicle
  /// </summary>
  public class VehicleMaintenanceInfo
  {
    /// <summary>
    /// Object id given by mongo db
    /// </summary>
    public ObjectId Id { get; set; }
    /// <summary>
    /// Id given to vehicle
    /// </summary>
    [Required]
    public string VehicleId { get; set; }
    /// <summary>
    /// Registration number of vehicle
    /// </summary>
    [Required]
    public string VehicleNo { get; set; }
    /// <summary>
    /// Current KM
    /// </summary>
     public int RunKm { get; set; }
    /// <summary>
    /// Km at which Oil Service Done
    /// </summary>

    public RegularServiceData OilService { get; set; }
    /// <summary>
    /// Km at which Wheel Greace Done
    /// </summary>    
    public RegularServiceData WheelGrease { get; set; }
    /// <summary>
    /// Km at which Air Filter Changed
    /// </summary>

    public RegularServiceData AirFilter { get; set; }
    /// <summary>
    /// Km at which Clutch Plate Changed
    /// </summary>

    public RegularServiceData ClutchPlate { get; set; }
    /// <summary>
    /// Km at which Gear Oil Changed
    /// </summary>

    public RegularServiceData GearOil { get; set; }
    /// <summary>
    /// Km at which Crown Oil Changed
    /// </summary>

    public RegularServiceData CrownOil { get; set; }
    /// <summary>
    /// Km at which Self Motor Changed
    /// </summary>

    public RegularServiceData SelfMotor { get; set; }
    /// <summary>
    /// Km at which Dyname Changed
    /// </summary>

    public RegularServiceData Dynamo { get; set; }
    /// <summary>
    /// Km at which Radiator Changed
    /// </summary>

    public RegularServiceData Radiator { get; set; }
    /// <summary>
    /// Km at which Pin Push Changed
    /// </summary>

    public RegularServiceData PinPush { get; set; }
    /// <summary>
    /// Km at which Steering Oil Changed
    /// </summary>

    public RegularServiceData SteeringOil { get; set; }    
    /// <summary>
    /// Nozzle service
    /// </summary>
    public RegularServiceData NozzleService { get; set; }    

    /// <summary>
    /// Speedometer
    /// </summary>
    public RegularServiceData SpeedoMeter { get; set; }    
    /// <summary>
    /// Diesel Filter
    /// </summary>
    public RegularServiceData DieselFilter { get; set; }    
    /// <summary>
    /// Stainner
    /// </summary>
    public RegularServiceData Stainner { get; set; }    
    /// <summary>
    /// Tyre Powder
    /// </summary>
    public RegularServiceData TyrePowder { get; set; }    
    /// <summary>
    /// Valve checker
    /// </summary>
    public RegularServiceData ValveChecker { get; set; }
    /// <summary>
    /// Coolant Oil
    /// </summary>
    public RegularServiceData CoolantOil { get; set; }

    /// <summary>
    /// New battery details
    /// </summary>
    public ServiceData NewBattery { get; set; } = new ServiceData();
    /// <summary>
    /// Gearbox OH details
    /// </summary>
    public ServiceData GearBoxOH { get; set; } = new ServiceData();
    /// <summary>
    /// Gearbox top
    /// </summary>
    public ServiceData GearBoxTop { get; set; } = new ServiceData();
    /// <summary>
    /// Turbo
    /// </summary>
    public ServiceData Turbo { get; set; } = new ServiceData();
    /// <summary>
    /// Compression
    /// </summary>
    public ServiceData Compression { get; set; } = new ServiceData();
    /// <summary>
    /// Power steering box
    /// </summary>
    public ServiceData PowerSteeringBox { get; set; } = new ServiceData();
    /// <summary>
    /// power steering pump
    /// </summary>
    public ServiceData PowerSteeringPump { get; set; } = new ServiceData();
    /// <summary>
    /// EngineOH
    /// </summary>
    public ServiceData EngineOH { get; set; } = new ServiceData();
    /// <summary>
    /// Pump Service
    /// </summary>
    public ServiceData PumpService { get; set; } = new ServiceData();
    /// <summary>
    /// Yoke and Teeth
    /// </summary>
    public ServiceData YokeAndTeeth { get; set; } = new ServiceData();
    /// <summary>
    /// Clutch up kit
    /// </summary>
    public ServiceData ClutchUpKit { get; set; } = new ServiceData();
    /// <summary>
    /// Clutch down kit
    /// </summary>
    public ServiceData ClutchDownKit { get; set; } = new ServiceData();
    /// <summary>
    /// Airdryer kit
    /// </summary>
    public ServiceData AirDryerKit { get; set; } = new ServiceData();
    /// <summary>
    /// Crown OH
    /// </summary>
    public ServiceData CrownOH { get; set; } = new ServiceData();
    /// <summary>
    /// New Radiator
    /// </summary>
    public ServiceData NewRadiator { get; set; } = new ServiceData();
    /// <summary>
    /// Head Facing
    /// </summary>
    public ServiceData HeadFacing { get; set; } = new ServiceData();
    /// <summary>
    /// Lining Right FI
    /// </summary>
    public ServiceData LiningRightFI { get; set; } = new ServiceData();
    /// <summary>
    /// Lining LeftFI
    /// </summary>
    public ServiceData LiningLeftFI { get; set; } = new ServiceData();
    /// <summary>
    /// Lining Right FII
    /// </summary>
    public ServiceData LiningRightFII { get; set; } = new ServiceData();
    /// <summary>
    /// Lining Left FII
    /// </summary>
    public ServiceData LiningLeftFII { get; set; } = new ServiceData();
    /// <summary>
    /// Lining Right Housing
    /// </summary>
    public ServiceData LiningRightHousing { get; set; } = new ServiceData();
    /// <summary>
    /// Lining Left Housing
    /// </summary>
    public ServiceData LiningLeftHousing { get; set; } = new ServiceData();
    /// <summary>
    /// Lining Right Dummy
    /// </summary>
    public ServiceData LiningRightDummy { get; set; } = new ServiceData();
    /// <summary>
    /// Lining Left Dummy
    /// </summary>
    public ServiceData LiningLeftDummy { get; set; } = new ServiceData();
    /// <summary>
    /// Booster Right FI
    /// </summary>
    public ServiceData BoosterRightFI { get; set; } = new ServiceData();
    /// <summary>
    /// Booster LeftFI
    /// </summary>
    public ServiceData BoosterLeftFI { get; set; } = new ServiceData();
    /// <summary>
    /// Booster Right FII
    /// </summary>
    public ServiceData BoosterRightFII { get; set; } = new ServiceData();
    /// <summary>
    /// Booster Left FII
    /// </summary>
    public ServiceData BoosterLeftFII { get; set; } = new ServiceData();
    /// <summary>
    /// Booster Right Housing
    /// </summary>
    public ServiceData BoosterRightHousing { get; set; } = new ServiceData();
    /// <summary>
    /// Booster Left Housing
    /// </summary>
    public ServiceData BoosterLeftHousing { get; set; } = new ServiceData();
    /// <summary>
    /// Booster Right Dummy
    /// </summary>
    public ServiceData BoosterRightDummy { get; set; } = new ServiceData();
    /// <summary>
    /// Booster Left Dummy
    /// </summary>
    public ServiceData BoosterLeftDummy { get; set; } = new ServiceData();
    /// <summary>
    /// SlackAdjuster Right FI
    /// </summary>
    public ServiceData SlackAdjusterRightFI { get; set; } = new ServiceData();
    /// <summary>
    /// SlackAdjuster LeftFI
    /// </summary>
    public ServiceData SlackAdjusterLeftFI { get; set; } = new ServiceData();
    /// <summary>
    /// SlackAdjuster Right FII
    /// </summary>
    public ServiceData SlackAdjusterRightFII { get; set; } = new ServiceData();
    /// <summary>
    /// SlackAdjuster Left FII
    /// </summary>
    public ServiceData SlackAdjusterLeftFII { get; set; } = new ServiceData();
    /// <summary>
    /// SlackAdjuster Right Housing
    /// </summary>
    public ServiceData SlackAdjusterRightHousing { get; set; } = new ServiceData();
    /// <summary>
    /// SlackAdjuster Left Housing
    /// </summary>
    public ServiceData SlackAdjusterLeftHousing { get; set; } = new ServiceData();
    /// <summary>
    /// SlackAdjuster Right Dummy
    /// </summary>
    public ServiceData SlackAdjusterRightDummy { get; set; } = new ServiceData();
    /// <summary>
    /// SlackAdjuster Left Dummy
    /// </summary>
    public ServiceData SlackAdjusterLeftDummy { get; set; } = new ServiceData();

    /// <summary>
    /// Front Main Axle Bend Checkup
    /// </summary>
    public ServiceData FrontMainAxleBendCheckup { get; set; } = new ServiceData();

    /// <summary>
    /// Second Main Axle Bend Checkup
    /// </summary>
    public ServiceData SecondMainAxleBendCheckup { get; set; } = new ServiceData();

    /// <summary>
    /// Housing Bend Checkup
    /// </summary>
    public ServiceData HousingBendCheckup { get; set; } = new ServiceData();

    /// <summary>
    /// Dummy Bend Checkup
    /// </summary>
    public ServiceData DummyBendCheckup { get; set; } = new ServiceData();

    /// <summary>
    /// Steering Star
    /// </summary>
    public ServiceData SteeringStar { get; set; } = new ServiceData();

    /// <summary>
    /// King Pin Right FI
    /// </summary>
    public ServiceData KingPinRightFI { get; set; } = new ServiceData();

    /// <summary>
    /// King Pin Right FII
    /// </summary>
    public ServiceData KingPinRightFII { get; set; } = new ServiceData();
    /// <summary>
    /// King Pin Left FI
    /// </summary>
    public ServiceData KingPinLeftFI { get; set; } = new ServiceData();
        /// <summary>
    /// King Pin Left FII
    /// </summary>
    public ServiceData KingPinLeftFII { get; set; } = new ServiceData();

    /// <summary>
    /// Defines if the vehicle is active or not
    /// </summary>
    public bool? IsActive { get; set; }
  }

/// <summary>
/// Service Details of vehicle
/// </summary>
public class ServiceData {
    /// <summary>
    /// Run Kilometer
    /// </summary>
    public int RunKilometer { get; set; }

    /// <summary>
    /// AvgKilometer
    /// </summary>
    public DateTime? ChangedDate { get; set; }

    /// <summary>
    /// constructor
    /// </summary>
    public ServiceData(){
        this.RunKilometer = 0;
        this.ChangedDate = null;
    }

}
/// <summary>
/// Regular Service Details of vehicle
/// </summary>
public class RegularServiceData {
    /// <summary>
    /// Run Kilometer
    /// </summary>
    public int? RunKilometer { get; set; }

    /// <summary>
    /// Avg Kilometer
    /// </summary>
    public int? AvgKilometer { get; set; }
  
    /// <summary>
    /// AvgKilometer
    /// </summary>
    public DateTime? ChangedDate { get; set; }
}
}
