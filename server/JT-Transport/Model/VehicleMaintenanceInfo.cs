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
    /// Vehicle Running KM
    /// </summary>
    [Required]
    public int RunKm { get; set; }
    /// <summary>
    /// Km at which Oil Service Done
    /// </summary>
    [Required]
    public int OilService { get; set; }
    /// <summary>
    /// Km at which Wheel Greace Done
    /// </summary>
    [Required]
    public int WheelGrease { get; set; }
    /// <summary>
    /// Km at which Air Filter Changed
    /// </summary>
    [Required]
    public int AirFilter { get; set; }
    /// <summary>
    /// Km at which Clutch Plate Changed
    /// </summary>
    [Required]
    public int ClutchPlate { get; set; }
    /// <summary>
    /// Km at which Gear Oil Changed
    /// </summary>
    [Required]
    public int GearOil { get; set; }
    /// <summary>
    /// Km at which Crown Oil Changed
    /// </summary>
    [Required]
    public int CrownOil { get; set; }
    /// <summary>
    /// Km at which Self Motor Changed
    /// </summary>
    [Required]
    public int SelfMotor { get; set; }
    /// <summary>
    /// Km at which Dyname Changed
    /// </summary>
    [Required]
    public int Dynamo { get; set; }
    /// <summary>
    /// Km at which Radiator Changed
    /// </summary>
    [Required]
    public int Radiator { get; set; }
    /// <summary>
    /// Km at which Pin Push Changed
    /// </summary>
    [Required]
    public int PinPush { get; set; }
    /// <summary>
    /// Km at which Steering Oil Changed
    /// </summary>
    [Required]
    public int SteeringOil { get; set; }    
    /// <summary>
    /// Defines if the vehicle is active or not
    /// </summary>
    [Required]
    public bool? IsActive { get; set; }
  }
}
