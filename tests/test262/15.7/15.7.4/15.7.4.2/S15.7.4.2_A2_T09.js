  {
    var __result1 = Number.prototype.toString(11) !== "0";
    var __expect1 = false;
  }
  {
    var __result2 = (new Number()).toString(11) !== "0";
    var __expect2 = false;
  }
  {
    var __result3 = (new Number(0)).toString(11) !== "0";
    var __expect3 = false;
  }
  {
    var __result4 = (new Number(- 1)).toString(11) !== "-1";
    var __expect4 = false;
  }
  {
    var __result5 = (new Number(1)).toString(11) !== "1";
    var __expect5 = false;
  }
  {
    var __result6 = (new Number(Number.NaN)).toString(11) !== "NaN";
    var __expect6 = false;
  }
  {
    var __result7 = (new Number(Number.POSITIVE_INFINITY)).toString(11) !== "Infinity";
    var __expect7 = false;
  }
  {
    var __result8 = (new Number(Number.NEGATIVE_INFINITY)).toString(11) !== "-Infinity";
    var __expect8 = false;
  }
  