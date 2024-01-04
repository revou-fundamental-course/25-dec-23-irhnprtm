// function

//hitung luas start

function hitungluas() {
  var alas = document.getElementById("als").value;
  var tinggi = document.getElementById("nts").value;

  if (alas.trim() === "" || tinggi.trim() === "") {
    return;
  }

  if (!isNaN(alas) && !isNaN(tinggi)) {
    var luas = alas * tinggi * 0.5;

    var resultElement = document.getElementById("tampilkanhasil");
    resultElement.innerHTML =
      "L = 1/2 x a x t <br>" +
      "L = 1/2 x (" +
      alas +
      "x" +
      tinggi +
      ")<br>" +
      "Luas: " +
      luas;
  } else {
    alert("mohon memsukkan nilai yang valid pada nilai Alas dan Tinggi");
  }
}

function resetForm() {
  document.getElementById("als").value = "";
  document.getElementById("nts").value = "";
  document.getElementById("tampilkanhasil").innerHTML = "<br><br><br>";
}

// hitung keliling start
function hitungkeliling() {
  var sisib = document.getElementById("ssb").value;
  var sisic = document.getElementById("ssc").value;

  if (
    document.getElementById("ssa").value.trim() === "" ||
    sisib.trim() === "" ||
    sisic.trim() === ""
  ) {
    return;
  }

  if (
    !isNaN(document.getElementById("ssa").value) &&
    !isNaN(sisib) &&
    !isNaN(sisic)
  ) {
    var kelilingnya =
      parseInt(document.getElementById("ssa").value) +
      parseInt(sisib) +
      parseInt(sisic);

    var resultElement = document.getElementById("tampilkanhasil2");
    resultElement.innerHTML =
      "K = sisi A + sisi B + sisi C<br>" +
      "K = " +
      document.getElementById("ssa").value +
      " + " +
      sisib +
      " + " +
      sisic +
      "<br>" +
      "Keliling: " +
      kelilingnya;
  } else {
    alert("mohon memsukkan nilai yang valid pada nilai setia sisi segitiga");
  }
}

// hitung keliling = reset form
function resetForm2() {
  document.getElementById("ssa").value = "";
  document.getElementById("ssb").value = "";
  document.getElementById("ssc").value = "";
  document.getElementById("tampilkanhasil2").innerHTML = "<br><br><br>";
}
