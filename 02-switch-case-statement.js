var motorBranch = "Harley-Davidson";

if (motorBranch == "Honda") {
  alert("Khong chiu dau!!!");
} else if (motorBranch == "Toyota") {
  alert("Xe nay cui lam!!!");
} else if (motorBranch == "Harley-Davidson") {
  alert("OK mua lien!!!");
} else {
  alert("Khong mua");
}
switch (motorBranch) {
  case "Honda":
    alert("Khong chiu dau!!!");
    break;
  case "Toyota":
    alert("Xe nay cui lam!!!");
    break;
  case "Harley-Davidson":
    alert("OK mua lien!!!");
    break;
  default:
    alert("Khong mua");
    break;
}
