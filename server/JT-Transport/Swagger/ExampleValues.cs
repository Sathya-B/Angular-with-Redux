using System;
using System.Collections.Generic;
using JT_Transport.Model;
using Swashbuckle.AspNetCore.Examples;

namespace JT_Transport.Swagger
{
  #region Vendor Controller

  /// <summary>
  /// 
  /// </summary>
  public class Example_InsertVendorInfo : IExamplesProvider
  {
    /// <summary></summary>
    public object GetExamples()
    {
      return new
      {
        VendorName = "VendorName",
        ContactName = "ContactName",
        ContactNo = "+9112341234",
        Address = "Address"
      };
    }
  }

  /// <summary>
  /// 
  /// </summary>
  public class Example_UpdateVendorInfo : IExamplesProvider
  {
    /// <summary></summary>
    public object GetExamples()
    {
      return new ExampleModel_VendorInfo
      {
        VendorName = "NewVendorName",
        ContactName = "NewContactName",
        ContactNo = "+9112341234",
        Address = "NewAddress"
      };
    }
  }

  #endregion

  #region Vehicle Controller

  /// <summary>
  /// 
  /// </summary>
  public class Example_InsertVehicleInfo : IExamplesProvider
  {
    /// <summary></summary>
    public object GetExamples()
    {
      return new
      {
        VehicleNo = "TN-38-U-9807",
        Model = "2013",
        ModelNo = 3116,
        VehicleType = "Lorry",
        NoOfWheels = 12,
        VehicleCapacity = "2Ton",
        EngineNumber = "52WVC10338",
        ChasisNumber = "987665",
        OwnerName = "OwnerName",
        InsuranceDate = DateTime.UtcNow,
        FCDate = DateTime.UtcNow,
        NPTaxDate = DateTime.UtcNow,
        PermitDate = DateTime.UtcNow,
        TypeOfBody = "Open",
      };
    }
  }

