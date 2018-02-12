
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using JT_Transport.Model;

namespace JT_Transport.Swagger
{
  /// <summary>
  /// Info of vendor
  /// </summary>
  public class ExampleModel_VendorInfo
  {
    /// <summary>
    /// Id of vendor
    /// </summary>
    public string VendorId { get; set; }
    /// <summary>
    /// Name of vendor
    /// </summary>
    public string VendorName { get; set; }
    /// <summary>
    /// Contact name of vendor
    /// </summary>
    public string ContactName { get; set; }
    /// <summary>
    /// Contact number of vendor
    /// </summary>
    public string ContactNo { get; set; }
    /// <summary>
    /// Address of vendor
    /// </summary>
    public string Address { get; set; }
    /// <summary>
    /// Defines if the vendor is active or not
    /// </summary>
    public bool? IsActive { get; set; }
  }

  /// <summary>
  /// Details of vehicle
  /// </summary>
  public class ExampleModel_VehicleInfo
  {
    /// <summary>
    /// Registration number of vehicle
    /// </summary>
    public string VehicleNo { get; set; }
    /// <summary>
    /// Vehicle owner name
    /// </summary>
    public string OwnerName { get; set; }
    /// <summary>
    /// Model year of the vehicle
    /// </summary>
    public string Model { get; set; }
    /// <summary>
    /// Model number of vehicle
    /// </summary>
    public int ModelNo { get; set; }
    /// <summary>
    /// Type of vehicle
    /// </summary>
    public string VehicleType { get; set; }
    /// <summary>
    /// Body type of vehicle
    /// </summary>
    public string TypeOfBody { get; set; }
    /// <summary>
    /// Number of wheels in vehicle
    /// </summary>
    public int NoOfWheels { get; set; }
    /// <summary>
    /// Capacity of vehicle
    /// </summary>
    public string VehicleCapacity { get; set; }
    /// <summary>
    /// Engine number of vehicle
    /// </summary>
    public string EngineNumber { get; set; }
    /// <summary>
    /// Chasis number of vehicle
    /// </summary>
    public string ChasisNumber { get; set; }
    /// <summary>
    /// Driver Name
    /// </summary>
    public string DriverName { get; set; }
    /// <summary>
    /// Insurance date of vehicle
    /// </summary>
    public DateTime? InsuranceDate { get; set; }
    /// <summary>
    /// FC date of vehicle
    /// </summary>
    public DateTime? FCDate { get; set; }
    /// <summary>
    /// NP Tax date for vehicle
    /// </summary>
    public DateTime? NPTaxDate { get; set; }
    /// <summary>
    /// Permit date of vehicle
    /// </summary>
    public DateTime? PermitDate { get; set; }
    /// <summary>
    /// Defines if the vehicle is active or not
    /// </summary>
    public bool? IsActive { get; set; }
  }

  /// <summary>
  /// Details of vechicle maintenance
  /// </summary>
  public class ExampleModel_VehicleMaintenanceInfo
  {

    /// <summary>
    /// Registration number of vehicle
    /// </summary>
    public string VehicleNo { get; set; }
    /// <summary>
    /// Vehicle Running KM
    /// </summary>
     public int RunKm { get; set; }
    /// <summary>
    /// Km at which Oil Service Done
    /// </summary>

    public SRegularServiceData OilService { get; set; }
    /// <summary>
    /// Km at which Wheel Greace Done
    /// </summary>    
    public SRegularServiceData WheelGrease { get; set; }
    /// <summary>
    /// Km at which Air Filter Changed
    /// </summary>

    public SRegularServiceData AirFilter { get; set; }
    /// <summary>
    /// Km at which Clutch Plate Changed
    /// </summary>

    public SRegularServiceData ClutchPlate { get; set; }
    /// <summary>
    /// Km at which Gear Oil Changed
    /// </summary>

    public SRegularServiceData GearOil { get; set; }
    /// <summary>
    /// Km at which Crown Oil Changed
    /// </summary>

    public SRegularServiceData CrownOil { get; set; }
    /// <summary>
    /// Km at which Self Motor Changed
    /// </summary>

    public SRegularServiceData SelfMotor { get; set; }
    /// <summary>
    /// Km at which Dyname Changed
    /// </summary>

    public SRegularServiceData Dynamo { get; set; }
    /// <summary>
    /// Km at which Radiator Changed
    /// </summary>

    public SRegularServiceData Radiator { get; set; }
    /// <summary>
    /// Km at which Pin Push Changed
    /// </summary>

    public SRegularServiceData PinPush { get; set; }
    /// <summary>
    /// Km at which Steering Oil Changed
    /// </summary>

    public SRegularServiceData SteeringOil { get; set; }    
    /// <summary>
    /// Nozzle service
    /// </summary>
    public SRegularServiceData NozzleService { get; set; }    

