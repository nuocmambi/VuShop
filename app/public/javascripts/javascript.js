

$(document).ready(function(){
  $("#confirm").hide();

  $("#endringer").click(function(){
    $("#confirm").hide();
    $("#underbestilling").show();
    $("#neste").show();
  });
  $("#neste").click(function(){
    $("#underbestilling").hide();
    $("#neste").hide();
    $("#confirm").show();

    document.getElementById("oppsummeringNavn").innerHTML = document.getElementById("bestillingsnavn").value;
    document.getElementById("oppsummeringTlf").innerHTML = document.getElementById("bestillingTlf").value;
    document.getElementById("oppsummeringEmail").innerHTML = document.getElementById("bestillingEmail").value;
    document.getElementById("oppsummeringBeskrivelse").innerHTML = document.getElementById("bestillingBeskrivelse").value;
  });
});