  /// <summary>
  /// 
  /// </summary>
  public class Example_InsertVehicleMaintenanceInfo : IExamplesProvider
  {
    /// <summary></summary>
    public object GetExamples()
    {
      return new
      {
        VehicleNo = "TN-38-U-9807",
        RunKm = 30000,
        OilService = new RegularServiceData { RunKilometer = 2000, AvgKilometer = 4000, ChangedDate = DateTime.UtcNow },
        WheelGrease = new RegularServiceData { RunKilometer = 2000, AvgKilometer = 4000, ChangedDate = DateTime.UtcNow },
        AirFilter = new RegularServiceData { RunKilometer = 2000, AvgKilometer = 4000, ChangedDate = DateTime.UtcNow },
        ClutchPlate = new RegularServiceData { RunKilometer = 2000, AvgKilometer = 4000, ChangedDate = DateTime.UtcNow },
        GearOil = new RegularServiceData { RunKilometer = 2000, AvgKilometer = 4000, ChangedDate = DateTime.UtcNow },
        CrownOil = new RegularServiceData { RunKilometer = 2000, AvgKilometer = 4000, ChangedDate = DateTime.UtcNow },
        SelfMotor = new RegularServiceData { RunKilometer = 2000, AvgKilometer = 4000, ChangedDate = DateTime.UtcNow },
        Dynamo = new RegularServiceData { RunKilometer = 2000, AvgKilometer = 4000, ChangedDate = DateTime.UtcNow },
        Radiator = new RegularServiceData { RunKilometer = 2000, AvgKilometer = 4000, ChangedDate = DateTime.UtcNow },
        PinPush = new RegularServiceData { RunKilometer = 2000, AvgKilometer = 4000, ChangedDate = DateTime.UtcNow },
        SteeringOil = new RegularServiceData { RunKilometer = 2000, AvgKilometer = 4000, ChangedDate = DateTime.UtcNow },
        NozzleService = new RegularServiceData { RunKilometer = 2000, AvgKilometer = 4000, ChangedDate = DateTime.UtcNow },
        SpeedoMeter = new RegularServiceData { RunKilometer = 2000, AvgKilometer = 4000, ChangedDate = DateTime.UtcNow },
        DieselFilter = new RegularServiceData { RunKilometer = 2000, AvgKilometer = 4000, ChangedDate = DateTime.UtcNow },
        Stainner = new RegularServiceData { RunKilometer = 2000, AvgKilometer = 4000, ChangedDate = DateTime.UtcNow },
        TyrePowder = new RegularServiceData { RunKilometer = 2000, AvgKilometer = 4000, ChangedDate = DateTime.UtcNow },
        ValveChecker = new RegularServiceData { RunKilometer = 2000, AvgKilometer = 4000, ChangedDate = DateTime.UtcNow },
        CoolantOil = new RegularServiceData { RunKilometer = 2000, AvgKilometer = 4000, ChangedDate = DateTime.UtcNow },
        NewBattery = new ServiceData { RunKilometer = 2000, ChangedDate = DateTime.UtcNow },
        GearBoxOH = new ServiceData { RunKilometer = 2000, ChangedDate = DateTime.UtcNow },
        GearBoxTop = new ServiceData { RunKilometer = 2000, ChangedDate = DateTime.UtcNow },
        Turbo = new ServiceData { RunKilometer = 2000, ChangedDate = DateTime.UtcNow },
        Compression = new ServiceData { RunKilometer = 2000, ChangedDate = DateTime.UtcNow },
        PowerSteeringBox = new ServiceData { RunKilometer = 2000, ChangedDate = DateTime.UtcNow },
        PowerSteeringPump = new ServiceData { RunKilometer = 2000, ChangedDate = DateTime.UtcNow },
        EngineOH = new ServiceData { RunKilometer = 2000, ChangedDate = DateTime.UtcNow },
        PumpService = new ServiceData { RunKilometer = 2000, ChangedDate = DateTime.UtcNow },
        YokeAndTeeth = new ServiceData { RunKilometer = 2000, ChangedDate = DateTime.UtcNow },
        ClutchUpKit = new ServiceData { RunKilometer = 2000, ChangedDate = DateTime.UtcNow },
        ClutchDownKit = new ServiceData { RunKilometer = 2000, ChangedDate = DateTime.UtcNow },
        AirDryerKit = new ServiceData { RunKilometer = 2000, ChangedDate = DateTime.UtcNow },
        CrownOH = new ServiceData { RunKilometer = 2000, ChangedDate = DateTime.UtcNow },
        NewRadiator = new ServiceData { RunKilometer = 2000, ChangedDate = DateTime.UtcNow },
        HeadFacing = new ServiceData { RunKilometer = 2000, ChangedDate = DateTime.UtcNow },
        LiningRightFI = new ServiceData { RunKilometer = 2000, ChangedDate = DateTime.UtcNow },
        LiningLeftFI = new ServiceData { RunKilometer = 2000, ChangedDate = DateTime.UtcNow },
        LiningRightFII = new ServiceData { RunKilometer = 2000, ChangedDate = DateTime.UtcNow },
        LiningLeftFII = new ServiceData { RunKilometer = 2000, ChangedDate = DateTime.UtcNow },
        LiningRightHousing = new ServiceData { RunKilometer = 2000, ChangedDate = DateTime.UtcNow },
        LiningLeftHousing = new ServiceData { RunKilometer = 2000, ChangedDate = DateTime.UtcNow },
        LiningRightDummy = new ServiceData { RunKilometer = 2000, ChangedDate = DateTime.UtcNow },
        LiningLeftDummy = new ServiceData { RunKilometer = 2000, ChangedDate = DateTime.UtcNow },
        BoosterRightFI = new ServiceData { RunKilometer = 2000, ChangedDate = DateTime.UtcNow },
        BoosterLeftFI = new ServiceData { RunKilometer = 2000, ChangedDate = DateTime.UtcNow },
        BoosterRightFII = new ServiceData { RunKilometer = 2000, ChangedDate = DateTime.UtcNow },
        BoosterLeftFII = new ServiceData { RunKilometer = 2000, ChangedDate = DateTime.UtcNow },
        BoosterRightHousing = new ServiceData { RunKilometer = 2000, ChangedDate = DateTime.UtcNow },
        BoosterLeftHousing = new ServiceData { RunKilometer = 2000, ChangedDate = DateTime.UtcNow },
        BoosterRightDummy = new ServiceData { RunKilometer = 2000, ChangedDate = DateTime.UtcNow },
        BoosterLeftDummy = new ServiceData { RunKilometer = 2000, ChangedDate = DateTime.UtcNow },
        SlackAdjusterRightFI = new ServiceData { RunKilometer = 2000, ChangedDate = DateTime.UtcNow },
        SlackAdjusterLeftFI = new ServiceData { RunKilometer = 2000, ChangedDate = DateTime.UtcNow },
        SlackAdjusterRightFII = new ServiceData { RunKilometer = 2000, ChangedDate = DateTime.UtcNow },
        SlackAdjusterLeftFII = new ServiceData { RunKilometer = 2000, ChangedDate = DateTime.UtcNow },
        SlackAdjusterRightHousing = new ServiceData { RunKilometer = 2000, ChangedDate = DateTime.UtcNow },
        SlackAdjusterLeftHousing = new ServiceData { RunKilometer = 2000, ChangedDate = DateTime.UtcNow },
        SlackAdjusterRightDummy = new ServiceData { RunKilometer = 2000, ChangedDate = DateTime.UtcNow },
        SlackAdjusterLeftDummy = new ServiceData { RunKilometer = 2000, ChangedDate = DateTime.UtcNow },
        SteeringStar = new ServiceData { RunKilometer = 2000, ChangedDate = DateTime.UtcNow },
        KingPinRightFI = new ServiceData { RunKilometer = 2000, ChangedDate = DateTime.UtcNow },
        KingPinRightFII = new ServiceData { RunKilometer = 2000, ChangedDate = DateTime.UtcNow },
        KingPinLeftFI = new ServiceData { RunKilometer = 2000, ChangedDate = DateTime.UtcNow },
        KingPinLeftFII = new ServiceData { RunKilometer = 2000, ChangedDate = DateTime.UtcNow }        
      };
    }
  }