    /// <summary>
    /// Speedometer
    /// </summary>
    public SRegularServiceData SpeedoMeter { get; set; }    
    /// <summary>
    /// Diesel Filter
    /// </summary>
    public SRegularServiceData DieselFilter { get; set; }    
    /// <summary>
    /// Stainner
    /// </summary>
    public SRegularServiceData Stainner { get; set; }    
    /// <summary>
    /// Tyre Powder
    /// </summary>
    public SRegularServiceData TyrePowder { get; set; }    
    /// <summary>
    /// Valve checker
    /// </summary>
    public SRegularServiceData ValveChecker { get; set; }

    /// <summary>
    /// New battery details
    /// </summary>
    [Required]
    public SServiceData NewBattery { get; set; }
    /// <summary>
    /// Gearbox OH details
    /// </summary>
    [Required]
    public SServiceData GearBoxOH { get; set; }
    /// <summary>
    /// Gearbox top
    /// </summary>
    [Required]
    public SServiceData GearBoxTop { get; set; }
    /// <summary>
    /// Turbo
    /// </summary>
    [Required]
    public SServiceData Turbo { get; set; }
    /// <summary>
    /// Compression
    /// </summary>
    [Required]
    public SServiceData Compression { get; set; }
    /// <summary>
    /// Power steering box
    /// </summary>
    [Required]
    public SServiceData PowerSteeringBox { get; set; }
    /// <summary>
    /// power steering pump
    /// </summary>
    [Required]
    public SServiceData PowerSteeringPump { get; set; }
    /// <summary>
    /// EngineOH
    /// </summary>
    [Required]
    public SServiceData EngineOH { get; set; }
    /// <summary>
    /// Pump Service
    /// </summary>
    [Required]
    public SServiceData PumpService { get; set; }
    /// <summary>
    /// Yoke and Teeth
    /// </summary>
    [Required]
    public SServiceData YokeAndTeeth { get; set; }
    /// <summary>
    /// Clutch up kit
    /// </summary>
    [Required]
    public SServiceData ClutchUpKit { get; set; }
    /// <summary>
    /// Clutch down kit
    /// </summary>
    [Required]
    public SServiceData ClutchDownKit { get; set; }
    /// <summary>
    /// Airdryer kit
    /// </summary>
    [Required]
    public SServiceData AirDryerKit { get; set; }
    /// <summary>
    /// Crown OH
    /// </summary>
    [Required]
    public SServiceData CrownOH { get; set; }
    /// <summary>
    /// New Radiator
    /// </summary>
    [Required]
    public SServiceData NewRadiator { get; set; }
    /// <summary>
    /// Head Facing
    /// </summary>
    [Required]
    public SServiceData HeadFacing { get; set; }
    /// <summary>
    /// Lining Right FI
    /// </summary>
    [Required]
    public SServiceData LiningRightFI { get; set; }
    /// <summary>
    /// Lining LeftFI
    /// </summary>
    [Required]
    public SServiceData LiningLeftFI { get; set; }
    /// <summary>
    /// Lining Right FII
    /// </summary>
    [Required]
    public SServiceData LiningRightFII { get; set; }
    /// <summary>
    /// Lining Left FII
    /// </summary>
    [Required]
    public SServiceData LiningLeftFII { get; set; }
    /// <summary>
    /// Lining Right Housing
    /// </summary>
    [Required]
    public SServiceData LiningRightHousing { get; set; }
    /// <summary>
    /// Lining Left Housing
    /// </summary>
    [Required]
    public SServiceData LiningLeftHousing { get; set; }
    /// <summary>
    /// Lining Right Dummy
    /// </summary>
    [Required]
    public SServiceData LiningRightDummy { get; set; }
    /// <summary>
    /// Lining Left Dummy
    /// </summary>
    [Required]
    public SServiceData LiningLeftDummy { get; set; }
    /// <summary>
    /// Booster Right FI
    /// </summary>
    [Required]
    public SServiceData BoosterRightFI { get; set; }
    /// <summary>
    /// Booster LeftFI
    /// </summary>
    [Required]
    public SServiceData BoosterLeftFI { get; set; }
    /// <summary>
    /// Booster Right FII
    /// </summary>
    [Required]
    public SServiceData BoosterRightFII { get; set; }
    /// <summary>
    /// Booster Left FII
    /// </summary>
    [Required]
    public SServiceData BoosterLeftFII { get; set; }
    /// <summary>
    /// Booster Right Housing
    /// </summary>
    [Required]
    public SServiceData BoosterRightHousing { get; set; }
    /// <summary>
    /// Booster Left Housing
    /// </summary>
    [Required]
    public SServiceData BoosterLeftHousing { get; set; }
    /// <summary>
    /// Booster Right Dummy
    /// </summary>
    [Required]
    public SServiceData BoosterRightDummy { get; set; }
    /// <summary>
    /// Booster Left Dummy
    /// </summary>
    [Required]
    public SServiceData BoosterLeftDummy { get; set; }
    /// <summary>
    /// SlackAdjuster Right FI
    /// </summary>
    [Required]
    public SServiceData SlackAdjusterRightFI { get; set; }
    /// <summary>
    /// SlackAdjuster LeftFI
    /// </summary>
    [Required]
    public SServiceData SlackAdjusterLeftFI { get; set; }
    /// <summary>
    /// SlackAdjuster Right FII
    /// </summary>
    [Required]
    public SServiceData SlackAdjusterRightFII { get; set; }
    /// <summary>
    /// SlackAdjuster Left FII
    /// </summary>
    [Required]
    public SServiceData SlackAdjusterLeftFII { get; set; }
    /// <summary>
    /// SlackAdjuster Right Housing
    /// </summary>
    [Required]
    public SServiceData SlackAdjusterRightHousing { get; set; }
    /// <summary>
    /// SlackAdjuster Left Housing
    /// </summary>
    [Required]
    public SServiceData SlackAdjusterLeftHousing { get; set; }
    /// <summary>
    /// SlackAdjuster Right Dummy
    /// </summary>
    [Required]
    public SServiceData SlackAdjusterRightDummy { get; set; }
    /// <summary>
    /// SlackAdjuster Left Dummy
    /// </summary>
    [Required]
    public SServiceData SlackAdjusterLeftDummy { get; set; }

