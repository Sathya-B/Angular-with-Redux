using System;
using System.Collections.Generic;

namespace JT_Transport.Model
{
  /// <summary>
  /// Renewal details of vehicle
  /// </summary>
  public class RenewalDetails
  {
    /// <summary>
    /// Vehicle no
    /// </summary>
    public string VehicleNo { get; set; }
    /// <summary>
    /// Date
    /// </summary>
    public DateTime? Date { get; set; }
  }


  /// <summary>
  /// Renewal details of vehicle
  /// </summary>
  public class RenewalList
  {
    /// <summary>
    /// Insurance renewal list
    /// </summary>
    public List<RenewalDetails> InsuranceRenewalList { get; set; }
    /// <summary>
    /// FC renewal list
    /// </summary>
    public List<RenewalDetails> FCRenewalList { get; set; }
    /// <summary>
    /// NP Tax renewal list
    /// </summary>
    public List<RenewalDetails> NPTaxRenewalList { get; set; }
    /// <summary>
    /// Permit renewal list
    /// </summary>
    public List<RenewalDetails> PermitRenewlList { get; set; }
  }
    /// <summary>
  /// Service details of vehicle
  /// </summary>
  public class ServiceList
  {
    /// <summary>
    /// Oil Service
    /// </summary>
    public List<string> OilService { get; set; }
    /// <summary>
    /// Wheel Grease
    /// </summary>
    public List<string> WheelGrease { get; set; }
    /// <summary>
    /// AirFilter
    /// </summary>
    public List<string> AirFilter { get; set; }
    /// <summary>
    /// Tyre Powder
    /// </summary>
    public List<string> TyrePowder { get; set; }
    /// <summary>
    /// Tyre Powder
    /// </summary>
    public List<string> DieselFilter { get; set; }
    /// <summary>
    /// Stainner
    /// </summary>
    public List<string> Stainner { get; set; }
  }
}