    /// <summary>
  /// 
  /// </summary>
  public class Example_UpdateVehicleMaintenanceInfo : IExamplesProvider
  {
    /// <summary></summary>
    public object GetExamples()
    {
      return new
      {
        VehicleNo = "TN-38-U-9807",
        RunKm = 30000,
        OilService = new RegularServiceData { RunKilometer = 2000, AvgKilometer = 4000, ChangedDate = DateTime.UtcNow },
        WheelGrease = new RegularServiceData { RunKilometer = 2000, AvgKilometer = 4000, ChangedDate = DateTime.UtcNow },
        AirFilter = new RegularServiceData { RunKilometer = 2000, AvgKilometer = 4000, ChangedDate = DateTime.UtcNow },
        ClutchPlate = new RegularServiceData { RunKilometer = 2000, AvgKilometer = 4000, ChangedDate = DateTime.UtcNow },
        GearOil = new RegularServiceData { RunKilometer = 2000, AvgKilometer = 4000, ChangedDate = DateTime.UtcNow },
        CrownOil = new RegularServiceData { RunKilometer = 2000, AvgKilometer = 4000, ChangedDate = DateTime.UtcNow },
        SelfMotor = new RegularServiceData { RunKilometer = 2000, AvgKilometer = 4000, ChangedDate = DateTime.UtcNow },
        Dynamo = new RegularServiceData { RunKilometer = 2000, AvgKilometer = 4000, ChangedDate = DateTime.UtcNow },
        Radiator = new RegularServiceData { RunKilometer = 2000, AvgKilometer = 4000, ChangedDate = DateTime.UtcNow },
        PinPush = new RegularServiceData { RunKilometer = 2000, AvgKilometer = 4000, ChangedDate = DateTime.UtcNow },
        SteeringOil = new RegularServiceData { RunKilometer = 2000, AvgKilometer = 4000, ChangedDate = DateTime.UtcNow },
        NozzleService = new RegularServiceData { RunKilometer = 2000, AvgKilometer = 4000, ChangedDate = DateTime.UtcNow },
        SpeedoMeter = new RegularServiceData { RunKilometer = 2000, AvgKilometer = 4000, ChangedDate = DateTime.UtcNow },
        DieselFilter = new RegularServiceData { RunKilometer = 2000, AvgKilometer = 4000, ChangedDate = DateTime.UtcNow },
        Stainner = new RegularServiceData { RunKilometer = 2000, AvgKilometer = 4000, ChangedDate = DateTime.UtcNow },
        TyrePowder = new RegularServiceData { RunKilometer = 2000, AvgKilometer = 4000, ChangedDate = DateTime.UtcNow },
        ValveChecker = new RegularServiceData { RunKilometer = 2000, AvgKilometer = 4000, ChangedDate = DateTime.UtcNow },
        CoolantOil = new RegularServiceData { RunKilometer = 2000, AvgKilometer = 4000, ChangedDate = DateTime.UtcNow },
        NewBattery = new ServiceData { RunKilometer = 2000, ChangedDate = DateTime.UtcNow },
        GearBoxOH = new ServiceData { RunKilometer = 2000, ChangedDate = DateTime.UtcNow },
        GearBoxTop = new ServiceData { RunKilometer = 2000, ChangedDate = DateTime.UtcNow },
        Turbo = new ServiceData { RunKilometer = 2000, ChangedDate = DateTime.UtcNow },
        Compression = new ServiceData { RunKilometer = 2000, ChangedDate = DateTime.UtcNow },
        PowerSteeringBox = new ServiceData { RunKilometer = 2000, ChangedDate = DateTime.UtcNow },
        PowerSteeringPump = new ServiceData { RunKilometer = 2000, ChangedDate = DateTime.UtcNow },
        EngineOH = new ServiceData { RunKilometer = 2000, ChangedDate = DateTime.UtcNow },
        PumpService = new ServiceData { RunKilometer = 2000, ChangedDate = DateTime.UtcNow },
        YokeAndTeeth = new ServiceData { RunKilometer = 2000, ChangedDate = DateTime.UtcNow },
        ClutchUpKit = new ServiceData { RunKilometer = 2000, ChangedDate = DateTime.UtcNow },
        ClutchDownKit = new ServiceData { RunKilometer = 2000, ChangedDate = DateTime.UtcNow },
        AirDryerKit = new ServiceData { RunKilometer = 2000, ChangedDate = DateTime.UtcNow },
        CrownOH = new ServiceData { RunKilometer = 2000, ChangedDate = DateTime.UtcNow },
        NewRadiator = new ServiceData { RunKilometer = 2000, ChangedDate = DateTime.UtcNow },
        HeadFacing = new ServiceData { RunKilometer = 2000, ChangedDate = DateTime.UtcNow },
        LiningRightFI = new ServiceData { RunKilometer = 2000, ChangedDate = DateTime.UtcNow },
        LiningLeftFI = new ServiceData { RunKilometer = 2000, ChangedDate = DateTime.UtcNow },
        LiningRightFII = new ServiceData { RunKilometer = 2000, ChangedDate = DateTime.UtcNow },
        LiningLeftFII = new ServiceData { RunKilometer = 2000, ChangedDate = DateTime.UtcNow },
        LiningRightHousing = new ServiceData { RunKilometer = 2000, ChangedDate = DateTime.UtcNow },
        LiningLeftHousing = new ServiceData { RunKilometer = 2000, ChangedDate = DateTime.UtcNow },
        LiningRightDummy = new ServiceData { RunKilometer = 2000, ChangedDate = DateTime.UtcNow },
        LiningLeftDummy = new ServiceData { RunKilometer = 2000, ChangedDate = DateTime.UtcNow },
        BoosterRightFI = new ServiceData { RunKilometer = 2000, ChangedDate = DateTime.UtcNow },
        BoosterLeftFI = new ServiceData { RunKilometer = 2000, ChangedDate = DateTime.UtcNow },
        BoosterRightFII = new ServiceData { RunKilometer = 2000, ChangedDate = DateTime.UtcNow },
        BoosterLeftFII = new ServiceData { RunKilometer = 2000, ChangedDate = DateTime.UtcNow },
        BoosterRightHousing = new ServiceData { RunKilometer = 2000, ChangedDate = DateTime.UtcNow },
        BoosterLeftHousing = new ServiceData { RunKilometer = 2000, ChangedDate = DateTime.UtcNow },
        BoosterRightDummy = new ServiceData { RunKilometer = 2000, ChangedDate = DateTime.UtcNow },
        BoosterLeftDummy = new ServiceData { RunKilometer = 2000, ChangedDate = DateTime.UtcNow },
        SlackAdjusterRightFI = new ServiceData { RunKilometer = 2000, ChangedDate = DateTime.UtcNow },
        SlackAdjusterLeftFI = new ServiceData { RunKilometer = 2000, ChangedDate = DateTime.UtcNow },
        SlackAdjusterRightFII = new ServiceData { RunKilometer = 2000, ChangedDate = DateTime.UtcNow },
        SlackAdjusterLeftFII = new ServiceData { RunKilometer = 2000, ChangedDate = DateTime.UtcNow },
        SlackAdjusterRightHousing = new ServiceData { RunKilometer = 2000, ChangedDate = DateTime.UtcNow },
        SlackAdjusterLeftHousing = new ServiceData { RunKilometer = 2000, ChangedDate = DateTime.UtcNow },
        SlackAdjusterRightDummy = new ServiceData { RunKilometer = 2000, ChangedDate = DateTime.UtcNow },
        SlackAdjusterLeftDummy = new ServiceData { RunKilometer = 2000, ChangedDate = DateTime.UtcNow },
        FrontMainAxleBendCheckup = new ServiceData { RunKilometer = 2000, ChangedDate = DateTime.UtcNow },
        SecondMainAxleBendCheckup = new ServiceData { RunKilometer = 2000, ChangedDate = DateTime.UtcNow },
        HousingBendCheckup = new ServiceData { RunKilometer = 2000, ChangedDate = DateTime.UtcNow },
        DummyBendCheckup = new ServiceData { RunKilometer = 2000, ChangedDate = DateTime.UtcNow },
        SteeringStar = new ServiceData { RunKilometer = 2000, ChangedDate = DateTime.UtcNow },
        KingPinRightFI = new ServiceData { RunKilometer = 2000, ChangedDate = DateTime.UtcNow },
        KingPinRightFII = new ServiceData { RunKilometer = 2000, ChangedDate = DateTime.UtcNow },
        KingPinLeftFI = new ServiceData { RunKilometer = 2000, ChangedDate = DateTime.UtcNow },
        KingPinLeftFII = new ServiceData { RunKilometer = 2000, ChangedDate = DateTime.UtcNow }
      };
    }
  }