    /// <summary>
    /// Defines if the vehicle is active or not
    /// </summary>
    [Required]
    public bool? IsActive { get; set; }
  }

/// <summary>
/// Service Details of vehicle
/// </summary>
public class SServiceData {
    /// <summary>
    /// Run Kilometer
    /// </summary>


    [Required]
    public int RunKilometer { get; set; }

    /// <summary>
    /// AvgKilometer
    /// </summary>
    [Required]
    public DateTime ChangedDate { get; set; }

}
/// <summary>
/// Regular Service Details of vehicle
/// </summary>
public class SRegularServiceData {
    /// <summary>
    /// Run Kilometer
    /// </summary>
    [Required]
    public int RunKilometer { get; set; }

    /// <summary>
    /// Avg Kilometer
    /// </summary>
    [Required]
    public int AvgKilometer { get; set; }
  
    /// <summary>
    /// AvgKilometer
    /// </summary>
    [Required]
    public DateTime ChangedDate { get; set; }
}


  /// <summary>
  /// Details of role
  /// </summary>
  public class ExampleModel_Roles
  {
    /// <summary>
    /// Levels of access given to the role
    /// </summary>
    public string[] LevelOfAccess { get; set; }
    /// <summary>
    /// Defines if the roles is active or not
    /// </summary>
    public bool? IsActive { get; set; }
  }

  /// <summary>
  /// Info about office
  /// </summary>
  public class ExampleModel_OfficeInfo
  {
    /// <summary>
    /// Name of office
    /// </summary>
    public string OfficeName { get; set; }
    /// <summary>
    /// Contact name of office
    /// </summary>
    public string ContactName { get; set; }
    /// <summary>
    /// Contact number of office
    /// </summary>
    public string ContactNo { get; set; }
    /// <summary>
    /// Address of office
    /// </summary>
    public string Address { get; set; }
    /// <summary>
    /// Defines if the address is active or not
    /// </summary>
    public bool? IsActive { get; set; }
  }

  /// <summary>
  /// Info of driver
  /// </summary>
  public class ExampleModel_DriverInfo
  {
    /// <summary>
    /// Name of driver
    /// </summary>
    public string DriverName { get; set; }
    /// <summary>
    /// Contact number
    /// </summary>
    public string ContactNo { get; set; }
    /// <summary>
    /// Address of driver
    /// </summary>
    public string Address { get; set; }
    /// <summary>
    /// Defines if the driver is active or not
    /// </summary>
    public bool? IsActive { get; set; }
  }

  /// <summary>
  /// Info of tyre
  /// </summary>
  public class ExampleModel_TyreInfo
  {
    /// <summary>
    /// Status of type
    /// </summary>
    public string TyreStatus { get; set; }
    /// <summary>
    /// Purchase deatails of tyre
    /// </summary>
    public ExampleModel_PurchaseDetails PurchaseDetails { get; set; }
    /// <summary>
    /// Disposal details of tyre
    /// </summary>
    public DisposalDetails DisposalDetails { get; set; }
    /// <summary>
    /// Total KM runned
    /// </summary>
    public long? TotalKMRunned { get; set; }
    /// <summary>
    /// Flag to define if tyre is active or not
    /// </summary>
    public bool? IsActive { get; set; }
  }

  /// <summary>
  /// Purchase details of tyre
  /// </summary>
  public class ExampleModel_PurchaseDetails
  {
    /// <summary>
    /// Brand name
    /// </summary>
    public string BrandName { get; set; }
    /// <summary>
    /// Price of tyre
    /// </summary>
    public long? PriceOfTyre { get; set; }
    /// <summary>
    /// Model of tire
    /// </summary>
    public string TyreModel { get; set; }
    /// <summary>
    /// Tire number
    /// </summary>
    public string TyreNo { get; set; }
    /// <summary>
    /// Name of vendor
    /// </summary>
    public string VendorName { get; set; }
    /// <summary>
    /// Date of purchase
    /// </summary>
    public DateTime? PurchaseDate { get; set; }
    /// <summary>
    /// Bill Number
    /// </summary>
    public string BillNo { get; set; }
  }
}