  /// <summary>
  /// 
  /// </summary>
  public class Example_UpdateVehicleInfo : IExamplesProvider
  {
    /// <summary></summary>
    public object GetExamples()
    {
      return new ExampleModel_VehicleInfo
      {
        VehicleNo = "TN-38-U-9808",
        Model = "2014",
        ModelNo = 3117,
        VehicleType = "Bus",
        NoOfWheels = 10,
        VehicleCapacity = "1Ton",
        EngineNumber = "52WVC10675",
        ChasisNumber = "996643",
        OwnerName = "NewOwner",
        InsuranceDate = DateTime.UtcNow,
        FCDate = DateTime.UtcNow,
        NPTaxDate = DateTime.UtcNow,
        PermitDate = DateTime.UtcNow,
        TypeOfBody = "Closed",
      };
    }
  }

  #endregion

  #region Trip Controller

  /// <summary>
  /// 
  /// </summary>
  public class Example_GetTripInfoWithFilter : IExamplesProvider
  {
    /// <summary></summary>
    public object GetExamples()
    {
      return new TripInfo_FilterModel
      {
        VehicleNo = "TN-38-CT-2728",
        FromDate = DateTime.UtcNow.AddDays(5),
        ToDate = DateTime.UtcNow
      };
    }
  }

  /// <summary>
  /// 
  /// </summary>
  public class Example_InsertTripInfo : IExamplesProvider
  {
    /// <summary></summary>
    public object GetExamples()
    {
      return new 
      {
        VehicleNo = "TN-38-U-9808",
        VendorName = "VendorName",
        LoadDate = DateTime.UtcNow,
        Location = new LocationInfo
        {
          PickUpPlace = "PickUpPlace",
          PickUpThaluka = "PickUpThaluka",
          DropPlace = "DropPlace",
          DropThaluka = "DropThaluka"
        },
        OfficeInfo = new OfficeDetails { OfficeName = "OfficeName", ContactName = "ContactName" },
        DriverName = "DriverName",
        TypeOfPayment = "TypeOfPayment",
        NoOfTons = 2,
        RatePerTon = 10000,
        TotalAmount = 20000,
        Crossing = 100,
        AdvanceAmount = 5000,
        PaidAmount = 5000,
        VehicleAmount = 18000,
        BalanceAmount = 13000,
        TripType = "Local"
      };
    }
  }

  /// <summary>
  /// 
  /// </summary>
  public class Example_UpdatePaymentInfo : IExamplesProvider
  {
    /// <summary></summary>
    public object GetExamples()
    {
      return new 
      {
        AmountReceived = 1000,
        PaidTo = "Driver",
        RoundOffAmount = 0,
        ShortageAmount = 0,
        UnloadingCharges = 0,
        LoadingCharges = 0,
        Date = DateTime.UtcNow
      };
    }
  }

  #endregion

  #region Auth Controller

  /// <summary>
  /// 
  /// </summary>
  public class Example_LoginModel : IExamplesProvider
  {
    /// <summary></summary>
    public object GetExamples()
    {
      return new
      {
        UserName = "UserName",
        Password = "asd123"
      };
    }
  }

  /// <summary>
  /// 
  /// </summary>
  public class Example_RegisterModel : IExamplesProvider
  {
    /// <summary></summary>
    public object GetExamples()
    {
      return new
      {
        UserName = "UserName",
        FullName = "FullName",
        Password = "asd123"
      };
    }
  }

  #endregion

  #region Token Controller

  /// <summary>
  /// 
  /// </summary>
  public class Example_GetJWT : IExamplesProvider
  {
    /// <summary></summary>
    public object GetExamples()
    {
      return new
      {
        GrantType = "RefreshToken",
        UserName = "UserName",
        FullName = "FullName",
        RefreshToken = "RefreshToken"
      };
    }
  }

  #endregion

  #region Admin Controller

      /// <summary></summary>
    public class ImageUploadDetails : IExamplesProvider
    {
        /// <summary></summary>
        public object GetExamples()
        {
            return new
            {
                LocalPath = "D'\\ac\\EmailTemplate\\Arthur Clive_files",
                BucketName = "product-category",
                ObjectName = "sampleobject"
            };
        }
    }
  /// <summary>
  /// 
  /// </summary>
  public class Example_InsertRole : IExamplesProvider
  {
    /// <summary></summary>
    public object GetExamples()
    {
      return new
      {
        RoleId = 100,
        RoleName = "Sample",
        levelOfAccess = new string[2] { "Level1Access", "Level2Access" }
      };
    }
  }

  /// <summary>
  /// 
  /// </summary>
  public class Example_UpdateRole : IExamplesProvider
  {
    /// <summary></summary>
    public object GetExamples()
    {
      return new ExampleModel_Roles
      {
        LevelOfAccess = new string[1] { "Level1Access" }
      };
    }
  }

  #endregion

  #region Office controller

  /// <summary>
  /// 
  /// </summary>
  public class Example_InsertOfficeInfo : IExamplesProvider
  {
    /// <summary></summary>
    public object GetExamples()
    {
      return new
      {
        OfficeName = "OfficeName",
        ContactName = "ContactName",
        ContactNo = "9112341234",
        Address = "Address",
      };
    }
  }

  /// <summary>
  /// 
  /// </summary>
  public class Example_UpdateOfficeInfo : IExamplesProvider
  {
    /// <summary></summary>
    public object GetExamples()
    {
      return new ExampleModel_OfficeInfo
      {
        OfficeName = "OfficeName",
        ContactName = "ContactName",
        ContactNo = "9112341234",
        Address = "Address",
      };
    }
  }

  #endregion

  #region TripExpense controller

  /// <summary>
  /// 
  /// </summary>
  public class Example_InsertTripExpenseInfo : IExamplesProvider
  {
    /// <summary></summary>
    public object GetExamples()
    {
      return new
      {
        TripExpenseId = "TRE-123456",
        VehicleNo = "TN-38-U-9807",
        EntryDate = DateTime.UtcNow,
        AdvanceAmount = 87000,
        Driver1Name = "Driver1Name",
        Driver2Name = "Driver2Name",
        CleanerName = "CleanerName",
        StartDate = DateTime.UtcNow.AddDays(-15),
        EndDate = DateTime.UtcNow,
        AverageMileage = 4,
        StartKM = 100000,
        EndKM = 101000,
        TotalKM = 1000,
        Expenses = new Expenses
        {
          TotalExpenses = 175695,
          TotalIncome = 333300,
          NetProfit = 20000,
          ExpenseInfo = new ExpenseInfo
          {
            DieselExpenses = new DieselExpenses
            {
              TotalQuantity = 1000,
              TotalAmount = 60000,
              CMSDieselExpenses = new DieselExpenseInfo
              {
                TotalQuantity = 900,
                TotalAmount = 54000,
                DieselExpenseDetails = new List<DieselExpenseDetails> {
                  new DieselExpenseDetails {Date = DateTime.UtcNow.AddDays(-15),Quantity = 480,Amount = 18208},
                new DieselExpenseDetails{ Date = DateTime.UtcNow.AddDays(-5),Quantity = 483,Amount = 28407}
                }
              },
              CashDieselExpenses = new DieselExpenseInfo
              {
                TotalQuantity = 100,
                TotalAmount = 6000,
                DieselExpenseDetails = new List<DieselExpenseDetails> { new DieselExpenseDetails { Date = DateTime.UtcNow.AddDays(-10), Quantity = 280, Amount = 16353 } }
              }
            },
            TripWiseExpenses = new TripWiseExpenses
            {
              TotalLoadInTon = 50,
              TotalVehicleAmount = 333300,
              TotalCommission = 16665,
              TotalLoadingCharges = 1350,
              TotalUnloadingCharges = 1400,
              TripWiseExpenseDetails = new List<TripWiseExpenseDetails> {
                new TripWiseExpenseDetails { TripStartDate = DateTime.UtcNow.AddDays(-15),FromLocation = "FirstLocation",ToLocation = "SecondLocation",LoadInTon = 10,VehicleAmount = 130000,Commission = 5000,LoadingCharges = 350,UnloadingCharges = 400},
                new TripWiseExpenseDetails{ TripStartDate = DateTime.UtcNow.AddDays(-10),FromLocation = "SecondLocation",ToLocation = "ThirdLocation",LoadInTon = 10,VehicleAmount = 100000,Commission = 5000,LoadingCharges = 500,UnloadingCharges = 500},
                new TripWiseExpenseDetails{TripStartDate = DateTime.UtcNow.AddDays(-5),FromLocation = "ThirdLocation",ToLocation = "FirstLocation",LoadInTon = 30,VehicleAmount =  198300,Commission = 6665,LoadingCharges = 500,UnloadingCharges = 500},
              }
            },
            RTOExpenses = new RTOAndPCExpenses
            {
              TotalExpenses = 9200,
              ExpenseDetails = new List<RTOAndPCExpenseDetails>
              {
                new RTOAndPCExpenseDetails{Place = "FirstLocation",TotalAmount = 4000,Amount1=1200,Amount2=400,Amount3=2000,Amount4=400},
                new RTOAndPCExpenseDetails{Place = "ThirdLocation",TotalAmount = 5200 ,Amount1=1500,Amount2=500,Amount3=2000,Amount4=600}
              }
            },
            PCExpenses = new RTOAndPCExpenses
            {
              TotalExpenses = 1720,
              ExpenseDetails = new List<RTOAndPCExpenseDetails>
              {
                new RTOAndPCExpenseDetails{Place = "SecondLocation",TotalAmount = 1720,Amount1=900,Amount2=200,Amount3=2000,Amount4=420 }
              }
            },
            TollExpenses = 33159,
            DriverBata = 30000,
            DriverBataPercentage = 11,
            BillableExpenses = new BillableExpenses
            {
              TotalBillableExpenses = 710,
              BillableExpenseDetails = new List<ExpenseFields>
              {
                new ExpenseFields{ ExpenseName = "Tyre purchase",Amount = 710}
              }
            },
            Otherexpenses = new OtherExpenses
            {
              TotalOtherExpenses = 1760,
              OtherExpenseDetails = new List<ExpenseFields>
              {
                new ExpenseFields{ ExpenseName = "Pooja Expense",Amount = 400},
                new ExpenseFields{ ExpenseName = "Tube valve pin",Amount = 360},
                new ExpenseFields{ ExpenseName = "Weight",Amount = 700}
              }
            }
          }
        }
      };
    }
  }

  #endregion

  #region Driver Controller

  /// <summary>
  /// 
  /// </summary>
  public class Example_InsertDriverInfo : IExamplesProvider
  {
    /// <summary>
    /// 
    /// </summary>
    /// <returns></returns>
    public object GetExamples()
    {
      return new
      {
        DriverName = "DriverName",
        ContactNo = "12341234",
        Address = "Address"
      };
    }
  }

  /// <summary>
  /// 
  /// </summary>
  public class Example_UpdateDriverInfo : IExamplesProvider
  {
    /// <summary>
    /// 
    /// </summary>
    /// <returns></returns>
    public object GetExamples()
    {
      return new ExampleModel_DriverInfo
      {
        DriverName = "NewDriverName",
        ContactNo = "23452345",
        Address = "NewAddress",
        IsActive = true,
      };
    }
  }

  #endregion

  #region Tyre Controller

  /// <summary>
  /// 
  /// </summary>
  public class Example_InsertTyreInfo : IExamplesProvider
  {
    /// <summary>
    /// 
    /// </summary>
    /// <returns></returns>
    public object GetExamples()
    {
      return new TyreInfo
      {
        TyreStatus = "In vehicle",
        TotalKMRunned = 10000,
        PurchaseDetails = new PurchaseDetails
        {
          BillNo = "JJS873512873873",
          PriceOfTyre = 30000,
          BrandName = "Apollo tyres",
          PurchaseDate = DateTime.UtcNow.AddDays(-50),
          TyreModel = "MMD",
          TyreNo = "98128712461427",
          VendorName = "JJ Traders"
        }
      };
    }
  }

  /// <summary>
  /// 
  /// </summary>
  public class Example_UpdateVehicleInfoForTyreInfo : IExamplesProvider
  {
    /// <summary>
    /// 
    /// </summary>
    /// <returns></returns>
    public object GetExamples()
    {
      return new
      {
        VehicleNumber = "TN-38-BY-6282",
        FromDate = DateTime.UtcNow.AddDays(-50),
        ToDate = DateTime.UtcNow.AddDays(-25),
        StartKM = 100000,
        EndKM = 150000,
        PositionOfTyre = "Rear",
        ReasonForRemoving = "Assigning to another vehicle",
        TotalKM = 50000
      };
    }
  }

  /// <summary>
  /// 
  /// </summary>
  public class Example_UpdateVehicleInfoForRethreadingInfo : IExamplesProvider
  {
    /// <summary>
    /// 
    /// </summary>
    /// <returns></returns>
    public object GetExamples()
    {
      return new
      {
        VendorName = "Jai auto works",
        GivenDate = DateTime.UtcNow.AddDays(-5),
        ReceiptNo = "812639128369812",
        RethreadingCost = 6000,
        TakenDate = DateTime.UtcNow.AddDays(-1),
        VoucherNo = "JJ92371297",
        AmountPaidDate = DateTime.UtcNow
      };
    }
  }


  /// <summary>
  /// 
  /// </summary>
  public class Example_UpdateTyreInfo : IExamplesProvider
  {
    /// <summary>
    /// 
    /// </summary>
    /// <returns></returns>
    public object GetExamples()
    {
      return new ExampleModel_TyreInfo
      {
        DisposalDetails = new DisposalDetails
        {
          DisposalDate = DateTime.UtcNow,
          VendorName = "Raja enterprice",
          SoldPrice = 500
        }
      };
    }
    #endregion
  }
}
